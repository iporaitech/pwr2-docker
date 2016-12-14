/**
 * file: shared/button/index.js
 *
 * React components to render MDL button components
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/button
 */
 import React, { PropTypes } from 'react';
 import classNames from 'classnames';

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/button/_button.scss';

export default class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    raised: PropTypes.bool,
    fab: PropTypes.bool,
    miniFab: PropTypes.bool,
    icon: PropTypes.bool,
    colored: PropTypes.bool,
    primary: PropTypes.bool,
    accent: PropTypes.bool,
    rippleEffect: PropTypes.bool
  }

  static defaultProps = {
    type: 'submit',
    raised: false,
    fab: false,
    miniFab: false,
    icon: false,
    colored: false,
    primary: false,
    accent: false,
    rippleEffect: true
  }

  render() {
    const { className, raised, fab, miniFab, icon, colored,
      primary, accent, rippleEffect, children, ...otherProps } = this.props;

    const classes = classNames('mdl-button mdl-js-button', {
      'mdl-button--raised': raised,
      'mdl-button--fab': fab,
      'mdl-button--mini-fab': miniFab,
      'mdl-button--icon': icon,
      'mdl-button--colored': colored,
      'mdl-button--primary': primary,
      'mdl-button--accent': accent,
      'mdl-js-ripple-effect': rippleEffect
    }, className);

    return (
      <button className={classes} {...otherProps}>
        {children}
      </button>
    )
  }
}
