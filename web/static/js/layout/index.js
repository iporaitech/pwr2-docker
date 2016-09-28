// file: layout/index.js
import React from 'react';
import { Link } from 'react-router';
import LogoutLink from 'lib/LogoutLink';
import mdlUpgrade from 'lib/mdlUpgrade';
import styles from 'material-design-lite/material.css';

class Layout extends React.Component {
  render() {
    return (
      <div ref="layout" styleName="mdl-layout" className="mdl-js-layout">
        <header styleName="mdl-layout__header">
          <div styleName="mdl-layout__header-row">
            <span styleName="mdl-layout-title">pwr2-docker</span>
            <div styleName="mdl-layout-spacer"></div>
            <nav styleName="mdl-navigation">
              <Link to="/" styleName="mdl-navigation__link">
                Inicio
              </Link>
              <Link to="/admin/star-wars" styleName="mdl-navigation__link">
                Star Wars Example
              </Link>
              <Link to="/admin/graphiql" styleName="mdl-navigation__link">
                GraphiQL
              </Link>
            </nav>
          </div>
        </header>
        <div styleName="mdl-layout__drawer">
          <span styleName="mdl-layout-title">Admin</span>
          <nav styleName="mdl-navigation">
            <Link to="/" styleName="mdl-navigation__link">
              Inicio
            </Link>
            <Link to="/admin/star-wars" styleName="mdl-navigation__link">
              Star Wars Example
            </Link>
            <Link to="/admin/graphiql" styleName="mdl-navigation__link">
              GraphiQL
            </Link>
            <LogoutLink />
          </nav>
        </div>
        <main styleName="mdl-layout__content">
          { this.props.children }
        </main>
      </div>
    );
  }
}

export default mdlUpgrade(Layout, styles);
