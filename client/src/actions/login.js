import { session } from './api';

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = () => ({
  type: USER_LOGIN,
  sendAuthRequest: true,
});

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
  isLoggedIn: true,
});

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const userLoginFailure = result => ({
  type: USER_LOGIN_FAILURE,
  errorMessage: result.message,
});

export const authenticateUser = (email, password) => (dispatch) => {
  dispatch(userLogin());
  return session.emailLogin(email, password).then((result) => {
    if (result.success) {
      return dispatch(userLoginSuccess());
    }
    return dispatch(userLoginFailure(result));
  }).catch(err => dispatch(userLoginFailure(err)));
};
