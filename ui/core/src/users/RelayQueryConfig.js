/**
 * file: users/RelayQueryConfig.js
 *
 * Exports a RelayQueryConfig to be used with users/index.js
 *
 */
import Relay from 'react-relay';

const NodeQueries = {
  node: () => Relay.QL`
    query {
      node(id: $id)
    }
  `
}

export default {
  viewer: () => Relay.QL`
    query {
      viewer
    }
  `
};

export { NodeQueries };
