// file: users/Form.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter, browserHistory, environment } from 'react-router';
import AddUserMutation from './AddUserMutation';

// Base components
import Grid, { Cell } from 'react-to-mdl/grid';
import Layout from 'react-to-mdl/layout';
import Textfield from 'react-to-mdl/textfield';
import Select from 'react-select';
import Button from  'react-to-mdl/button'
import Spinner from 'react-to-mdl/spinner';

// CSS
import CSSModules from 'react-css-modules';
import { mdlUpgrade } from 'react-to-mdl';
import styles from './styles.scss';
import 'react-select/dist/react-select.css';

class Form extends React.Component {

  render() {
    const { title, edit } = this.props;
    const { user, isLoading, hasError} = this.props.state;

    return (
      <main>
        <Grid>
          <Cell col={12}>
            <h1 styleName="form-title">{title}</h1>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            { hasError && (
              <span styleName="login-error">
              </span>
            )}
          </Cell>
        </Grid>
        <form id="user-form" onSubmit={e => this.props.handleSubmit(e)}>
          {isLoading && (<div styleName="loading">
            <Spinner />
          </div>)}
          <Grid>
            <Cell offset={2} col={4}>
              <Textfield
                id="first_name"
                labelText="Nombre(s)"
                defaultValue = {user.firstName || ''}
                onChange={e => this.props.changeUser({
                  first_name: e.target.value
                })}
              />
            </Cell>
            <Cell col={4}>
              <Textfield
                id="last_name"
                labelText="Apellido(s)"
                defaultValue = {user.lastName || ''}
                onChange={e => this.props.changeUser({
                  last_name: e.target.value
                })}
              />
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={4}>
              <Textfield
                id="email"
                labelText="Email"
                defaultValue = {user.email || ''}
                onChange={e => this.props.changeUser({
                  email: e.target.value
                })}
              />
            </Cell>
            <Cell col={2}>
              { /* TODO: Load options values to select from graphql */ }
              <Select instanceId='role'
                name='role'
                styleName="dropdown"
                value={user.role}
                options={[
                  {value: 'superadmin', label: 'SuperAdmin'},
                  {value: 'admin', label: 'Admin'},
                  {value: 'client', label: 'Cliente'}
                ]}
                onChange={opt => this.props.changeUser({
                  role: opt && opt.value
                })}
                placeholder='Roles'
                autoBlur={true}
              />
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={4}>
              <Textfield
                id="phone"
                labelText="Telefono"
                defaultValue = {user.phone || ''}
                onChange={e => this.props.changeUser({
                  phone: e.target.value
                })}
              />
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={8}>
              <h5 styleName='form-section-heading'>
                Ingresar contraseña
                {edit && (<span>
                    &nbsp;(dejar en blanco si no desea cambiarlo)
                </span>)}
              </h5>
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={4}>
              <Textfield
                id="password"
                type="password"
                labelText="Contraseña"
                onChange={e => this.props.changeUser({
                  password: e.target.value
                })}
              />
            </Cell>
            <Cell col={4}>
              <Textfield
                id="password_confirmation"
                type="password"
                labelText="Repetir contraseña"
                onChange={e => this.props.changeUser({
                  passwordConfirmation: e.target.value
                })}
              />
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={4}>
              <Button raised={true} primary={true} type="submit">Guardar</Button>
            </Cell>
          </Grid>
        </form>
      </main>
    )
  }
}

/*** exports ***/
export default mdlUpgrade(
  CSSModules(Form, styles)
);
