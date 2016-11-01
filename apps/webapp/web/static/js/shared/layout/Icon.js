// file: shared/layout/Icon.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Icon extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;
    const classes = classNames('mdl-layout-icon', className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}
