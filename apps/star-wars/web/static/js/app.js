// js
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

// js for star-wars
import StarWarsApp from './starwars/components/StarWarsApp';
import StarWarsAppHomeRoute from './starwars/routes/StarWarsAppHomeRoute';

// css (for graphiql)
import 'graphiql/graphiql.css';

// Helper function used by graphiql to make queries to /graphql backend
function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

// Basic React component to try out Relay
class UserWidget extends React.Component {
  render(){
    const user = this.props.user;

    return (
      <div style={{backgroundColor: "green", width: "100%", height: "100px"}}>
        <h1>{user.name}</h1>
        <h2>{user.username} - {user.email}</h2>
      </div>
    )
  }
}

class AppHomeRoute extends Relay.Route {
  static queries = {
    user: () => Relay.QL `
      query {
        user(id: "1")
      }
    `
  };
  static routeName = 'AppHomeRoute';
}

// Relay container for UserWidget
let UserContainer = Relay.createContainer(UserWidget, {
  fragments: {
    user: () => Relay.QL `
      fragment on User {
        name,
        username,
        email
      }
    `
  }
});

// Temp "manual routing"
switch (window.location.pathname) {
  case "/graphiql":
    ReactDOM.render(
      <GraphiQL fetcher={graphQLFetcher} />, document.getElementById('graphiql')
    );
    break;
  case "/user-widget":
    ReactDOM.render(
      <Relay.RootContainer Component={UserContainer} route={new AppHomeRoute()}/>,
      document.getElementById('user-widget')
    );
    break;
  case "/star-wars":
    ReactDOM.render(
      <Relay.RootContainer Component={StarWarsApp}
        route={new StarWarsAppHomeRoute({
          factionNames: ['Galactic Empire', 'Alliance to Restore the Republic']
        })}
      />,
      document.getElementById('star-wars')
    );
    break;
  default:
    break;
}
