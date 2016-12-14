// file: shared/grid/Grid.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Grid extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    noSpacing: PropTypes.bool
  }

  render() {
    const { className, noSpacing, children, ...otherProps } = this.props;

    const classes = classNames('mdl-grid', {
      'mdl-grid--nospacing': noSpacing
    }, className);

    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    )
  }
}
