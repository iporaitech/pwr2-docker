// file: src/users/EdituserMutation.js

import Relay from 'react-relay';

export default class EditUserMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation {editUser}`;
  }

  getVariables() {
    const { user } = this.props;

    return { ...user };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on EditUserPayload {
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
          fragment on EditUserPayload {
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
