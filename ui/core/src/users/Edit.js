// file: users/Edit.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter } from 'react-router';
import EditUserMutation from './EditUserMutation';

// Base components
import Form from './Form';

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
    title: 'Edit User'
  }

  constructor(props) {
    super(props)
    this.changeUser = this.changeUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { title } = this.props;

    return (
      <Form title={title} state={this.state} changeUser={this.changeUser}
        handleSubmit={this.handleSubmit.bind(this)} edit={true}/>
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
