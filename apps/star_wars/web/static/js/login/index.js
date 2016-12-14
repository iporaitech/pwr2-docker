// file: login/index.js

import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { withRouter } from 'react-router';
import Auth from 'lib/auth';
import LoginMutation from './mutation';

// Base components
import Spinner from 'shared/spinner';
import Layout from 'shared/layout';
import Textfield from 'shared/textfield';

// CSS
import CSSModules from 'react-css-modules';
import mdlUpgrade from 'lib/mdlUpgrade';
import styles from './styles.scss';

class Login extends React.Component {
  static propTypes = {
    styles: PropTypes.object
  }

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
        email: this.refs.email.value(),
        password: this.refs.password.value()
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
          this.setState({
            hasError: true,
            isLoading: false
          });
        }
      }
    );
  }

  render() {
    const { styles } = this.props;
    const { isLoading, hasError } = this.state;

    return (
      <Layout styleName="login-layout">
        <main styleName="login-content">
          <div styleName="card">
            <div styleName="card-title">
              <h2 styleName="mdl-card__title-text">Login</h2>
            </div>
            <form id="login-form" onSubmit={this.handleSubmit.bind(this)}>
              <div>
                { isLoading && (<div styleName="loading">
                  <Spinner />
                </div>)}

                <div styleName="mdl-card__supporting-text">
                  { this.state.hasError && (
                    <span styleName="login-error">
                      Incorrect email or password
                    </span>
                  )}
                  <Textfield id="email"
                    ref="email"
                    labelText="Email"
                    floatingLabel={true}
                    hasError={hasError} />

                  <Textfield id="password"
                    ref="password"
                    type="password"
                    labelText="Password"
                    floatingLabel={true}
                    hasError={hasError} />
                </div>

                <div styleName="mdl-card__actions">
                  <button type="submit" className="mdl-js-button mdl-js-ripple-effect" styleName="login-button">
                    Enter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </Layout>
    )
  }
}

/*** exports ***/
export default Relay.createContainer(
  withRouter(
    mdlUpgrade(
      CSSModules(Login, styles)
    )
  ),{
    fragments: {}
  }
);
