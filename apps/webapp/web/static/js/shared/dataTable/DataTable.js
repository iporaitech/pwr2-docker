// file: shared/dataTable/DataTable.js
import React, { PropTypes } from 'react';
import classNames from 'classnames';

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/data-table/_data-table.scss';
import '!style!css!sass!material-design-lite/src/shadow/_shadow.scss';

export default class DataTable extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    selectable: PropTypes.bool,
    shadow: PropTypes.oneOf([
      '2dp', '3dp', '4dp', '6dp', '8dp', '16dp'
    ])
  }

  static defaultProps = {
    selectable: false
  }

  render() {
    const { className, selectable, shadow, children, ...otherProps } = this.props;
    const classes = classNames('mdl-data-table mdl-js-data-table', {
      'mdl-data-table--selectable': selectable,
      [`mdl-shadow--${shadow}`]: shadow
    }, className);

    return (
      <table className={classes} {...otherProps}>
          {children}
      </table>
    )
  }
}
