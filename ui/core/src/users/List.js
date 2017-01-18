// file: users/List.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter, Link } from 'react-router';

// Base components
import Grid, { Cell } from 'react-to-mdl/grid';
import Textfield from 'react-to-mdl/textfield';
import Select from 'react-select';
import Button from 'react-to-mdl/button';
import DataTable, {
  DataTableHead,
  DataTableTH,
  DataTableTD
} from 'react-to-mdl/dataTable';
import Layout, { LayoutIcon } from 'react-to-mdl/layout';

// CSS
import CSSModules from 'react-css-modules';
import { mdlUpgrade } from 'react-to-mdl';
import styles from './styles.scss';

class List extends React.Component {

  static defaultProps = {
    title: 'List of Users'
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { title, users } = this.props;

    return (
      <div>
        <Grid>
          <Cell col={12}>
            <h1 styleName="form-title">{title}</h1>
          </Cell>
        </Grid>
        <Grid>
          <Cell offset={3} col={6}>
            <DataTable shadow={'2dp'}>
              <DataTableHead>
                <DataTableTH nonNumeric={true}> User </DataTableTH>
                <DataTableTH nonNumeric={true}> Email </DataTableTH>
                <DataTableTH nonNumeric={true}> Access </DataTableTH>
                <DataTableTH nonNumeric={true}></DataTableTH>
              </DataTableHead>
              <tbody>
                {users.map((user, index) => {
                  return <tr key={index}>
                    <DataTableTD nonNumeric={true}>{`${user.firstName} ${user.lastName}`}</DataTableTD>
                    <DataTableTD nonNumeric={true}>{user.email}</DataTableTD>
                    <DataTableTD nonNumeric={true}>{user.role}</DataTableTD>
                    <DataTableTD nonNumeric={true}>
                      <Link to={`/admin/users/${user.id}/edit`}>edit </Link>
                    </DataTableTD>
                  </tr>
                })}
              </tbody>
            </DataTable>
          </Cell>
        </Grid>
      </div>
    )
  }
}

/*** exports ***/
export default withRouter(
  mdlUpgrade(
    CSSModules(List, styles)
  )
);
