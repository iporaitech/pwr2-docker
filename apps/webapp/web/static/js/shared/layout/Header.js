// file: shared/layout/Header.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Header extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    scroll: PropTypes.bool,
    waterfall: PropTypes.bool,
    waterfallHideTop: PropTypes.bool,
    transparent: PropTypes.bool,
    seamed: PropTypes.bool
  }

  static defaultProps = {
    scroll: false,
    waterfall: false,
    waterfallHideTop: false,
    transparent: false,
    seamed: false
  }

  render() {
    const { className, scroll, waterfall, waterfallHideTop, transparent,
      seamed, children, ...otherProps } = this.props;

    const classes = classNames('mdl-layout__header', {
      'mdl-layout__header--scroll': scroll,
      'mdl-layout__header--waterfall': waterfall,
      'mdl-layout__header--waterfall-hide-top': waterfallHideTop,
      'mdl-layout__header--transparent': transparent,
      'mdl-layout__header--seamed': seamed,
    }, className);

    return (
      <header className={classes}>
        {children}
      </header>
    )
  }
}
