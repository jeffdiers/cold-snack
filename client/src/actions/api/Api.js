/* eslint-disable no-console */
import fetch from 'isomorphic-fetch';
import sessionStorage from '../../lib/sessionStorage';
import ENVIRONMENT from './Env';

let AUTH_TOKEN = sessionStorage.getAuthToken();

const logRejection = (url, request, response, text = '') => {
  console.warn(` ------ API request rejected
        URL: ${url}
        Body: ${request.body}
        Response: ${response.status} ${response.statusText}
        ${text || response}`);
};

const logFailure = (url, request, error) => {
  console.warn(` ------ API request failed
        URL: ${url}
        Body: ${request.body}
        Error: ${error}`);
};

const handleFailedRequest = (fetchUrl, request, response, reject) => {
  response.json().then(
    (data) => {
      logRejection(fetchUrl, request, response, data);
      reject(new Error(data));
    },
    () => {
      logRejection(fetchUrl, request, response);
      reject(new Error(response));
    },
  );
};

class Api {
    static get = (url) => {
      Api.go(url, {
        method: 'get',
      });
    };

    static post = (url, body) => {
      Api.go(url, {
        method: 'post',
        body,
      });
    };

    static put = (url, body) => {
      Api.go(url, {
        method: 'put',
        body,
      });
    };

    static patch = (url, body) => {
      Api.go(url, {
        method: 'patch',
        body,
      });
    };

    static delete = (url) => {
      Api.go(url, {
        method: 'delete',
      });
    };

    static go = (url, request = {}) => {
      const headers = new Headers({ Accept: 'application/json' });

      if (request.body !== undefined) {
        if (request.body.login && request.body.password) {
          AUTH_TOKEN = `Basic ${btoa(`${request.body.login}:${request.body.password}`)}`;
          request.body.login = null;
          request.body.password = null;
        }
        headers.set('Content-Type', 'application/json');
        request.body = JSON.stringify(request.body);
      }
      if (AUTH_TOKEN) headers.set('Authorization', AUTH_TOKEN);
      request.headers = headers;
      const fetchUrl = `${Api.env.baseURL}${url}`;

      return new Promise((resolve, reject) => {
        fetch(fetchUrl, request).then((response) => {
          const success = response.ok && String(response.status).charAt() === '2';
          // eslint-disable-next-line no-unused-expressions
          success ? resolve(response) : handleFailedRequest(fetchUrl, request, response, reject);
        },
        (error) => {
          logFailure(fetchUrl, request, error);
          reject(new Error({ error, success: false, message: 'Unexpected error occurred.' }));
        });
      });
    };

    static getResponseData(rawResponse, defaultData = null) {
      return rawResponse.json().then(response => (response || defaultData));
    }

    static get authToken() {
      AUTH_TOKEN = sessionStorage.getAuthToken();
      return AUTH_TOKEN;
    }

    static set authToken(value) {
      AUTH_TOKEN = sessionStorage.setToken(value);
    }

    static env = {
      ...ENVIRONMENT,
    }
}

export default Api;
