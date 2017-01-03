// file: users/index.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter } from 'react-router';

// queries
import Queries, { NodeQueries } from './RelayQueryConfig';

// Base components
import Tabs, { TabsTabBar, TabsTab, TabsPanel } from 'react-to-mdl/tabs';
import Grid, { Cell } from 'react-to-mdl/grid';
import List from './List';

// CSS
import CSSModules from 'react-css-modules';
import { mdlUpgrade } from 'react-to-mdl';
import styles from './styles.scss';

class Index extends React.Component {

  static defaultProps = {
    title: 'Lista de Usuarios',
    user: {
      first_name: '', last_name: '', email: '', role: '', phone: '',
      password: '', passwordConfirmation: ''
    }
  }

  constructor(props) {
    super(props)
  }

  render() {

    const { title, viewer, children, ...otherProps } = this.props;
    const users = viewer.users.edges.map(user => {
      return { ...user.node }
    });

    return (
      <Tabs>
        <TabsTabBar>
          <TabsTab id="1" href="#users" isActive={true}>Usuarios</TabsTab>
        </TabsTabBar>
        <TabsPanel id="users" isActive={true}>
          <List users={users}/>
        </TabsPanel>
      </Tabs>
    )
  }
}

let Users = Relay.createContainer(
  withRouter(
    mdlUpgrade(
      CSSModules(Index, styles)
    )
  ),{
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          users(first: 10){
            edges {
              node {
                id
                firstName
                lastName
                email
                role
              }
            }
          }
        }
      `,
    }
  }
);

Users.Queries = Queries;

export default Users;
