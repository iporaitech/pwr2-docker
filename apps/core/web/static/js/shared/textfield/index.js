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
    type: PropTypes.string,
    labelText: PropTypes.string,
    floatingLabel: PropTypes.bool,
    hasError: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    type: "text",
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
    const { id, type, floatingLabel, hasError, className,
      labelText,  onChange } = this.props;

    const classes = classNames('mdl-js-textfield mdl-textfield', {
      'mdl-textfield--floating-label': floatingLabel,
      'is-invalid': hasError
    }, className);

    return (
      <div className={classes} >
        <input ref="input" id={id} type={type} onChange={onChange} className="mdl-textfield__input" />
        <label htmlFor={id} className="mdl-textfield__label">{labelText}</label>
      </div>
    );
  }
}
