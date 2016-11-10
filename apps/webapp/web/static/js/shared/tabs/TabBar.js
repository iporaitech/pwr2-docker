// file: shared/tabs/TabBar.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class TabBar extends React.Component {

  render() {
    const { children } = this.props;

    const classes = classNames('mdl-tabs__tab-bar');

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}
