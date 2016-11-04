/**
 * file: shared/menu/MenuItem.js
 *
 * React components to render MDL menu components
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/menu
 */
 import React, { PropTypes } from 'react';
 import classNames from 'classnames';

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/menu/_menu.scss';

export class Item extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children, ...otherProps } = this.props;
    const classes = classNames('mdl-menu__item', className);

    return (
      <li className={classes} {...otherProps}>
        {children}
      </li>
    )
  }
}
