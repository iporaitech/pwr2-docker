/**
 * file: ui/core/src/index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  applyRouterMiddleware
} from 'react-router'
import useRelay from 'react-router-relay';

// App components
import AppLayout from './AppLayout';
import Login from './login';
import Users from './users';

// Auth singleton
import Auth from 'core/lib/auth';

// Import some global CSS (some because not implemented in shared)
import 'material-design-lite/src/shadow/_shadow.scss';
import 'material-design-lite/src/typography/_typography.scss';
import 'react-select/dist/react-select.css';


// Just a tmp component for IndexRoute
class Hello extends React.Component {
  render() {
    return(<h1>Hello Public Section</h1>)
  }
}

// function requireAuth(prevState, nextState, replace) {
function requireAuth(nextState, replace) {
  if (!Auth.loggedIn()) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function verifySession(nextState, replace){
  if(Auth.loggedIn())
    replace({ pathname: "/admin" })
}

function redirectToDefaultDoc(nextState, replace) {
  replace({ pathname: "/docs/use_case_examples.md" })
}

const importError = (err) => {
  console.log(err);
}

/**
  TODO: find out why can't call import() from inside a function
*/
const routes = (
  <Route path="/">
    <IndexRoute component={Hello}/>
    <Route path="/login"
      getComponent={(location, cb) => {
        import('core/login').then(module => {
          cb(null, module.default);
        }).catch(importError)
      }}
      onEnter={verifySession}
    />
    <Route path="/admin" component={AppLayout} onEnter={requireAuth}>
      <IndexRoute component={Hello}/>
      <Route
        path="graphiql"
        getComponent={(location, cb) => {
          import('core/my-graphiql').then(module => {
            cb(null, module.default);
          }).catch(importError)
        }}
      />
      <Route
        path="users"
        getComponent={(location, cb) => {
          import('core/users').then(module => {
            cb(null, module.default);
          }).catch(importError)
        }}
        queries={Users.Queries}
      />
    </Route>
    <Route path="/docs" component={AppLayout}>
      <IndexRoute onEnter={redirectToDefaultDoc}/>
      <Route
        path=":filename"
        getComponent={(location, cb) => {
          import('core/docs').then(module => {
            cb(null, module.default);
          }).catch(importError)
        }}
      />
    </Route>
  </Route>
)

class Application extends React.Component{
  constructor(props){
    super(props);
    this.state = {environment: Auth.getEnvironment()};
    Auth.afterLogin = () => this.resetRelayEnvironment();
    Auth.afterLogout = () => this.resetRelayEnvironment();
  }

  resetRelayEnvironment(){
    this.setState({environment: Auth.getEnvironment()});
  }

  render(){
    return (
      <Router history={browserHistory}
        render={applyRouterMiddleware(useRelay)}
        environment={this.state.environment}>
        {routes}
      </Router>
    );
  }
}

ReactDOM.render(
  <Application />,
  document.getElementById('react-root')
);
