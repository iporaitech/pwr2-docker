import Relay from 'react-relay';

export default class extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation {
      login
    }`;
  }

  getVariables() {
    return {
      email: this.props.email,
      password: this.props.password,
    };
  }

  // TODO: Add field to LoginPayload to get errors
  getFatQuery() {
    return Relay.QL`
      fragment on LoginPayload {
        accessToken
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'REQUIRED_CHILDREN',
      children: [Relay.QL`
        fragment on LoginPayload {
          accessToken
        }
      `],
    }];
  }
}
