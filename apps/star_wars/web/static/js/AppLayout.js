// file: AppLayout.js
import React from 'react';

// import LogoutLink from 'shared/LogoutLink';
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

// import css required for rmdl components
// import '!style!css!sass!material-design-lite/src/layout/_layout.scss';

class AppLayout extends React.Component {
  render() {
    return (
      <Layout id="starwars">
        <LayoutHeader>
          <LayoutIcon />
          <LayoutHeaderRow>
            <LayoutTitle>Star Wars example</LayoutTitle>
            <LayoutSpacer />
            <Navigation>
              <NavigationLink to="/">Home</NavigationLink>
              <NavigationLink to="/graphiql">GraphiQL</NavigationLink>
            </Navigation>
          </LayoutHeaderRow>
        </LayoutHeader>

        <LayoutDrawer>
          <Navigation>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/graphiql">GraphiQL</NavigationLink>
            {/* <LogoutLink /> */}
          </Navigation>
        </LayoutDrawer>

        <LayoutContent>
          { this.props.children }
        </LayoutContent>
      </Layout>
    );
  }
}

export default mdlUpgrade(AppLayout);
