// file: users/New.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter } from 'react-router';

// Base components
import Grid, { Cell } from 'shared/grid';
import Layout from 'shared/layout';
import Textfield from 'shared/textfield';
import Select from 'react-select';

// CSS
import CSSModules from 'react-css-modules';
import mdlUpgrade from 'lib/mdlUpgrade';
import styles from './styles.scss';

class New extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    user: PropTypes.object
  }

  static defaultProps = {
    title: 'Create a new user'
  }

  constructor(props) {
    super(props)
    this.state = {
      user: props.user || {}
    }
  }

  changeUser(attrs) {
    const user = Object.assign({}, this.state.user, attrs);
    this.setState(Object.assign({}, this.state, {user}));
  }

  render() {
    const { title } = this.props;
    const { user } = this.state;

    return (
      <main>
        <Grid>
          <Cell col={12}>
            <h1 styleName="form-title">{title}</h1>
          </Cell>
        </Grid>
        <form id="user-form">
          <Grid>
            <Cell offset={2} col={4}>
              <Textfield id="first_name" labelText="First Name"/>
            </Cell>
            <Cell col={4}>
              <Textfield id="last_name" labelText="Last Name"/>
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={4}>
              <Textfield id="email" labelText="Email"/>
            </Cell>
            <Cell col={2}>
              <Select instanceId='role'
                name='role'
                styleName="dropdown"
                value={user.role}
                options={[
                  {value: 'superadmin', label: 'SuperAdmin'},
                  {value: 'admin', label: 'Admin'},
                  {value: 'client', label: 'Client'}
                ]}
                onChange={opt => this.changeUser({
                  role: opt && opt.value
                })}
                placeholder='Role...'
                autoBlur={true}
              />
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={8}>
              <h5 styleName='form-section-heading'>
                Enter Password
              </h5>
            </Cell>
          </Grid>
          <Grid>
            <Cell offset={2} col={4}>
              <Textfield id="password" type="password" labelText="Password"/>
            </Cell>
            <Cell col={4}>
              <Textfield id="same-password" type="password" labelText="Same Password"/>
            </Cell>
          </Grid>
        </form>
      </main>
    )
  }
}

/*** exports ***/
export default withRouter(
  mdlUpgrade(
    CSSModules(New, styles)
  )
);
