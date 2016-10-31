// file: shared/grid/Cell.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Cell extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
    col: PropTypes.number,
    phone: PropTypes.number,
    tablet: PropTypes.number,
    offset: PropTypes.number,
    offsetDesktop: PropTypes.number,
    offsetTablet: PropTypes.number,
    offsetPhone: PropTypes.number,
    hideDesktop: PropTypes.bool,
    hidePhone: PropTypes.bool,
    hideTablet: PropTypes.bool
  };

  render() {
    const { className, align, col, phone, tablet, offset, offsetDesktop,
      offsetTablet, offsetPhone, hideDesktop, hidePhone, hideTablet,
      children, ...otherProps } = this.props;

    const classes = classNames('mdl-cell', {
        // columns
        [`mdl-cell--${col}-col`]: col,
        [`mdl-cell--${phone}-col-phone`]: phone,
        [`mdl-cell--${tablet}-col-tablet`]: tablet,
        // alignment and offsets
        [`mdl-cell--${align}`]: align,
        [`mdl-cell--${offset}-offset`]: offset,
        [`mdl-cell--${offsetDesktop}-offset-desktop`]: offsetDesktop,
        [`mdl-cell--${offsetTablet}-offset-tablet`]: offsetTablet,
        [`mdl-cell--${offsetPhone}-offset-phone`]: offsetPhone,
        // utils
        'mdl-cell--hide-desktop': hideDesktop,
        'mdl-cell--hide-phone': hidePhone,
        'mdl-cell--hide-tablet': hideTablet
    }, className);

    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    )
  }
}
