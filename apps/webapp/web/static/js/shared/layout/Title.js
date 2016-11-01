// file: shared/layout/Title.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Title extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;
    const classes = classNames('mdl-layout__title', className);

    return (
      <span className={classes}>
        {this.props.children}
      </span>
    )
  }
}
