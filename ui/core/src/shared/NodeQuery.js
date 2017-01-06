/**
 * file: shared/NodeQuery.js
 * Fetch an item through its unique identifier
 */
import Relay from 'react-relay';

export default {
  node: () => Relay.QL`
    query {
      node(id: $id)
    }
  `
};
