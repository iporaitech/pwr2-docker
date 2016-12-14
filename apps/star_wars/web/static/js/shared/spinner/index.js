/**
 * file: shared/spinner/index.js
 *
 * React component to render MDL spinner component
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/spinner
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

// This component usually needs to upgrade itself !!!
import mdlUpgrade from 'lib/mdlUpgrade';

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/spinner/_spinner.scss';

class Spinner extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    singleColor: PropTypes.bool
  }
  static defaultProps = {
    isActive: true,
    singleColor: false
  }

  render(){
    const { className, isActive, singleColor, ...otherProps } = this.props;

    const classes = classNames('mdl-spinner mdl-js-spinner', {
      'is-active': isActive,
      'mdl-spinner--single-color': singleColor
    }, className);

    return <div className={classes}></div>
  }
}

export default mdlUpgrade(Spinner);
