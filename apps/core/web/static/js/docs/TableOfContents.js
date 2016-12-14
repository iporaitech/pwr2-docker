// file: docs/TableOfContents.js
import React from 'react';
import { withRouter, Link } from 'react-router';

// Base components
import Grid, { Cell } from 'shared/grid';
import Button from 'shared/button';

import Menu, {
  MenuItem,
} from 'shared/menu';

import Layout, {
  LayoutIcon,
} from 'shared/layout';

// CSS
import CSSModules from 'react-css-modules';
import mdlUpgrade from 'lib/mdlUpgrade';
import styles from 'docs/styles.scss';

class TableOfContents extends React.Component {
  render() {

    return (
      <Grid>
        <Cell offset={11} col={1}>
          <Button id="dropdown-menu-docs" primary title="Documentations">
            <LayoutIcon className="material-icons">list</LayoutIcon>
          </Button>
          <Menu styleName="toc-menu" bottomRight={true} htmlFor="dropdown-menu-docs">
            <MenuItem>Table Of Contents</MenuItem>
            {this.props.docs.map((item) => {
              return <MenuItem key={item.filename}>
                <Link to={`/docs/${item.filename}`}
                  activeStyle={{ color: "#3F51B5" }}
                  styleName="">
                  {item.title}
                </Link>
              </MenuItem>;
            })}
          </Menu>
        </Cell>
      </Grid>
    );
  }
}

/*** exports ***/
export default withRouter(
  mdlUpgrade(
    CSSModules(TableOfContents, styles)
  )
);
