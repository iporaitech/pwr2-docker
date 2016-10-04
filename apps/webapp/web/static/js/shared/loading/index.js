// file: shared/LoadingOverlay.js
import React from 'react';
import mdlUpgrade from 'lib/mdlUpgrade';
import material from 'material-design-lite/material.css';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);

class Loading extends React.Component {
  static propTypes = {
    overlay: React.PropTypes.bool
  }
  static defaultProps = {
    overlay: true
  }

  render(){
    const className = cx(
      'mdl-spinner',
      'mdl-js-spinner',
      "is-active"
    );
    return (
      this.props.overlay ?
        <div styleName="overlay">
          <div className={className}></div>
        </div>
      : <div className={className}></div>
    )
  }
}

export default mdlUpgrade(Loading, Object.assign({}, material, styles));
