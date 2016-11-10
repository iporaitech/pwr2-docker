// file: users/index.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter } from 'react-router';

// Base components
import Tabs, {
  TabsTabBar,
  TabsTab,
  TabsPanel,
} from 'shared/tabs';
import Users from './Users';
import UserForm from './UserForm';

// CSS
import CSSModules from 'react-css-modules';
import mdlUpgrade from 'lib/mdlUpgrade';
import styles from './styles.scss';

class Index extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tabs>
        <TabsTabBar>
          <TabsTab href="#users" isActive={true}>Users</TabsTab>
          <TabsTab href="#create_user">Create User</TabsTab>
        </TabsTabBar>
        <TabsPanel id="users" isActive={true}>
          <Users />
        </TabsPanel>
        <TabsPanel id="create_user">
          <UserForm />
        </TabsPanel>
      </Tabs>
    )
  }
}

/*** exports ***/
export default mdlUpgrade(
    CSSModules(Index, styles)
);
