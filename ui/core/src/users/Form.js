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
  static propTypes = {
    user: PropTypes.object,
    title: PropTypes.string
  }

  static defaultProps = {
    user: null,
    title: 'Crear nuevo usuario'
  }

  constructor(props) {
    super(props)

    this.state = {
      user: Object.assign({}, props.user),
      hasError: false,
      isLoading: false,
      errors: null
    }
  }

  changeUser(attrs) {
    const user = Object.assign({}, this.state.user, attrs);
    this.setState(Object.assign({}, this.state, {user}));
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state.user;

    this.props.relay.commitUpdate(
      new AddUserMutation({
        user
      }),{
        onSuccess: response => {
          console.log(response);
          this.setState({isLoading: false});
          // TODO: get rid of reload and use router.
          // Hint: Tabs js is interferring with React in users/index
          /*if(response.addUser.errors) {
            this.setState({
              hasError: true,
              isLoading: false,
              errors: response.addUser.errors
            });
            console.log(response);
          }*/
          //const { router } = this.props;

          //router.replace('/admin/users')
        },
        onFailure: transaction => {
          console.log(transaction.getError().source);
          this.setState({
            hasError: true,
            isLoading: false
          });
        }
      }
    );

    this.setState({isLoading: true});
  }

  render() {
    const { title } = this.props;
    const { isLoading, user, hasError } = this.state;
    console.log(this.state.user);
    return (
      <main>
        <Grid>
          <Cell col={12}>
            <h1 styleName="form-title">{title}</h1>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            { this.state.hasError && (
              <span styleName="login-error">

              </span>
            )}
          </Cell>
        </Grid>
        <form id="user-form" onSubmit={e => this.handleSubmit(e)}>
          {isLoading && (<div styleName="loading">
            <Spinner />
          </div>)}
          <Grid>
            <Cell offset={2} col={4}>
              <Textfield
                id="first_name"
                labelText="Nombre(s)"
                onChange={e => this.changeUser({
                  first_name: e.target.value
                })}
              />
            </Cell>
            <Cell col={4}>
              <Textfield
                id="last_name"
                labelText="Apellido(s)"
                onChange={e => this.changeUser({
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
                onChange={e => this.changeUser({
                  email: e.target.value
                })}
              />
            </Cell>
            <Cell col={2}>
              <Select instanceId='role'
                name='role'
                styleName="dropdown"
                value={user.role}
                options={[
                  {value: 'superadmin', label: 'SuperAdmin'},
                  {value: 'admin', label: 'Admin'},
                  {value: 'client', label: 'Cliente'}
                ]}
                onChange={opt => this.changeUser({
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
                id="telephone"
                labelText="Telefono"
                onChange={e => this.changeUser({
                  phone: e.target.value
                })}
              />
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={8}>
              <h5 styleName='form-section-heading'>
                Ingresar contraseña
              </h5>
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={4}>
              <Textfield
                id="password"
                type="password"
                labelText="Contraseña"
                onChange={e => this.changeUser({
                  password: e.target.value
                })}
              />
            </Cell>
            <Cell col={4}>
              <Textfield
                id="password_confirmation"
                type="password"
                labelText="Repetir contraseña"
                onChange={e => this.changeUser({
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

export default Relay.createContainer(
  withRouter(
    mdlUpgrade(
      CSSModules(Form, styles)
    )
  ),{
    fragments: { }
  }
);
