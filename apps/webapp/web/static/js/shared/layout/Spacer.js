// file: shared/layout/Spacer.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Spacer extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;
    const classes = classNames('mdl-layout-spacer', className);

    return <div className={classes}></div>
  }
}
