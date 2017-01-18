// file: users/index.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter } from 'react-router';

// queries
import ViewerQuery from '../shared/ViewerQuery'
import NodeQuery from '../shared/NodeQuery'

// Base components
import Tabs, { TabsTabBar, TabsTab, TabsPanel } from 'react-to-mdl/tabs';
import Grid, { Cell } from 'react-to-mdl/grid';
import ListUser from './List';
import NewUser from './New';

// CSS
import CSSModules from 'react-css-modules';
import { mdlUpgrade } from 'react-to-mdl';
import styles from './styles.scss';

class Index extends React.Component {

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
          <TabsTab href="#list_users" isActive={true}>Users</TabsTab>
          <TabsTab href="#new_user">New User</TabsTab>
        </TabsTabBar>
        <TabsPanel id="list_users" isActive={true}>
          <ListUser users={users}/>
        </TabsPanel>
        <TabsPanel id="new_user">
          <NewUser />
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

Users.ViewerQuery = ViewerQuery;
Users.NodeQuery = NodeQuery;

export default Users;
