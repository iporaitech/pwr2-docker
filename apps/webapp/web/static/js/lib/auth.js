import Relay from 'react-relay';

class Auth {

  constructor() {
    this.environment = new Relay.Environment();
    // Inject a new network layer into Relay with NO token
    this.environment.injectNetworkLayer(this._buildNetworkLayer());
  }

  getToken() {
    return localStorage.accessToken;
  }

  login(token) {
    // persist token in localStorage
    localStorage.accessToken = token;
    // "Renew" this.environment each login
    this.environment = new Relay.Environment();
    this.environment.injectNetworkLayer(this._buildNetworkLayer());
  }

  logout(callback) {
    // delete token from localStorage
    delete localStorage.accessToken;
    // Renew this.environment each logout to override
    this.environment = new Relay.Environment();
    this.environment.injectNetworkLayer(this._buildNetworkLayer());
    if (callback) callback();

  }

  loggedIn() {
    return !!localStorage.accessToken;
  }

  getEnvironment(){
    return this.environment;
  }

  _buildNetworkLayer(){
    let props = this.loggedIn() ? {
      headers: { Authorization: 'Bearer ' + this.getToken() }
    } : null;
    return new Relay.DefaultNetworkLayer(GRAPHQL_URL, props);
  }
}

// Export singleton
module.exports = new Auth();
