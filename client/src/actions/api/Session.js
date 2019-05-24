/* eslint-disable class-methods-use-this */
import Api from './Api';

const authorizationHandler = (response) => {
  const authToken = response.headers.get('Authorization');
  if (authToken) {
    Api.authToken = authToken;
  }
  return Api.getResponseData(response);
};

class Session {
    static URL = '/users/login';

    static SIGNUP_URL = '/sessions/email';

    static PASSWORD_RECOVERY_URL = '/sessions/email/password-recovery';

    delete() {
      Api.authToken = null;
      return Api.delete(this.URL);
    }

    emailLogin(login, password) {
      const params = { login, password };
      return Api.post(Session.URL, params).then(authorizationHandler);
    }

    logout() {
      Api.authToken = null;
    }

    resetPassword(email) {
      const params = { email };
      return Api.post(this.PASSWORD_RECOVERY_URL, params);
    }
}

const instance = new Session();

export default instance;
