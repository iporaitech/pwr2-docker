/**
 * file: star-wars/RelayQueryConfig.js
 *
 * Exports an object containing queries meant to be used as RelayQueryConfig(aka Relay route)
 *
 * For more info, see:
 * https://facebook.github.io/relay/docs/guides-routes.html
 *
 * TODO: Find out how to pass params from router, i.e.:
 *   factions: () => Relay.QL`
 *     query { factions(names: $factionNames)
 *   }`,
 */
import Relay from 'react-relay';

export default {
  factions: () => Relay.QL`
    query {
      factions(
        names: ["Galactic Empire", "Alliance to Restore the Republic"]
      )
    }
  `
};
