/* eslint-disable class-methods-use-this */
import Api from './Api';

const authorizationHandler = (response) => {
  const authToken = response.headers.get('Authorization');
  if (authToken) {
    Api.authToken = authToken;
  }
  return Api.getResponseData(response);
};

const userHandler = (response) => {
  const { user } = response;
  if (user) {
    Api.currentUser = user;
  }
};

class Session {
    static URL = 'sessions';

    static SIGNUP_URL = '/sessions/email';

    static PASSWORD_RECOVERY_URL = '/sessions/email/password-recovery';

    delete() {
      Api.authToken = null;
      return Api.delete(Session.URL);
    }

    async emailLogin(email, password) {
      const params = { email, password };
      try {
        const response = await Api.post(Session.URL, params);
        const authResponse = await authorizationHandler(response);
        userHandler(authResponse);
        return authResponse;
      } catch (error) {
        return error;
      }
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
