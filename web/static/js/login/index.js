// file: login/index.js
import React from 'react';
import Relay from 'react-relay';
import mdlUpgrade from 'lib/mdlUpgrade';
import material from 'material-design-lite/material.css';
import styles from './styles.css';
import { withRouter } from 'react-router';
import LoginMutation from './mutation';
import Auth from 'lib/auth';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.relay.commitUpdate(
      new LoginMutation({
        email: this.refs.email.value,
        password: this.refs.password.value
      }), {
        onSuccess: response => {
          Auth.login(response.login.accessToken);
          const { location, router } = this.props;

          if (location.state && location.state.nextPathname) {
            router.replace(location.state.nextPathname)
          } else {
            router.replace('/')
          }
        }
      }
    );
  }

  render() {
    return (
      <div className="mdl-js-layout" styleName="login-layout">
        <main styleName="login-content">
          <div styleName="mdl-card mdl-shadow--6dp">
            <div styleName="mdl-card__title mdl-color--primary mdl-color-text--white">
              <h2 styleName="mdl-card__title-text">Login</h2>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div styleName="mdl-card__supporting-text">
                <div className="mdl-js-textfield" styleName="mdl-textfield mdl-textfield--floating-label">
                  <input ref="email" styleName="mdl-textfield__input" type="text" id="email" />
                  <label styleName="mdl-textfield__label" htmlFor="email">Email</label>
                </div>
                <div className="mdl-js-textfield" styleName="mdl-textfield">
                  <input ref="password" styleName="mdl-textfield__input" type="password" id="userpass" />
                  <label styleName="mdl-textfield__label" htmlFor="userpass">Password</label>
                </div>
              </div>
              <div styleName="mdl-card__actions">
                <button
                  className="mdl-js-button mdl-js-ripple-effect"
                  styleName="mdl-button mdl-button--colored">
                  Enter
                </button>
                {this.state.error && (
                  <p>Bad login information</p>
                )}
              </div>
            </form>
          </div>
        </main>
      </div>
    )
  }
}

// NOTICE: we merge the material and styles
// style.css contains customizations on some mdl classes
export default Relay.createContainer(
  withRouter(
    mdlUpgrade(Login, Object.assign({}, material, styles), {allowMultiple: true})
  ),{
    fragments: {}
  }
);
