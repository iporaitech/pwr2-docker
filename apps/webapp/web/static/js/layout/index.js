// file: layout/index.js
import React from 'react';
import { Link } from 'react-router';
import LogoutLink from 'shared/LogoutLink';
import mdlUpgrade from 'lib/mdlUpgrade';
import Layout, {
  LayoutHeader,
  LayoutIcon,
  LayoutHeaderRow,
  LayoutTitle,
  LayoutSpacer,
  Navigation,
  NavigationLink,
  LayoutDrawer,
  LayoutContent,
} from 'shared/layout';

import '!style!css!react-select/dist/react-select.css';

export default class extends React.Component {
  render() {
    return (
      <Layout id="pwr2-home">
        <LayoutHeader>
          <LayoutIcon />
          <LayoutHeaderRow>
            <LayoutTitle>pwr2-docker</LayoutTitle>
            <LayoutSpacer />
            <Navigation>
              <NavigationLink to="/admin">Inicio</NavigationLink>
              <NavigationLink to="/admin/star-wars">Star Wars Examples</NavigationLink>
              <NavigationLink to="/admin/graphiql">GraphiQL</NavigationLink>
            </Navigation>
          </LayoutHeaderRow>
        </LayoutHeader>

        <LayoutDrawer>
          <Navigation>
            <NavigationLink to="/">Inicio</NavigationLink>
            <NavigationLink to="/admin/users">Users</NavigationLink>
            <NavigationLink to="/admin/star-wars">Star Wars Examples</NavigationLink>
            <NavigationLink to="/admin/graphiql">GraphiQL</NavigationLink>
            <NavigationLink to="/docs">Documentation</NavigationLink>
            <LogoutLink />
          </Navigation>
        </LayoutDrawer>

        <LayoutContent>
          { this.props.children }
        </LayoutContent>
      </Layout>
    );
  }
}
