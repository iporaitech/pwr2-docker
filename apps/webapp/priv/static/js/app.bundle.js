webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(120);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRelay = __webpack_require__(258);

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	var _reactRouter = __webpack_require__(472);

	var _reactRouterRelay = __webpack_require__(535);

	var _reactRouterRelay2 = _interopRequireDefault(_reactRouterRelay);

	var _layout = __webpack_require__(636);

	var _layout2 = _interopRequireDefault(_layout);

	var _login = __webpack_require__(720);

	var _login2 = _interopRequireDefault(_login);

	var _StarWarsApp = __webpack_require__(723);

	var _StarWarsApp2 = _interopRequireDefault(_StarWarsApp);

	var _myGraphiql = __webpack_require__(726);

	var _myGraphiql2 = _interopRequireDefault(_myGraphiql);

	var _auth = __webpack_require__(638);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Just a tmp component for IndexRoute
	/**
	 * file: web/static/js/index.js
	 */

	var Hello = function (_React$Component) {
	  (0, _inherits3.default)(Hello, _React$Component);

	  function Hello() {
	    (0, _classCallCheck3.default)(this, Hello);
	    return (0, _possibleConstructorReturn3.default)(this, (Hello.__proto__ || (0, _getPrototypeOf2.default)(Hello)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Hello, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'h1',
	        null,
	        'Hello Public Section'
	      );
	    }
	  }]);
	  return Hello;
	}(_react2.default.Component);

	// function requireAuth(prevState, nextState, replace) {


	// Auth singleton


	// App components


	function requireAuth(nextState, replace) {
	  if (!_auth2.default.loggedIn()) {
	    replace({
	      pathname: "/login",
	      state: { nextPathname: nextState.location.pathname }
	    });
	  }
	}

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory,
	    render: (0, _reactRouter.applyRouterMiddleware)(_reactRouterRelay2.default),
	    environment: function environment() {
	      return _auth2.default.getEnvironment();
	    } },
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: Hello }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _login2.default }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/admin', component: _layout2.default, onEnter: requireAuth },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: Hello }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'star-wars', component: _StarWarsApp2.default, queries: _StarWarsApp.Queries }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'graphiql', component: _myGraphiql2.default })
	  )
	), document.getElementById('react-root'));

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(14).Object.getPrototypeOf;

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(4)
	  , $getPrototypeOf = __webpack_require__(6);

	__webpack_require__(12)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(29);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(472);

	var _LogoutLink = __webpack_require__(637);

	var _LogoutLink2 = _interopRequireDefault(_LogoutLink);

	var _mdlUpgrade = __webpack_require__(639);

	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);

	var _material = __webpack_require__(719);

	var _material2 = _interopRequireDefault(_material);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Layout = function (_React$Component) {
	  (0, _inherits3.default)(Layout, _React$Component);

	  function Layout() {
	    (0, _classCallCheck3.default)(this, Layout);
	    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Layout, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { ref: 'layout', styleName: 'mdl-layout', className: 'mdl-js-layout' },
	        _react2.default.createElement(
	          'header',
	          { styleName: 'mdl-layout__header' },
	          _react2.default.createElement(
	            'div',
	            { styleName: 'mdl-layout__header-row' },
	            _react2.default.createElement(
	              'span',
	              { styleName: 'mdl-layout-title' },
	              'pwr2-docker'
	            ),
	            _react2.default.createElement('div', { styleName: 'mdl-layout-spacer' }),
	            _react2.default.createElement(
	              'nav',
	              { styleName: 'mdl-navigation' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/', styleName: 'mdl-navigation__link' },
	                'Inicio'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/admin/star-wars', styleName: 'mdl-navigation__link' },
	                'Star Wars Example'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/admin/graphiql', styleName: 'mdl-navigation__link' },
	                'GraphiQL'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'mdl-layout__drawer' },
	          _react2.default.createElement(
	            'span',
	            { styleName: 'mdl-layout-title' },
	            'Admin'
	          ),
	          _react2.default.createElement(
	            'nav',
	            { styleName: 'mdl-navigation' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/', styleName: 'mdl-navigation__link' },
	              'Inicio'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/admin/star-wars', styleName: 'mdl-navigation__link' },
	              'Star Wars Example'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/admin/graphiql', styleName: 'mdl-navigation__link' },
	              'GraphiQL'
	            ),
	            _react2.default.createElement(_LogoutLink2.default, null)
	          )
	        ),
	        _react2.default.createElement(
	          'main',
	          { styleName: 'mdl-layout__content' },
	          this.props.children
	        )
	      );
	    }
	  }]);
	  return Layout;
	}(_react2.default.Component); // file: layout/index.js


	exports.default = (0, _mdlUpgrade2.default)(Layout, _material2.default);

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactRelay = __webpack_require__(258);

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	var _auth = __webpack_require__(638);

	var _auth2 = _interopRequireDefault(_auth);

	var _reactRouter = __webpack_require__(472);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// file: layout/LogoutLink.js
	var LogoutMutation = function (_Relay$Mutation) {
	  (0, _inherits3.default)(LogoutMutation, _Relay$Mutation);

	  function LogoutMutation() {
	    (0, _classCallCheck3.default)(this, LogoutMutation);
	    return (0, _possibleConstructorReturn3.default)(this, (LogoutMutation.__proto__ || (0, _getPrototypeOf2.default)(LogoutMutation)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(LogoutMutation, [{
	    key: 'getVariables',
	    value: function getVariables() {
	      return null;
	    }
	  }, {
	    key: 'getMutation',
	    value: function getMutation() {
	      return function () {
	        return {
	          calls: [{
	            kind: 'Call',
	            metadata: {},
	            name: 'logout',
	            value: {
	              kind: 'CallVariable',
	              callVariableName: 'input'
	            }
	          }],
	          children: [{
	            fieldName: 'clientMutationId',
	            kind: 'Field',
	            metadata: {
	              isGenerated: true,
	              isRequisite: true
	            },
	            type: 'String'
	          }],
	          kind: 'Mutation',
	          metadata: {
	            inputType: 'LogoutInput!'
	          },
	          name: 'LogoutLink',
	          responseType: 'LogoutPayload'
	        };
	      }();
	    }

	    // TODO: Add field to LoginPayload to get errors

	  }, {
	    key: 'getFatQuery',
	    value: function getFatQuery() {
	      return function () {
	        return {
	          children: [{
	            fieldName: 'loggedOut',
	            kind: 'Field',
	            metadata: {},
	            type: 'Boolean'
	          }],
	          id: _reactRelay2.default.QL.__id(),
	          kind: 'Fragment',
	          metadata: {},
	          name: 'LogoutLink_ValueRelayQL',
	          type: 'LogoutPayload'
	        };
	      }();
	    }
	  }, {
	    key: 'getConfigs',
	    value: function getConfigs() {
	      return [{
	        type: 'REQUIRED_CHILDREN',
	        children: [function () {
	          return {
	            children: [{
	              fieldName: 'loggedOut',
	              kind: 'Field',
	              metadata: {},
	              type: 'Boolean'
	            }],
	            id: _reactRelay2.default.QL.__id(),
	            kind: 'Fragment',
	            metadata: {},
	            name: 'LogoutLink_ChildrenRelayQL',
	            type: 'LogoutPayload'
	          };
	        }()]
	      }];
	    }
	  }]);
	  return LogoutMutation;
	}(_reactRelay2.default.Mutation);

	var LogoutLink = function (_React$Component) {
	  (0, _inherits3.default)(LogoutLink, _React$Component);

	  function LogoutLink() {
	    (0, _classCallCheck3.default)(this, LogoutLink);
	    return (0, _possibleConstructorReturn3.default)(this, (LogoutLink.__proto__ || (0, _getPrototypeOf2.default)(LogoutLink)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(LogoutLink, [{
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var _this3 = this;

	      event.preventDefault();

	      this.props.relay.commitUpdate(new LogoutMutation(), {
	        onSuccess: function onSuccess(response) {
	          if (response.logout.loggedOut) {
	            _auth2.default.logout();
	            _this3.props.router.replace('/login');
	          } else {
	            throw new Error("Could not logout");
	          }
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      return _react2.default.createElement(
	        'a',
	        { href: '/logout', className: 'mdl-navigation__link', onClick: function onClick(e) {
	            return _this4.handleClick(e);
	          } },
	        'Logout'
	      );
	    }
	  }]);
	  return LogoutLink;
	}(_react2.default.Component);

	exports.default = _reactRelay2.default.createContainer((0, _reactRouter.withRouter)(LogoutLink), { fragments: {} });

/***/ },

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _reactRelay = __webpack_require__(258);

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Auth = function () {
	  function Auth() {
	    (0, _classCallCheck3.default)(this, Auth);

	    this.environment = new _reactRelay2.default.Environment();
	    // Inject a new network layer into Relay with NO token
	    this.environment.injectNetworkLayer(this._buildNetworkLayer());
	  }

	  (0, _createClass3.default)(Auth, [{
	    key: 'getToken',
	    value: function getToken() {
	      return localStorage.accessToken;
	    }
	  }, {
	    key: 'login',
	    value: function login(token) {
	      // persist token in localStorage
	      localStorage.accessToken = token;
	      // "Renew" this.environment each login
	      this.environment = new _reactRelay2.default.Environment();
	      this.environment.injectNetworkLayer(this._buildNetworkLayer());
	    }
	  }, {
	    key: 'logout',
	    value: function logout(callback) {
	      // delete token from localStorage
	      delete localStorage.accessToken;
	      // Renew this.environment each logout to override
	      this.environment = new _reactRelay2.default.Environment();
	      this.environment.injectNetworkLayer(this._buildNetworkLayer());
	      if (callback) callback();
	    }
	  }, {
	    key: 'loggedIn',
	    value: function loggedIn() {
	      return !!localStorage.accessToken;
	    }
	  }, {
	    key: 'getEnvironment',
	    value: function getEnvironment() {
	      return this.environment;
	    }
	  }, {
	    key: '_buildNetworkLayer',
	    value: function _buildNetworkLayer() {
	      var props = this.loggedIn() ? {
	        headers: { Authorization: 'Bearer ' + this.getToken() }
	      } : null;
	      return new _reactRelay2.default.DefaultNetworkLayer(("http://localhost:4000/graphql"), props);
	    }
	  }]);
	  return Auth;
	}();

	// Export singleton


	module.exports = new Auth();

/***/ },

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _get2 = __webpack_require__(640);

	var _get3 = _interopRequireDefault(_get2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _reactDom = __webpack_require__(120);

	var _reactCssModules = __webpack_require__(644);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _material = __webpack_require__(718);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (WrappedComponent) {
	  var styles = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var CSSComponent = (0, _reactCssModules2.default)(WrappedComponent, styles, options);
	  return function (_CSSComponent) {
	    (0, _inherits3.default)(_class, _CSSComponent);

	    function _class() {
	      (0, _classCallCheck3.default)(this, _class);
	      return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(_class, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        if ((0, _get3.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'componentDidMount', this)) {
	          (0, _get3.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'componentDidMount', this).call(this);
	        }
	        _material.mdl.upgradeElements((0, _reactDom.findDOMNode)(this));
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        if ((0, _get3.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'componentWillUnmount', this)) {
	          (0, _get3.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'componentWillUnmount', this).call(this);
	        }
	        _material.mdl.downgradeElements((0, _reactDom.findDOMNode)(this));
	      }
	    }]);
	    return _class;
	  }(CSSComponent);
	}; // file: lib/mdlUpgrade.js

/***/ },

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _getOwnPropertyDescriptor = __webpack_require__(641);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

/***/ },

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(642), __esModule: true };

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(643);
	var $Object = __webpack_require__(14).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(48)
	  , $getOwnPropertyDescriptor = __webpack_require__(75).f;

	__webpack_require__(12)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },

/***/ 718:
/***/ function(module, exports) {

	;(function() {
	"use strict";

	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/**
	 * A component handler interface using the revealing module design pattern.
	 * More details on this design pattern here:
	 * https://github.com/jasonmayes/mdl-component-design-pattern
	 *
	 * @author Jason Mayes.
	 */
	/* exported componentHandler */

	// Pre-defining the componentHandler interface, for closure documentation and
	// static verification.
	var componentHandler = {
	  /**
	   * Searches existing DOM for elements of our component type and upgrades them
	   * if they have not already been upgraded.
	   *
	   * @param {string=} optJsClass the programatic name of the element class we
	   * need to create a new instance of.
	   * @param {string=} optCssClass the name of the CSS class elements of this
	   * type will have.
	   */
	  upgradeDom: function(optJsClass, optCssClass) {},
	  /**
	   * Upgrades a specific element rather than all in the DOM.
	   *
	   * @param {!Element} element The element we wish to upgrade.
	   * @param {string=} optJsClass Optional name of the class we want to upgrade
	   * the element to.
	   */
	  upgradeElement: function(element, optJsClass) {},
	  /**
	   * Upgrades a specific list of elements rather than all in the DOM.
	   *
	   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
	   * The elements we wish to upgrade.
	   */
	  upgradeElements: function(elements) {},
	  /**
	   * Upgrades all registered components found in the current DOM. This is
	   * automatically called on window load.
	   */
	  upgradeAllRegistered: function() {},
	  /**
	   * Allows user to be alerted to any upgrades that are performed for a given
	   * component type
	   *
	   * @param {string} jsClass The class name of the MDL component we wish
	   * to hook into for any upgrades performed.
	   * @param {function(!HTMLElement)} callback The function to call upon an
	   * upgrade. This function should expect 1 parameter - the HTMLElement which
	   * got upgraded.
	   */
	  registerUpgradedCallback: function(jsClass, callback) {},
	  /**
	   * Registers a class for future use and attempts to upgrade existing DOM.
	   *
	   * @param {componentHandler.ComponentConfigPublic} config the registration configuration
	   */
	  register: function(config) {},
	  /**
	   * Downgrade either a given node, an array of nodes, or a NodeList.
	   *
	   * @param {!Node|!Array<!Node>|!NodeList} nodes
	   */
	  downgradeElements: function(nodes) {}
	};

	componentHandler = (function() {
	  'use strict';

	  /** @type {!Array<componentHandler.ComponentConfig>} */
	  var registeredComponents_ = [];

	  /** @type {!Array<componentHandler.Component>} */
	  var createdComponents_ = [];

	  var componentConfigProperty_ = 'mdlComponentConfigInternal_';

	  /**
	   * Searches registered components for a class we are interested in using.
	   * Optionally replaces a match with passed object if specified.
	   *
	   * @param {string} name The name of a class we want to use.
	   * @param {componentHandler.ComponentConfig=} optReplace Optional object to replace match with.
	   * @return {!Object|boolean}
	   * @private
	   */
	  function findRegisteredClass_(name, optReplace) {
	    for (var i = 0; i < registeredComponents_.length; i++) {
	      if (registeredComponents_[i].className === name) {
	        if (typeof optReplace !== 'undefined') {
	          registeredComponents_[i] = optReplace;
	        }
	        return registeredComponents_[i];
	      }
	    }
	    return false;
	  }

	  /**
	   * Returns an array of the classNames of the upgraded classes on the element.
	   *
	   * @param {!Element} element The element to fetch data from.
	   * @return {!Array<string>}
	   * @private
	   */
	  function getUpgradedListOfElement_(element) {
	    var dataUpgraded = element.getAttribute('data-upgraded');
	    // Use `['']` as default value to conform the `,name,name...` style.
	    return dataUpgraded === null ? [''] : dataUpgraded.split(',');
	  }

	  /**
	   * Returns true if the given element has already been upgraded for the given
	   * class.
	   *
	   * @param {!Element} element The element we want to check.
	   * @param {string} jsClass The class to check for.
	   * @returns {boolean}
	   * @private
	   */
	  function isElementUpgraded_(element, jsClass) {
	    var upgradedList = getUpgradedListOfElement_(element);
	    return upgradedList.indexOf(jsClass) !== -1;
	  }

	  /**
	   * Searches existing DOM for elements of our component type and upgrades them
	   * if they have not already been upgraded.
	   *
	   * @param {string=} optJsClass the programatic name of the element class we
	   * need to create a new instance of.
	   * @param {string=} optCssClass the name of the CSS class elements of this
	   * type will have.
	   */
	  function upgradeDomInternal(optJsClass, optCssClass) {
	    if (typeof optJsClass === 'undefined' &&
	        typeof optCssClass === 'undefined') {
	      for (var i = 0; i < registeredComponents_.length; i++) {
	        upgradeDomInternal(registeredComponents_[i].className,
	            registeredComponents_[i].cssClass);
	      }
	    } else {
	      var jsClass = /** @type {string} */ (optJsClass);
	      if (typeof optCssClass === 'undefined') {
	        var registeredClass = findRegisteredClass_(jsClass);
	        if (registeredClass) {
	          optCssClass = registeredClass.cssClass;
	        }
	      }

	      var elements = document.querySelectorAll('.' + optCssClass);
	      for (var n = 0; n < elements.length; n++) {
	        upgradeElementInternal(elements[n], jsClass);
	      }
	    }
	  }

	  /**
	   * Upgrades a specific element rather than all in the DOM.
	   *
	   * @param {!Element} element The element we wish to upgrade.
	   * @param {string=} optJsClass Optional name of the class we want to upgrade
	   * the element to.
	   */
	  function upgradeElementInternal(element, optJsClass) {
	    // Verify argument type.
	    if (!(typeof element === 'object' && element instanceof Element)) {
	      throw new Error('Invalid argument provided to upgrade MDL element.');
	    }
	    var upgradedList = getUpgradedListOfElement_(element);
	    var classesToUpgrade = [];
	    // If jsClass is not provided scan the registered components to find the
	    // ones matching the element's CSS classList.
	    if (!optJsClass) {
	      var classList = element.classList;
	      registeredComponents_.forEach(function(component) {
	        // Match CSS & Not to be upgraded & Not upgraded.
	        if (classList.contains(component.cssClass) &&
	            classesToUpgrade.indexOf(component) === -1 &&
	            !isElementUpgraded_(element, component.className)) {
	          classesToUpgrade.push(component);
	        }
	      });
	    } else if (!isElementUpgraded_(element, optJsClass)) {
	      classesToUpgrade.push(findRegisteredClass_(optJsClass));
	    }

	    // Upgrade the element for each classes.
	    for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
	      registeredClass = classesToUpgrade[i];
	      if (registeredClass) {
	        // Mark element as upgraded.
	        upgradedList.push(registeredClass.className);
	        element.setAttribute('data-upgraded', upgradedList.join(','));
	        var instance = new registeredClass.classConstructor(element);
	        instance[componentConfigProperty_] = registeredClass;
	        createdComponents_.push(instance);
	        // Call any callbacks the user has registered with this component type.
	        for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {
	          registeredClass.callbacks[j](element);
	        }

	        if (registeredClass.widget) {
	          // Assign per element instance for control over API
	          element[registeredClass.className] = instance;
	        }
	      } else {
	        throw new Error(
	          'Unable to find a registered component for the given class.');
	      }

	      var ev;
	      if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
	        ev = new CustomEvent('mdl-componentupgraded', {
	          bubbles: true, cancelable: false
	        });
	      } else {
	        ev = document.createEvent('Events');
	        ev.initEvent('mdl-componentupgraded', true, true);
	      }
	      element.dispatchEvent(ev);
	    }
	  }

	  /**
	   * Upgrades a specific list of elements rather than all in the DOM.
	   *
	   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
	   * The elements we wish to upgrade.
	   */
	  function upgradeElementsInternal(elements) {
	    if (!Array.isArray(elements)) {
	      if (elements instanceof Element) {
	        elements = [elements];
	      } else {
	        elements = Array.prototype.slice.call(elements);
	      }
	    }
	    for (var i = 0, n = elements.length, element; i < n; i++) {
	      element = elements[i];
	      if (element instanceof HTMLElement) {
	        upgradeElementInternal(element);
	        if (element.children.length > 0) {
	          upgradeElementsInternal(element.children);
	        }
	      }
	    }
	  }

	  /**
	   * Registers a class for future use and attempts to upgrade existing DOM.
	   *
	   * @param {componentHandler.ComponentConfigPublic} config
	   */
	  function registerInternal(config) {
	    // In order to support both Closure-compiled and uncompiled code accessing
	    // this method, we need to allow for both the dot and array syntax for
	    // property access. You'll therefore see the `foo.bar || foo['bar']`
	    // pattern repeated across this method.
	    var widgetMissing = (typeof config.widget === 'undefined' &&
	        typeof config['widget'] === 'undefined');
	    var widget = true;

	    if (!widgetMissing) {
	      widget = config.widget || config['widget'];
	    }

	    var newConfig = /** @type {componentHandler.ComponentConfig} */ ({
	      classConstructor: config.constructor || config['constructor'],
	      className: config.classAsString || config['classAsString'],
	      cssClass: config.cssClass || config['cssClass'],
	      widget: widget,
	      callbacks: []
	    });

	    registeredComponents_.forEach(function(item) {
	      if (item.cssClass === newConfig.cssClass) {
	        throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
	      }
	      if (item.className === newConfig.className) {
	        throw new Error('The provided className has already been registered');
	      }
	    });

	    if (config.constructor.prototype
	        .hasOwnProperty(componentConfigProperty_)) {
	      throw new Error(
	          'MDL component classes must not have ' + componentConfigProperty_ +
	          ' defined as a property.');
	    }

	    var found = findRegisteredClass_(config.classAsString, newConfig);

	    if (!found) {
	      registeredComponents_.push(newConfig);
	    }
	  }

	  /**
	   * Allows user to be alerted to any upgrades that are performed for a given
	   * component type
	   *
	   * @param {string} jsClass The class name of the MDL component we wish
	   * to hook into for any upgrades performed.
	   * @param {function(!HTMLElement)} callback The function to call upon an
	   * upgrade. This function should expect 1 parameter - the HTMLElement which
	   * got upgraded.
	   */
	  function registerUpgradedCallbackInternal(jsClass, callback) {
	    var regClass = findRegisteredClass_(jsClass);
	    if (regClass) {
	      regClass.callbacks.push(callback);
	    }
	  }

	  /**
	   * Upgrades all registered components found in the current DOM. This is
	   * automatically called on window load.
	   */
	  function upgradeAllRegisteredInternal() {
	    for (var n = 0; n < registeredComponents_.length; n++) {
	      upgradeDomInternal(registeredComponents_[n].className);
	    }
	  }

	  /**
	   * Check the component for the downgrade method.
	   * Execute if found.
	   * Remove component from createdComponents list.
	   *
	   * @param {?componentHandler.Component} component
	   */
	  function deconstructComponentInternal(component) {
	    if (component) {
	      var componentIndex = createdComponents_.indexOf(component);
	      createdComponents_.splice(componentIndex, 1);

	      var upgrades = component.element_.getAttribute('data-upgraded').split(',');
	      var componentPlace = upgrades.indexOf(component[componentConfigProperty_].classAsString);
	      upgrades.splice(componentPlace, 1);
	      component.element_.setAttribute('data-upgraded', upgrades.join(','));

	      var ev;
	      if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
	        ev = new CustomEvent('mdl-componentdowngraded', {
	          bubbles: true, cancelable: false
	        });
	      } else {
	        ev = document.createEvent('Events');
	        ev.initEvent('mdl-componentdowngraded', true, true);
	      }
	      component.element_.dispatchEvent(ev);
	    }
	  }

	  /**
	   * Downgrade either a given node, an array of nodes, or a NodeList.
	   *
	   * @param {!Node|!Array<!Node>|!NodeList} nodes
	   */
	  function downgradeNodesInternal(nodes) {
	    /**
	     * Auxiliary function to downgrade a single node.
	     * @param  {!Node} node the node to be downgraded
	     */
	    var downgradeNode = function(node) {
	      createdComponents_.filter(function(item) {
	        return item.element_ === node;
	      }).forEach(deconstructComponentInternal);
	    };
	    if (nodes instanceof Array || nodes instanceof NodeList) {
	      for (var n = 0; n < nodes.length; n++) {
	        downgradeNode(nodes[n]);
	      }
	    } else if (nodes instanceof Node) {
	      downgradeNode(nodes);
	    } else {
	      throw new Error('Invalid argument provided to downgrade MDL nodes.');
	    }
	  }

	  // Now return the functions that should be made public with their publicly
	  // facing names...
	  return {
	    upgradeDom: upgradeDomInternal,
	    upgradeElement: upgradeElementInternal,
	    upgradeElements: upgradeElementsInternal,
	    upgradeAllRegistered: upgradeAllRegisteredInternal,
	    registerUpgradedCallback: registerUpgradedCallbackInternal,
	    register: registerInternal,
	    downgradeElements: downgradeNodesInternal
	  };
	})();

	/**
	 * Describes the type of a registered component type managed by
	 * componentHandler. Provided for benefit of the Closure compiler.
	 *
	 * @typedef {{
	 *   constructor: Function,
	 *   classAsString: string,
	 *   cssClass: string,
	 *   widget: (string|boolean|undefined)
	 * }}
	 */
	componentHandler.ComponentConfigPublic;  // jshint ignore:line

	/**
	 * Describes the type of a registered component type managed by
	 * componentHandler. Provided for benefit of the Closure compiler.
	 *
	 * @typedef {{
	 *   constructor: !Function,
	 *   className: string,
	 *   cssClass: string,
	 *   widget: (string|boolean),
	 *   callbacks: !Array<function(!HTMLElement)>
	 * }}
	 */
	componentHandler.ComponentConfig;  // jshint ignore:line

	/**
	 * Created component (i.e., upgraded element) type as managed by
	 * componentHandler. Provided for benefit of the Closure compiler.
	 *
	 * @typedef {{
	 *   element_: !HTMLElement,
	 *   className: string,
	 *   classAsString: string,
	 *   cssClass: string,
	 *   widget: string
	 * }}
	 */
	componentHandler.Component;  // jshint ignore:line

	// Export all symbols, for the benefit of Closure compiler.
	// No effect on uncompiled code.
	componentHandler['upgradeDom'] = componentHandler.upgradeDom;
	componentHandler['upgradeElement'] = componentHandler.upgradeElement;
	componentHandler['upgradeElements'] = componentHandler.upgradeElements;
	componentHandler['upgradeAllRegistered'] =
	    componentHandler.upgradeAllRegistered;
	componentHandler['registerUpgradedCallback'] =
	    componentHandler.registerUpgradedCallback;
	componentHandler['register'] = componentHandler.register;
	componentHandler['downgradeElements'] = componentHandler.downgradeElements;
	window.componentHandler = componentHandler;
	window['componentHandler'] = componentHandler;

	window.addEventListener('load', function() {
	  'use strict';

	  /**
	   * Performs a "Cutting the mustard" test. If the browser supports the features
	   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
	   * components requiring JavaScript.
	   */
	  if ('classList' in document.createElement('div') &&
	      'querySelector' in document &&
	      'addEventListener' in window && Array.prototype.forEach) {
	    document.documentElement.classList.add('mdl-js');
	    componentHandler.upgradeAllRegistered();
	  } else {
	    /**
	     * Dummy function to avoid JS errors.
	     */
	    componentHandler.upgradeElement = function() {};
	    /**
	     * Dummy function to avoid JS errors.
	     */
	    componentHandler.register = function() {};
	  }
	});

	// Source: https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
	// Adapted from https://gist.github.com/paulirish/1579671 which derived from
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller.
	// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon
	// MIT license
	if (!Date.now) {
	    /**
	   * Date.now polyfill.
	   * @return {number} the current Date
	   */
	    Date.now = function () {
	        return new Date().getTime();
	    };
	    Date['now'] = Date.now;
	}
	var vendors = [
	    'webkit',
	    'moz'
	];
	for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	    var vp = vendors[i];
	    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	    window['requestAnimationFrame'] = window.requestAnimationFrame;
	    window['cancelAnimationFrame'] = window.cancelAnimationFrame;
	}
	if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	    var lastTime = 0;
	    /**
	   * requestAnimationFrame polyfill.
	   * @param  {!Function} callback the callback function.
	   */
	    window.requestAnimationFrame = function (callback) {
	        var now = Date.now();
	        var nextTime = Math.max(lastTime + 16, now);
	        return setTimeout(function () {
	            callback(lastTime = nextTime);
	        }, nextTime - now);
	    };
	    window.cancelAnimationFrame = clearTimeout;
	    window['requestAnimationFrame'] = window.requestAnimationFrame;
	    window['cancelAnimationFrame'] = window.cancelAnimationFrame;
	}
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Button MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialButton = function MaterialButton(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialButton'] = MaterialButton;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialButton.prototype.Constant_ = {};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialButton.prototype.CssClasses_ = {
	    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	    RIPPLE_CONTAINER: 'mdl-button__ripple-container',
	    RIPPLE: 'mdl-ripple'
	};
	/**
	   * Handle blur of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialButton.prototype.blurHandler_ = function (event) {
	    if (event) {
	        this.element_.blur();
	    }
	};
	// Public methods.
	/**
	   * Disable button.
	   *
	   * @public
	   */
	MaterialButton.prototype.disable = function () {
	    this.element_.disabled = true;
	};
	MaterialButton.prototype['disable'] = MaterialButton.prototype.disable;
	/**
	   * Enable button.
	   *
	   * @public
	   */
	MaterialButton.prototype.enable = function () {
	    this.element_.disabled = false;
	};
	MaterialButton.prototype['enable'] = MaterialButton.prototype.enable;
	/**
	   * Initialize element.
	   */
	MaterialButton.prototype.init = function () {
	    if (this.element_) {
	        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
	            var rippleContainer = document.createElement('span');
	            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
	            this.rippleElement_ = document.createElement('span');
	            this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
	            rippleContainer.appendChild(this.rippleElement_);
	            this.boundRippleBlurHandler = this.blurHandler_.bind(this);
	            this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);
	            this.element_.appendChild(rippleContainer);
	        }
	        this.boundButtonBlurHandler = this.blurHandler_.bind(this);
	        this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);
	        this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialButton,
	    classAsString: 'MaterialButton',
	    cssClass: 'mdl-js-button',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Checkbox MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialCheckbox = function MaterialCheckbox(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialCheckbox'] = MaterialCheckbox;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialCheckbox.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialCheckbox.prototype.CssClasses_ = {
	    INPUT: 'mdl-checkbox__input',
	    BOX_OUTLINE: 'mdl-checkbox__box-outline',
	    FOCUS_HELPER: 'mdl-checkbox__focus-helper',
	    TICK_OUTLINE: 'mdl-checkbox__tick-outline',
	    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
	    RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',
	    RIPPLE_CENTER: 'mdl-ripple--center',
	    RIPPLE: 'mdl-ripple',
	    IS_FOCUSED: 'is-focused',
	    IS_DISABLED: 'is-disabled',
	    IS_CHECKED: 'is-checked',
	    IS_UPGRADED: 'is-upgraded'
	};
	/**
	   * Handle change of state.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialCheckbox.prototype.onChange_ = function (event) {
	    this.updateClasses_();
	};
	/**
	   * Handle focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialCheckbox.prototype.onFocus_ = function (event) {
	    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle lost focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialCheckbox.prototype.onBlur_ = function (event) {
	    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle mouseup.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialCheckbox.prototype.onMouseUp_ = function (event) {
	    this.blur_();
	};
	/**
	   * Handle class updates.
	   *
	   * @private
	   */
	MaterialCheckbox.prototype.updateClasses_ = function () {
	    this.checkDisabled();
	    this.checkToggleState();
	};
	/**
	   * Add blur.
	   *
	   * @private
	   */
	MaterialCheckbox.prototype.blur_ = function () {
	    // TODO: figure out why there's a focus event being fired after our blur,
	    // so that we can avoid this hack.
	    window.setTimeout(function () {
	        this.inputElement_.blur();
	    }.bind(this), this.Constant_.TINY_TIMEOUT);
	};
	// Public methods.
	/**
	   * Check the inputs toggle state and update display.
	   *
	   * @public
	   */
	MaterialCheckbox.prototype.checkToggleState = function () {
	    if (this.inputElement_.checked) {
	        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
	    }
	};
	MaterialCheckbox.prototype['checkToggleState'] = MaterialCheckbox.prototype.checkToggleState;
	/**
	   * Check the inputs disabled state and update display.
	   *
	   * @public
	   */
	MaterialCheckbox.prototype.checkDisabled = function () {
	    if (this.inputElement_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	    }
	};
	MaterialCheckbox.prototype['checkDisabled'] = MaterialCheckbox.prototype.checkDisabled;
	/**
	   * Disable checkbox.
	   *
	   * @public
	   */
	MaterialCheckbox.prototype.disable = function () {
	    this.inputElement_.disabled = true;
	    this.updateClasses_();
	};
	MaterialCheckbox.prototype['disable'] = MaterialCheckbox.prototype.disable;
	/**
	   * Enable checkbox.
	   *
	   * @public
	   */
	MaterialCheckbox.prototype.enable = function () {
	    this.inputElement_.disabled = false;
	    this.updateClasses_();
	};
	MaterialCheckbox.prototype['enable'] = MaterialCheckbox.prototype.enable;
	/**
	   * Check checkbox.
	   *
	   * @public
	   */
	MaterialCheckbox.prototype.check = function () {
	    this.inputElement_.checked = true;
	    this.updateClasses_();
	};
	MaterialCheckbox.prototype['check'] = MaterialCheckbox.prototype.check;
	/**
	   * Uncheck checkbox.
	   *
	   * @public
	   */
	MaterialCheckbox.prototype.uncheck = function () {
	    this.inputElement_.checked = false;
	    this.updateClasses_();
	};
	MaterialCheckbox.prototype['uncheck'] = MaterialCheckbox.prototype.uncheck;
	/**
	   * Initialize element.
	   */
	MaterialCheckbox.prototype.init = function () {
	    if (this.element_) {
	        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
	        var boxOutline = document.createElement('span');
	        boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);
	        var tickContainer = document.createElement('span');
	        tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);
	        var tickOutline = document.createElement('span');
	        tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);
	        boxOutline.appendChild(tickOutline);
	        this.element_.appendChild(tickContainer);
	        this.element_.appendChild(boxOutline);
	        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
	            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
	            this.rippleContainerElement_ = document.createElement('span');
	            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
	            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
	            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
	            this.boundRippleMouseUp = this.onMouseUp_.bind(this);
	            this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
	            var ripple = document.createElement('span');
	            ripple.classList.add(this.CssClasses_.RIPPLE);
	            this.rippleContainerElement_.appendChild(ripple);
	            this.element_.appendChild(this.rippleContainerElement_);
	        }
	        this.boundInputOnChange = this.onChange_.bind(this);
	        this.boundInputOnFocus = this.onFocus_.bind(this);
	        this.boundInputOnBlur = this.onBlur_.bind(this);
	        this.boundElementMouseUp = this.onMouseUp_.bind(this);
	        this.inputElement_.addEventListener('change', this.boundInputOnChange);
	        this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
	        this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
	        this.element_.addEventListener('mouseup', this.boundElementMouseUp);
	        this.updateClasses_();
	        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialCheckbox,
	    classAsString: 'MaterialCheckbox',
	    cssClass: 'mdl-js-checkbox',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for icon toggle MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialIconToggle = function MaterialIconToggle(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialIconToggle'] = MaterialIconToggle;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialIconToggle.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialIconToggle.prototype.CssClasses_ = {
	    INPUT: 'mdl-icon-toggle__input',
	    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
	    RIPPLE_CONTAINER: 'mdl-icon-toggle__ripple-container',
	    RIPPLE_CENTER: 'mdl-ripple--center',
	    RIPPLE: 'mdl-ripple',
	    IS_FOCUSED: 'is-focused',
	    IS_DISABLED: 'is-disabled',
	    IS_CHECKED: 'is-checked'
	};
	/**
	   * Handle change of state.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialIconToggle.prototype.onChange_ = function (event) {
	    this.updateClasses_();
	};
	/**
	   * Handle focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialIconToggle.prototype.onFocus_ = function (event) {
	    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle lost focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialIconToggle.prototype.onBlur_ = function (event) {
	    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle mouseup.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialIconToggle.prototype.onMouseUp_ = function (event) {
	    this.blur_();
	};
	/**
	   * Handle class updates.
	   *
	   * @private
	   */
	MaterialIconToggle.prototype.updateClasses_ = function () {
	    this.checkDisabled();
	    this.checkToggleState();
	};
	/**
	   * Add blur.
	   *
	   * @private
	   */
	MaterialIconToggle.prototype.blur_ = function () {
	    // TODO: figure out why there's a focus event being fired after our blur,
	    // so that we can avoid this hack.
	    window.setTimeout(function () {
	        this.inputElement_.blur();
	    }.bind(this), this.Constant_.TINY_TIMEOUT);
	};
	// Public methods.
	/**
	   * Check the inputs toggle state and update display.
	   *
	   * @public
	   */
	MaterialIconToggle.prototype.checkToggleState = function () {
	    if (this.inputElement_.checked) {
	        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
	    }
	};
	MaterialIconToggle.prototype['checkToggleState'] = MaterialIconToggle.prototype.checkToggleState;
	/**
	   * Check the inputs disabled state and update display.
	   *
	   * @public
	   */
	MaterialIconToggle.prototype.checkDisabled = function () {
	    if (this.inputElement_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	    }
	};
	MaterialIconToggle.prototype['checkDisabled'] = MaterialIconToggle.prototype.checkDisabled;
	/**
	   * Disable icon toggle.
	   *
	   * @public
	   */
	MaterialIconToggle.prototype.disable = function () {
	    this.inputElement_.disabled = true;
	    this.updateClasses_();
	};
	MaterialIconToggle.prototype['disable'] = MaterialIconToggle.prototype.disable;
	/**
	   * Enable icon toggle.
	   *
	   * @public
	   */
	MaterialIconToggle.prototype.enable = function () {
	    this.inputElement_.disabled = false;
	    this.updateClasses_();
	};
	MaterialIconToggle.prototype['enable'] = MaterialIconToggle.prototype.enable;
	/**
	   * Check icon toggle.
	   *
	   * @public
	   */
	MaterialIconToggle.prototype.check = function () {
	    this.inputElement_.checked = true;
	    this.updateClasses_();
	};
	MaterialIconToggle.prototype['check'] = MaterialIconToggle.prototype.check;
	/**
	   * Uncheck icon toggle.
	   *
	   * @public
	   */
	MaterialIconToggle.prototype.uncheck = function () {
	    this.inputElement_.checked = false;
	    this.updateClasses_();
	};
	MaterialIconToggle.prototype['uncheck'] = MaterialIconToggle.prototype.uncheck;
	/**
	   * Initialize element.
	   */
	MaterialIconToggle.prototype.init = function () {
	    if (this.element_) {
	        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
	        if (this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
	            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
	            this.rippleContainerElement_ = document.createElement('span');
	            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
	            this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT);
	            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
	            this.boundRippleMouseUp = this.onMouseUp_.bind(this);
	            this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
	            var ripple = document.createElement('span');
	            ripple.classList.add(this.CssClasses_.RIPPLE);
	            this.rippleContainerElement_.appendChild(ripple);
	            this.element_.appendChild(this.rippleContainerElement_);
	        }
	        this.boundInputOnChange = this.onChange_.bind(this);
	        this.boundInputOnFocus = this.onFocus_.bind(this);
	        this.boundInputOnBlur = this.onBlur_.bind(this);
	        this.boundElementOnMouseUp = this.onMouseUp_.bind(this);
	        this.inputElement_.addEventListener('change', this.boundInputOnChange);
	        this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
	        this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
	        this.element_.addEventListener('mouseup', this.boundElementOnMouseUp);
	        this.updateClasses_();
	        this.element_.classList.add('is-upgraded');
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialIconToggle,
	    classAsString: 'MaterialIconToggle',
	    cssClass: 'mdl-js-icon-toggle',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for dropdown MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialMenu = function MaterialMenu(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialMenu'] = MaterialMenu;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialMenu.prototype.Constant_ = {
	    // Total duration of the menu animation.
	    TRANSITION_DURATION_SECONDS: 0.3,
	    // The fraction of the total duration we want to use for menu item animations.
	    TRANSITION_DURATION_FRACTION: 0.8,
	    // How long the menu stays open after choosing an option (so the user can see
	    // the ripple).
	    CLOSE_TIMEOUT: 150
	};
	/**
	   * Keycodes, for code readability.
	   *
	   * @enum {number}
	   * @private
	   */
	MaterialMenu.prototype.Keycodes_ = {
	    ENTER: 13,
	    ESCAPE: 27,
	    SPACE: 32,
	    UP_ARROW: 38,
	    DOWN_ARROW: 40
	};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialMenu.prototype.CssClasses_ = {
	    CONTAINER: 'mdl-menu__container',
	    OUTLINE: 'mdl-menu__outline',
	    ITEM: 'mdl-menu__item',
	    ITEM_RIPPLE_CONTAINER: 'mdl-menu__item-ripple-container',
	    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
	    RIPPLE: 'mdl-ripple',
	    // Statuses
	    IS_UPGRADED: 'is-upgraded',
	    IS_VISIBLE: 'is-visible',
	    IS_ANIMATING: 'is-animating',
	    // Alignment options
	    BOTTOM_LEFT: 'mdl-menu--bottom-left',
	    // This is the default.
	    BOTTOM_RIGHT: 'mdl-menu--bottom-right',
	    TOP_LEFT: 'mdl-menu--top-left',
	    TOP_RIGHT: 'mdl-menu--top-right',
	    UNALIGNED: 'mdl-menu--unaligned'
	};
	/**
	   * Initialize element.
	   */
	MaterialMenu.prototype.init = function () {
	    if (this.element_) {
	        // Create container for the menu.
	        var container = document.createElement('div');
	        container.classList.add(this.CssClasses_.CONTAINER);
	        this.element_.parentElement.insertBefore(container, this.element_);
	        this.element_.parentElement.removeChild(this.element_);
	        container.appendChild(this.element_);
	        this.container_ = container;
	        // Create outline for the menu (shadow and background).
	        var outline = document.createElement('div');
	        outline.classList.add(this.CssClasses_.OUTLINE);
	        this.outline_ = outline;
	        container.insertBefore(outline, this.element_);
	        // Find the "for" element and bind events to it.
	        var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');
	        var forEl = null;
	        if (forElId) {
	            forEl = document.getElementById(forElId);
	            if (forEl) {
	                this.forElement_ = forEl;
	                forEl.addEventListener('click', this.handleForClick_.bind(this));
	                forEl.addEventListener('keydown', this.handleForKeyboardEvent_.bind(this));
	            }
	        }
	        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
	        this.boundItemKeydown_ = this.handleItemKeyboardEvent_.bind(this);
	        this.boundItemClick_ = this.handleItemClick_.bind(this);
	        for (var i = 0; i < items.length; i++) {
	            // Add a listener to each menu item.
	            items[i].addEventListener('click', this.boundItemClick_);
	            // Add a tab index to each menu item.
	            items[i].tabIndex = '-1';
	            // Add a keyboard listener to each menu item.
	            items[i].addEventListener('keydown', this.boundItemKeydown_);
	        }
	        // Add ripple classes to each item, if the user has enabled ripples.
	        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
	            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
	            for (i = 0; i < items.length; i++) {
	                var item = items[i];
	                var rippleContainer = document.createElement('span');
	                rippleContainer.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
	                var ripple = document.createElement('span');
	                ripple.classList.add(this.CssClasses_.RIPPLE);
	                rippleContainer.appendChild(ripple);
	                item.appendChild(rippleContainer);
	                item.classList.add(this.CssClasses_.RIPPLE_EFFECT);
	            }
	        }
	        // Copy alignment classes to the container, so the outline can use them.
	        if (this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)) {
	            this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT);
	        }
	        if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
	            this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT);
	        }
	        if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
	            this.outline_.classList.add(this.CssClasses_.TOP_LEFT);
	        }
	        if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
	            this.outline_.classList.add(this.CssClasses_.TOP_RIGHT);
	        }
	        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
	            this.outline_.classList.add(this.CssClasses_.UNALIGNED);
	        }
	        container.classList.add(this.CssClasses_.IS_UPGRADED);
	    }
	};
	/**
	   * Handles a click on the "for" element, by positioning the menu and then
	   * toggling it.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */
	MaterialMenu.prototype.handleForClick_ = function (evt) {
	    if (this.element_ && this.forElement_) {
	        var rect = this.forElement_.getBoundingClientRect();
	        var forRect = this.forElement_.parentElement.getBoundingClientRect();
	        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
	        } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
	            // Position below the "for" element, aligned to its right.
	            this.container_.style.right = forRect.right - rect.right + 'px';
	            this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
	        } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
	            // Position above the "for" element, aligned to its left.
	            this.container_.style.left = this.forElement_.offsetLeft + 'px';
	            this.container_.style.bottom = forRect.bottom - rect.top + 'px';
	        } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
	            // Position above the "for" element, aligned to its right.
	            this.container_.style.right = forRect.right - rect.right + 'px';
	            this.container_.style.bottom = forRect.bottom - rect.top + 'px';
	        } else {
	            // Default: position below the "for" element, aligned to its left.
	            this.container_.style.left = this.forElement_.offsetLeft + 'px';
	            this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
	        }
	    }
	    this.toggle(evt);
	};
	/**
	   * Handles a keyboard event on the "for" element.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */
	MaterialMenu.prototype.handleForKeyboardEvent_ = function (evt) {
	    if (this.element_ && this.container_ && this.forElement_) {
	        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
	        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
	            if (evt.keyCode === this.Keycodes_.UP_ARROW) {
	                evt.preventDefault();
	                items[items.length - 1].focus();
	            } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
	                evt.preventDefault();
	                items[0].focus();
	            }
	        }
	    }
	};
	/**
	   * Handles a keyboard event on an item.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */
	MaterialMenu.prototype.handleItemKeyboardEvent_ = function (evt) {
	    if (this.element_ && this.container_) {
	        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
	        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
	            var currentIndex = Array.prototype.slice.call(items).indexOf(evt.target);
	            if (evt.keyCode === this.Keycodes_.UP_ARROW) {
	                evt.preventDefault();
	                if (currentIndex > 0) {
	                    items[currentIndex - 1].focus();
	                } else {
	                    items[items.length - 1].focus();
	                }
	            } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
	                evt.preventDefault();
	                if (items.length > currentIndex + 1) {
	                    items[currentIndex + 1].focus();
	                } else {
	                    items[0].focus();
	                }
	            } else if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
	                evt.preventDefault();
	                // Send mousedown and mouseup to trigger ripple.
	                var e = new MouseEvent('mousedown');
	                evt.target.dispatchEvent(e);
	                e = new MouseEvent('mouseup');
	                evt.target.dispatchEvent(e);
	                // Send click.
	                evt.target.click();
	            } else if (evt.keyCode === this.Keycodes_.ESCAPE) {
	                evt.preventDefault();
	                this.hide();
	            }
	        }
	    }
	};
	/**
	   * Handles a click event on an item.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */
	MaterialMenu.prototype.handleItemClick_ = function (evt) {
	    if (evt.target.hasAttribute('disabled')) {
	        evt.stopPropagation();
	    } else {
	        // Wait some time before closing menu, so the user can see the ripple.
	        this.closing_ = true;
	        window.setTimeout(function (evt) {
	            this.hide();
	            this.closing_ = false;
	        }.bind(this), this.Constant_.CLOSE_TIMEOUT);
	    }
	};
	/**
	   * Calculates the initial clip (for opening the menu) or final clip (for closing
	   * it), and applies it. This allows us to animate from or to the correct point,
	   * that is, the point it's aligned to in the "for" element.
	   *
	   * @param {number} height Height of the clip rectangle
	   * @param {number} width Width of the clip rectangle
	   * @private
	   */
	MaterialMenu.prototype.applyClip_ = function (height, width) {
	    if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
	        // Do not clip.
	        this.element_.style.clip = '';
	    } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
	        // Clip to the top right corner of the menu.
	        this.element_.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
	    } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
	        // Clip to the bottom left corner of the menu.
	        this.element_.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
	    } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
	        // Clip to the bottom right corner of the menu.
	        this.element_.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
	    } else {
	        // Default: do not clip (same as clipping to the top left corner).
	        this.element_.style.clip = '';
	    }
	};
	/**
	   * Cleanup function to remove animation listeners.
	   *
	   * @param {Event} evt
	   * @private
	   */
	MaterialMenu.prototype.removeAnimationEndListener_ = function (evt) {
	    evt.target.classList.remove(MaterialMenu.prototype.CssClasses_.IS_ANIMATING);
	};
	/**
	   * Adds an event listener to clean up after the animation ends.
	   *
	   * @private
	   */
	MaterialMenu.prototype.addAnimationEndListener_ = function () {
	    this.element_.addEventListener('transitionend', this.removeAnimationEndListener_);
	    this.element_.addEventListener('webkitTransitionEnd', this.removeAnimationEndListener_);
	};
	/**
	   * Displays the menu.
	   *
	   * @public
	   */
	MaterialMenu.prototype.show = function (evt) {
	    if (this.element_ && this.container_ && this.outline_) {
	        // Measure the inner element.
	        var height = this.element_.getBoundingClientRect().height;
	        var width = this.element_.getBoundingClientRect().width;
	        // Apply the inner element's size to the container and outline.
	        this.container_.style.width = width + 'px';
	        this.container_.style.height = height + 'px';
	        this.outline_.style.width = width + 'px';
	        this.outline_.style.height = height + 'px';
	        var transitionDuration = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION;
	        // Calculate transition delays for individual menu items, so that they fade
	        // in one at a time.
	        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
	        for (var i = 0; i < items.length; i++) {
	            var itemDelay = null;
	            if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
	                itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
	            } else {
	                itemDelay = items[i].offsetTop / height * transitionDuration + 's';
	            }
	            items[i].style.transitionDelay = itemDelay;
	        }
	        // Apply the initial clip to the text before we start animating.
	        this.applyClip_(height, width);
	        // Wait for the next frame, turn on animation, and apply the final clip.
	        // Also make it visible. This triggers the transitions.
	        window.requestAnimationFrame(function () {
	            this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
	            this.element_.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
	            this.container_.classList.add(this.CssClasses_.IS_VISIBLE);
	        }.bind(this));
	        // Clean up after the animation is complete.
	        this.addAnimationEndListener_();
	        // Add a click listener to the document, to close the menu.
	        var callback = function (e) {
	            // Check to see if the document is processing the same event that
	            // displayed the menu in the first place. If so, do nothing.
	            // Also check to see if the menu is in the process of closing itself, and
	            // do nothing in that case.
	            // Also check if the clicked element is a menu item
	            // if so, do nothing.
	            if (e !== evt && !this.closing_ && e.target.parentNode !== this.element_) {
	                document.removeEventListener('click', callback);
	                this.hide();
	            }
	        }.bind(this);
	        document.addEventListener('click', callback);
	    }
	};
	MaterialMenu.prototype['show'] = MaterialMenu.prototype.show;
	/**
	   * Hides the menu.
	   *
	   * @public
	   */
	MaterialMenu.prototype.hide = function () {
	    if (this.element_ && this.container_ && this.outline_) {
	        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
	        // Remove all transition delays; menu items fade out concurrently.
	        for (var i = 0; i < items.length; i++) {
	            items[i].style.removeProperty('transition-delay');
	        }
	        // Measure the inner element.
	        var rect = this.element_.getBoundingClientRect();
	        var height = rect.height;
	        var width = rect.width;
	        // Turn on animation, and apply the final clip. Also make invisible.
	        // This triggers the transitions.
	        this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
	        this.applyClip_(height, width);
	        this.container_.classList.remove(this.CssClasses_.IS_VISIBLE);
	        // Clean up after the animation is complete.
	        this.addAnimationEndListener_();
	    }
	};
	MaterialMenu.prototype['hide'] = MaterialMenu.prototype.hide;
	/**
	   * Displays or hides the menu, depending on current state.
	   *
	   * @public
	   */
	MaterialMenu.prototype.toggle = function (evt) {
	    if (this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
	        this.hide();
	    } else {
	        this.show(evt);
	    }
	};
	MaterialMenu.prototype['toggle'] = MaterialMenu.prototype.toggle;
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialMenu,
	    classAsString: 'MaterialMenu',
	    cssClass: 'mdl-js-menu',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Progress MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialProgress = function MaterialProgress(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialProgress'] = MaterialProgress;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialProgress.prototype.Constant_ = {};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialProgress.prototype.CssClasses_ = { INDETERMINATE_CLASS: 'mdl-progress__indeterminate' };
	/**
	   * Set the current progress of the progressbar.
	   *
	   * @param {number} p Percentage of the progress (0-100)
	   * @public
	   */
	MaterialProgress.prototype.setProgress = function (p) {
	    if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {
	        return;
	    }
	    this.progressbar_.style.width = p + '%';
	};
	MaterialProgress.prototype['setProgress'] = MaterialProgress.prototype.setProgress;
	/**
	   * Set the current progress of the buffer.
	   *
	   * @param {number} p Percentage of the buffer (0-100)
	   * @public
	   */
	MaterialProgress.prototype.setBuffer = function (p) {
	    this.bufferbar_.style.width = p + '%';
	    this.auxbar_.style.width = 100 - p + '%';
	};
	MaterialProgress.prototype['setBuffer'] = MaterialProgress.prototype.setBuffer;
	/**
	   * Initialize element.
	   */
	MaterialProgress.prototype.init = function () {
	    if (this.element_) {
	        var el = document.createElement('div');
	        el.className = 'progressbar bar bar1';
	        this.element_.appendChild(el);
	        this.progressbar_ = el;
	        el = document.createElement('div');
	        el.className = 'bufferbar bar bar2';
	        this.element_.appendChild(el);
	        this.bufferbar_ = el;
	        el = document.createElement('div');
	        el.className = 'auxbar bar bar3';
	        this.element_.appendChild(el);
	        this.auxbar_ = el;
	        this.progressbar_.style.width = '0%';
	        this.bufferbar_.style.width = '100%';
	        this.auxbar_.style.width = '0%';
	        this.element_.classList.add('is-upgraded');
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialProgress,
	    classAsString: 'MaterialProgress',
	    cssClass: 'mdl-js-progress',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Radio MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialRadio = function MaterialRadio(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialRadio'] = MaterialRadio;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialRadio.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialRadio.prototype.CssClasses_ = {
	    IS_FOCUSED: 'is-focused',
	    IS_DISABLED: 'is-disabled',
	    IS_CHECKED: 'is-checked',
	    IS_UPGRADED: 'is-upgraded',
	    JS_RADIO: 'mdl-js-radio',
	    RADIO_BTN: 'mdl-radio__button',
	    RADIO_OUTER_CIRCLE: 'mdl-radio__outer-circle',
	    RADIO_INNER_CIRCLE: 'mdl-radio__inner-circle',
	    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
	    RIPPLE_CONTAINER: 'mdl-radio__ripple-container',
	    RIPPLE_CENTER: 'mdl-ripple--center',
	    RIPPLE: 'mdl-ripple'
	};
	/**
	   * Handle change of state.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialRadio.prototype.onChange_ = function (event) {
	    // Since other radio buttons don't get change events, we need to look for
	    // them to update their classes.
	    var radios = document.getElementsByClassName(this.CssClasses_.JS_RADIO);
	    for (var i = 0; i < radios.length; i++) {
	        var button = radios[i].querySelector('.' + this.CssClasses_.RADIO_BTN);
	        // Different name == different group, so no point updating those.
	        if (button.getAttribute('name') === this.btnElement_.getAttribute('name')) {
	            radios[i]['MaterialRadio'].updateClasses_();
	        }
	    }
	};
	/**
	   * Handle focus.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialRadio.prototype.onFocus_ = function (event) {
	    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle lost focus.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialRadio.prototype.onBlur_ = function (event) {
	    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle mouseup.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialRadio.prototype.onMouseup_ = function (event) {
	    this.blur_();
	};
	/**
	   * Update classes.
	   *
	   * @private
	   */
	MaterialRadio.prototype.updateClasses_ = function () {
	    this.checkDisabled();
	    this.checkToggleState();
	};
	/**
	   * Add blur.
	   *
	   * @private
	   */
	MaterialRadio.prototype.blur_ = function () {
	    // TODO: figure out why there's a focus event being fired after our blur,
	    // so that we can avoid this hack.
	    window.setTimeout(function () {
	        this.btnElement_.blur();
	    }.bind(this), this.Constant_.TINY_TIMEOUT);
	};
	// Public methods.
	/**
	   * Check the components disabled state.
	   *
	   * @public
	   */
	MaterialRadio.prototype.checkDisabled = function () {
	    if (this.btnElement_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	    }
	};
	MaterialRadio.prototype['checkDisabled'] = MaterialRadio.prototype.checkDisabled;
	/**
	   * Check the components toggled state.
	   *
	   * @public
	   */
	MaterialRadio.prototype.checkToggleState = function () {
	    if (this.btnElement_.checked) {
	        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
	    }
	};
	MaterialRadio.prototype['checkToggleState'] = MaterialRadio.prototype.checkToggleState;
	/**
	   * Disable radio.
	   *
	   * @public
	   */
	MaterialRadio.prototype.disable = function () {
	    this.btnElement_.disabled = true;
	    this.updateClasses_();
	};
	MaterialRadio.prototype['disable'] = MaterialRadio.prototype.disable;
	/**
	   * Enable radio.
	   *
	   * @public
	   */
	MaterialRadio.prototype.enable = function () {
	    this.btnElement_.disabled = false;
	    this.updateClasses_();
	};
	MaterialRadio.prototype['enable'] = MaterialRadio.prototype.enable;
	/**
	   * Check radio.
	   *
	   * @public
	   */
	MaterialRadio.prototype.check = function () {
	    this.btnElement_.checked = true;
	    this.onChange_(null);
	};
	MaterialRadio.prototype['check'] = MaterialRadio.prototype.check;
	/**
	   * Uncheck radio.
	   *
	   * @public
	   */
	MaterialRadio.prototype.uncheck = function () {
	    this.btnElement_.checked = false;
	    this.onChange_(null);
	};
	MaterialRadio.prototype['uncheck'] = MaterialRadio.prototype.uncheck;
	/**
	   * Initialize element.
	   */
	MaterialRadio.prototype.init = function () {
	    if (this.element_) {
	        this.btnElement_ = this.element_.querySelector('.' + this.CssClasses_.RADIO_BTN);
	        this.boundChangeHandler_ = this.onChange_.bind(this);
	        this.boundFocusHandler_ = this.onChange_.bind(this);
	        this.boundBlurHandler_ = this.onBlur_.bind(this);
	        this.boundMouseUpHandler_ = this.onMouseup_.bind(this);
	        var outerCircle = document.createElement('span');
	        outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
	        var innerCircle = document.createElement('span');
	        innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);
	        this.element_.appendChild(outerCircle);
	        this.element_.appendChild(innerCircle);
	        var rippleContainer;
	        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
	            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
	            rippleContainer = document.createElement('span');
	            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
	            rippleContainer.classList.add(this.CssClasses_.RIPPLE_EFFECT);
	            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CENTER);
	            rippleContainer.addEventListener('mouseup', this.boundMouseUpHandler_);
	            var ripple = document.createElement('span');
	            ripple.classList.add(this.CssClasses_.RIPPLE);
	            rippleContainer.appendChild(ripple);
	            this.element_.appendChild(rippleContainer);
	        }
	        this.btnElement_.addEventListener('change', this.boundChangeHandler_);
	        this.btnElement_.addEventListener('focus', this.boundFocusHandler_);
	        this.btnElement_.addEventListener('blur', this.boundBlurHandler_);
	        this.element_.addEventListener('mouseup', this.boundMouseUpHandler_);
	        this.updateClasses_();
	        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialRadio,
	    classAsString: 'MaterialRadio',
	    cssClass: 'mdl-js-radio',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Slider MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialSlider = function MaterialSlider(element) {
	    this.element_ = element;
	    // Browser feature detection.
	    this.isIE_ = window.navigator.msPointerEnabled;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialSlider'] = MaterialSlider;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialSlider.prototype.Constant_ = {};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialSlider.prototype.CssClasses_ = {
	    IE_CONTAINER: 'mdl-slider__ie-container',
	    SLIDER_CONTAINER: 'mdl-slider__container',
	    BACKGROUND_FLEX: 'mdl-slider__background-flex',
	    BACKGROUND_LOWER: 'mdl-slider__background-lower',
	    BACKGROUND_UPPER: 'mdl-slider__background-upper',
	    IS_LOWEST_VALUE: 'is-lowest-value',
	    IS_UPGRADED: 'is-upgraded'
	};
	/**
	   * Handle input on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialSlider.prototype.onInput_ = function (event) {
	    this.updateValueStyles_();
	};
	/**
	   * Handle change on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialSlider.prototype.onChange_ = function (event) {
	    this.updateValueStyles_();
	};
	/**
	   * Handle mouseup on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialSlider.prototype.onMouseUp_ = function (event) {
	    event.target.blur();
	};
	/**
	   * Handle mousedown on container element.
	   * This handler is purpose is to not require the use to click
	   * exactly on the 2px slider element, as FireFox seems to be very
	   * strict about this.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   * @suppress {missingProperties}
	   */
	MaterialSlider.prototype.onContainerMouseDown_ = function (event) {
	    // If this click is not on the parent element (but rather some child)
	    // ignore. It may still bubble up.
	    if (event.target !== this.element_.parentElement) {
	        return;
	    }
	    // Discard the original event and create a new event that
	    // is on the slider element.
	    event.preventDefault();
	    var newEvent = new MouseEvent('mousedown', {
	        target: event.target,
	        buttons: event.buttons,
	        clientX: event.clientX,
	        clientY: this.element_.getBoundingClientRect().y
	    });
	    this.element_.dispatchEvent(newEvent);
	};
	/**
	   * Handle updating of values.
	   *
	   * @private
	   */
	MaterialSlider.prototype.updateValueStyles_ = function () {
	    // Calculate and apply percentages to div structure behind slider.
	    var fraction = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
	    if (fraction === 0) {
	        this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE);
	    }
	    if (!this.isIE_) {
	        this.backgroundLower_.style.flex = fraction;
	        this.backgroundLower_.style.webkitFlex = fraction;
	        this.backgroundUpper_.style.flex = 1 - fraction;
	        this.backgroundUpper_.style.webkitFlex = 1 - fraction;
	    }
	};
	// Public methods.
	/**
	   * Disable slider.
	   *
	   * @public
	   */
	MaterialSlider.prototype.disable = function () {
	    this.element_.disabled = true;
	};
	MaterialSlider.prototype['disable'] = MaterialSlider.prototype.disable;
	/**
	   * Enable slider.
	   *
	   * @public
	   */
	MaterialSlider.prototype.enable = function () {
	    this.element_.disabled = false;
	};
	MaterialSlider.prototype['enable'] = MaterialSlider.prototype.enable;
	/**
	   * Update slider value.
	   *
	   * @param {number} value The value to which to set the control (optional).
	   * @public
	   */
	MaterialSlider.prototype.change = function (value) {
	    if (typeof value !== 'undefined') {
	        this.element_.value = value;
	    }
	    this.updateValueStyles_();
	};
	MaterialSlider.prototype['change'] = MaterialSlider.prototype.change;
	/**
	   * Initialize element.
	   */
	MaterialSlider.prototype.init = function () {
	    if (this.element_) {
	        if (this.isIE_) {
	            // Since we need to specify a very large height in IE due to
	            // implementation limitations, we add a parent here that trims it down to
	            // a reasonable size.
	            var containerIE = document.createElement('div');
	            containerIE.classList.add(this.CssClasses_.IE_CONTAINER);
	            this.element_.parentElement.insertBefore(containerIE, this.element_);
	            this.element_.parentElement.removeChild(this.element_);
	            containerIE.appendChild(this.element_);
	        } else {
	            // For non-IE browsers, we need a div structure that sits behind the
	            // slider and allows us to style the left and right sides of it with
	            // different colors.
	            var container = document.createElement('div');
	            container.classList.add(this.CssClasses_.SLIDER_CONTAINER);
	            this.element_.parentElement.insertBefore(container, this.element_);
	            this.element_.parentElement.removeChild(this.element_);
	            container.appendChild(this.element_);
	            var backgroundFlex = document.createElement('div');
	            backgroundFlex.classList.add(this.CssClasses_.BACKGROUND_FLEX);
	            container.appendChild(backgroundFlex);
	            this.backgroundLower_ = document.createElement('div');
	            this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER);
	            backgroundFlex.appendChild(this.backgroundLower_);
	            this.backgroundUpper_ = document.createElement('div');
	            this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER);
	            backgroundFlex.appendChild(this.backgroundUpper_);
	        }
	        this.boundInputHandler = this.onInput_.bind(this);
	        this.boundChangeHandler = this.onChange_.bind(this);
	        this.boundMouseUpHandler = this.onMouseUp_.bind(this);
	        this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this);
	        this.element_.addEventListener('input', this.boundInputHandler);
	        this.element_.addEventListener('change', this.boundChangeHandler);
	        this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
	        this.element_.parentElement.addEventListener('mousedown', this.boundContainerMouseDownHandler);
	        this.updateValueStyles_();
	        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialSlider,
	    classAsString: 'MaterialSlider',
	    cssClass: 'mdl-js-slider',
	    widget: true
	});
	/**
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Snackbar MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialSnackbar = function MaterialSnackbar(element) {
	    this.element_ = element;
	    this.textElement_ = this.element_.querySelector('.' + this.cssClasses_.MESSAGE);
	    this.actionElement_ = this.element_.querySelector('.' + this.cssClasses_.ACTION);
	    if (!this.textElement_) {
	        throw new Error('There must be a message element for a snackbar.');
	    }
	    if (!this.actionElement_) {
	        throw new Error('There must be an action element for a snackbar.');
	    }
	    this.active = false;
	    this.actionHandler_ = undefined;
	    this.message_ = undefined;
	    this.actionText_ = undefined;
	    this.queuedNotifications_ = [];
	    this.setActionHidden_(true);
	};
	window['MaterialSnackbar'] = MaterialSnackbar;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialSnackbar.prototype.Constant_ = {
	    // The duration of the snackbar show/hide animation, in ms.
	    ANIMATION_LENGTH: 250
	};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialSnackbar.prototype.cssClasses_ = {
	    SNACKBAR: 'mdl-snackbar',
	    MESSAGE: 'mdl-snackbar__text',
	    ACTION: 'mdl-snackbar__action',
	    ACTIVE: 'mdl-snackbar--active'
	};
	/**
	   * Display the snackbar.
	   *
	   * @private
	   */
	MaterialSnackbar.prototype.displaySnackbar_ = function () {
	    this.element_.setAttribute('aria-hidden', 'true');
	    if (this.actionHandler_) {
	        this.actionElement_.textContent = this.actionText_;
	        this.actionElement_.addEventListener('click', this.actionHandler_);
	        this.setActionHidden_(false);
	    }
	    this.textElement_.textContent = this.message_;
	    this.element_.classList.add(this.cssClasses_.ACTIVE);
	    this.element_.setAttribute('aria-hidden', 'false');
	    setTimeout(this.cleanup_.bind(this), this.timeout_);
	};
	/**
	   * Show the snackbar.
	   *
	   * @param {Object} data The data for the notification.
	   * @public
	   */
	MaterialSnackbar.prototype.showSnackbar = function (data) {
	    if (data === undefined) {
	        throw new Error('Please provide a data object with at least a message to display.');
	    }
	    if (data['message'] === undefined) {
	        throw new Error('Please provide a message to be displayed.');
	    }
	    if (data['actionHandler'] && !data['actionText']) {
	        throw new Error('Please provide action text with the handler.');
	    }
	    if (this.active) {
	        this.queuedNotifications_.push(data);
	    } else {
	        this.active = true;
	        this.message_ = data['message'];
	        if (data['timeout']) {
	            this.timeout_ = data['timeout'];
	        } else {
	            this.timeout_ = 2750;
	        }
	        if (data['actionHandler']) {
	            this.actionHandler_ = data['actionHandler'];
	        }
	        if (data['actionText']) {
	            this.actionText_ = data['actionText'];
	        }
	        this.displaySnackbar_();
	    }
	};
	MaterialSnackbar.prototype['showSnackbar'] = MaterialSnackbar.prototype.showSnackbar;
	/**
	   * Check if the queue has items within it.
	   * If it does, display the next entry.
	   *
	   * @private
	   */
	MaterialSnackbar.prototype.checkQueue_ = function () {
	    if (this.queuedNotifications_.length > 0) {
	        this.showSnackbar(this.queuedNotifications_.shift());
	    }
	};
	/**
	   * Cleanup the snackbar event listeners and accessiblity attributes.
	   *
	   * @private
	   */
	MaterialSnackbar.prototype.cleanup_ = function () {
	    this.element_.classList.remove(this.cssClasses_.ACTIVE);
	    setTimeout(function () {
	        this.element_.setAttribute('aria-hidden', 'true');
	        this.textElement_.textContent = '';
	        if (!Boolean(this.actionElement_.getAttribute('aria-hidden'))) {
	            this.setActionHidden_(true);
	            this.actionElement_.textContent = '';
	            this.actionElement_.removeEventListener('click', this.actionHandler_);
	        }
	        this.actionHandler_ = undefined;
	        this.message_ = undefined;
	        this.actionText_ = undefined;
	        this.active = false;
	        this.checkQueue_();
	    }.bind(this), this.Constant_.ANIMATION_LENGTH);
	};
	/**
	   * Set the action handler hidden state.
	   *
	   * @param {boolean} value
	   * @private
	   */
	MaterialSnackbar.prototype.setActionHidden_ = function (value) {
	    if (value) {
	        this.actionElement_.setAttribute('aria-hidden', 'true');
	    } else {
	        this.actionElement_.removeAttribute('aria-hidden');
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialSnackbar,
	    classAsString: 'MaterialSnackbar',
	    cssClass: 'mdl-js-snackbar',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Spinner MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @param {HTMLElement} element The element that will be upgraded.
	   * @constructor
	   */
	var MaterialSpinner = function MaterialSpinner(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialSpinner'] = MaterialSpinner;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialSpinner.prototype.Constant_ = { MDL_SPINNER_LAYER_COUNT: 4 };
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialSpinner.prototype.CssClasses_ = {
	    MDL_SPINNER_LAYER: 'mdl-spinner__layer',
	    MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',
	    MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',
	    MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',
	    MDL_SPINNER_LEFT: 'mdl-spinner__left',
	    MDL_SPINNER_RIGHT: 'mdl-spinner__right'
	};
	/**
	   * Auxiliary method to create a spinner layer.
	   *
	   * @param {number} index Index of the layer to be created.
	   * @public
	   */
	MaterialSpinner.prototype.createLayer = function (index) {
	    var layer = document.createElement('div');
	    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);
	    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);
	    var leftClipper = document.createElement('div');
	    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
	    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
	    var gapPatch = document.createElement('div');
	    gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
	    var rightClipper = document.createElement('div');
	    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
	    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
	    var circleOwners = [
	        leftClipper,
	        gapPatch,
	        rightClipper
	    ];
	    for (var i = 0; i < circleOwners.length; i++) {
	        var circle = document.createElement('div');
	        circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);
	        circleOwners[i].appendChild(circle);
	    }
	    layer.appendChild(leftClipper);
	    layer.appendChild(gapPatch);
	    layer.appendChild(rightClipper);
	    this.element_.appendChild(layer);
	};
	MaterialSpinner.prototype['createLayer'] = MaterialSpinner.prototype.createLayer;
	/**
	   * Stops the spinner animation.
	   * Public method for users who need to stop the spinner for any reason.
	   *
	   * @public
	   */
	MaterialSpinner.prototype.stop = function () {
	    this.element_.classList.remove('is-active');
	};
	MaterialSpinner.prototype['stop'] = MaterialSpinner.prototype.stop;
	/**
	   * Starts the spinner animation.
	   * Public method for users who need to manually start the spinner for any reason
	   * (instead of just adding the 'is-active' class to their markup).
	   *
	   * @public
	   */
	MaterialSpinner.prototype.start = function () {
	    this.element_.classList.add('is-active');
	};
	MaterialSpinner.prototype['start'] = MaterialSpinner.prototype.start;
	/**
	   * Initialize element.
	   */
	MaterialSpinner.prototype.init = function () {
	    if (this.element_) {
	        for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {
	            this.createLayer(i);
	        }
	        this.element_.classList.add('is-upgraded');
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialSpinner,
	    classAsString: 'MaterialSpinner',
	    cssClass: 'mdl-js-spinner',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Checkbox MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialSwitch = function MaterialSwitch(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialSwitch'] = MaterialSwitch;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialSwitch.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialSwitch.prototype.CssClasses_ = {
	    INPUT: 'mdl-switch__input',
	    TRACK: 'mdl-switch__track',
	    THUMB: 'mdl-switch__thumb',
	    FOCUS_HELPER: 'mdl-switch__focus-helper',
	    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
	    RIPPLE_CONTAINER: 'mdl-switch__ripple-container',
	    RIPPLE_CENTER: 'mdl-ripple--center',
	    RIPPLE: 'mdl-ripple',
	    IS_FOCUSED: 'is-focused',
	    IS_DISABLED: 'is-disabled',
	    IS_CHECKED: 'is-checked'
	};
	/**
	   * Handle change of state.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialSwitch.prototype.onChange_ = function (event) {
	    this.updateClasses_();
	};
	/**
	   * Handle focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialSwitch.prototype.onFocus_ = function (event) {
	    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle lost focus of element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialSwitch.prototype.onBlur_ = function (event) {
	    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle mouseup.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialSwitch.prototype.onMouseUp_ = function (event) {
	    this.blur_();
	};
	/**
	   * Handle class updates.
	   *
	   * @private
	   */
	MaterialSwitch.prototype.updateClasses_ = function () {
	    this.checkDisabled();
	    this.checkToggleState();
	};
	/**
	   * Add blur.
	   *
	   * @private
	   */
	MaterialSwitch.prototype.blur_ = function () {
	    // TODO: figure out why there's a focus event being fired after our blur,
	    // so that we can avoid this hack.
	    window.setTimeout(function () {
	        this.inputElement_.blur();
	    }.bind(this), this.Constant_.TINY_TIMEOUT);
	};
	// Public methods.
	/**
	   * Check the components disabled state.
	   *
	   * @public
	   */
	MaterialSwitch.prototype.checkDisabled = function () {
	    if (this.inputElement_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	    }
	};
	MaterialSwitch.prototype['checkDisabled'] = MaterialSwitch.prototype.checkDisabled;
	/**
	   * Check the components toggled state.
	   *
	   * @public
	   */
	MaterialSwitch.prototype.checkToggleState = function () {
	    if (this.inputElement_.checked) {
	        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
	    }
	};
	MaterialSwitch.prototype['checkToggleState'] = MaterialSwitch.prototype.checkToggleState;
	/**
	   * Disable switch.
	   *
	   * @public
	   */
	MaterialSwitch.prototype.disable = function () {
	    this.inputElement_.disabled = true;
	    this.updateClasses_();
	};
	MaterialSwitch.prototype['disable'] = MaterialSwitch.prototype.disable;
	/**
	   * Enable switch.
	   *
	   * @public
	   */
	MaterialSwitch.prototype.enable = function () {
	    this.inputElement_.disabled = false;
	    this.updateClasses_();
	};
	MaterialSwitch.prototype['enable'] = MaterialSwitch.prototype.enable;
	/**
	   * Activate switch.
	   *
	   * @public
	   */
	MaterialSwitch.prototype.on = function () {
	    this.inputElement_.checked = true;
	    this.updateClasses_();
	};
	MaterialSwitch.prototype['on'] = MaterialSwitch.prototype.on;
	/**
	   * Deactivate switch.
	   *
	   * @public
	   */
	MaterialSwitch.prototype.off = function () {
	    this.inputElement_.checked = false;
	    this.updateClasses_();
	};
	MaterialSwitch.prototype['off'] = MaterialSwitch.prototype.off;
	/**
	   * Initialize element.
	   */
	MaterialSwitch.prototype.init = function () {
	    if (this.element_) {
	        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
	        var track = document.createElement('div');
	        track.classList.add(this.CssClasses_.TRACK);
	        var thumb = document.createElement('div');
	        thumb.classList.add(this.CssClasses_.THUMB);
	        var focusHelper = document.createElement('span');
	        focusHelper.classList.add(this.CssClasses_.FOCUS_HELPER);
	        thumb.appendChild(focusHelper);
	        this.element_.appendChild(track);
	        this.element_.appendChild(thumb);
	        this.boundMouseUpHandler = this.onMouseUp_.bind(this);
	        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
	            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
	            this.rippleContainerElement_ = document.createElement('span');
	            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
	            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
	            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
	            this.rippleContainerElement_.addEventListener('mouseup', this.boundMouseUpHandler);
	            var ripple = document.createElement('span');
	            ripple.classList.add(this.CssClasses_.RIPPLE);
	            this.rippleContainerElement_.appendChild(ripple);
	            this.element_.appendChild(this.rippleContainerElement_);
	        }
	        this.boundChangeHandler = this.onChange_.bind(this);
	        this.boundFocusHandler = this.onFocus_.bind(this);
	        this.boundBlurHandler = this.onBlur_.bind(this);
	        this.inputElement_.addEventListener('change', this.boundChangeHandler);
	        this.inputElement_.addEventListener('focus', this.boundFocusHandler);
	        this.inputElement_.addEventListener('blur', this.boundBlurHandler);
	        this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
	        this.updateClasses_();
	        this.element_.classList.add('is-upgraded');
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialSwitch,
	    classAsString: 'MaterialSwitch',
	    cssClass: 'mdl-js-switch',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Tabs MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {Element} element The element that will be upgraded.
	   */
	var MaterialTabs = function MaterialTabs(element) {
	    // Stores the HTML element.
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialTabs'] = MaterialTabs;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialTabs.prototype.Constant_ = {};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialTabs.prototype.CssClasses_ = {
	    TAB_CLASS: 'mdl-tabs__tab',
	    PANEL_CLASS: 'mdl-tabs__panel',
	    ACTIVE_CLASS: 'is-active',
	    UPGRADED_CLASS: 'is-upgraded',
	    MDL_JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	    MDL_RIPPLE_CONTAINER: 'mdl-tabs__ripple-container',
	    MDL_RIPPLE: 'mdl-ripple',
	    MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events'
	};
	/**
	   * Handle clicks to a tabs component
	   *
	   * @private
	   */
	MaterialTabs.prototype.initTabs_ = function () {
	    if (this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
	        this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS);
	    }
	    // Select element tabs, document panels
	    this.tabs_ = this.element_.querySelectorAll('.' + this.CssClasses_.TAB_CLASS);
	    this.panels_ = this.element_.querySelectorAll('.' + this.CssClasses_.PANEL_CLASS);
	    // Create new tabs for each tab element
	    for (var i = 0; i < this.tabs_.length; i++) {
	        new MaterialTab(this.tabs_[i], this);
	    }
	    this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);
	};
	/**
	   * Reset tab state, dropping active classes
	   *
	   * @private
	   */
	MaterialTabs.prototype.resetTabState_ = function () {
	    for (var k = 0; k < this.tabs_.length; k++) {
	        this.tabs_[k].classList.remove(this.CssClasses_.ACTIVE_CLASS);
	    }
	};
	/**
	   * Reset panel state, droping active classes
	   *
	   * @private
	   */
	MaterialTabs.prototype.resetPanelState_ = function () {
	    for (var j = 0; j < this.panels_.length; j++) {
	        this.panels_[j].classList.remove(this.CssClasses_.ACTIVE_CLASS);
	    }
	};
	/**
	   * Initialize element.
	   */
	MaterialTabs.prototype.init = function () {
	    if (this.element_) {
	        this.initTabs_();
	    }
	};
	/**
	   * Constructor for an individual tab.
	   *
	   * @constructor
	   * @param {Element} tab The HTML element for the tab.
	   * @param {MaterialTabs} ctx The MaterialTabs object that owns the tab.
	   */
	function MaterialTab(tab, ctx) {
	    if (tab) {
	        if (ctx.element_.classList.contains(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
	            var rippleContainer = document.createElement('span');
	            rippleContainer.classList.add(ctx.CssClasses_.MDL_RIPPLE_CONTAINER);
	            rippleContainer.classList.add(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT);
	            var ripple = document.createElement('span');
	            ripple.classList.add(ctx.CssClasses_.MDL_RIPPLE);
	            rippleContainer.appendChild(ripple);
	            tab.appendChild(rippleContainer);
	        }
	        tab.addEventListener('click', function (e) {
	            e.preventDefault();
	            var href = tab.href.split('#')[1];
	            var panel = ctx.element_.querySelector('#' + href);
	            ctx.resetTabState_();
	            ctx.resetPanelState_();
	            tab.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
	            panel.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
	        });
	    }
	}
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialTabs,
	    classAsString: 'MaterialTabs',
	    cssClass: 'mdl-js-tabs'
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Textfield MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialTextfield = function MaterialTextfield(element) {
	    this.element_ = element;
	    this.maxRows = this.Constant_.NO_MAX_ROWS;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialTextfield'] = MaterialTextfield;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialTextfield.prototype.Constant_ = {
	    NO_MAX_ROWS: -1,
	    MAX_ROWS_ATTRIBUTE: 'maxrows'
	};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialTextfield.prototype.CssClasses_ = {
	    LABEL: 'mdl-textfield__label',
	    INPUT: 'mdl-textfield__input',
	    IS_DIRTY: 'is-dirty',
	    IS_FOCUSED: 'is-focused',
	    IS_DISABLED: 'is-disabled',
	    IS_INVALID: 'is-invalid',
	    IS_UPGRADED: 'is-upgraded',
	    HAS_PLACEHOLDER: 'has-placeholder'
	};
	/**
	   * Handle input being entered.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialTextfield.prototype.onKeyDown_ = function (event) {
	    var currentRowCount = event.target.value.split('\n').length;
	    if (event.keyCode === 13) {
	        if (currentRowCount >= this.maxRows) {
	            event.preventDefault();
	        }
	    }
	};
	/**
	   * Handle focus.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialTextfield.prototype.onFocus_ = function (event) {
	    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle lost focus.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialTextfield.prototype.onBlur_ = function (event) {
	    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	};
	/**
	   * Handle reset event from out side.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialTextfield.prototype.onReset_ = function (event) {
	    this.updateClasses_();
	};
	/**
	   * Handle class updates.
	   *
	   * @private
	   */
	MaterialTextfield.prototype.updateClasses_ = function () {
	    this.checkDisabled();
	    this.checkValidity();
	    this.checkDirty();
	    this.checkFocus();
	};
	// Public methods.
	/**
	   * Check the disabled state and update field accordingly.
	   *
	   * @public
	   */
	MaterialTextfield.prototype.checkDisabled = function () {
	    if (this.input_.disabled) {
	        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
	    }
	};
	MaterialTextfield.prototype['checkDisabled'] = MaterialTextfield.prototype.checkDisabled;
	/**
	  * Check the focus state and update field accordingly.
	  *
	  * @public
	  */
	MaterialTextfield.prototype.checkFocus = function () {
	    if (Boolean(this.element_.querySelector(':focus'))) {
	        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
	    }
	};
	MaterialTextfield.prototype['checkFocus'] = MaterialTextfield.prototype.checkFocus;
	/**
	   * Check the validity state and update field accordingly.
	   *
	   * @public
	   */
	MaterialTextfield.prototype.checkValidity = function () {
	    if (this.input_.validity) {
	        if (this.input_.validity.valid) {
	            this.element_.classList.remove(this.CssClasses_.IS_INVALID);
	        } else {
	            this.element_.classList.add(this.CssClasses_.IS_INVALID);
	        }
	    }
	};
	MaterialTextfield.prototype['checkValidity'] = MaterialTextfield.prototype.checkValidity;
	/**
	   * Check the dirty state and update field accordingly.
	   *
	   * @public
	   */
	MaterialTextfield.prototype.checkDirty = function () {
	    if (this.input_.value && this.input_.value.length > 0) {
	        this.element_.classList.add(this.CssClasses_.IS_DIRTY);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
	    }
	};
	MaterialTextfield.prototype['checkDirty'] = MaterialTextfield.prototype.checkDirty;
	/**
	   * Disable text field.
	   *
	   * @public
	   */
	MaterialTextfield.prototype.disable = function () {
	    this.input_.disabled = true;
	    this.updateClasses_();
	};
	MaterialTextfield.prototype['disable'] = MaterialTextfield.prototype.disable;
	/**
	   * Enable text field.
	   *
	   * @public
	   */
	MaterialTextfield.prototype.enable = function () {
	    this.input_.disabled = false;
	    this.updateClasses_();
	};
	MaterialTextfield.prototype['enable'] = MaterialTextfield.prototype.enable;
	/**
	   * Update text field value.
	   *
	   * @param {string} value The value to which to set the control (optional).
	   * @public
	   */
	MaterialTextfield.prototype.change = function (value) {
	    this.input_.value = value || '';
	    this.updateClasses_();
	};
	MaterialTextfield.prototype['change'] = MaterialTextfield.prototype.change;
	/**
	   * Initialize element.
	   */
	MaterialTextfield.prototype.init = function () {
	    if (this.element_) {
	        this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
	        this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
	        if (this.input_) {
	            if (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)) {
	                this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10);
	                if (isNaN(this.maxRows)) {
	                    this.maxRows = this.Constant_.NO_MAX_ROWS;
	                }
	            }
	            if (this.input_.hasAttribute('placeholder')) {
	                this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);
	            }
	            this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
	            this.boundFocusHandler = this.onFocus_.bind(this);
	            this.boundBlurHandler = this.onBlur_.bind(this);
	            this.boundResetHandler = this.onReset_.bind(this);
	            this.input_.addEventListener('input', this.boundUpdateClassesHandler);
	            this.input_.addEventListener('focus', this.boundFocusHandler);
	            this.input_.addEventListener('blur', this.boundBlurHandler);
	            this.input_.addEventListener('reset', this.boundResetHandler);
	            if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {
	                // TODO: This should handle pasting multi line text.
	                // Currently doesn't.
	                this.boundKeyDownHandler = this.onKeyDown_.bind(this);
	                this.input_.addEventListener('keydown', this.boundKeyDownHandler);
	            }
	            var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
	            this.updateClasses_();
	            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	            if (invalid) {
	                this.element_.classList.add(this.CssClasses_.IS_INVALID);
	            }
	            if (this.input_.hasAttribute('autofocus')) {
	                this.element_.focus();
	                this.checkFocus();
	            }
	        }
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialTextfield,
	    classAsString: 'MaterialTextfield',
	    cssClass: 'mdl-js-textfield',
	    widget: true
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Tooltip MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialTooltip = function MaterialTooltip(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialTooltip'] = MaterialTooltip;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialTooltip.prototype.Constant_ = {};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialTooltip.prototype.CssClasses_ = {
	    IS_ACTIVE: 'is-active',
	    BOTTOM: 'mdl-tooltip--bottom',
	    LEFT: 'mdl-tooltip--left',
	    RIGHT: 'mdl-tooltip--right',
	    TOP: 'mdl-tooltip--top'
	};
	/**
	   * Handle mouseenter for tooltip.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialTooltip.prototype.handleMouseEnter_ = function (event) {
	    var props = event.target.getBoundingClientRect();
	    var left = props.left + props.width / 2;
	    var top = props.top + props.height / 2;
	    var marginLeft = -1 * (this.element_.offsetWidth / 2);
	    var marginTop = -1 * (this.element_.offsetHeight / 2);
	    if (this.element_.classList.contains(this.CssClasses_.LEFT) || this.element_.classList.contains(this.CssClasses_.RIGHT)) {
	        left = props.width / 2;
	        if (top + marginTop < 0) {
	            this.element_.style.top = '0';
	            this.element_.style.marginTop = '0';
	        } else {
	            this.element_.style.top = top + 'px';
	            this.element_.style.marginTop = marginTop + 'px';
	        }
	    } else {
	        if (left + marginLeft < 0) {
	            this.element_.style.left = '0';
	            this.element_.style.marginLeft = '0';
	        } else {
	            this.element_.style.left = left + 'px';
	            this.element_.style.marginLeft = marginLeft + 'px';
	        }
	    }
	    if (this.element_.classList.contains(this.CssClasses_.TOP)) {
	        this.element_.style.top = props.top - this.element_.offsetHeight - 10 + 'px';
	    } else if (this.element_.classList.contains(this.CssClasses_.RIGHT)) {
	        this.element_.style.left = props.left + props.width + 10 + 'px';
	    } else if (this.element_.classList.contains(this.CssClasses_.LEFT)) {
	        this.element_.style.left = props.left - this.element_.offsetWidth - 10 + 'px';
	    } else {
	        this.element_.style.top = props.top + props.height + 10 + 'px';
	    }
	    this.element_.classList.add(this.CssClasses_.IS_ACTIVE);
	};
	/**
	   * Hide tooltip on mouseleave or scroll
	   *
	   * @private
	   */
	MaterialTooltip.prototype.hideTooltip_ = function () {
	    this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);
	};
	/**
	   * Initialize element.
	   */
	MaterialTooltip.prototype.init = function () {
	    if (this.element_) {
	        var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');
	        if (forElId) {
	            this.forElement_ = document.getElementById(forElId);
	        }
	        if (this.forElement_) {
	            // It's left here because it prevents accidental text selection on Android
	            if (!this.forElement_.hasAttribute('tabindex')) {
	                this.forElement_.setAttribute('tabindex', '0');
	            }
	            this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);
	            this.boundMouseLeaveAndScrollHandler = this.hideTooltip_.bind(this);
	            this.forElement_.addEventListener('mouseenter', this.boundMouseEnterHandler, false);
	            this.forElement_.addEventListener('touchend', this.boundMouseEnterHandler, false);
	            this.forElement_.addEventListener('mouseleave', this.boundMouseLeaveAndScrollHandler, false);
	            window.addEventListener('scroll', this.boundMouseLeaveAndScrollHandler, true);
	            window.addEventListener('touchstart', this.boundMouseLeaveAndScrollHandler);
	        }
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialTooltip,
	    classAsString: 'MaterialTooltip',
	    cssClass: 'mdl-tooltip'
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Layout MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialLayout = function MaterialLayout(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialLayout'] = MaterialLayout;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialLayout.prototype.Constant_ = {
	    MAX_WIDTH: '(max-width: 1024px)',
	    TAB_SCROLL_PIXELS: 100,
	    RESIZE_TIMEOUT: 100,
	    MENU_ICON: '&#xE5D2;',
	    CHEVRON_LEFT: 'chevron_left',
	    CHEVRON_RIGHT: 'chevron_right'
	};
	/**
	   * Keycodes, for code readability.
	   *
	   * @enum {number}
	   * @private
	   */
	MaterialLayout.prototype.Keycodes_ = {
	    ENTER: 13,
	    ESCAPE: 27,
	    SPACE: 32
	};
	/**
	   * Modes.
	   *
	   * @enum {number}
	   * @private
	   */
	MaterialLayout.prototype.Mode_ = {
	    STANDARD: 0,
	    SEAMED: 1,
	    WATERFALL: 2,
	    SCROLL: 3
	};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialLayout.prototype.CssClasses_ = {
	    CONTAINER: 'mdl-layout__container',
	    HEADER: 'mdl-layout__header',
	    DRAWER: 'mdl-layout__drawer',
	    CONTENT: 'mdl-layout__content',
	    DRAWER_BTN: 'mdl-layout__drawer-button',
	    ICON: 'material-icons',
	    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
	    RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
	    RIPPLE: 'mdl-ripple',
	    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
	    HEADER_SEAMED: 'mdl-layout__header--seamed',
	    HEADER_WATERFALL: 'mdl-layout__header--waterfall',
	    HEADER_SCROLL: 'mdl-layout__header--scroll',
	    FIXED_HEADER: 'mdl-layout--fixed-header',
	    OBFUSCATOR: 'mdl-layout__obfuscator',
	    TAB_BAR: 'mdl-layout__tab-bar',
	    TAB_CONTAINER: 'mdl-layout__tab-bar-container',
	    TAB: 'mdl-layout__tab',
	    TAB_BAR_BUTTON: 'mdl-layout__tab-bar-button',
	    TAB_BAR_LEFT_BUTTON: 'mdl-layout__tab-bar-left-button',
	    TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button',
	    PANEL: 'mdl-layout__tab-panel',
	    HAS_DRAWER: 'has-drawer',
	    HAS_TABS: 'has-tabs',
	    HAS_SCROLLING_HEADER: 'has-scrolling-header',
	    CASTING_SHADOW: 'is-casting-shadow',
	    IS_COMPACT: 'is-compact',
	    IS_SMALL_SCREEN: 'is-small-screen',
	    IS_DRAWER_OPEN: 'is-visible',
	    IS_ACTIVE: 'is-active',
	    IS_UPGRADED: 'is-upgraded',
	    IS_ANIMATING: 'is-animating',
	    ON_LARGE_SCREEN: 'mdl-layout--large-screen-only',
	    ON_SMALL_SCREEN: 'mdl-layout--small-screen-only'
	};
	/**
	   * Handles scrolling on the content.
	   *
	   * @private
	   */
	MaterialLayout.prototype.contentScrollHandler_ = function () {
	    if (this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {
	        return;
	    }
	    var headerVisible = !this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) || this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);
	    if (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
	        this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
	        this.header_.classList.add(this.CssClasses_.IS_COMPACT);
	        if (headerVisible) {
	            this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
	        }
	    } else if (this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
	        this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
	        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
	        if (headerVisible) {
	            this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
	        }
	    }
	};
	/**
	   * Handles a keyboard event on the drawer.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */
	MaterialLayout.prototype.keyboardEventHandler_ = function (evt) {
	    // Only react when the drawer is open.
	    if (evt.keyCode === this.Keycodes_.ESCAPE && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {
	        this.toggleDrawer();
	    }
	};
	/**
	   * Handles changes in screen size.
	   *
	   * @private
	   */
	MaterialLayout.prototype.screenSizeHandler_ = function () {
	    if (this.screenSizeMediaQuery_.matches) {
	        this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN);
	    } else {
	        this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN);
	        // Collapse drawer (if any) when moving to a large screen size.
	        if (this.drawer_) {
	            this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
	            this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
	        }
	    }
	};
	/**
	   * Handles events of drawer button.
	   *
	   * @param {Event} evt The event that fired.
	   * @private
	   */
	MaterialLayout.prototype.drawerToggleHandler_ = function (evt) {
	    if (evt && evt.type === 'keydown') {
	        if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
	            // prevent scrolling in drawer nav
	            evt.preventDefault();
	        } else {
	            // prevent other keys
	            return;
	        }
	    }
	    this.toggleDrawer();
	};
	/**
	   * Handles (un)setting the `is-animating` class
	   *
	   * @private
	   */
	MaterialLayout.prototype.headerTransitionEndHandler_ = function () {
	    this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);
	};
	/**
	   * Handles expanding the header on click
	   *
	   * @private
	   */
	MaterialLayout.prototype.headerClickHandler_ = function () {
	    if (this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
	        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
	        this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
	    }
	};
	/**
	   * Reset tab state, dropping active classes
	   *
	   * @private
	   */
	MaterialLayout.prototype.resetTabState_ = function (tabBar) {
	    for (var k = 0; k < tabBar.length; k++) {
	        tabBar[k].classList.remove(this.CssClasses_.IS_ACTIVE);
	    }
	};
	/**
	   * Reset panel state, droping active classes
	   *
	   * @private
	   */
	MaterialLayout.prototype.resetPanelState_ = function (panels) {
	    for (var j = 0; j < panels.length; j++) {
	        panels[j].classList.remove(this.CssClasses_.IS_ACTIVE);
	    }
	};
	/**
	  * Toggle drawer state
	  *
	  * @public
	  */
	MaterialLayout.prototype.toggleDrawer = function () {
	    var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);
	    this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
	    this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
	    // Set accessibility properties.
	    if (this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {
	        this.drawer_.setAttribute('aria-hidden', 'false');
	        drawerButton.setAttribute('aria-expanded', 'true');
	    } else {
	        this.drawer_.setAttribute('aria-hidden', 'true');
	        drawerButton.setAttribute('aria-expanded', 'false');
	    }
	};
	MaterialLayout.prototype['toggleDrawer'] = MaterialLayout.prototype.toggleDrawer;
	/**
	   * Initialize element.
	   */
	MaterialLayout.prototype.init = function () {
	    if (this.element_) {
	        var container = document.createElement('div');
	        container.classList.add(this.CssClasses_.CONTAINER);
	        var focusedElement = this.element_.querySelector(':focus');
	        this.element_.parentElement.insertBefore(container, this.element_);
	        this.element_.parentElement.removeChild(this.element_);
	        container.appendChild(this.element_);
	        if (focusedElement) {
	            focusedElement.focus();
	        }
	        var directChildren = this.element_.childNodes;
	        var numChildren = directChildren.length;
	        for (var c = 0; c < numChildren; c++) {
	            var child = directChildren[c];
	            if (child.classList && child.classList.contains(this.CssClasses_.HEADER)) {
	                this.header_ = child;
	            }
	            if (child.classList && child.classList.contains(this.CssClasses_.DRAWER)) {
	                this.drawer_ = child;
	            }
	            if (child.classList && child.classList.contains(this.CssClasses_.CONTENT)) {
	                this.content_ = child;
	            }
	        }
	        window.addEventListener('pageshow', function (e) {
	            if (e.persisted) {
	                // when page is loaded from back/forward cache
	                // trigger repaint to let layout scroll in safari
	                this.element_.style.overflowY = 'hidden';
	                requestAnimationFrame(function () {
	                    this.element_.style.overflowY = '';
	                }.bind(this));
	            }
	        }.bind(this), false);
	        if (this.header_) {
	            this.tabBar_ = this.header_.querySelector('.' + this.CssClasses_.TAB_BAR);
	        }
	        var mode = this.Mode_.STANDARD;
	        if (this.header_) {
	            if (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)) {
	                mode = this.Mode_.SEAMED;
	            } else if (this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)) {
	                mode = this.Mode_.WATERFALL;
	                this.header_.addEventListener('transitionend', this.headerTransitionEndHandler_.bind(this));
	                this.header_.addEventListener('click', this.headerClickHandler_.bind(this));
	            } else if (this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)) {
	                mode = this.Mode_.SCROLL;
	                container.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER);
	            }
	            if (mode === this.Mode_.STANDARD) {
	                this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
	                if (this.tabBar_) {
	                    this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW);
	                }
	            } else if (mode === this.Mode_.SEAMED || mode === this.Mode_.SCROLL) {
	                this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
	                if (this.tabBar_) {
	                    this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW);
	                }
	            } else if (mode === this.Mode_.WATERFALL) {
	                // Add and remove shadows depending on scroll position.
	                // Also add/remove auxiliary class for styling of the compact version of
	                // the header.
	                this.content_.addEventListener('scroll', this.contentScrollHandler_.bind(this));
	                this.contentScrollHandler_();
	            }
	        }
	        // Add drawer toggling button to our layout, if we have an openable drawer.
	        if (this.drawer_) {
	            var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);
	            if (!drawerButton) {
	                drawerButton = document.createElement('div');
	                drawerButton.setAttribute('aria-expanded', 'false');
	                drawerButton.setAttribute('role', 'button');
	                drawerButton.setAttribute('tabindex', '0');
	                drawerButton.classList.add(this.CssClasses_.DRAWER_BTN);
	                var drawerButtonIcon = document.createElement('i');
	                drawerButtonIcon.classList.add(this.CssClasses_.ICON);
	                drawerButtonIcon.innerHTML = this.Constant_.MENU_ICON;
	                drawerButton.appendChild(drawerButtonIcon);
	            }
	            if (this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)) {
	                //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.
	                drawerButton.classList.add(this.CssClasses_.ON_LARGE_SCREEN);
	            } else if (this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)) {
	                //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.
	                drawerButton.classList.add(this.CssClasses_.ON_SMALL_SCREEN);
	            }
	            drawerButton.addEventListener('click', this.drawerToggleHandler_.bind(this));
	            drawerButton.addEventListener('keydown', this.drawerToggleHandler_.bind(this));
	            // Add a class if the layout has a drawer, for altering the left padding.
	            // Adds the HAS_DRAWER to the elements since this.header_ may or may
	            // not be present.
	            this.element_.classList.add(this.CssClasses_.HAS_DRAWER);
	            // If we have a fixed header, add the button to the header rather than
	            // the layout.
	            if (this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)) {
	                this.header_.insertBefore(drawerButton, this.header_.firstChild);
	            } else {
	                this.element_.insertBefore(drawerButton, this.content_);
	            }
	            var obfuscator = document.createElement('div');
	            obfuscator.classList.add(this.CssClasses_.OBFUSCATOR);
	            this.element_.appendChild(obfuscator);
	            obfuscator.addEventListener('click', this.drawerToggleHandler_.bind(this));
	            this.obfuscator_ = obfuscator;
	            this.drawer_.addEventListener('keydown', this.keyboardEventHandler_.bind(this));
	            this.drawer_.setAttribute('aria-hidden', 'true');
	        }
	        // Keep an eye on screen size, and add/remove auxiliary class for styling
	        // of small screens.
	        this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);
	        this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));
	        this.screenSizeHandler_();
	        // Initialize tabs, if any.
	        if (this.header_ && this.tabBar_) {
	            this.element_.classList.add(this.CssClasses_.HAS_TABS);
	            var tabContainer = document.createElement('div');
	            tabContainer.classList.add(this.CssClasses_.TAB_CONTAINER);
	            this.header_.insertBefore(tabContainer, this.tabBar_);
	            this.header_.removeChild(this.tabBar_);
	            var leftButton = document.createElement('div');
	            leftButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
	            leftButton.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
	            var leftButtonIcon = document.createElement('i');
	            leftButtonIcon.classList.add(this.CssClasses_.ICON);
	            leftButtonIcon.textContent = this.Constant_.CHEVRON_LEFT;
	            leftButton.appendChild(leftButtonIcon);
	            leftButton.addEventListener('click', function () {
	                this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS;
	            }.bind(this));
	            var rightButton = document.createElement('div');
	            rightButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
	            rightButton.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
	            var rightButtonIcon = document.createElement('i');
	            rightButtonIcon.classList.add(this.CssClasses_.ICON);
	            rightButtonIcon.textContent = this.Constant_.CHEVRON_RIGHT;
	            rightButton.appendChild(rightButtonIcon);
	            rightButton.addEventListener('click', function () {
	                this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS;
	            }.bind(this));
	            tabContainer.appendChild(leftButton);
	            tabContainer.appendChild(this.tabBar_);
	            tabContainer.appendChild(rightButton);
	            // Add and remove tab buttons depending on scroll position and total
	            // window size.
	            var tabUpdateHandler = function () {
	                if (this.tabBar_.scrollLeft > 0) {
	                    leftButton.classList.add(this.CssClasses_.IS_ACTIVE);
	                } else {
	                    leftButton.classList.remove(this.CssClasses_.IS_ACTIVE);
	                }
	                if (this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth) {
	                    rightButton.classList.add(this.CssClasses_.IS_ACTIVE);
	                } else {
	                    rightButton.classList.remove(this.CssClasses_.IS_ACTIVE);
	                }
	            }.bind(this);
	            this.tabBar_.addEventListener('scroll', tabUpdateHandler);
	            tabUpdateHandler();
	            // Update tabs when the window resizes.
	            var windowResizeHandler = function () {
	                // Use timeouts to make sure it doesn't happen too often.
	                if (this.resizeTimeoutId_) {
	                    clearTimeout(this.resizeTimeoutId_);
	                }
	                this.resizeTimeoutId_ = setTimeout(function () {
	                    tabUpdateHandler();
	                    this.resizeTimeoutId_ = null;
	                }.bind(this), this.Constant_.RESIZE_TIMEOUT);
	            }.bind(this);
	            window.addEventListener('resize', windowResizeHandler);
	            if (this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
	                this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
	            }
	            // Select element tabs, document panels
	            var tabs = this.tabBar_.querySelectorAll('.' + this.CssClasses_.TAB);
	            var panels = this.content_.querySelectorAll('.' + this.CssClasses_.PANEL);
	            // Create new tabs for each tab element
	            for (var i = 0; i < tabs.length; i++) {
	                new MaterialLayoutTab(tabs[i], tabs, panels, this);
	            }
	        }
	        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	    }
	};
	/**
	   * Constructor for an individual tab.
	   *
	   * @constructor
	   * @param {HTMLElement} tab The HTML element for the tab.
	   * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.
	   * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.
	   * @param {MaterialLayout} layout The MaterialLayout object that owns the tab.
	   */
	function MaterialLayoutTab(tab, tabs, panels, layout) {
	    /**
	     * Auxiliary method to programmatically select a tab in the UI.
	     */
	    function selectTab() {
	        var href = tab.href.split('#')[1];
	        var panel = layout.content_.querySelector('#' + href);
	        layout.resetTabState_(tabs);
	        layout.resetPanelState_(panels);
	        tab.classList.add(layout.CssClasses_.IS_ACTIVE);
	        panel.classList.add(layout.CssClasses_.IS_ACTIVE);
	    }
	    if (layout.tabBar_.classList.contains(layout.CssClasses_.JS_RIPPLE_EFFECT)) {
	        var rippleContainer = document.createElement('span');
	        rippleContainer.classList.add(layout.CssClasses_.RIPPLE_CONTAINER);
	        rippleContainer.classList.add(layout.CssClasses_.JS_RIPPLE_EFFECT);
	        var ripple = document.createElement('span');
	        ripple.classList.add(layout.CssClasses_.RIPPLE);
	        rippleContainer.appendChild(ripple);
	        tab.appendChild(rippleContainer);
	    }
	    tab.addEventListener('click', function (e) {
	        if (tab.getAttribute('href').charAt(0) === '#') {
	            e.preventDefault();
	            selectTab();
	        }
	    });
	    tab.show = selectTab;
	}
	window['MaterialLayoutTab'] = MaterialLayoutTab;
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialLayout,
	    classAsString: 'MaterialLayout',
	    cssClass: 'mdl-js-layout'
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Data Table Card MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {Element} element The element that will be upgraded.
	   */
	var MaterialDataTable = function MaterialDataTable(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialDataTable'] = MaterialDataTable;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialDataTable.prototype.Constant_ = {};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialDataTable.prototype.CssClasses_ = {
	    DATA_TABLE: 'mdl-data-table',
	    SELECTABLE: 'mdl-data-table--selectable',
	    SELECT_ELEMENT: 'mdl-data-table__select',
	    IS_SELECTED: 'is-selected',
	    IS_UPGRADED: 'is-upgraded'
	};
	/**
	   * Generates and returns a function that toggles the selection state of a
	   * single row (or multiple rows).
	   *
	   * @param {Element} checkbox Checkbox that toggles the selection state.
	   * @param {Element} row Row to toggle when checkbox changes.
	   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
	   * @private
	   */
	MaterialDataTable.prototype.selectRow_ = function (checkbox, row, opt_rows) {
	    if (row) {
	        return function () {
	            if (checkbox.checked) {
	                row.classList.add(this.CssClasses_.IS_SELECTED);
	            } else {
	                row.classList.remove(this.CssClasses_.IS_SELECTED);
	            }
	        }.bind(this);
	    }
	    if (opt_rows) {
	        return function () {
	            var i;
	            var el;
	            if (checkbox.checked) {
	                for (i = 0; i < opt_rows.length; i++) {
	                    el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
	                    el['MaterialCheckbox'].check();
	                    opt_rows[i].classList.add(this.CssClasses_.IS_SELECTED);
	                }
	            } else {
	                for (i = 0; i < opt_rows.length; i++) {
	                    el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
	                    el['MaterialCheckbox'].uncheck();
	                    opt_rows[i].classList.remove(this.CssClasses_.IS_SELECTED);
	                }
	            }
	        }.bind(this);
	    }
	};
	/**
	   * Creates a checkbox for a single or or multiple rows and hooks up the
	   * event handling.
	   *
	   * @param {Element} row Row to toggle when checkbox changes.
	   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
	   * @private
	   */
	MaterialDataTable.prototype.createCheckbox_ = function (row, opt_rows) {
	    var label = document.createElement('label');
	    var labelClasses = [
	        'mdl-checkbox',
	        'mdl-js-checkbox',
	        'mdl-js-ripple-effect',
	        this.CssClasses_.SELECT_ELEMENT
	    ];
	    label.className = labelClasses.join(' ');
	    var checkbox = document.createElement('input');
	    checkbox.type = 'checkbox';
	    checkbox.classList.add('mdl-checkbox__input');
	    if (row) {
	        checkbox.checked = row.classList.contains(this.CssClasses_.IS_SELECTED);
	        checkbox.addEventListener('change', this.selectRow_(checkbox, row));
	    } else if (opt_rows) {
	        checkbox.addEventListener('change', this.selectRow_(checkbox, null, opt_rows));
	    }
	    label.appendChild(checkbox);
	    componentHandler.upgradeElement(label, 'MaterialCheckbox');
	    return label;
	};
	/**
	   * Initialize element.
	   */
	MaterialDataTable.prototype.init = function () {
	    if (this.element_) {
	        var firstHeader = this.element_.querySelector('th');
	        var bodyRows = Array.prototype.slice.call(this.element_.querySelectorAll('tbody tr'));
	        var footRows = Array.prototype.slice.call(this.element_.querySelectorAll('tfoot tr'));
	        var rows = bodyRows.concat(footRows);
	        if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
	            var th = document.createElement('th');
	            var headerCheckbox = this.createCheckbox_(null, rows);
	            th.appendChild(headerCheckbox);
	            firstHeader.parentElement.insertBefore(th, firstHeader);
	            for (var i = 0; i < rows.length; i++) {
	                var firstCell = rows[i].querySelector('td');
	                if (firstCell) {
	                    var td = document.createElement('td');
	                    if (rows[i].parentNode.nodeName.toUpperCase() === 'TBODY') {
	                        var rowCheckbox = this.createCheckbox_(rows[i]);
	                        td.appendChild(rowCheckbox);
	                    }
	                    rows[i].insertBefore(td, firstCell);
	                }
	            }
	            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
	        }
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialDataTable,
	    classAsString: 'MaterialDataTable',
	    cssClass: 'mdl-js-data-table'
	});
	/**
	 * @license
	 * Copyright 2015 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	   * Class constructor for Ripple MDL component.
	   * Implements MDL component design pattern defined at:
	   * https://github.com/jasonmayes/mdl-component-design-pattern
	   *
	   * @constructor
	   * @param {HTMLElement} element The element that will be upgraded.
	   */
	var MaterialRipple = function MaterialRipple(element) {
	    this.element_ = element;
	    // Initialize instance.
	    this.init();
	};
	window['MaterialRipple'] = MaterialRipple;
	/**
	   * Store constants in one place so they can be updated easily.
	   *
	   * @enum {string | number}
	   * @private
	   */
	MaterialRipple.prototype.Constant_ = {
	    INITIAL_SCALE: 'scale(0.0001, 0.0001)',
	    INITIAL_SIZE: '1px',
	    INITIAL_OPACITY: '0.4',
	    FINAL_OPACITY: '0',
	    FINAL_SCALE: ''
	};
	/**
	   * Store strings for class names defined by this component that are used in
	   * JavaScript. This allows us to simply change it in one place should we
	   * decide to modify at a later date.
	   *
	   * @enum {string}
	   * @private
	   */
	MaterialRipple.prototype.CssClasses_ = {
	    RIPPLE_CENTER: 'mdl-ripple--center',
	    RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
	    RIPPLE: 'mdl-ripple',
	    IS_ANIMATING: 'is-animating',
	    IS_VISIBLE: 'is-visible'
	};
	/**
	   * Handle mouse / finger down on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialRipple.prototype.downHandler_ = function (event) {
	    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
	        var rect = this.element_.getBoundingClientRect();
	        this.boundHeight = rect.height;
	        this.boundWidth = rect.width;
	        this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
	        this.rippleElement_.style.width = this.rippleSize_ + 'px';
	        this.rippleElement_.style.height = this.rippleSize_ + 'px';
	    }
	    this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);
	    if (event.type === 'mousedown' && this.ignoringMouseDown_) {
	        this.ignoringMouseDown_ = false;
	    } else {
	        if (event.type === 'touchstart') {
	            this.ignoringMouseDown_ = true;
	        }
	        var frameCount = this.getFrameCount();
	        if (frameCount > 0) {
	            return;
	        }
	        this.setFrameCount(1);
	        var bound = event.currentTarget.getBoundingClientRect();
	        var x;
	        var y;
	        // Check if we are handling a keyboard click.
	        if (event.clientX === 0 && event.clientY === 0) {
	            x = Math.round(bound.width / 2);
	            y = Math.round(bound.height / 2);
	        } else {
	            var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
	            var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
	            x = Math.round(clientX - bound.left);
	            y = Math.round(clientY - bound.top);
	        }
	        this.setRippleXY(x, y);
	        this.setRippleStyles(true);
	        window.requestAnimationFrame(this.animFrameHandler.bind(this));
	    }
	};
	/**
	   * Handle mouse / finger up on element.
	   *
	   * @param {Event} event The event that fired.
	   * @private
	   */
	MaterialRipple.prototype.upHandler_ = function (event) {
	    // Don't fire for the artificial "mouseup" generated by a double-click.
	    if (event && event.detail !== 2) {
	        // Allow a repaint to occur before removing this class, so the animation
	        // shows for tap events, which seem to trigger a mouseup too soon after
	        // mousedown.
	        window.setTimeout(function () {
	            this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
	        }.bind(this), 0);
	    }
	};
	/**
	   * Initialize element.
	   */
	MaterialRipple.prototype.init = function () {
	    if (this.element_) {
	        var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
	        if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {
	            this.rippleElement_ = this.element_.querySelector('.' + this.CssClasses_.RIPPLE);
	            this.frameCount_ = 0;
	            this.rippleSize_ = 0;
	            this.x_ = 0;
	            this.y_ = 0;
	            // Touch start produces a compat mouse down event, which would cause a
	            // second ripples. To avoid that, we use this property to ignore the first
	            // mouse down after a touch start.
	            this.ignoringMouseDown_ = false;
	            this.boundDownHandler = this.downHandler_.bind(this);
	            this.element_.addEventListener('mousedown', this.boundDownHandler);
	            this.element_.addEventListener('touchstart', this.boundDownHandler);
	            this.boundUpHandler = this.upHandler_.bind(this);
	            this.element_.addEventListener('mouseup', this.boundUpHandler);
	            this.element_.addEventListener('mouseleave', this.boundUpHandler);
	            this.element_.addEventListener('touchend', this.boundUpHandler);
	            this.element_.addEventListener('blur', this.boundUpHandler);
	            /**
	         * Getter for frameCount_.
	         * @return {number} the frame count.
	         */
	            this.getFrameCount = function () {
	                return this.frameCount_;
	            };
	            /**
	         * Setter for frameCount_.
	         * @param {number} fC the frame count.
	         */
	            this.setFrameCount = function (fC) {
	                this.frameCount_ = fC;
	            };
	            /**
	         * Getter for rippleElement_.
	         * @return {Element} the ripple element.
	         */
	            this.getRippleElement = function () {
	                return this.rippleElement_;
	            };
	            /**
	         * Sets the ripple X and Y coordinates.
	         * @param  {number} newX the new X coordinate
	         * @param  {number} newY the new Y coordinate
	         */
	            this.setRippleXY = function (newX, newY) {
	                this.x_ = newX;
	                this.y_ = newY;
	            };
	            /**
	         * Sets the ripple styles.
	         * @param  {boolean} start whether or not this is the start frame.
	         */
	            this.setRippleStyles = function (start) {
	                if (this.rippleElement_ !== null) {
	                    var transformString;
	                    var scale;
	                    var size;
	                    var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';
	                    if (start) {
	                        scale = this.Constant_.INITIAL_SCALE;
	                        size = this.Constant_.INITIAL_SIZE;
	                    } else {
	                        scale = this.Constant_.FINAL_SCALE;
	                        size = this.rippleSize_ + 'px';
	                        if (recentering) {
	                            offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
	                        }
	                    }
	                    transformString = 'translate(-50%, -50%) ' + offset + scale;
	                    this.rippleElement_.style.webkitTransform = transformString;
	                    this.rippleElement_.style.msTransform = transformString;
	                    this.rippleElement_.style.transform = transformString;
	                    if (start) {
	                        this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING);
	                    } else {
	                        this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);
	                    }
	                }
	            };
	            /**
	         * Handles an animation frame.
	         */
	            this.animFrameHandler = function () {
	                if (this.frameCount_-- > 0) {
	                    window.requestAnimationFrame(this.animFrameHandler.bind(this));
	                } else {
	                    this.setRippleStyles(false);
	                }
	            };
	        }
	    }
	};
	// The component registers itself. It can assume componentHandler is available
	// in the global scope.
	componentHandler.register({
	    constructor: MaterialRipple,
	    classAsString: 'MaterialRipple',
	    cssClass: 'mdl-js-ripple-effect',
	    widget: false
	});
	}());


	/*** EXPORTS FROM exports-loader ***/
	exports["mdl"] = (componentHandler);

