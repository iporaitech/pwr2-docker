import React from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import CSSModules from 'react-css-modules';
import 'graphiql/graphiql.css';
import styles from './styles.css';
import Auth from 'lib/auth';

class MyGraphiQL extends React.Component {
  render(){
    return(
      <div styleName="graphiql-wrapper">
        <GraphiQL styleName="graphiql-container" fetcher={
          (graphQLParams) => {
            return fetch(window.location.origin + '/graphql/graphiql', {
              method: 'post',
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Auth.getToken()}`
              },
              body: JSON.stringify(graphQLParams),
            }).then(response => response.json());
          }
        } />
      </div>
    )
  }
}

export default CSSModules(MyGraphiQL, styles);
