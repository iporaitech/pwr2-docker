import React from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import CSSModules from 'react-css-modules';
import '!style!css!graphiql/graphiql.css';
import styles from './styles.scss';

class MyGraphiQL extends React.Component {
  render(){
    return(
      <div styleName="graphiql-wrapper">
        <GraphiQL fetcher={
          (graphQLParams) => {
            return fetch(GRAPHIQL_URL, {
              method: 'post',
              headers: {
                "Content-Type": "application/json"
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
