// file: shared/layout/HeaderRow.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class HeaderRow extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;
    const classes = classNames('mdl-layout__header-row', className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}
