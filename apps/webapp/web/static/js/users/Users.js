// file: users/Users.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter } from 'react-router';

// Base components
import Grid, { Cell } from 'shared/grid';
import Textfield from 'shared/textfield';
import Select from 'react-select';
import Button from 'shared/button';
import DataTable, {
  DataTableHead,
  DataTableTH,
  DataTableTD
} from 'shared/dataTable';
import Layout, {
  LayoutIcon
} from 'shared/layout';

// CSS
import CSSModules from 'react-css-modules';
import mdlUpgrade from 'lib/mdlUpgrade';
import styles from './styles.scss';

class Users extends React.Component {

  static defaultProps = {
    title: 'User list'
  }

  constructor(props) {
    super(props)
  }
  render() {
    const { title } = this.props;
    let users = [
     {name: "Javier Rios Selent", email: "rsjavier14@gmail.com", access: "Super Admin"},
     {name: "Admin", email: "admin@gmail.com", access: "Admin"},
     {name: "Client", email: "client@gmail.com", access: "Client"}
    ]

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
                <DataTableTH nonNumeric={true}> Username </DataTableTH>
                <DataTableTH nonNumeric={true}> Email </DataTableTH>
                <DataTableTH nonNumeric={true}> Access </DataTableTH>
                <DataTableTH nonNumeric={true}></DataTableTH>
              </DataTableHead>
              <tbody>
                {users.map((user) => {
                  return <tr key={user.email}>
                    <DataTableTD nonNumeric={true}>{user.name}</DataTableTD>
                    <DataTableTD nonNumeric={true}>{user.email}</DataTableTD>
                    <DataTableTD nonNumeric={true}>{user.access}</DataTableTD>
                    <DataTableTD nonNumeric={true}>
                    <Button primary icon={true} title="Edit User">
                      <LayoutIcon className="material-icons">mode_edit</LayoutIcon>
                    </Button>
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
    CSSModules(Users, styles)
  )
);
