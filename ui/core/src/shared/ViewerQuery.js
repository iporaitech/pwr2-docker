/**
 * file: shared/ViewerQuery.js
 *
 */
import Relay from 'react-relay';

export default {
  viewer: () => Relay.QL`
    query {
      viewer
    }
  `
};
