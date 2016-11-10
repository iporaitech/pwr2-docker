// file: shared/menu/Menu.js
import React, { PropTypes } from 'react';
import classNames from 'classnames';

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/menu/_menu.scss';

export default class Menu extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    bottomRight: PropTypes.bool
  }

  static defaultProps = {
    bottomRight: false
  }

  render() {
    const { className, bottomRight, children, ...otherProps } = this.props;
    const classes = classNames('mdl-menu mdl-js-menu', {
      'mdl-menu--bottom-right': bottomRight
    }, className);

    return (
      <ul className={classes} {...otherProps}>
        {children}
      </ul>
    )
  }
}