// file: shared/dataTable/TH.js
import React, { PropTypes } from 'react';
import classNames from 'classnames';

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/data-table/_data-table.scss';

export class TH extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    ascending: PropTypes.bool,
    descending: PropTypes.bool,
    nonNumeric: PropTypes.bool
  }

  static defaultProps = {
    ascending: false,
    descending: false,
    nonNumeric: false
  }

  render() {
    const { className, ascending, descending, nonNumeric, children,
      ...otherProps } = this.props;
    const classes = classNames({
      'mdl-data-table__header--sorted-ascending': ascending,
      'mdl-data-table__header--sorted-descending': descending,
      'mdl-data-table__cell--non-numeric': nonNumeric
    }, className);

    return (
      <th className={classes} {...otherProps}>
          {children}
      </th>
    )
  }
}
