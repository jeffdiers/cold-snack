import { session } from './api';
import sessionStorage from '../lib/sessionStorage';

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
  type: USER_LOGOUT,
  sendAuthRequest: true,
});

export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const userLogoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS,
  isLoggedIn: false,
});

export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';
export const userLogoutFailure = errorMessage => ({
  type: USER_LOGOUT_FAILURE,
  errorMessage,
});

export const userSignOut = () => (dispatch) => {
  dispatch(userLogout());

  return session.delete()
    .then((result) => {
      sessionStorage.wipeSession();
      return dispatch(userLogoutSuccess(result.data));
    })
    .catch(err => dispatch(userLogoutFailure(err)));
};
