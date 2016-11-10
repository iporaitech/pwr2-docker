// file: shared/tabs/Tab.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Tab extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    isActive: PropTypes.bool
  }

  static defaultProps = {
    isActive: false
  }

  render() {
    const { className, href, isActive, children} = this.props;

    const classes = classNames('mdl-tabs__tab', {
      'is-active': isActive
    }, className);

    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
}
