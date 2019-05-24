class SessionStorage {
  constructor() {
    this.user = null;
    this.authenticationToken = null;
    this.AUTHENTICATED_USER = 'AUTHENTICATED_USER';
    this.AUTH_TOKEN = 'AUTH_TOKEN';
    this.SESSION_STORAGE_ERR = 'Current browser does not support window.sessionStorage!';
  }

  getter(key) {
    if (typeof window.sessionStorage !== 'undefined') {
      return window.sessionStorage.getItem(key);
    }
    throw new Error(this.SESSION_STORAGE_ERR);
  }

  setter(key, value) {
    if (typeof window.sessionStorage !== 'undefined') {
      window.sessionStorage.setItem(key, value);
      return value;
    }
    throw new Error(this.SESSION_STORAGE_ERR);
  }

  wipeSession() {
    if (typeof window.sessionStorage !== 'undefined') {
      window.sessionStorage.clear();
      return true;
    }
    throw new Error(this.SESSION_STORAGE_ERR);
  }

  getUser() {
    const user = this.getter(this.AUTHENTICATED_USER);
    this.authenticationUser = user && user.trim().length > 0 ? JSON.parse(user) : null;

    return this.authenticationUser;
  }

  getAuthToken() {
    const token = this.getter(this.AUTH_TOKEN);
    this.authenticationToken = token && token.trim().length > 0 ? token : null;

    return this.authenticationToken;
  }

  setToken(token) {
    return this.setter(this.AUTH_TOKEN, token);
  }

  setUser(user) {
    return this.setter(this.AUTHENTICATED_USER, JSON.stringify(user));
  }
}

export default new SessionStorage();
