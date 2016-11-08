/**
 * file: shared/textfield/index.js
 *
 * React component to render MDL textfield component
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/textfield
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/textfield/_textfield.scss';

export default class Textfield extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    tag: PropTypes.oneOf(['input', 'textarea']),
    labelText: PropTypes.string,
    floatingLabel: PropTypes.bool,
    hasError: PropTypes.bool
  }

  static defaultProps = {
    tag: 'input',
    floatingLabel: true,
    hasError: false
  }

 /**
  * Return the value of the input
  */
  value() {
    return this.refs.input.value;
  }

  render() {
    const { id, className, tag, labelText, floatingLabel,
      hasError, ...otherProps } = this.props;

    const classes = classNames('mdl-js-textfield mdl-textfield', {
      'mdl-textfield--floating-label': floatingLabel,
      'is-invalid': hasError
    }, className);

    return (
      <div className={classes} >
        {React.createElement(
          tag, Object.assign({}, otherProps, {
            id: id,
            ref: 'input',
            className: 'mdl-textfield__input'
          })
        )}
        <label htmlFor={id} className="mdl-textfield__label">{labelText}</label>
      </div>
    );
  }
}
