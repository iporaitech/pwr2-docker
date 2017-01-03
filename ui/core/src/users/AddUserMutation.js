// file: src/users/AdduserMutation.js

import Relay from 'react-relay';

export default class AddUserMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation {addUser}`;
  }

  getVariables() {
    const { user } = this.props;

    return { ...user };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on AddUserPayload {
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
          fragment on AddUserPayload {
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
