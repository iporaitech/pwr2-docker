// file: layout/LogoutLink.js
import React from 'react';
import Relay from 'react-relay';
import Auth from 'lib/auth';
import { withRouter } from 'react-router';

class LogoutMutation extends Relay.Mutation {
  getVariables() {
    return null;
  }

  getMutation() {
    return Relay.QL`mutation {
      logout
    }`;
  }

  // TODO: Add field to LoginPayload to get errors
  getFatQuery() {
    return Relay.QL`
      fragment on LogoutPayload {
        loggedOut
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'REQUIRED_CHILDREN',
      children: [Relay.QL`
        fragment on LogoutPayload {
          loggedOut
        }
      `],
    }];
  }
}


class LogoutLink extends React.Component {
  handleClick(event){
    event.preventDefault();

    this.props.relay.commitUpdate(
      new LogoutMutation(), {
        onSuccess: response => {
          if (response.logout.loggedOut){
            Auth.logout();
            this.props.router.replace('/login');
          } else {
            throw new Error("Could not logout")
          }
        }
      }
    );
  }

  render(){
    return <a href="/logout" className="mdl-navigation__link" onClick={(e) => this.handleClick(e)}>
      Logout
    </a>
  }
}

export default Relay.createContainer(
  withRouter(LogoutLink), {fragments: {}}
);
