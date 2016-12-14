// file: shared/layout/Content.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Content extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props;
    const classes = classNames('mdl-layout__content', className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}
