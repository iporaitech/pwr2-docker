// file: docs/TableOfContents.js
import React from 'react';
import {Link} from 'react-router';
import mdlUpgrade from 'lib/mdlUpgrade';
import material from 'material-design-lite/material.css';
import styles from 'docs/styles.css';

class TableOfContents extends React.Component {
  render() {
    const list = this.props.docs.map((item) => {
      return <Link key={item.filename} activeStyle={{ color: "#3F51B5" }} to={`/docs/${item.filename}`} className="mdl-menu__item">{item.title}</Link>
    });

    return (
      <div styleName="mdl-grid">
        <div styleName="mdl-cell mdl-cell--11-offset mdl-cell--1-col">
          <button id="dropdown-menu-docs" className="mdl-button mdl-js-button mdl-button--primary" styleName="mdl-menu--bottom-right" title="Documentations">
            <i styleName="material-icons">list</i>
          </button>
          <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu" styleName="mdl-menu-width" htmlFor="dropdown-menu-docs">
            <li>
              <div styleName="mdl-menu__title">
                <h2 styleName="mdl-menu__title-text">Table of Contents</h2>
              </div>
            </li>
            <div styleName="mdl-menu__supporting-text">
              {list}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default mdlUpgrade(TableOfContents, Object.assign({}, material, styles), {allowMultiple: true});