/***/ },

/***/ 719:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"browserupgrade":"browserupgrade","hidden":"hidden","visuallyhidden":"visuallyhidden","focusable":"focusable","invisible":"invisible","clearfix":"clearfix","mdl-accordion":"mdl-accordion","mdl-button":"mdl-button","mdl-card":"mdl-card","mdl-checkbox":"mdl-checkbox","mdl-dropdown-menu":"mdl-dropdown-menu","mdl-icon-toggle":"mdl-icon-toggle","mdl-item":"mdl-item","mdl-radio":"mdl-radio","mdl-slider":"mdl-slider","mdl-switch":"mdl-switch","mdl-tabs__tab":"mdl-tabs__tab","mdl-typography--display-4":"mdl-typography--display-4","mdl-typography--display-4-color-contrast":"mdl-typography--display-4-color-contrast","mdl-typography--display-3":"mdl-typography--display-3","mdl-typography--display-3-color-contrast":"mdl-typography--display-3-color-contrast","mdl-typography--display-2":"mdl-typography--display-2","mdl-typography--display-2-color-contrast":"mdl-typography--display-2-color-contrast","mdl-typography--display-1":"mdl-typography--display-1","mdl-typography--display-1-color-contrast":"mdl-typography--display-1-color-contrast","mdl-typography--headline":"mdl-typography--headline","mdl-typography--headline-color-contrast":"mdl-typography--headline-color-contrast","mdl-typography--title":"mdl-typography--title","mdl-typography--title-color-contrast":"mdl-typography--title-color-contrast","mdl-typography--subhead":"mdl-typography--subhead","mdl-typography--subhead-color-contrast":"mdl-typography--subhead-color-contrast","mdl-typography--body-2":"mdl-typography--body-2","mdl-typography--body-2-color-contrast":"mdl-typography--body-2-color-contrast","mdl-typography--body-1":"mdl-typography--body-1","mdl-typography--body-1-color-contrast":"mdl-typography--body-1-color-contrast","mdl-typography--body-2-force-preferred-font":"mdl-typography--body-2-force-preferred-font","mdl-typography--body-2-force-preferred-font-color-contrast":"mdl-typography--body-2-force-preferred-font-color-contrast","mdl-typography--body-1-force-preferred-font":"mdl-typography--body-1-force-preferred-font","mdl-typography--body-1-force-preferred-font-color-contrast":"mdl-typography--body-1-force-preferred-font-color-contrast","mdl-typography--caption":"mdl-typography--caption","mdl-typography--caption-force-preferred-font":"mdl-typography--caption-force-preferred-font","mdl-typography--caption-color-contrast":"mdl-typography--caption-color-contrast","mdl-typography--caption-force-preferred-font-color-contrast":"mdl-typography--caption-force-preferred-font-color-contrast","mdl-typography--menu":"mdl-typography--menu","mdl-typography--menu-color-contrast":"mdl-typography--menu-color-contrast","mdl-typography--button":"mdl-typography--button","mdl-typography--button-color-contrast":"mdl-typography--button-color-contrast","mdl-typography--text-left":"mdl-typography--text-left","mdl-typography--text-right":"mdl-typography--text-right","mdl-typography--text-center":"mdl-typography--text-center","mdl-typography--text-justify":"mdl-typography--text-justify","mdl-typography--text-nowrap":"mdl-typography--text-nowrap","mdl-typography--text-lowercase":"mdl-typography--text-lowercase","mdl-typography--text-uppercase":"mdl-typography--text-uppercase","mdl-typography--text-capitalize":"mdl-typography--text-capitalize","mdl-typography--font-thin":"mdl-typography--font-thin","mdl-typography--font-light":"mdl-typography--font-light","mdl-typography--font-regular":"mdl-typography--font-regular","mdl-typography--font-medium":"mdl-typography--font-medium","mdl-typography--font-bold":"mdl-typography--font-bold","mdl-typography--font-black":"mdl-typography--font-black","material-icons":"material-icons","mdl-color-text--red":"mdl-color-text--red","mdl-color--red":"mdl-color--red","mdl-color-text--red-50":"mdl-color-text--red-50","mdl-color--red-50":"mdl-color--red-50","mdl-color-text--red-100":"mdl-color-text--red-100","mdl-color--red-100":"mdl-color--red-100","mdl-color-text--red-200":"mdl-color-text--red-200","mdl-color--red-200":"mdl-color--red-200","mdl-color-text--red-300":"mdl-color-text--red-300","mdl-color--red-300":"mdl-color--red-300","mdl-color-text--red-400":"mdl-color-text--red-400","mdl-color--red-400":"mdl-color--red-400","mdl-color-text--red-500":"mdl-color-text--red-500","mdl-color--red-500":"mdl-color--red-500","mdl-color-text--red-600":"mdl-color-text--red-600","mdl-color--red-600":"mdl-color--red-600","mdl-color-text--red-700":"mdl-color-text--red-700","mdl-color--red-700":"mdl-color--red-700","mdl-color-text--red-800":"mdl-color-text--red-800","mdl-color--red-800":"mdl-color--red-800","mdl-color-text--red-900":"mdl-color-text--red-900","mdl-color--red-900":"mdl-color--red-900","mdl-color-text--red-A100":"mdl-color-text--red-A100","mdl-color--red-A100":"mdl-color--red-A100","mdl-color-text--red-A200":"mdl-color-text--red-A200","mdl-color--red-A200":"mdl-color--red-A200","mdl-color-text--red-A400":"mdl-color-text--red-A400","mdl-color--red-A400":"mdl-color--red-A400","mdl-color-text--red-A700":"mdl-color-text--red-A700","mdl-color--red-A700":"mdl-color--red-A700","mdl-color-text--pink":"mdl-color-text--pink","mdl-color--pink":"mdl-color--pink","mdl-color-text--pink-50":"mdl-color-text--pink-50","mdl-color--pink-50":"mdl-color--pink-50","mdl-color-text--pink-100":"mdl-color-text--pink-100","mdl-color--pink-100":"mdl-color--pink-100","mdl-color-text--pink-200":"mdl-color-text--pink-200","mdl-color--pink-200":"mdl-color--pink-200","mdl-color-text--pink-300":"mdl-color-text--pink-300","mdl-color--pink-300":"mdl-color--pink-300","mdl-color-text--pink-400":"mdl-color-text--pink-400","mdl-color--pink-400":"mdl-color--pink-400","mdl-color-text--pink-500":"mdl-color-text--pink-500","mdl-color--pink-500":"mdl-color--pink-500","mdl-color-text--pink-600":"mdl-color-text--pink-600","mdl-color--pink-600":"mdl-color--pink-600","mdl-color-text--pink-700":"mdl-color-text--pink-700","mdl-color--pink-700":"mdl-color--pink-700","mdl-color-text--pink-800":"mdl-color-text--pink-800","mdl-color--pink-800":"mdl-color--pink-800","mdl-color-text--pink-900":"mdl-color-text--pink-900","mdl-color--pink-900":"mdl-color--pink-900","mdl-color-text--pink-A100":"mdl-color-text--pink-A100","mdl-color--pink-A100":"mdl-color--pink-A100","mdl-color-text--pink-A200":"mdl-color-text--pink-A200","mdl-color--pink-A200":"mdl-color--pink-A200","mdl-color-text--pink-A400":"mdl-color-text--pink-A400","mdl-color--pink-A400":"mdl-color--pink-A400","mdl-color-text--pink-A700":"mdl-color-text--pink-A700","mdl-color--pink-A700":"mdl-color--pink-A700","mdl-color-text--purple":"mdl-color-text--purple","mdl-color--purple":"mdl-color--purple","mdl-color-text--purple-50":"mdl-color-text--purple-50","mdl-color--purple-50":"mdl-color--purple-50","mdl-color-text--purple-100":"mdl-color-text--purple-100","mdl-color--purple-100":"mdl-color--purple-100","mdl-color-text--purple-200":"mdl-color-text--purple-200","mdl-color--purple-200":"mdl-color--purple-200","mdl-color-text--purple-300":"mdl-color-text--purple-300","mdl-color--purple-300":"mdl-color--purple-300","mdl-color-text--purple-400":"mdl-color-text--purple-400","mdl-color--purple-400":"mdl-color--purple-400","mdl-color-text--purple-500":"mdl-color-text--purple-500","mdl-color--purple-500":"mdl-color--purple-500","mdl-color-text--purple-600":"mdl-color-text--purple-600","mdl-color--purple-600":"mdl-color--purple-600","mdl-color-text--purple-700":"mdl-color-text--purple-700","mdl-color--purple-700":"mdl-color--purple-700","mdl-color-text--purple-800":"mdl-color-text--purple-800","mdl-color--purple-800":"mdl-color--purple-800","mdl-color-text--purple-900":"mdl-color-text--purple-900","mdl-color--purple-900":"mdl-color--purple-900","mdl-color-text--purple-A100":"mdl-color-text--purple-A100","mdl-color--purple-A100":"mdl-color--purple-A100","mdl-color-text--purple-A200":"mdl-color-text--purple-A200","mdl-color--purple-A200":"mdl-color--purple-A200","mdl-color-text--purple-A400":"mdl-color-text--purple-A400","mdl-color--purple-A400":"mdl-color--purple-A400","mdl-color-text--purple-A700":"mdl-color-text--purple-A700","mdl-color--purple-A700":"mdl-color--purple-A700","mdl-color-text--deep-purple":"mdl-color-text--deep-purple","mdl-color--deep-purple":"mdl-color--deep-purple","mdl-color-text--deep-purple-50":"mdl-color-text--deep-purple-50","mdl-color--deep-purple-50":"mdl-color--deep-purple-50","mdl-color-text--deep-purple-100":"mdl-color-text--deep-purple-100","mdl-color--deep-purple-100":"mdl-color--deep-purple-100","mdl-color-text--deep-purple-200":"mdl-color-text--deep-purple-200","mdl-color--deep-purple-200":"mdl-color--deep-purple-200","mdl-color-text--deep-purple-300":"mdl-color-text--deep-purple-300","mdl-color--deep-purple-300":"mdl-color--deep-purple-300","mdl-color-text--deep-purple-400":"mdl-color-text--deep-purple-400","mdl-color--deep-purple-400":"mdl-color--deep-purple-400","mdl-color-text--deep-purple-500":"mdl-color-text--deep-purple-500","mdl-color--deep-purple-500":"mdl-color--deep-purple-500","mdl-color-text--deep-purple-600":"mdl-color-text--deep-purple-600","mdl-color--deep-purple-600":"mdl-color--deep-purple-600","mdl-color-text--deep-purple-700":"mdl-color-text--deep-purple-700","mdl-color--deep-purple-700":"mdl-color--deep-purple-700","mdl-color-text--deep-purple-800":"mdl-color-text--deep-purple-800","mdl-color--deep-purple-800":"mdl-color--deep-purple-800","mdl-color-text--deep-purple-900":"mdl-color-text--deep-purple-900","mdl-color--deep-purple-900":"mdl-color--deep-purple-900","mdl-color-text--deep-purple-A100":"mdl-color-text--deep-purple-A100","mdl-color--deep-purple-A100":"mdl-color--deep-purple-A100","mdl-color-text--deep-purple-A200":"mdl-color-text--deep-purple-A200","mdl-color--deep-purple-A200":"mdl-color--deep-purple-A200","mdl-color-text--deep-purple-A400":"mdl-color-text--deep-purple-A400","mdl-color--deep-purple-A400":"mdl-color--deep-purple-A400","mdl-color-text--deep-purple-A700":"mdl-color-text--deep-purple-A700","mdl-color--deep-purple-A700":"mdl-color--deep-purple-A700","mdl-color-text--indigo":"mdl-color-text--indigo","mdl-color--indigo":"mdl-color--indigo","mdl-color-text--indigo-50":"mdl-color-text--indigo-50","mdl-color--indigo-50":"mdl-color--indigo-50","mdl-color-text--indigo-100":"mdl-color-text--indigo-100","mdl-color--indigo-100":"mdl-color--indigo-100","mdl-color-text--indigo-200":"mdl-color-text--indigo-200","mdl-color--indigo-200":"mdl-color--indigo-200","mdl-color-text--indigo-300":"mdl-color-text--indigo-300","mdl-color--indigo-300":"mdl-color--indigo-300","mdl-color-text--indigo-400":"mdl-color-text--indigo-400","mdl-color--indigo-400":"mdl-color--indigo-400","mdl-color-text--indigo-500":"mdl-color-text--indigo-500","mdl-color--indigo-500":"mdl-color--indigo-500","mdl-color-text--indigo-600":"mdl-color-text--indigo-600","mdl-color--indigo-600":"mdl-color--indigo-600","mdl-color-text--indigo-700":"mdl-color-text--indigo-700","mdl-color--indigo-700":"mdl-color--indigo-700","mdl-color-text--indigo-800":"mdl-color-text--indigo-800","mdl-color--indigo-800":"mdl-color--indigo-800","mdl-color-text--indigo-900":"mdl-color-text--indigo-900","mdl-color--indigo-900":"mdl-color--indigo-900","mdl-color-text--indigo-A100":"mdl-color-text--indigo-A100","mdl-color--indigo-A100":"mdl-color--indigo-A100","mdl-color-text--indigo-A200":"mdl-color-text--indigo-A200","mdl-color--indigo-A200":"mdl-color--indigo-A200","mdl-color-text--indigo-A400":"mdl-color-text--indigo-A400","mdl-color--indigo-A400":"mdl-color--indigo-A400","mdl-color-text--indigo-A700":"mdl-color-text--indigo-A700","mdl-color--indigo-A700":"mdl-color--indigo-A700","mdl-color-text--blue":"mdl-color-text--blue","mdl-color--blue":"mdl-color--blue","mdl-color-text--blue-50":"mdl-color-text--blue-50","mdl-color--blue-50":"mdl-color--blue-50","mdl-color-text--blue-100":"mdl-color-text--blue-100","mdl-color--blue-100":"mdl-color--blue-100","mdl-color-text--blue-200":"mdl-color-text--blue-200","mdl-color--blue-200":"mdl-color--blue-200","mdl-color-text--blue-300":"mdl-color-text--blue-300","mdl-color--blue-300":"mdl-color--blue-300","mdl-color-text--blue-400":"mdl-color-text--blue-400","mdl-color--blue-400":"mdl-color--blue-400","mdl-color-text--blue-500":"mdl-color-text--blue-500","mdl-color--blue-500":"mdl-color--blue-500","mdl-color-text--blue-600":"mdl-color-text--blue-600","mdl-color--blue-600":"mdl-color--blue-600","mdl-color-text--blue-700":"mdl-color-text--blue-700","mdl-color--blue-700":"mdl-color--blue-700","mdl-color-text--blue-800":"mdl-color-text--blue-800","mdl-color--blue-800":"mdl-color--blue-800","mdl-color-text--blue-900":"mdl-color-text--blue-900","mdl-color--blue-900":"mdl-color--blue-900","mdl-color-text--blue-A100":"mdl-color-text--blue-A100","mdl-color--blue-A100":"mdl-color--blue-A100","mdl-color-text--blue-A200":"mdl-color-text--blue-A200","mdl-color--blue-A200":"mdl-color--blue-A200","mdl-color-text--blue-A400":"mdl-color-text--blue-A400","mdl-color--blue-A400":"mdl-color--blue-A400","mdl-color-text--blue-A700":"mdl-color-text--blue-A700","mdl-color--blue-A700":"mdl-color--blue-A700","mdl-color-text--light-blue":"mdl-color-text--light-blue","mdl-color--light-blue":"mdl-color--light-blue","mdl-color-text--light-blue-50":"mdl-color-text--light-blue-50","mdl-color--light-blue-50":"mdl-color--light-blue-50","mdl-color-text--light-blue-100":"mdl-color-text--light-blue-100","mdl-color--light-blue-100":"mdl-color--light-blue-100","mdl-color-text--light-blue-200":"mdl-color-text--light-blue-200","mdl-color--light-blue-200":"mdl-color--light-blue-200","mdl-color-text--light-blue-300":"mdl-color-text--light-blue-300","mdl-color--light-blue-300":"mdl-color--light-blue-300","mdl-color-text--light-blue-400":"mdl-color-text--light-blue-400","mdl-color--light-blue-400":"mdl-color--light-blue-400","mdl-color-text--light-blue-500":"mdl-color-text--light-blue-500","mdl-color--light-blue-500":"mdl-color--light-blue-500","mdl-color-text--light-blue-600":"mdl-color-text--light-blue-600","mdl-color--light-blue-600":"mdl-color--light-blue-600","mdl-color-text--light-blue-700":"mdl-color-text--light-blue-700","mdl-color--light-blue-700":"mdl-color--light-blue-700","mdl-color-text--light-blue-800":"mdl-color-text--light-blue-800","mdl-color--light-blue-800":"mdl-color--light-blue-800","mdl-color-text--light-blue-900":"mdl-color-text--light-blue-900","mdl-color--light-blue-900":"mdl-color--light-blue-900","mdl-color-text--light-blue-A100":"mdl-color-text--light-blue-A100","mdl-color--light-blue-A100":"mdl-color--light-blue-A100","mdl-color-text--light-blue-A200":"mdl-color-text--light-blue-A200","mdl-color--light-blue-A200":"mdl-color--light-blue-A200","mdl-color-text--light-blue-A400":"mdl-color-text--light-blue-A400","mdl-color--light-blue-A400":"mdl-color--light-blue-A400","mdl-color-text--light-blue-A700":"mdl-color-text--light-blue-A700","mdl-color--light-blue-A700":"mdl-color--light-blue-A700","mdl-color-text--cyan":"mdl-color-text--cyan","mdl-color--cyan":"mdl-color--cyan","mdl-color-text--cyan-50":"mdl-color-text--cyan-50","mdl-color--cyan-50":"mdl-color--cyan-50","mdl-color-text--cyan-100":"mdl-color-text--cyan-100","mdl-color--cyan-100":"mdl-color--cyan-100","mdl-color-text--cyan-200":"mdl-color-text--cyan-200","mdl-color--cyan-200":"mdl-color--cyan-200","mdl-color-text--cyan-300":"mdl-color-text--cyan-300","mdl-color--cyan-300":"mdl-color--cyan-300","mdl-color-text--cyan-400":"mdl-color-text--cyan-400","mdl-color--cyan-400":"mdl-color--cyan-400","mdl-color-text--cyan-500":"mdl-color-text--cyan-500","mdl-color--cyan-500":"mdl-color--cyan-500","mdl-color-text--cyan-600":"mdl-color-text--cyan-600","mdl-color--cyan-600":"mdl-color--cyan-600","mdl-color-text--cyan-700":"mdl-color-text--cyan-700","mdl-color--cyan-700":"mdl-color--cyan-700","mdl-color-text--cyan-800":"mdl-color-text--cyan-800","mdl-color--cyan-800":"mdl-color--cyan-800","mdl-color-text--cyan-900":"mdl-color-text--cyan-900","mdl-color--cyan-900":"mdl-color--cyan-900","mdl-color-text--cyan-A100":"mdl-color-text--cyan-A100","mdl-color--cyan-A100":"mdl-color--cyan-A100","mdl-color-text--cyan-A200":"mdl-color-text--cyan-A200","mdl-color--cyan-A200":"mdl-color--cyan-A200","mdl-color-text--cyan-A400":"mdl-color-text--cyan-A400","mdl-color--cyan-A400":"mdl-color--cyan-A400","mdl-color-text--cyan-A700":"mdl-color-text--cyan-A700","mdl-color--cyan-A700":"mdl-color--cyan-A700","mdl-color-text--teal":"mdl-color-text--teal","mdl-color--teal":"mdl-color--teal","mdl-color-text--teal-50":"mdl-color-text--teal-50","mdl-color--teal-50":"mdl-color--teal-50","mdl-color-text--teal-100":"mdl-color-text--teal-100","mdl-color--teal-100":"mdl-color--teal-100","mdl-color-text--teal-200":"mdl-color-text--teal-200","mdl-color--teal-200":"mdl-color--teal-200","mdl-color-text--teal-300":"mdl-color-text--teal-300","mdl-color--teal-300":"mdl-color--teal-300","mdl-color-text--teal-400":"mdl-color-text--teal-400","mdl-color--teal-400":"mdl-color--teal-400","mdl-color-text--teal-500":"mdl-color-text--teal-500","mdl-color--teal-500":"mdl-color--teal-500","mdl-color-text--teal-600":"mdl-color-text--teal-600","mdl-color--teal-600":"mdl-color--teal-600","mdl-color-text--teal-700":"mdl-color-text--teal-700","mdl-color--teal-700":"mdl-color--teal-700","mdl-color-text--teal-800":"mdl-color-text--teal-800","mdl-color--teal-800":"mdl-color--teal-800","mdl-color-text--teal-900":"mdl-color-text--teal-900","mdl-color--teal-900":"mdl-color--teal-900","mdl-color-text--teal-A100":"mdl-color-text--teal-A100","mdl-color--teal-A100":"mdl-color--teal-A100","mdl-color-text--teal-A200":"mdl-color-text--teal-A200","mdl-color--teal-A200":"mdl-color--teal-A200","mdl-color-text--teal-A400":"mdl-color-text--teal-A400","mdl-color--teal-A400":"mdl-color--teal-A400","mdl-color-text--teal-A700":"mdl-color-text--teal-A700","mdl-color--teal-A700":"mdl-color--teal-A700","mdl-color-text--green":"mdl-color-text--green","mdl-color--green":"mdl-color--green","mdl-color-text--green-50":"mdl-color-text--green-50","mdl-color--green-50":"mdl-color--green-50","mdl-color-text--green-100":"mdl-color-text--green-100","mdl-color--green-100":"mdl-color--green-100","mdl-color-text--green-200":"mdl-color-text--green-200","mdl-color--green-200":"mdl-color--green-200","mdl-color-text--green-300":"mdl-color-text--green-300","mdl-color--green-300":"mdl-color--green-300","mdl-color-text--green-400":"mdl-color-text--green-400","mdl-color--green-400":"mdl-color--green-400","mdl-color-text--green-500":"mdl-color-text--green-500","mdl-color--green-500":"mdl-color--green-500","mdl-color-text--green-600":"mdl-color-text--green-600","mdl-color--green-600":"mdl-color--green-600","mdl-color-text--green-700":"mdl-color-text--green-700","mdl-color--green-700":"mdl-color--green-700","mdl-color-text--green-800":"mdl-color-text--green-800","mdl-color--green-800":"mdl-color--green-800","mdl-color-text--green-900":"mdl-color-text--green-900","mdl-color--green-900":"mdl-color--green-900","mdl-color-text--green-A100":"mdl-color-text--green-A100","mdl-color--green-A100":"mdl-color--green-A100","mdl-color-text--green-A200":"mdl-color-text--green-A200","mdl-color--green-A200":"mdl-color--green-A200","mdl-color-text--green-A400":"mdl-color-text--green-A400","mdl-color--green-A400":"mdl-color--green-A400","mdl-color-text--green-A700":"mdl-color-text--green-A700","mdl-color--green-A700":"mdl-color--green-A700","mdl-color-text--light-green":"mdl-color-text--light-green","mdl-color--light-green":"mdl-color--light-green","mdl-color-text--light-green-50":"mdl-color-text--light-green-50","mdl-color--light-green-50":"mdl-color--light-green-50","mdl-color-text--light-green-100":"mdl-color-text--light-green-100","mdl-color--light-green-100":"mdl-color--light-green-100","mdl-color-text--light-green-200":"mdl-color-text--light-green-200","mdl-color--light-green-200":"mdl-color--light-green-200","mdl-color-text--light-green-300":"mdl-color-text--light-green-300","mdl-color--light-green-300":"mdl-color--light-green-300","mdl-color-text--light-green-400":"mdl-color-text--light-green-400","mdl-color--light-green-400":"mdl-color--light-green-400","mdl-color-text--light-green-500":"mdl-color-text--light-green-500","mdl-color--light-green-500":"mdl-color--light-green-500","mdl-color-text--light-green-600":"mdl-color-text--light-green-600","mdl-color--light-green-600":"mdl-color--light-green-600","mdl-color-text--light-green-700":"mdl-color-text--light-green-700","mdl-color--light-green-700":"mdl-color--light-green-700","mdl-color-text--light-green-800":"mdl-color-text--light-green-800","mdl-color--light-green-800":"mdl-color--light-green-800","mdl-color-text--light-green-900":"mdl-color-text--light-green-900","mdl-color--light-green-900":"mdl-color--light-green-900","mdl-color-text--light-green-A100":"mdl-color-text--light-green-A100","mdl-color--light-green-A100":"mdl-color--light-green-A100","mdl-color-text--light-green-A200":"mdl-color-text--light-green-A200","mdl-color--light-green-A200":"mdl-color--light-green-A200","mdl-color-text--light-green-A400":"mdl-color-text--light-green-A400","mdl-color--light-green-A400":"mdl-color--light-green-A400","mdl-color-text--light-green-A700":"mdl-color-text--light-green-A700","mdl-color--light-green-A700":"mdl-color--light-green-A700","mdl-color-text--lime":"mdl-color-text--lime","mdl-color--lime":"mdl-color--lime","mdl-color-text--lime-50":"mdl-color-text--lime-50","mdl-color--lime-50":"mdl-color--lime-50","mdl-color-text--lime-100":"mdl-color-text--lime-100","mdl-color--lime-100":"mdl-color--lime-100","mdl-color-text--lime-200":"mdl-color-text--lime-200","mdl-color--lime-200":"mdl-color--lime-200","mdl-color-text--lime-300":"mdl-color-text--lime-300","mdl-color--lime-300":"mdl-color--lime-300","mdl-color-text--lime-400":"mdl-color-text--lime-400","mdl-color--lime-400":"mdl-color--lime-400","mdl-color-text--lime-500":"mdl-color-text--lime-500","mdl-color--lime-500":"mdl-color--lime-500","mdl-color-text--lime-600":"mdl-color-text--lime-600","mdl-color--lime-600":"mdl-color--lime-600","mdl-color-text--lime-700":"mdl-color-text--lime-700","mdl-color--lime-700":"mdl-color--lime-700","mdl-color-text--lime-800":"mdl-color-text--lime-800","mdl-color--lime-800":"mdl-color--lime-800","mdl-color-text--lime-900":"mdl-color-text--lime-900","mdl-color--lime-900":"mdl-color--lime-900","mdl-color-text--lime-A100":"mdl-color-text--lime-A100","mdl-color--lime-A100":"mdl-color--lime-A100","mdl-color-text--lime-A200":"mdl-color-text--lime-A200","mdl-color--lime-A200":"mdl-color--lime-A200","mdl-color-text--lime-A400":"mdl-color-text--lime-A400","mdl-color--lime-A400":"mdl-color--lime-A400","mdl-color-text--lime-A700":"mdl-color-text--lime-A700","mdl-color--lime-A700":"mdl-color--lime-A700","mdl-color-text--yellow":"mdl-color-text--yellow","mdl-color--yellow":"mdl-color--yellow","mdl-color-text--yellow-50":"mdl-color-text--yellow-50","mdl-color--yellow-50":"mdl-color--yellow-50","mdl-color-text--yellow-100":"mdl-color-text--yellow-100","mdl-color--yellow-100":"mdl-color--yellow-100","mdl-color-text--yellow-200":"mdl-color-text--yellow-200","mdl-color--yellow-200":"mdl-color--yellow-200","mdl-color-text--yellow-300":"mdl-color-text--yellow-300","mdl-color--yellow-300":"mdl-color--yellow-300","mdl-color-text--yellow-400":"mdl-color-text--yellow-400","mdl-color--yellow-400":"mdl-color--yellow-400","mdl-color-text--yellow-500":"mdl-color-text--yellow-500","mdl-color--yellow-500":"mdl-color--yellow-500","mdl-color-text--yellow-600":"mdl-color-text--yellow-600","mdl-color--yellow-600":"mdl-color--yellow-600","mdl-color-text--yellow-700":"mdl-color-text--yellow-700","mdl-color--yellow-700":"mdl-color--yellow-700","mdl-color-text--yellow-800":"mdl-color-text--yellow-800","mdl-color--yellow-800":"mdl-color--yellow-800","mdl-color-text--yellow-900":"mdl-color-text--yellow-900","mdl-color--yellow-900":"mdl-color--yellow-900","mdl-color-text--yellow-A100":"mdl-color-text--yellow-A100","mdl-color--yellow-A100":"mdl-color--yellow-A100","mdl-color-text--yellow-A200":"mdl-color-text--yellow-A200","mdl-color--yellow-A200":"mdl-color--yellow-A200","mdl-color-text--yellow-A400":"mdl-color-text--yellow-A400","mdl-color--yellow-A400":"mdl-color--yellow-A400","mdl-color-text--yellow-A700":"mdl-color-text--yellow-A700","mdl-color--yellow-A700":"mdl-color--yellow-A700","mdl-color-text--amber":"mdl-color-text--amber","mdl-color--amber":"mdl-color--amber","mdl-color-text--amber-50":"mdl-color-text--amber-50","mdl-color--amber-50":"mdl-color--amber-50","mdl-color-text--amber-100":"mdl-color-text--amber-100","mdl-color--amber-100":"mdl-color--amber-100","mdl-color-text--amber-200":"mdl-color-text--amber-200","mdl-color--amber-200":"mdl-color--amber-200","mdl-color-text--amber-300":"mdl-color-text--amber-300","mdl-color--amber-300":"mdl-color--amber-300","mdl-color-text--amber-400":"mdl-color-text--amber-400","mdl-color--amber-400":"mdl-color--amber-400","mdl-color-text--amber-500":"mdl-color-text--amber-500","mdl-color--amber-500":"mdl-color--amber-500","mdl-color-text--amber-600":"mdl-color-text--amber-600","mdl-color--amber-600":"mdl-color--amber-600","mdl-color-text--amber-700":"mdl-color-text--amber-700","mdl-color--amber-700":"mdl-color--amber-700","mdl-color-text--amber-800":"mdl-color-text--amber-800","mdl-color--amber-800":"mdl-color--amber-800","mdl-color-text--amber-900":"mdl-color-text--amber-900","mdl-color--amber-900":"mdl-color--amber-900","mdl-color-text--amber-A100":"mdl-color-text--amber-A100","mdl-color--amber-A100":"mdl-color--amber-A100","mdl-color-text--amber-A200":"mdl-color-text--amber-A200","mdl-color--amber-A200":"mdl-color--amber-A200","mdl-color-text--amber-A400":"mdl-color-text--amber-A400","mdl-color--amber-A400":"mdl-color--amber-A400","mdl-color-text--amber-A700":"mdl-color-text--amber-A700","mdl-color--amber-A700":"mdl-color--amber-A700","mdl-color-text--orange":"mdl-color-text--orange","mdl-color--orange":"mdl-color--orange","mdl-color-text--orange-50":"mdl-color-text--orange-50","mdl-color--orange-50":"mdl-color--orange-50","mdl-color-text--orange-100":"mdl-color-text--orange-100","mdl-color--orange-100":"mdl-color--orange-100","mdl-color-text--orange-200":"mdl-color-text--orange-200","mdl-color--orange-200":"mdl-color--orange-200","mdl-color-text--orange-300":"mdl-color-text--orange-300","mdl-color--orange-300":"mdl-color--orange-300","mdl-color-text--orange-400":"mdl-color-text--orange-400","mdl-color--orange-400":"mdl-color--orange-400","mdl-color-text--orange-500":"mdl-color-text--orange-500","mdl-color--orange-500":"mdl-color--orange-500","mdl-color-text--orange-600":"mdl-color-text--orange-600","mdl-color--orange-600":"mdl-color--orange-600","mdl-color-text--orange-700":"mdl-color-text--orange-700","mdl-color--orange-700":"mdl-color--orange-700","mdl-color-text--orange-800":"mdl-color-text--orange-800","mdl-color--orange-800":"mdl-color--orange-800","mdl-color-text--orange-900":"mdl-color-text--orange-900","mdl-color--orange-900":"mdl-color--orange-900","mdl-color-text--orange-A100":"mdl-color-text--orange-A100","mdl-color--orange-A100":"mdl-color--orange-A100","mdl-color-text--orange-A200":"mdl-color-text--orange-A200","mdl-color--orange-A200":"mdl-color--orange-A200","mdl-color-text--orange-A400":"mdl-color-text--orange-A400","mdl-color--orange-A400":"mdl-color--orange-A400","mdl-color-text--orange-A700":"mdl-color-text--orange-A700","mdl-color--orange-A700":"mdl-color--orange-A700","mdl-color-text--deep-orange":"mdl-color-text--deep-orange","mdl-color--deep-orange":"mdl-color--deep-orange","mdl-color-text--deep-orange-50":"mdl-color-text--deep-orange-50","mdl-color--deep-orange-50":"mdl-color--deep-orange-50","mdl-color-text--deep-orange-100":"mdl-color-text--deep-orange-100","mdl-color--deep-orange-100":"mdl-color--deep-orange-100","mdl-color-text--deep-orange-200":"mdl-color-text--deep-orange-200","mdl-color--deep-orange-200":"mdl-color--deep-orange-200","mdl-color-text--deep-orange-300":"mdl-color-text--deep-orange-300","mdl-color--deep-orange-300":"mdl-color--deep-orange-300","mdl-color-text--deep-orange-400":"mdl-color-text--deep-orange-400","mdl-color--deep-orange-400":"mdl-color--deep-orange-400","mdl-color-text--deep-orange-500":"mdl-color-text--deep-orange-500","mdl-color--deep-orange-500":"mdl-color--deep-orange-500","mdl-color-text--deep-orange-600":"mdl-color-text--deep-orange-600","mdl-color--deep-orange-600":"mdl-color--deep-orange-600","mdl-color-text--deep-orange-700":"mdl-color-text--deep-orange-700","mdl-color--deep-orange-700":"mdl-color--deep-orange-700","mdl-color-text--deep-orange-800":"mdl-color-text--deep-orange-800","mdl-color--deep-orange-800":"mdl-color--deep-orange-800","mdl-color-text--deep-orange-900":"mdl-color-text--deep-orange-900","mdl-color--deep-orange-900":"mdl-color--deep-orange-900","mdl-color-text--deep-orange-A100":"mdl-color-text--deep-orange-A100","mdl-color--deep-orange-A100":"mdl-color--deep-orange-A100","mdl-color-text--deep-orange-A200":"mdl-color-text--deep-orange-A200","mdl-color--deep-orange-A200":"mdl-color--deep-orange-A200","mdl-color-text--deep-orange-A400":"mdl-color-text--deep-orange-A400","mdl-color--deep-orange-A400":"mdl-color--deep-orange-A400","mdl-color-text--deep-orange-A700":"mdl-color-text--deep-orange-A700","mdl-color--deep-orange-A700":"mdl-color--deep-orange-A700","mdl-color-text--brown":"mdl-color-text--brown","mdl-color--brown":"mdl-color--brown","mdl-color-text--brown-50":"mdl-color-text--brown-50","mdl-color--brown-50":"mdl-color--brown-50","mdl-color-text--brown-100":"mdl-color-text--brown-100","mdl-color--brown-100":"mdl-color--brown-100","mdl-color-text--brown-200":"mdl-color-text--brown-200","mdl-color--brown-200":"mdl-color--brown-200","mdl-color-text--brown-300":"mdl-color-text--brown-300","mdl-color--brown-300":"mdl-color--brown-300","mdl-color-text--brown-400":"mdl-color-text--brown-400","mdl-color--brown-400":"mdl-color--brown-400","mdl-color-text--brown-500":"mdl-color-text--brown-500","mdl-color--brown-500":"mdl-color--brown-500","mdl-color-text--brown-600":"mdl-color-text--brown-600","mdl-color--brown-600":"mdl-color--brown-600","mdl-color-text--brown-700":"mdl-color-text--brown-700","mdl-color--brown-700":"mdl-color--brown-700","mdl-color-text--brown-800":"mdl-color-text--brown-800","mdl-color--brown-800":"mdl-color--brown-800","mdl-color-text--brown-900":"mdl-color-text--brown-900","mdl-color--brown-900":"mdl-color--brown-900","mdl-color-text--grey":"mdl-color-text--grey","mdl-color--grey":"mdl-color--grey","mdl-color-text--grey-50":"mdl-color-text--grey-50","mdl-color--grey-50":"mdl-color--grey-50","mdl-color-text--grey-100":"mdl-color-text--grey-100","mdl-color--grey-100":"mdl-color--grey-100","mdl-color-text--grey-200":"mdl-color-text--grey-200","mdl-color--grey-200":"mdl-color--grey-200","mdl-color-text--grey-300":"mdl-color-text--grey-300","mdl-color--grey-300":"mdl-color--grey-300","mdl-color-text--grey-400":"mdl-color-text--grey-400","mdl-color--grey-400":"mdl-color--grey-400","mdl-color-text--grey-500":"mdl-color-text--grey-500","mdl-color--grey-500":"mdl-color--grey-500","mdl-color-text--grey-600":"mdl-color-text--grey-600","mdl-color--grey-600":"mdl-color--grey-600","mdl-color-text--grey-700":"mdl-color-text--grey-700","mdl-color--grey-700":"mdl-color--grey-700","mdl-color-text--grey-800":"mdl-color-text--grey-800","mdl-color--grey-800":"mdl-color--grey-800","mdl-color-text--grey-900":"mdl-color-text--grey-900","mdl-color--grey-900":"mdl-color--grey-900","mdl-color-text--blue-grey":"mdl-color-text--blue-grey","mdl-color--blue-grey":"mdl-color--blue-grey","mdl-color-text--blue-grey-50":"mdl-color-text--blue-grey-50","mdl-color--blue-grey-50":"mdl-color--blue-grey-50","mdl-color-text--blue-grey-100":"mdl-color-text--blue-grey-100","mdl-color--blue-grey-100":"mdl-color--blue-grey-100","mdl-color-text--blue-grey-200":"mdl-color-text--blue-grey-200","mdl-color--blue-grey-200":"mdl-color--blue-grey-200","mdl-color-text--blue-grey-300":"mdl-color-text--blue-grey-300","mdl-color--blue-grey-300":"mdl-color--blue-grey-300","mdl-color-text--blue-grey-400":"mdl-color-text--blue-grey-400","mdl-color--blue-grey-400":"mdl-color--blue-grey-400","mdl-color-text--blue-grey-500":"mdl-color-text--blue-grey-500","mdl-color--blue-grey-500":"mdl-color--blue-grey-500","mdl-color-text--blue-grey-600":"mdl-color-text--blue-grey-600","mdl-color--blue-grey-600":"mdl-color--blue-grey-600","mdl-color-text--blue-grey-700":"mdl-color-text--blue-grey-700","mdl-color--blue-grey-700":"mdl-color--blue-grey-700","mdl-color-text--blue-grey-800":"mdl-color-text--blue-grey-800","mdl-color--blue-grey-800":"mdl-color--blue-grey-800","mdl-color-text--blue-grey-900":"mdl-color-text--blue-grey-900","mdl-color--blue-grey-900":"mdl-color--blue-grey-900","mdl-color--black":"mdl-color--black","mdl-color-text--black":"mdl-color-text--black","mdl-color--white":"mdl-color--white","mdl-color-text--white":"mdl-color-text--white","mdl-color--primary":"mdl-color--primary","mdl-color--primary-contrast":"mdl-color--primary-contrast","mdl-color--primary-dark":"mdl-color--primary-dark","mdl-color--accent":"mdl-color--accent","mdl-color--accent-contrast":"mdl-color--accent-contrast","mdl-color-text--primary":"mdl-color-text--primary","mdl-color-text--primary-contrast":"mdl-color-text--primary-contrast","mdl-color-text--primary-dark":"mdl-color-text--primary-dark","mdl-color-text--accent":"mdl-color-text--accent","mdl-color-text--accent-contrast":"mdl-color-text--accent-contrast","mdl-ripple":"mdl-ripple","is-animating":"is-animating","is-visible":"is-visible","mdl-animation--default":"mdl-animation--default","mdl-animation--fast-out-slow-in":"mdl-animation--fast-out-slow-in","mdl-animation--linear-out-slow-in":"mdl-animation--linear-out-slow-in","mdl-animation--fast-out-linear-in":"mdl-animation--fast-out-linear-in","mdl-badge":"mdl-badge","mdl-badge--no-background":"mdl-badge--no-background","mdl-badge--overlap":"mdl-badge--overlap","mdl-button--colored":"mdl-button--colored","mdl-button--raised":"mdl-button--raised","mdl-button--fab":"mdl-button--fab","mdl-button--mini-fab":"mdl-button--mini-fab","mdl-button__ripple-container":"mdl-button__ripple-container","mdl-button--icon":"mdl-button--icon","mdl-button--mini-icon":"mdl-button--mini-icon","mdl-button--disabled":"mdl-button--disabled","mdl-button--primary":"mdl-button--primary","mdl-button--accent":"mdl-button--accent","mdl-card__media":"mdl-card__media","mdl-card__title":"mdl-card__title","mdl-card--border":"mdl-card--border","mdl-card__title-text":"mdl-card__title-text","mdl-card__subtitle-text":"mdl-card__subtitle-text","mdl-card__supporting-text":"mdl-card__supporting-text","mdl-card__actions":"mdl-card__actions","mdl-card--expand":"mdl-card--expand","mdl-card__menu":"mdl-card__menu","is-upgraded":"is-upgraded","mdl-checkbox__input":"mdl-checkbox__input","mdl-checkbox__box-outline":"mdl-checkbox__box-outline","is-checked":"is-checked","is-disabled":"is-disabled","mdl-checkbox__focus-helper":"mdl-checkbox__focus-helper","is-focused":"is-focused","mdl-checkbox__tick-outline":"mdl-checkbox__tick-outline","mdl-checkbox__label":"mdl-checkbox__label","mdl-checkbox__ripple-container":"mdl-checkbox__ripple-container","mdl-chip":"mdl-chip","mdl-chip__text":"mdl-chip__text","mdl-chip__action":"mdl-chip__action","mdl-chip__contact":"mdl-chip__contact","mdl-chip--deletable":"mdl-chip--deletable","mdl-chip--contact":"mdl-chip--contact","mdl-data-table":"mdl-data-table","mdl-data-table__select":"mdl-data-table__select","is-selected":"is-selected","mdl-data-table__header--sorted-ascending":"mdl-data-table__header--sorted-ascending","mdl-data-table__header--sorted-descending":"mdl-data-table__header--sorted-descending","mdl-data-table__cell--non-numeric":"mdl-data-table__cell--non-numeric","mdl-dialog":"mdl-dialog","mdl-dialog__title":"mdl-dialog__title","mdl-dialog__actions":"mdl-dialog__actions","mdl-dialog__actions--full-width":"mdl-dialog__actions--full-width","mdl-dialog__content":"mdl-dialog__content","mdl-mega-footer":"mdl-mega-footer","mdl-mega-footer--top-section":"mdl-mega-footer--top-section","mdl-mega-footer--middle-section":"mdl-mega-footer--middle-section","mdl-mega-footer--bottom-section":"mdl-mega-footer--bottom-section","mdl-mega-footer__top-section":"mdl-mega-footer__top-section","mdl-mega-footer__middle-section":"mdl-mega-footer__middle-section","mdl-mega-footer__bottom-section":"mdl-mega-footer__bottom-section","mdl-mega-footer--left-section":"mdl-mega-footer--left-section","mdl-mega-footer__left-section":"mdl-mega-footer__left-section","mdl-mega-footer--right-section":"mdl-mega-footer--right-section","mdl-mega-footer__right-section":"mdl-mega-footer__right-section","mdl-mega-footer--social-btn":"mdl-mega-footer--social-btn","mdl-mega-footer__social-btn":"mdl-mega-footer__social-btn","mdl-mega-footer--drop-down-section":"mdl-mega-footer--drop-down-section","mdl-mega-footer__drop-down-section":"mdl-mega-footer__drop-down-section","mdl-mega-footer--heading-checkbox":"mdl-mega-footer--heading-checkbox","mdl-mega-footer__heading-checkbox":"mdl-mega-footer__heading-checkbox","mdl-mega-footer--heading":"mdl-mega-footer--heading","mdl-mega-footer__heading":"mdl-mega-footer__heading","mdl-mega-footer--link-list":"mdl-mega-footer--link-list","mdl-mega-footer__link-list":"mdl-mega-footer__link-list","mdl-logo":"mdl-logo","mdl-mini-footer":"mdl-mini-footer","mdl-mini-footer--link-list":"mdl-mini-footer--link-list","mdl-mini-footer__link-list":"mdl-mini-footer__link-list","mdl-mini-footer--left-section":"mdl-mini-footer--left-section","mdl-mini-footer__left-section":"mdl-mini-footer__left-section","mdl-mini-footer--right-section":"mdl-mini-footer--right-section","mdl-mini-footer__right-section":"mdl-mini-footer__right-section","mdl-mini-footer--social-btn":"mdl-mini-footer--social-btn","mdl-mini-footer__social-btn":"mdl-mini-footer__social-btn","mdl-icon-toggle__input":"mdl-icon-toggle__input","mdl-icon-toggle__label":"mdl-icon-toggle__label","mdl-icon-toggle__ripple-container":"mdl-icon-toggle__ripple-container","mdl-list":"mdl-list","mdl-list__item":"mdl-list__item","mdl-list__item-primary-content":"mdl-list__item-primary-content","mdl-list__item-icon":"mdl-list__item-icon","mdl-list__item-avatar":"mdl-list__item-avatar","mdl-list__item-secondary-content":"mdl-list__item-secondary-content","mdl-list__item-secondary-action":"mdl-list__item-secondary-action","mdl-list__item-secondary-info":"mdl-list__item-secondary-info","mdl-list__item-sub-header":"mdl-list__item-sub-header","mdl-list__item--two-line":"mdl-list__item--two-line","mdl-list__item-sub-title":"mdl-list__item-sub-title","mdl-list__item--three-line":"mdl-list__item--three-line","mdl-list__item-text-body":"mdl-list__item-text-body","mdl-menu__container":"mdl-menu__container","mdl-menu__outline":"mdl-menu__outline","mdl-menu--bottom-right":"mdl-menu--bottom-right","mdl-menu--top-left":"mdl-menu--top-left","mdl-menu--top-right":"mdl-menu--top-right","mdl-menu":"mdl-menu","mdl-menu--unaligned":"mdl-menu--unaligned","mdl-menu__item":"mdl-menu__item","mdl-menu__item--full-bleed-divider":"mdl-menu__item--full-bleed-divider","mdl-menu__item--ripple-container":"mdl-menu__item--ripple-container","mdl-progress":"mdl-progress","bar":"bar","progressbar":"progressbar","bufferbar":"bufferbar","auxbar":"auxbar","mdl-progress--indeterminate":"mdl-progress--indeterminate","mdl-progress__indeterminate":"mdl-progress__indeterminate","bar1":"bar1","indeterminate1":"indeterminate1","bar3":"bar3","indeterminate2":"indeterminate2","mdl-navigation":"mdl-navigation","mdl-navigation__link":"mdl-navigation__link","mdl-layout":"mdl-layout","is-small-screen":"is-small-screen","mdl-layout--large-screen-only":"mdl-layout--large-screen-only","mdl-layout--small-screen-only":"mdl-layout--small-screen-only","mdl-layout__container":"mdl-layout__container","mdl-layout__title":"mdl-layout__title","mdl-layout-title":"mdl-layout-title","mdl-layout-spacer":"mdl-layout-spacer","mdl-layout__drawer":"mdl-layout__drawer","mdl-layout__content":"mdl-layout__content","mdl-navigation__link--current":"mdl-navigation__link--current","mdl-layout--fixed-drawer":"mdl-layout--fixed-drawer","mdl-layout__drawer-button":"mdl-layout__drawer-button","mdl-layout__header":"mdl-layout__header","mdl-layout--no-desktop-drawer-button":"mdl-layout--no-desktop-drawer-button","mdl-layout--no-drawer-button":"mdl-layout--no-drawer-button","mdl-layout__header-row":"mdl-layout__header-row","mdl-layout-icon":"mdl-layout-icon","has-drawer":"has-drawer","is-compact":"is-compact","has-tabs":"has-tabs","mdl-layout--fixed-header":"mdl-layout--fixed-header","mdl-layout__header--transparent":"mdl-layout__header--transparent","mdl-layout__header--seamed":"mdl-layout__header--seamed","mdl-layout__header--scroll":"mdl-layout__header--scroll","mdl-layout__header--waterfall":"mdl-layout__header--waterfall","is-casting-shadow":"is-casting-shadow","mdl-layout__header--waterfall-hide-top":"mdl-layout__header--waterfall-hide-top","mdl-layout__obfuscator":"mdl-layout__obfuscator","has-scrolling-header":"has-scrolling-header","mdl-layout__tab-bar":"mdl-layout__tab-bar","mdl-layout--fixed-tabs":"mdl-layout--fixed-tabs","mdl-layout__tab-bar-container":"mdl-layout__tab-bar-container","mdl-layout__tab-bar-button":"mdl-layout__tab-bar-button","is-active":"is-active","mdl-layout__tab-bar-left-button":"mdl-layout__tab-bar-left-button","mdl-layout__tab-bar-right-button":"mdl-layout__tab-bar-right-button","mdl-layout__tab":"mdl-layout__tab","border-expand":"border-expand","mdl-layout__tab-ripple-container":"mdl-layout__tab-ripple-container","mdl-layout__tab-panel":"mdl-layout__tab-panel","mdl-radio__button":"mdl-radio__button","mdl-radio__outer-circle":"mdl-radio__outer-circle","mdl-radio__inner-circle":"mdl-radio__inner-circle","mdl-radio__label":"mdl-radio__label","mdl-radio__ripple-container":"mdl-radio__ripple-container","is-lowest-value":"is-lowest-value","mdl-slider__background-flex":"mdl-slider__background-flex","mdl-slider__background-upper":"mdl-slider__background-upper","mdl-slider__background-lower":"mdl-slider__background-lower","mdl-slider__ie-container":"mdl-slider__ie-container","mdl-slider__container":"mdl-slider__container","mdl-snackbar":"mdl-snackbar","mdl-snackbar--active":"mdl-snackbar--active","mdl-snackbar__text":"mdl-snackbar__text","mdl-snackbar__action":"mdl-snackbar__action","mdl-spinner":"mdl-spinner","mdl-spinner__container-rotate":"mdl-spinner__container-rotate","mdl-spinner__layer":"mdl-spinner__layer","mdl-spinner__layer-1":"mdl-spinner__layer-1","mdl-spinner--single-color":"mdl-spinner--single-color","mdl-spinner__fill-unfill-rotate":"mdl-spinner__fill-unfill-rotate","mdl-spinner__layer-1-fade-in-out":"mdl-spinner__layer-1-fade-in-out","mdl-spinner__layer-2":"mdl-spinner__layer-2","mdl-spinner__layer-2-fade-in-out":"mdl-spinner__layer-2-fade-in-out","mdl-spinner__layer-3":"mdl-spinner__layer-3","mdl-spinner__layer-3-fade-in-out":"mdl-spinner__layer-3-fade-in-out","mdl-spinner__layer-4":"mdl-spinner__layer-4","mdl-spinner__layer-4-fade-in-out":"mdl-spinner__layer-4-fade-in-out","mdl-spinner__gap-patch":"mdl-spinner__gap-patch","mdl-spinner__circle":"mdl-spinner__circle","mdl-spinner__circle-clipper":"mdl-spinner__circle-clipper","mdl-spinner__left":"mdl-spinner__left","mdl-spinner__left-spin":"mdl-spinner__left-spin","mdl-spinner__right":"mdl-spinner__right","mdl-spinner__right-spin":"mdl-spinner__right-spin","mdl-switch__input":"mdl-switch__input","mdl-switch__track":"mdl-switch__track","mdl-switch__thumb":"mdl-switch__thumb","mdl-switch__focus-helper":"mdl-switch__focus-helper","mdl-switch__label":"mdl-switch__label","mdl-switch__ripple-container":"mdl-switch__ripple-container","mdl-tabs":"mdl-tabs","mdl-tabs__tab-bar":"mdl-tabs__tab-bar","mdl-tabs__ripple-container":"mdl-tabs__ripple-container","mdl-tabs__panel":"mdl-tabs__panel","mdl-textfield":"mdl-textfield","mdl-textfield--align-right":"mdl-textfield--align-right","mdl-textfield--full-width":"mdl-textfield--full-width","mdl-textfield--expandable":"mdl-textfield--expandable","mdl-textfield__input":"mdl-textfield__input","is-invalid":"is-invalid","mdl-textfield__label":"mdl-textfield__label","is-dirty":"is-dirty","has-placeholder":"has-placeholder","mdl-textfield--floating-label":"mdl-textfield--floating-label","mdl-textfield__expandable-holder":"mdl-textfield__expandable-holder","mdl-textfield__error":"mdl-textfield__error","mdl-tooltip":"mdl-tooltip","pulse":"pulse","mdl-tooltip--large":"mdl-tooltip--large","mdl-shadow--2dp":"mdl-shadow--2dp","mdl-shadow--3dp":"mdl-shadow--3dp","mdl-shadow--4dp":"mdl-shadow--4dp","mdl-shadow--6dp":"mdl-shadow--6dp","mdl-shadow--8dp":"mdl-shadow--8dp","mdl-shadow--16dp":"mdl-shadow--16dp","mdl-shadow--24dp":"mdl-shadow--24dp","mdl-grid":"mdl-grid","mdl-grid--no-spacing":"mdl-grid--no-spacing","mdl-cell":"mdl-cell","mdl-cell--top":"mdl-cell--top","mdl-cell--middle":"mdl-cell--middle","mdl-cell--bottom":"mdl-cell--bottom","mdl-cell--stretch":"mdl-cell--stretch","mdl-cell--order-1":"mdl-cell--order-1","mdl-cell--order-2":"mdl-cell--order-2","mdl-cell--order-3":"mdl-cell--order-3","mdl-cell--order-4":"mdl-cell--order-4","mdl-cell--order-5":"mdl-cell--order-5","mdl-cell--order-6":"mdl-cell--order-6","mdl-cell--order-7":"mdl-cell--order-7","mdl-cell--order-8":"mdl-cell--order-8","mdl-cell--order-9":"mdl-cell--order-9","mdl-cell--order-10":"mdl-cell--order-10","mdl-cell--order-11":"mdl-cell--order-11","mdl-cell--order-12":"mdl-cell--order-12","mdl-cell--hide-phone":"mdl-cell--hide-phone","mdl-cell--order-1-phone":"mdl-cell--order-1-phone","mdl-cell--order-2-phone":"mdl-cell--order-2-phone","mdl-cell--order-3-phone":"mdl-cell--order-3-phone","mdl-cell--order-4-phone":"mdl-cell--order-4-phone","mdl-cell--order-5-phone":"mdl-cell--order-5-phone","mdl-cell--order-6-phone":"mdl-cell--order-6-phone","mdl-cell--order-7-phone":"mdl-cell--order-7-phone","mdl-cell--order-8-phone":"mdl-cell--order-8-phone","mdl-cell--order-9-phone":"mdl-cell--order-9-phone","mdl-cell--order-10-phone":"mdl-cell--order-10-phone","mdl-cell--order-11-phone":"mdl-cell--order-11-phone","mdl-cell--order-12-phone":"mdl-cell--order-12-phone","mdl-cell--1-col":"mdl-cell--1-col","mdl-cell--1-col-phone":"mdl-cell--1-col-phone","mdl-cell--2-col":"mdl-cell--2-col","mdl-cell--2-col-phone":"mdl-cell--2-col-phone","mdl-cell--3-col":"mdl-cell--3-col","mdl-cell--3-col-phone":"mdl-cell--3-col-phone","mdl-cell--4-col":"mdl-cell--4-col","mdl-cell--4-col-phone":"mdl-cell--4-col-phone","mdl-cell--5-col":"mdl-cell--5-col","mdl-cell--5-col-phone":"mdl-cell--5-col-phone","mdl-cell--6-col":"mdl-cell--6-col","mdl-cell--6-col-phone":"mdl-cell--6-col-phone","mdl-cell--7-col":"mdl-cell--7-col","mdl-cell--7-col-phone":"mdl-cell--7-col-phone","mdl-cell--8-col":"mdl-cell--8-col","mdl-cell--8-col-phone":"mdl-cell--8-col-phone","mdl-cell--9-col":"mdl-cell--9-col","mdl-cell--9-col-phone":"mdl-cell--9-col-phone","mdl-cell--10-col":"mdl-cell--10-col","mdl-cell--10-col-phone":"mdl-cell--10-col-phone","mdl-cell--11-col":"mdl-cell--11-col","mdl-cell--11-col-phone":"mdl-cell--11-col-phone","mdl-cell--12-col":"mdl-cell--12-col","mdl-cell--12-col-phone":"mdl-cell--12-col-phone","mdl-cell--1-offset":"mdl-cell--1-offset","mdl-cell--1-offset-phone":"mdl-cell--1-offset-phone","mdl-cell--2-offset":"mdl-cell--2-offset","mdl-cell--2-offset-phone":"mdl-cell--2-offset-phone","mdl-cell--3-offset":"mdl-cell--3-offset","mdl-cell--3-offset-phone":"mdl-cell--3-offset-phone","mdl-cell--hide-tablet":"mdl-cell--hide-tablet","mdl-cell--order-1-tablet":"mdl-cell--order-1-tablet","mdl-cell--order-2-tablet":"mdl-cell--order-2-tablet","mdl-cell--order-3-tablet":"mdl-cell--order-3-tablet","mdl-cell--order-4-tablet":"mdl-cell--order-4-tablet","mdl-cell--order-5-tablet":"mdl-cell--order-5-tablet","mdl-cell--order-6-tablet":"mdl-cell--order-6-tablet","mdl-cell--order-7-tablet":"mdl-cell--order-7-tablet","mdl-cell--order-8-tablet":"mdl-cell--order-8-tablet","mdl-cell--order-9-tablet":"mdl-cell--order-9-tablet","mdl-cell--order-10-tablet":"mdl-cell--order-10-tablet","mdl-cell--order-11-tablet":"mdl-cell--order-11-tablet","mdl-cell--order-12-tablet":"mdl-cell--order-12-tablet","mdl-cell--1-col-tablet":"mdl-cell--1-col-tablet","mdl-cell--2-col-tablet":"mdl-cell--2-col-tablet","mdl-cell--3-col-tablet":"mdl-cell--3-col-tablet","mdl-cell--4-col-tablet":"mdl-cell--4-col-tablet","mdl-cell--5-col-tablet":"mdl-cell--5-col-tablet","mdl-cell--6-col-tablet":"mdl-cell--6-col-tablet","mdl-cell--7-col-tablet":"mdl-cell--7-col-tablet","mdl-cell--8-col-tablet":"mdl-cell--8-col-tablet","mdl-cell--9-col-tablet":"mdl-cell--9-col-tablet","mdl-cell--10-col-tablet":"mdl-cell--10-col-tablet","mdl-cell--11-col-tablet":"mdl-cell--11-col-tablet","mdl-cell--12-col-tablet":"mdl-cell--12-col-tablet","mdl-cell--1-offset-tablet":"mdl-cell--1-offset-tablet","mdl-cell--2-offset-tablet":"mdl-cell--2-offset-tablet","mdl-cell--3-offset-tablet":"mdl-cell--3-offset-tablet","mdl-cell--4-offset":"mdl-cell--4-offset","mdl-cell--4-offset-tablet":"mdl-cell--4-offset-tablet","mdl-cell--5-offset":"mdl-cell--5-offset","mdl-cell--5-offset-tablet":"mdl-cell--5-offset-tablet","mdl-cell--6-offset":"mdl-cell--6-offset","mdl-cell--6-offset-tablet":"mdl-cell--6-offset-tablet","mdl-cell--7-offset":"mdl-cell--7-offset","mdl-cell--7-offset-tablet":"mdl-cell--7-offset-tablet","mdl-cell--hide-desktop":"mdl-cell--hide-desktop","mdl-cell--order-1-desktop":"mdl-cell--order-1-desktop","mdl-cell--order-2-desktop":"mdl-cell--order-2-desktop","mdl-cell--order-3-desktop":"mdl-cell--order-3-desktop","mdl-cell--order-4-desktop":"mdl-cell--order-4-desktop","mdl-cell--order-5-desktop":"mdl-cell--order-5-desktop","mdl-cell--order-6-desktop":"mdl-cell--order-6-desktop","mdl-cell--order-7-desktop":"mdl-cell--order-7-desktop","mdl-cell--order-8-desktop":"mdl-cell--order-8-desktop","mdl-cell--order-9-desktop":"mdl-cell--order-9-desktop","mdl-cell--order-10-desktop":"mdl-cell--order-10-desktop","mdl-cell--order-11-desktop":"mdl-cell--order-11-desktop","mdl-cell--order-12-desktop":"mdl-cell--order-12-desktop","mdl-cell--1-col-desktop":"mdl-cell--1-col-desktop","mdl-cell--2-col-desktop":"mdl-cell--2-col-desktop","mdl-cell--3-col-desktop":"mdl-cell--3-col-desktop","mdl-cell--4-col-desktop":"mdl-cell--4-col-desktop","mdl-cell--5-col-desktop":"mdl-cell--5-col-desktop","mdl-cell--6-col-desktop":"mdl-cell--6-col-desktop","mdl-cell--7-col-desktop":"mdl-cell--7-col-desktop","mdl-cell--8-col-desktop":"mdl-cell--8-col-desktop","mdl-cell--9-col-desktop":"mdl-cell--9-col-desktop","mdl-cell--10-col-desktop":"mdl-cell--10-col-desktop","mdl-cell--11-col-desktop":"mdl-cell--11-col-desktop","mdl-cell--12-col-desktop":"mdl-cell--12-col-desktop","mdl-cell--1-offset-desktop":"mdl-cell--1-offset-desktop","mdl-cell--2-offset-desktop":"mdl-cell--2-offset-desktop","mdl-cell--3-offset-desktop":"mdl-cell--3-offset-desktop","mdl-cell--4-offset-desktop":"mdl-cell--4-offset-desktop","mdl-cell--5-offset-desktop":"mdl-cell--5-offset-desktop","mdl-cell--6-offset-desktop":"mdl-cell--6-offset-desktop","mdl-cell--7-offset-desktop":"mdl-cell--7-offset-desktop","mdl-cell--8-offset":"mdl-cell--8-offset","mdl-cell--8-offset-desktop":"mdl-cell--8-offset-desktop","mdl-cell--9-offset":"mdl-cell--9-offset","mdl-cell--9-offset-desktop":"mdl-cell--9-offset-desktop","mdl-cell--10-offset":"mdl-cell--10-offset","mdl-cell--10-offset-desktop":"mdl-cell--10-offset-desktop","mdl-cell--11-offset":"mdl-cell--11-offset","mdl-cell--11-offset-desktop":"mdl-cell--11-offset-desktop"};

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(260);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactRelay = __webpack_require__(258);

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	var _mdlUpgrade = __webpack_require__(639);

	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);

	var _material = __webpack_require__(719);

	var _material2 = _interopRequireDefault(_material);

	var _styles = __webpack_require__(721);

	var _styles2 = _interopRequireDefault(_styles);

	var _reactRouter = __webpack_require__(472);

	var _mutation = __webpack_require__(722);

	var _mutation2 = _interopRequireDefault(_mutation);

	var _auth = __webpack_require__(638);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// file: login/index.js
	var Login = function (_React$Component) {
	  (0, _inherits3.default)(Login, _React$Component);

	  function Login(props) {
	    (0, _classCallCheck3.default)(this, Login);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

	    _this.state = {
	      error: false
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Login, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      var _this2 = this;

	      event.preventDefault();

	      this.props.relay.commitUpdate(new _mutation2.default({
	        email: this.refs.email.value,
	        password: this.refs.password.value
	      }), {
	        onSuccess: function onSuccess(response) {
	          _auth2.default.login(response.login.accessToken);
	          var _props = _this2.props;
	          var location = _props.location;
	          var router = _props.router;


	          if (location.state && location.state.nextPathname) {
	            router.replace(location.state.nextPathname);
	          } else {
	            router.replace('/');
	          }
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'mdl-js-layout', styleName: 'login-layout' },
	        _react2.default.createElement(
	          'main',
	          { styleName: 'login-content' },
	          _react2.default.createElement(
	            'div',
	            { styleName: 'mdl-card mdl-shadow--6dp' },
	            _react2.default.createElement(
	              'div',
	              { styleName: 'mdl-card__title mdl-color--primary mdl-color-text--white' },
	              _react2.default.createElement(
	                'h2',
	                { styleName: 'mdl-card__title-text' },
	                'Login'
	              )
	            ),
	            _react2.default.createElement(
	              'form',
	              { onSubmit: this.handleSubmit.bind(this) },
	              _react2.default.createElement(
	                'div',
	                { styleName: 'mdl-card__supporting-text' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'mdl-js-textfield', styleName: 'mdl-textfield mdl-textfield--floating-label' },
	                  _react2.default.createElement('input', { ref: 'email', styleName: 'mdl-textfield__input', type: 'text', id: 'email' }),
	                  _react2.default.createElement(
	                    'label',
	                    { styleName: 'mdl-textfield__label', htmlFor: 'email' },
	                    'Email'
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'mdl-js-textfield', styleName: 'mdl-textfield' },
	                  _react2.default.createElement('input', { ref: 'password', styleName: 'mdl-textfield__input', type: 'password', id: 'userpass' }),
	                  _react2.default.createElement(
	                    'label',
	                    { styleName: 'mdl-textfield__label', htmlFor: 'userpass' },
	                    'Password'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { styleName: 'mdl-card__actions' },
	                _react2.default.createElement(
	                  'button',
	                  {
	                    className: 'mdl-js-button mdl-js-ripple-effect',
	                    styleName: 'mdl-button mdl-button--colored' },
	                  'Enter'
	                ),
	                this.state.error && _react2.default.createElement(
	                  'p',
	                  null,
	                  'Bad login information'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return Login;
	}(_react2.default.Component);

	// NOTICE: we merge the material and styles
	// style.css contains customizations on some mdl classes


	exports.default = _reactRelay2.default.createContainer((0, _reactRouter.withRouter)((0, _mdlUpgrade2.default)(Login, (0, _assign2.default)({}, _material2.default, _styles2.default), { allowMultiple: true })), {
	  fragments: {}
	});

/***/ },

/***/ 721:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"login-layout":"web-static-js-login-___styles__login-layout___aATlj node_modules-material-design-lite-___material__mdl-layout___22MOr node_modules-material-design-lite-___material__mdl-color--grey-100___3u6sN","login-content":"web-static-js-login-___styles__login-content___sDEdX node_modules-material-design-lite-___material__mdl-layout__content___20FjJ"};

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _reactRelay = __webpack_require__(258);

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Relay$Mutation) {
	  (0, _inherits3.default)(_class, _Relay$Mutation);

	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(_class, [{
	    key: 'getMutation',
	    value: function getMutation() {
	      return function () {
	        return {
	          calls: [{
	            kind: 'Call',
	            metadata: {},
	            name: 'login',
	            value: {
	              kind: 'CallVariable',
	              callVariableName: 'input'
	            }
	          }],
	          children: [{
	            fieldName: 'clientMutationId',
	            kind: 'Field',
	            metadata: {
	              isGenerated: true,
	              isRequisite: true
	            },
	            type: 'String'
	          }],
	          kind: 'Mutation',
	          metadata: {
	            inputType: 'LoginInput!'
	          },
	          name: 'Mutation',
	          responseType: 'LoginPayload'
	        };
	      }();
	    }
	  }, {
	    key: 'getVariables',
	    value: function getVariables() {
	      return {
	        email: this.props.email,
	        password: this.props.password
	      };
	    }

	    // TODO: Add field to LoginPayload to get errors

	  }, {
	    key: 'getFatQuery',
	    value: function getFatQuery() {
	      return function () {
	        return {
	          children: [{
	            fieldName: 'accessToken',
	            kind: 'Field',
	            metadata: {},
	            type: 'String'
	          }],
	          id: _reactRelay2.default.QL.__id(),
	          kind: 'Fragment',
	          metadata: {},
	          name: 'Mutation_ValueRelayQL',
	          type: 'LoginPayload'
	        };
	      }();
	    }
	  }, {
	    key: 'getConfigs',
	    value: function getConfigs() {
	      return [{
	        type: 'REQUIRED_CHILDREN',
	        children: [function () {
	          return {
	            children: [{
	              fieldName: 'accessToken',
	              kind: 'Field',
	              metadata: {},
	              type: 'String'
	            }],
	            id: _reactRelay2.default.QL.__id(),
	            kind: 'Fragment',
	            metadata: {},
	            name: 'Mutation_ChildrenRelayQL',
	            type: 'LoginPayload'
	          };
	        }()]
	      }];
	    }
	  }]);
	  return _class;
	}(_reactRelay2.default.Mutation);

	exports.default = _class;

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Queries = undefined;

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactRelay = __webpack_require__(258);

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	var _mdlUpgrade = __webpack_require__(639);

	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);

	var _material = __webpack_require__(719);

	var _material2 = _interopRequireDefault(_material);

	var _StarWarsShip = __webpack_require__(724);

	var _StarWarsShip2 = _interopRequireDefault(_StarWarsShip);

	var _AddShipMutation = __webpack_require__(725);

	var _AddShipMutation2 = _interopRequireDefault(_AddShipMutation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Example components
	// file: star-wars/components/StarWarsApp.js
	var StarWarsApp = function (_React$Component) {
	  (0, _inherits3.default)(StarWarsApp, _React$Component);

	  function StarWarsApp(props) {
	    (0, _classCallCheck3.default)(this, StarWarsApp);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (StarWarsApp.__proto__ || (0, _getPrototypeOf2.default)(StarWarsApp)).call(this));

	    _this.state = {
	      factionId: props.factions[0].id,
	      shipName: ''
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(StarWarsApp, [{
	    key: 'handleAddShip',
	    value: function handleAddShip() {
	      var _this2 = this;

	      var name = this.state.shipName;
	      this.props.relay.commitUpdate(new _AddShipMutation2.default({
	        name: name,
	        faction: this.props.factions.find(function (f) {
	          return f.id == _this2.state.factionId;
	        })
	      }));
	      this.setState({ shipName: '' });
	    }
	  }, {
	    key: 'handleInputChange',
	    value: function handleInputChange(e) {
	      this.setState({
	        shipName: e.target.value
	      });
	    }
	  }, {
	    key: 'handleSelectionChange',
	    value: function handleSelectionChange(e) {
	      this.setState({
	        factionId: e.target.value
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var factions = this.props.factions;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { styleName: 'mdl-grid' },
	          _react2.default.createElement(
	            'div',
	            { styleName: 'mdl-cell mdl-cell--12-col' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Start Wars example'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'mdl-grid' },
	          _react2.default.createElement(
	            'div',
	            { styleName: 'mdl-cell mdl-cell--12-col' },
	            _react2.default.createElement(
	              'h2',
	              { styleName: 'mdl-layout-title' },
	              'Introduce Ship'
	            ),
	            _react2.default.createElement(
	              'div',
	              { styleName: 'mdl-grid' },
	              _react2.default.createElement(
	                'div',
	                { styleName: 'mdl-cell mdl-cell--12-col' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'mdl-js-textfield', styleName: 'mdl-textfield mdl-textfield--floating-label' },
	                  _react2.default.createElement('input', { id: 'ship-name', value: this.state.shipName, onChange: this.handleInputChange.bind(this), styleName: 'mdl-textfield__input', type: 'text' }),
	                  _react2.default.createElement(
	                    'label',
	                    { styleName: 'mdl-textfield__label', htmlFor: 'ship-name' },
	                    'Ship Name...'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { styleName: 'mdl-cell mdl-cell--12-col' },
	                _react2.default.createElement(
	                  'label',
	                  { className: 'mdl-js-radio mdl-js-ripple-effect', styleName: 'mdl-radio', htmlFor: 'option-1' },
	                  _react2.default.createElement('input', { type: 'radio',
	                    id: 'option-1',
	                    styleName: 'mdl-radio__button',
	                    name: 'options',
	                    value: factions[0].id,
	                    onChange: this.handleSelectionChange.bind(this),
	                    checked: this.state.factionId == factions[0].id
	                  }),
	                  _react2.default.createElement(
	                    'span',
	                    { styleName: 'mdl-radio__label' },
	                    factions[0].name
	                  )
	                ),
	                _react2.default.createElement(
	                  'label',
	                  { className: 'mdl-js-radio mdl-js-ripple-effect', styleName: 'mdl-radio', htmlFor: 'option-2' },
	                  _react2.default.createElement('input', { type: 'radio',
	                    id: 'option-2',
	                    styleName: 'mdl-radio__button',
	                    name: 'options',
	                    value: factions[1].id,
	                    onChange: this.handleSelectionChange.bind(this),
	                    checked: this.state.factionId == factions[1].id
	                  }),
	                  _react2.default.createElement(
	                    'span',
	                    { styleName: 'mdl-radio__label' },
	                    factions[1].name
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { styleName: 'mdl-cell mdl-cell--12-col' },
	                _react2.default.createElement(
	                  'button',
	                  { className: 'mdl-js-button',
	                    styleName: 'mdl-button mdl-button--raised mdl-button--colored',
	                    onClick: this.handleAddShip.bind(this) },
	                  'Add Ship'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'mdl-grid' },
	          factions.map(function (faction, index) {
	            return _react2.default.createElement(
	              'div',
	              { key: index, styleName: 'mdl-cell mdl-cell--6-col' },
	              _react2.default.createElement(
	                'h1',
	                null,
	                faction.name
	              ),
	              _react2.default.createElement(
	                'ol',
	                null,
	                faction.ships.edges.map(function (_ref) {
	                  var node = _ref.node;
	                  return _react2.default.createElement(
	                    'li',
	                    { key: node.id },
	                    _react2.default.createElement(_StarWarsShip2.default, { ship: node })
	                  );
	                })
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	  return StarWarsApp;
	}(_react2.default.Component); // class StarWarsApp

	exports.default = _reactRelay2.default.createContainer((0, _mdlUpgrade2.default)(StarWarsApp, _material2.default, { allowMultiple: true }), {
	  fragments: {
	    factions: function factions() {
	      return function (RQL_0, RQL_1) {
	        return {
	          children: [].concat.apply([], [{
	            fieldName: 'id',
	            kind: 'Field',
	            metadata: {
	              isRequisite: true
	            },
	            type: 'ID'
	          }, {
	            fieldName: 'factionId',
	            kind: 'Field',
	            metadata: {},
	            type: 'ID'
	          }, {
	            fieldName: 'name',
	            kind: 'Field',
	            metadata: {},
	            type: 'String'
	          }, {
	            calls: [{
	              kind: 'Call',
	              metadata: {},
	              name: 'first',
	              value: {
	                kind: 'CallValue',
	                callValue: 10
	              }
	            }],
	            children: [{
	              children: [{
	                children: [].concat.apply([], [{
	                  fieldName: 'id',
	                  kind: 'Field',
	                  metadata: {
	                    isRequisite: true
	                  },
	                  type: 'ID'
	                }, _reactRelay2.default.QL.__frag(RQL_0)]),
	                fieldName: 'node',
	                kind: 'Field',
	                metadata: {
	                  canHaveSubselections: true,
	                  inferredRootCallName: 'node',
	                  inferredPrimaryKey: 'id',
	                  isRequisite: true
	                },
	                type: 'Ship'
	              }, {
	                fieldName: 'cursor',
	                kind: 'Field',
	                metadata: {
	                  isGenerated: true,
	                  isRequisite: true
	                },
	                type: 'String'
	              }],
	              fieldName: 'edges',
	              kind: 'Field',
	              metadata: {
	                canHaveSubselections: true,
	                isPlural: true
	              },
	              type: 'ShipEdge'
	            }, {
	              children: [{
	                fieldName: 'hasNextPage',
	                kind: 'Field',
	                metadata: {
	                  isGenerated: true,
	                  isRequisite: true
	                },
	                type: 'Boolean'
	              }, {
	                fieldName: 'hasPreviousPage',
	                kind: 'Field',
	                metadata: {
	                  isGenerated: true,
	                  isRequisite: true
	                },
	                type: 'Boolean'
	              }],
	              fieldName: 'pageInfo',
	              kind: 'Field',
	              metadata: {
	                canHaveSubselections: true,
	                isGenerated: true,
	                isRequisite: true
	              },
	              type: 'PageInfo'
	            }],
	            fieldName: 'ships',
	            kind: 'Field',
	            metadata: {
	              canHaveSubselections: true,
	              isConnection: true
	            },
	            type: 'ShipConnection'
	          }, _reactRelay2.default.QL.__frag(RQL_1)]),
	          id: _reactRelay2.default.QL.__id(),
	          kind: 'Fragment',
	          metadata: {
	            plural: true
	          },
	          name: 'StarWarsApp_FactionsRelayQL',
	          type: 'Faction'
	        };
	      }(_StarWarsShip2.default.getFragment('ship'), _AddShipMutation2.default.getFragment('faction'));
	    }
	  }
	});
	var Queries = exports.Queries = {
	  // TODO: Find out how to pass params from router.
	  // factions: () => Relay.QL`query { factions(names: $factionNames) }`,
	  factions: function factions() {
	    return function () {
	      return {
	        calls: [{
	          kind: 'Call',
	          metadata: {
	            type: '[String]'
	          },
	          name: 'names',
	          value: [{
	            kind: 'CallValue',
	            callValue: 'Galactic Empire'
	          }, {
	            kind: 'CallValue',
	            callValue: 'Alliance to Restore the Republic'
	          }]
	        }],
	        children: [{
	          fieldName: 'id',
	          kind: 'Field',
	          metadata: {
	            isGenerated: true,
	            isRequisite: true
	          },
	          type: 'ID'
	        }],
	        fieldName: 'factions',
	        kind: 'Query',
	        metadata: {
	          isPlural: true,
	          identifyingArgName: 'names',
	          identifyingArgType: '[String]'
	        },
	        name: 'StarWarsApp',
	        type: 'Faction'
	      };
	    }();
	  }
	};

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reactRelay = __webpack_require__(258);

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StarWarsShip = function (_React$Component) {
	  (0, _inherits3.default)(StarWarsShip, _React$Component);

	  function StarWarsShip() {
	    (0, _classCallCheck3.default)(this, StarWarsShip);
	    return (0, _possibleConstructorReturn3.default)(this, (StarWarsShip.__proto__ || (0, _getPrototypeOf2.default)(StarWarsShip)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(StarWarsShip, [{
	    key: 'render',
	    value: function render() {
	      var ship = this.props.ship;

	      return _react2.default.createElement(
	        'div',
	        null,
	        ship.name
	      );
	    }
	  }]);
	  return StarWarsShip;
	}(_react2.default.Component);

	exports.default = _reactRelay2.default.createContainer(StarWarsShip, {
	  fragments: {
	    ship: function ship() {
	      return function () {
	        return {
	          children: [{
	            fieldName: 'id',
	            kind: 'Field',
	            metadata: {
	              isRequisite: true
	            },
	            type: 'ID'
	          }, {
	            fieldName: 'name',
	            kind: 'Field',
	            metadata: {},
	            type: 'String'
	          }],
	          id: _reactRelay2.default.QL.__id(),
	          kind: 'Fragment',
	          metadata: {},
	          name: 'StarWarsShip_ShipRelayQL',
	          type: 'Ship'
	        };
	      }();
	    }
	  }
	});

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _reactRelay = __webpack_require__(258);

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AddShipMutation = function (_Relay$Mutation) {
	  (0, _inherits3.default)(AddShipMutation, _Relay$Mutation);

	  function AddShipMutation() {
	    (0, _classCallCheck3.default)(this, AddShipMutation);
	    return (0, _possibleConstructorReturn3.default)(this, (AddShipMutation.__proto__ || (0, _getPrototypeOf2.default)(AddShipMutation)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(AddShipMutation, [{
	    key: 'getMutation',
	    value: function getMutation() {
	      return function () {
	        return {
	          calls: [{
	            kind: 'Call',
	            metadata: {},
	            name: 'introduceShip',
	            value: {
	              kind: 'CallVariable',
	              callVariableName: 'input'
	            }
	          }],
	          children: [{
	            fieldName: 'clientMutationId',
	            kind: 'Field',
	            metadata: {
	              isGenerated: true,
	              isRequisite: true
	            },
	            type: 'String'
	          }],
	          kind: 'Mutation',
	          metadata: {
	            inputType: 'IntroduceShipInput!'
	          },
	          name: 'AddShipMutation',
	          responseType: 'IntroduceShipPayload'
	        };
	      }();
	    }
	  }, {
	    key: 'getVariables',
	    value: function getVariables() {
	      return {
	        shipName: this.props.name,
	        factionId: this.props.faction.factionId
	      };
	    }
	  }, {
	    key: 'getFatQuery',
	    value: function getFatQuery() {
	      return function () {
	        return {
	          children: [{
	            children: [{
	              fieldName: 'name',
	              kind: 'Field',
	              metadata: {},
	              type: 'String'
	            }, {
	              children: [{
	                children: [{
	                  children: [{
	                    fieldName: 'name',
	                    kind: 'Field',
	                    metadata: {},
	                    type: 'String'
	                  }, {
	                    fieldName: 'id',
	                    kind: 'Field',
	                    metadata: {
	                      isGenerated: true,
	                      isRequisite: true
	                    },
	                    type: 'ID'
	                  }],
	                  fieldName: 'node',
	                  kind: 'Field',
	                  metadata: {
	                    canHaveSubselections: true,
	                    inferredRootCallName: 'node',
	                    inferredPrimaryKey: 'id',
	                    isRequisite: true
	                  },
	                  type: 'Ship'
	                }, {
	                  fieldName: 'cursor',
	                  kind: 'Field',
	                  metadata: {
	                    isGenerated: true,
	                    isRequisite: true
	                  },
	                  type: 'String'
	                }],
	                fieldName: 'edges',
	                kind: 'Field',
	                metadata: {
	                  canHaveSubselections: true,
	                  isPlural: true
	                },
	                type: 'ShipEdge'
	              }, {
	                children: [{
	                  fieldName: 'hasNextPage',
	                  kind: 'Field',
	                  metadata: {
	                    isGenerated: true,
	                    isRequisite: true
	                  },
	                  type: 'Boolean'
	                }, {
	                  fieldName: 'hasPreviousPage',
	                  kind: 'Field',
	                  metadata: {
	                    isGenerated: true,
	                    isRequisite: true
	                  },
	                  type: 'Boolean'
	                }],
	                fieldName: 'pageInfo',
	                kind: 'Field',
	                metadata: {
	                  canHaveSubselections: true,
	                  isGenerated: true,
	                  isRequisite: true
	                },
	                type: 'PageInfo'
	              }],
	              fieldName: 'ships',
	              kind: 'Field',
	              metadata: {
	                canHaveSubselections: true,
	                isConnection: true
	              },
	              type: 'ShipConnection'
	            }, {
	              fieldName: 'id',
	              kind: 'Field',
	              metadata: {
	                isGenerated: true,
	                isRequisite: true
	              },
	              type: 'ID'
	            }],
	            fieldName: 'faction',
	            kind: 'Field',
	            metadata: {
	              canHaveSubselections: true,
	              inferredRootCallName: 'node',
	              inferredPrimaryKey: 'id'
	            },
	            type: 'Faction'
	          }, {
	            children: [{
	              fieldName: 'cursor',
	              kind: 'Field',
	              metadata: {
	                isGenerated: true,
	                isRequisite: true
	              },
	              type: 'String'
	            }, {
	              children: [{
	                fieldName: 'id',
	                kind: 'Field',
	                metadata: {
	                  isGenerated: true,
	                  isRequisite: true
	                },
	                type: 'ID'
	              }],
	              fieldName: 'node',
	              kind: 'Field',
	              metadata: {
	                canHaveSubselections: true,
	                inferredRootCallName: 'node',
	                inferredPrimaryKey: 'id',
	                isGenerated: true,
	                isRequisite: true
	              },
	              type: 'Ship'
	            }],
	            fieldName: 'newShipEdge',
	            kind: 'Field',
	            metadata: {
	              canHaveSubselections: true
	            },
	            type: 'ShipEdge'
	          }],
	          id: _reactRelay2.default.QL.__id(),
	          kind: 'Fragment',
	          metadata: {
	            pattern: true
	          },
	          name: 'AddShipMutation_ValueRelayQL',
	          type: 'IntroduceShipPayload'
	        };
	      }();
	    }
	  }, {
	    key: 'getConfigs',
	    value: function getConfigs() {
	      return [{
	        type: 'RANGE_ADD',
	        parentName: 'faction',
	        parentID: this.props.faction.id,
	        connectionName: 'ships',
	        edgeName: 'newShipEdge',
	        rangeBehaviors: {
	          '': 'append',
	          'orderby(oldest)': 'prepend'
	        }
	      }];
	    }
	  }, {
	    key: 'getOptimisticResponse',
	    value: function getOptimisticResponse() {
	      return {
	        newShipEdge: {
	          node: {
	            name: this.props.name
	          }
	        },
	        faction: {
	          id: this.props.faction.id
	        }
	      };
	    }
	  }]);
	  return AddShipMutation;
	}(_reactRelay2.default.Mutation);

	AddShipMutation.fragments = {
	  faction: function faction() {
	    return function () {
	      return {
	        children: [{
	          fieldName: 'id',
	          kind: 'Field',
	          metadata: {
	            isRequisite: true
	          },
	          type: 'ID'
	        }, {
	          fieldName: 'factionId',
	          kind: 'Field',
	          metadata: {},
	          type: 'ID'
	        }],
	        id: _reactRelay2.default.QL.__id(),
	        kind: 'Fragment',
	        metadata: {},
	        name: 'AddShipMutation_FactionRelayQL',
	        type: 'Faction'
	      };
	    }();
	  }
	};
	exports.default = AddShipMutation;

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(292);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _graphiql = __webpack_require__(727);

	var _graphiql2 = _interopRequireDefault(_graphiql);

	var _isomorphicFetch = __webpack_require__(442);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _reactCssModules = __webpack_require__(644);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	__webpack_require__(848);

	var _styles = __webpack_require__(849);

	var _styles2 = _interopRequireDefault(_styles);

	var _auth = __webpack_require__(638);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MyGraphiQL = function (_React$Component) {
	  (0, _inherits3.default)(MyGraphiQL, _React$Component);

	  function MyGraphiQL() {
	    (0, _classCallCheck3.default)(this, MyGraphiQL);
	    return (0, _possibleConstructorReturn3.default)(this, (MyGraphiQL.__proto__ || (0, _getPrototypeOf2.default)(MyGraphiQL)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(MyGraphiQL, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'graphiql-wrapper' },
	        _react2.default.createElement(_graphiql2.default, { styleName: 'graphiql-container', fetcher: function fetcher(graphQLParams) {
	            return (0, _isomorphicFetch2.default)(window.location.origin + '/graphql/graphiql', {
	              method: 'post',
	              headers: {
	                "Content-Type": "application/json",
	                "Authorization": 'Bearer ' + _auth2.default.getToken()
	              },
	              body: (0, _stringify2.default)(graphQLParams)
	            }).then(function (response) {
	              return response.json();
	            });
	          } })
	      );
	    }
	  }]);
	  return MyGraphiQL;
	}(_react2.default.Component);

	exports.default = (0, _reactCssModules2.default)(MyGraphiQL, _styles2.default);

/***/ },

/***/ 848:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"graphiql-container":"graphiql-container","editorWrap":"editorWrap","title":"title","topBarWrap":"topBarWrap","topBar":"topBar","toolbar":"toolbar","docExplorerShow":"docExplorerShow","editorBar":"editorBar","queryWrap":"queryWrap","resultWrap":"resultWrap","docExplorerWrap":"docExplorerWrap","docExplorerResizer":"docExplorerResizer","docExplorerHide":"docExplorerHide","query-editor":"query-editor","variable-editor":"variable-editor","variable-editor-title":"variable-editor-title","codemirrorWrap":"codemirrorWrap","result-window":"result-window","footer":"footer","CodeMirror":"CodeMirror","CodeMirror-gutters":"CodeMirror-gutters","CodeMirror-foldgutter":"CodeMirror-foldgutter","CodeMirror-foldgutter-open":"CodeMirror-foldgutter-open","CodeMirror-foldgutter-folded":"CodeMirror-foldgutter-folded","toolbar-button":"toolbar-button","error":"error","execute-button-wrap":"execute-button-wrap","execute-button":"execute-button","execute-options":"execute-options","selected":"selected","CodeMirror-scroll":"CodeMirror-scroll","CodeMirror-lines":"CodeMirror-lines","CodeMirror-hint-information":"CodeMirror-hint-information","content":"content","infoType":"infoType","autoInsertedLeaf":"autoInsertedLeaf","cm-property":"cm-property","insertionFade":"insertionFade","CodeMirror-lint-tooltip":"CodeMirror-lint-tooltip","CodeMirror-lint-message-error":"CodeMirror-lint-message-error","CodeMirror-lint-message-warning":"CodeMirror-lint-message-warning","CodeMirror-foldmarker":"CodeMirror-foldmarker","CodeMirror-matchingbracket":"CodeMirror-matchingbracket","CodeMirror-nonmatchingbracket":"CodeMirror-nonmatchingbracket","cm-comment":"cm-comment","cm-punctuation":"cm-punctuation","cm-keyword":"cm-keyword","cm-def":"cm-def","cm-qualifier":"cm-qualifier","cm-attribute":"cm-attribute","cm-number":"cm-number","cm-string":"cm-string","cm-builtin":"cm-builtin","cm-string-2":"cm-string-2","cm-variable":"cm-variable","cm-meta":"cm-meta","cm-atom":"cm-atom","CodeMirror-scrollbar-filler":"CodeMirror-scrollbar-filler","CodeMirror-gutter-filler":"CodeMirror-gutter-filler","CodeMirror-linenumbers":"CodeMirror-linenumbers","CodeMirror-linenumber":"CodeMirror-linenumber","CodeMirror-guttermarker":"CodeMirror-guttermarker","CodeMirror-guttermarker-subtle":"CodeMirror-guttermarker-subtle","CodeMirror-cursor":"CodeMirror-cursor","CodeMirror-secondarycursor":"CodeMirror-secondarycursor","cm-fat-cursor":"cm-fat-cursor","CodeMirror-cursors":"CodeMirror-cursors","cm-animate-fat-cursor":"cm-animate-fat-cursor","blink":"blink","CodeMirror-overwrite":"CodeMirror-overwrite","cm-tab":"cm-tab","CodeMirror-ruler":"CodeMirror-ruler","cm-s-default":"cm-s-default","cm-operator":"cm-operator","cm-variable-2":"cm-variable-2","cm-variable-3":"cm-variable-3","cm-bracket":"cm-bracket","cm-tag":"cm-tag","cm-header":"cm-header","cm-quote":"cm-quote","cm-hr":"cm-hr","cm-link":"cm-link","cm-negative":"cm-negative","cm-positive":"cm-positive","cm-strong":"cm-strong","cm-em":"cm-em","cm-strikethrough":"cm-strikethrough","cm-error":"cm-error","cm-invalidchar":"cm-invalidchar","CodeMirror-composing":"CodeMirror-composing","CodeMirror-matchingtag":"CodeMirror-matchingtag","CodeMirror-activeline-background":"CodeMirror-activeline-background","CodeMirror-sizer":"CodeMirror-sizer","CodeMirror-vscrollbar":"CodeMirror-vscrollbar","CodeMirror-hscrollbar":"CodeMirror-hscrollbar","CodeMirror-gutter":"CodeMirror-gutter","CodeMirror-gutter-wrapper":"CodeMirror-gutter-wrapper","CodeMirror-gutter-background":"CodeMirror-gutter-background","CodeMirror-gutter-elt":"CodeMirror-gutter-elt","CodeMirror-wrap":"CodeMirror-wrap","CodeMirror-linebackground":"CodeMirror-linebackground","CodeMirror-linewidget":"CodeMirror-linewidget","CodeMirror-widget":"CodeMirror-widget","CodeMirror-code":"CodeMirror-code","CodeMirror-measure":"CodeMirror-measure","CodeMirror-dragcursors":"CodeMirror-dragcursors","CodeMirror-focused":"CodeMirror-focused","CodeMirror-selected":"CodeMirror-selected","CodeMirror-crosshair":"CodeMirror-crosshair","CodeMirror-line":"CodeMirror-line","cm-searching":"cm-searching","cm-force-border":"cm-force-border","cm-tab-wrap-hack":"cm-tab-wrap-hack","CodeMirror-selectedtext":"CodeMirror-selectedtext","doc-explorer":"doc-explorer","doc-explorer-title-bar":"doc-explorer-title-bar","doc-explorer-title":"doc-explorer-title","doc-explorer-back":"doc-explorer-back","doc-explorer-rhs":"doc-explorer-rhs","doc-explorer-contents":"doc-explorer-contents","doc-type-description":"doc-type-description","doc-value-description":"doc-value-description","doc-category":"doc-category","doc-category-title":"doc-category-title","doc-category-item":"doc-category-item","keyword":"keyword","type-name":"type-name","field-name":"field-name","value-name":"value-name","arg-name":"arg-name","arg":"arg","doc-alert-text":"doc-alert-text","search-box-outer":"search-box-outer","search-box-input":"search-box-input","CodeMirror-lint-markers":"CodeMirror-lint-markers","CodeMirror-lint-mark-error":"CodeMirror-lint-mark-error","CodeMirror-lint-mark-warning":"CodeMirror-lint-mark-warning","CodeMirror-lint-marker-error":"CodeMirror-lint-marker-error","CodeMirror-lint-marker-warning":"CodeMirror-lint-marker-warning","CodeMirror-lint-marker-multiple":"CodeMirror-lint-marker-multiple","spinner-container":"spinner-container","spinner":"spinner","rotation":"rotation","CodeMirror-hints":"CodeMirror-hints","CodeMirror-hints-wrapper":"CodeMirror-hints-wrapper","CodeMirror-hint":"CodeMirror-hint","CodeMirror-hint-active":"CodeMirror-hint-active"};

/***/ },

/***/ 849:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"graphiql-wrapper":"graphiql-wrapper","graphiql-container":"graphiql-container"};

/***/ }

});
//# sourceMappingURL=app.bundle.js.map