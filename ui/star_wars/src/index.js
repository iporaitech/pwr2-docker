/**
 * file: web/static/js/index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import useRelay from 'react-router-relay';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  applyRouterMiddleware
} from 'react-router'

// App components
import AppLayout from './AppLayout';
import Factions from './Factions';
import Queries from './RelayQueryConfig';
import GraphiQL from './my-graphiql';

// Import some global CSS (some because not implemented in shared)
import '!style!css!sass!material-design-lite/src/shadow/_shadow.scss';
import '!style!css!sass!material-design-lite/src/radio/_radio.scss';
import '!style!css!sass!material-design-lite/src/typography/_typography.scss';
import '!style!css!react-select/dist/react-select.css';

let store = new Relay.Environment();
store.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('/star_wars/graphql')
);

ReactDOM.render(
  <Router history={browserHistory}
    render={applyRouterMiddleware(useRelay)}
    environment={store}>
    <Route path="/star_wars" component={AppLayout}>
      <IndexRoute component={Factions} queries={Queries} />
      <Route path="graphiql" component={GraphiQL} />
    </Route>
  </Router>,
  document.getElementById('react-root')
);
