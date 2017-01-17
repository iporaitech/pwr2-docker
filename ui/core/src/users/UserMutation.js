// file: src/users/UserMutation.js

import Relay from 'react-relay';

export default class UserMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation {user}`;
  }

  getVariables() {
    const { user } = this.props;

    return { ...user };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on UserPayload {
        user {
          id
        }
        errors
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'REQUIRED_CHILDREN',
      children: [
        Relay.QL`
          fragment on UserPayload {
            user {
              id
            }
            errors
          }
        `
      ]
    }];
  }
}
