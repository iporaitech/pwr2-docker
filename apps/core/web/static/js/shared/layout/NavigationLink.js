// file: shared/layout/NavigationLink.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export class NavigationLink extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    to: PropTypes.string.isRequired
  }

  render() {
    const { className, to } = this.props;
    const classes = classNames('mdl-navigation__link', className);

    return (
      <Link to={to} className={classes}>
        {this.props.children}
      </Link>
    )
  }
}
