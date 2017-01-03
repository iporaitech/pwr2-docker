// file: users/Edit.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter } from 'react-router';
import EditUserMutation from './EditUserMutation';

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

class Edit extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    title: PropTypes.string
  }

  static defaultProps = {
    user: null,
    title: 'Editar Usuario'
  }

  constructor(props) {
    super(props)

    this.state = {
      user: Object.assign({}, props.node),
      hasError: false,
      errors: [],
      isLoading: false
    }
  }

  changeUser(attrs) {
    const user = Object.assign({}, this.state.user, attrs);
    this.setState(Object.assign({}, this.state, {user}));
    console.log(user);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state.user;
    delete user["__dataID__"];

    this.props.relay.commitUpdate(
      new EditUserMutation({
        user
      }),{
        onSuccess: response => {
          this.setState({isLoading: false});

          // TODO: get rid of reload and use router.
          // TODO: Redirect to the updated list of users without reloading page and show errors in the form
          // Hint: Tabs js is interferring with React in members/index
          // window.location.reload();
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
    const { title , node} = this.props;
    const { isLoading, user } = this.state;

    return (
      <main>
        <Grid>
          <Cell col={12}>
            <h1 styleName="form-title">{title}</h1>
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
                floatingLabel={true}
                defaultValue = {user.firstName || ''}
                onChange={e => this.changeUser({
                  first_name: e.target.value
                })}
              />
            </Cell>
            <Cell col={4}>
              <Textfield
                id="last_name"
                labelText="Apellido(s)"
                defaultValue = {user.lastName || ''}
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
                defaultValue = {user.email || ''}
                onChange={e => this.changeUser({
                  email: e.target.value
                })}
              />
            </Cell>
            <Cell col={2}>
              <Select instanceId='role'
                name='role'
                styleName="dropdown"
                value = {user.role || ''}
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
                id="phone"
                labelText="Telefono"
                defaultValue = {user.phone || ''}
                onChange={e => this.changeUser({
                  phone: e.target.value
                })}
              />
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={4}>
              <Button raised={true} primary={true} type="submit">Actualizar</Button>
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
      CSSModules(Edit, styles)
    )
  ),{
    fragments: {
      node: () => Relay.QL`
       fragment on Node {
         ... on User{
           id
           firstName
           lastName
           role
           email
           phone
         }
       }
     `
    }
  }
);
