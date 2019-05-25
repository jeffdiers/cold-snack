import { session } from './api';

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = () => ({
  type: USER_LOGIN,
  sendAuthRequest: true,
});

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = result => ({
  type: USER_LOGIN_SUCCESS,
  isLoggedIn: true,
  user: result.user,
});

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const userLoginFailure = result => ({
  type: USER_LOGIN_FAILURE,
  errorMessage: JSON.stringify(result.errors),
});

export const authenticateUser = (email, password) => (dispatch) => {
  dispatch(userLogin());
  return session.emailLogin(email, password).then((result) => {
    console.log(result)
    if (result.success) {
      return dispatch(userLoginSuccess(result));
    }
    return dispatch(userLoginFailure(result));
  }).catch(err => dispatch(userLoginFailure(err)));
};
