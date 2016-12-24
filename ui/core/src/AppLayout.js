// file: layout/index.js
import React from 'react';
// import { Link } from 'react-router';
import LogoutLink from 'core/shared/LogoutLink';
import { mdlUpgrade } from 'react-to-mdl';
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
} from 'react-to-mdl/layout';

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
              <NavigationLink to="/">Inicio</NavigationLink>
              {/*
                TODO: Use <NavigationLink tag='a' href='star-wars'> after
                upgrading react-to-mdl.
              */}
              <a className="mdl-navigation__link" href="/star-wars">Star Wars</a>
              <NavigationLink to="/admin/graphiql">GraphiQL</NavigationLink>
            </Navigation>
          </LayoutHeaderRow>
        </LayoutHeader>

        <LayoutDrawer>
          <Navigation>
            <NavigationLink to="/">Inicio</NavigationLink>
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
