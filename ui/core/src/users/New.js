// file: users/New.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter, } from 'react-router';
import AddUserMutation from './AddUserMutation';

// Base components
import Form from './Form';

// CSS
import CSSModules from 'react-css-modules';
import { mdlUpgrade } from 'react-to-mdl';
import styles from './styles.scss';
import 'react-select/dist/react-select.css';

class New extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    title: PropTypes.string
  }

  static defaultProps = {
    title: 'Crear nuevo usuario',
    user: {
      first_name: '', last_name: '', email: '', role: '', phone: '',
      password: '', passwordConfirmation: ''
    }
  }

  constructor(props) {
    super(props)
    this.changeUser = this.changeUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: Object.assign({}, props.user),
      hasError: false,
      isLoading: false,
      errors: null,
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
    const { title } = this.props;

    return (
      <Form title={title} state={this.state} changeUser={this.changeUser}
        handleSubmit={this.handleSubmit.bind(this)} />
    )
  }
}

export default Relay.createContainer(
  withRouter(
    mdlUpgrade(
      CSSModules(New, styles)
    )
  ),{
    fragments: { }
  }
);
