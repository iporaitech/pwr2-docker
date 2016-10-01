// file: login/index.js
import React from 'react';
import Relay from 'react-relay';
import mdlUpgrade from 'lib/mdlUpgrade';
import Loading from 'shared/loading';
import material from 'material-design-lite/material.css';
import classNames from 'classnames/bind';
import styles from './styles.css';
import { withRouter } from 'react-router';
import LoginMutation from './mutation';
import Auth from 'lib/auth';

const cx = classNames.bind(styles);

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      isLoading: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({isLoading: true});

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
        },
        onFailure: transaction => {
          this.setState({hasError: true});
          this.setState({isLoading: false});
        }
      }
    );
  }

  render() {
    // We use classNames for CSS that depends on MDL javascript
    const inputClassName = cx(
      "mdl-js-textfield",
      'mdl-textfield',
      'mdl-textfield--floating-label',
      {"is-invalid": this.state.hasError}
    );
    const { isLoading } = this.state;

    return (
      <div className="mdl-js-layout" styleName="login-layout">
        <main styleName="login-content">
          <div styleName="card">
            <div styleName="card-title">
              <h2 styleName="mdl-card__title-text">Login</h2>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                { isLoading && (<Loading />)}
                <div styleName="mdl-card__supporting-text">
                  { this.state.hasError && (
                    <span styleName="login-error">Incorrect email or password</span>
                  )}
                  <div className={inputClassName}>
                    <input ref="email" styleName="mdl-textfield__input" type="text" id="email" />
                    <label styleName="mdl-textfield__label" htmlFor="email">Email</label>
                  </div>
                  <div className={inputClassName}>
                    <input ref="password" styleName="mdl-textfield__input" type="password" id="userpass" />
                    <label styleName="mdl-textfield__label" htmlFor="userpass">Password</label>
                  </div>
                </div>
                <div styleName="mdl-card__actions">
                  <button
                    className="mdl-js-button mdl-js-ripple-effect mdl-button mdl-button--colored">
                    Enter
                  </button>
                </div>
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
    mdlUpgrade(Login, Object.assign({}, material, styles))
  ),{
    fragments: {}
  }
);
