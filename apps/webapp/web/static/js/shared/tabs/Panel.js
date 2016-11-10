// file: shared/tabs/Panel.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Panel extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    isActive: PropTypes.bool
  }

  static defaultProps = {
    isActive: false
  }

  render() {
    const { className, id, isActive, children, ...otherProps } = this.props;

    const classes = classNames('mdl-tabs__panel', {
      'is-active': isActive
    }, className);
    return (
      <div className={classes} id={id}>
        {children}
      </div>
    )
  }
}
