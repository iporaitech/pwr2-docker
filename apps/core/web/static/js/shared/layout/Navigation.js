// file: shared/layout/Navigation.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children, ...otherProps } = this.props;
    const classes = classNames('mdl-navigation', className);

    return (
      <nav className={classes} {...otherProps}>
        {children}
      </nav>
    )
  }
}
