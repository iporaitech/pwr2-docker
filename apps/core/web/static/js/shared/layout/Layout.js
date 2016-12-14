// file: shared/layout/Layout.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Layout extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    fixedDrawer: PropTypes.bool,
    fixedHeader: PropTypes.bool,
    fixedTabs: PropTypes.bool
  }

  render() {
    const { className, fixedDrawer, fixedHeader,
      fixedTabs, children, ...otherProps } = this.props;

    const classes = classNames('mdl-js-layout mdl-layout', {
      'mdl-layout--fixed-drawer': fixedDrawer,
      'mdl-layout--fixed-header': fixedHeader,
      'mdl-layout--fixed-tabs': fixedTabs,
    }, className);

    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    );
  }
}
