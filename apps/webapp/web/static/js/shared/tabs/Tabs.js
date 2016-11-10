// file: shared/tabs/Tabs.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Tabs extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    rippleEffect: PropTypes.bool
  }

  static defaultProps = {
    rippleEffect: false
  }

  render() {
    const { className, rippleEffect, children, ...otherProps } = this.props;

    const classes = classNames('mdl-tabs mdl-js-tabs', {
      'mdl-js-ripple-effect': rippleEffect
    }, className);

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}
