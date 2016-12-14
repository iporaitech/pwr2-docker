// file: shared/layout/Drawer.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Drawer extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;
    const classes = classNames('mdl-layout__drawer', className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}
