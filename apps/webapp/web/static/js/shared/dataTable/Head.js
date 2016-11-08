// file: shared/dataTable/Head.js
import React from 'react';

export class Head extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <thead>
        <tr>
          {children}
        </tr>
      </thead>
    )
  }
}
