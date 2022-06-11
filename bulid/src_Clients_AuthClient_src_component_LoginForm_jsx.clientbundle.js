"use strict";
(self["webpackChunknewgen"] = self["webpackChunknewgen"] || []).push([["src_Clients_AuthClient_src_component_LoginForm_jsx"],{

/***/ "./src/Clients/AuthClient/src/component/LoginForm.jsx":
/*!************************************************************!*\
  !*** ./src/Clients/AuthClient/src/component/LoginForm.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _public_img_wave_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../public/img/wave.png */ "./public/img/wave.png");
/* harmony import */ var _public_img_bg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../public/img/bg.png */ "./public/img/bg.png");
/* harmony import */ var _public_img_avatar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../public/img/avatar.png */ "./public/img/avatar.png");
/* harmony import */ var _js_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/login */ "./src/Clients/AuthClient/src/js/login.js");
/* harmony import */ var _css_loginform_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/loginform.css */ "./src/Clients/AuthClient/src/css/loginform.css");
/* harmony import */ var _LandingpageClient_src_components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../LandingpageClient/src/components/Navbar */ "./src/Clients/LandingpageClient/src/components/Navbar.jsx");
/* harmony import */ var _redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/slices/authSlice */ "./src/redux/slices/authSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



















var LoginForm = function LoginForm(_ref) {
  var footerRef = _ref.footerRef;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    footerRef.current.style.display = 'none';
    return function () {
      footerRef.current.style.display = 'revert';
    };
  });
  var oneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var userRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var passRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var pwdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      Error = _useState6[0],
      setError = _useState6[1];

  var User = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.auth;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LandingpageClient_src_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "auth",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
        className: "auth-wave",
        src: _public_img_wave_png__WEBPACK_IMPORTED_MODULE_4__
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "auth-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "auth-img",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
            src: _public_img_bg_png__WEBPACK_IMPORTED_MODULE_5__
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "auth-login-content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "auth-form",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
              src: _public_img_avatar_png__WEBPACK_IMPORTED_MODULE_6__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
              className: "auth-title",
              children: "Welcome"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("p", {
              id: Error ? 'error' : 'noerror',
              children: ["*", Error]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "auth-input-div one",
              ref: oneRef,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "auth-i",
                ref: userRef,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                  className: "auth-ii",
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faUser
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "auth-div",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h5", {
                  ref: usernameRef,
                  children: "Username"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
                  type: "text",
                  autoComplete: "off",
                  value: username,
                  onChange: function onChange(e) {
                    return setUsername(e.target.value);
                  },
                  onBlur: function onBlur() {
                    oneRef.current.style.borderBottom = '2px solid #2d386e';
                    userRef.current.style.color = '#2d386e';
                    !username ? usernameRef.current.textContent = 'Username' : '';
                  },
                  onFocus: function onFocus(e) {
                    oneRef.current.style.borderBottom = '2px solid #38d39f';
                    usernameRef.current.textContent = '';
                    userRef.current.style.color = '#38d39f';
                  },
                  className: "auth-input"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "auth-input-div pass",
              ref: passRef,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "auth-i",
                ref: pwdRef,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                  className: "auth-ii",
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faLock
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "auth-div",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h5", {
                  ref: passwordRef,
                  children: "Password"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
                  type: "password",
                  value: password,
                  autoComplete: "off",
                  onChange: function onChange(e) {
                    return setPassword(e.target.value);
                  },
                  onBlur: function onBlur() {
                    passRef.current.style.borderBottom = '2px solid #2d386e';
                    pwdRef.current.style.color = '#2d386e';
                    !password ? passwordRef.current.textContent = 'Password' : '';
                  },
                  onFocus: function onFocus(e) {
                    passRef.current.style.borderBottom = '2px solid #38d39f';
                    passwordRef.current.textContent = '';
                    pwdRef.current.style.color = '#38d39f';
                  },
                  className: "auth-input"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
              className: "auth-a",
              to: "/auth/signup",
              children: "Don't have account?Signup"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
              type: "submit",
              onClick: function onClick(e) {
                return (0,_js_login__WEBPACK_IMPORTED_MODULE_7__["default"])(e, {
                  username: username,
                  password: password
                }, dispatch, _redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_10__.setUser, _redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_10__.setLoggedIn, navigate, setError, usernameRef, passwordRef);
              },
              className: "auth-btn",
              value: "Login"
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Outlet, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/Clients/AuthClient/src/js/login.js":
/*!************************************************!*\
  !*** ./src/Clients/AuthClient/src/js/login.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../js/cookie */ "./src/js/cookie.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var login = function login(e, loginData, dispatch, setUser, setLoggedIn, navigate, setError, usernameRef, passwordRef) {
  e.preventDefault();
  console.log('ngnix is working');
  axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'POST',
    url: '/login',
    data: {
      username: loginData.username,
      password: loginData.password
    },
    withCredentials: true
  }).then(function (res) {
    var auth = res.data;

    if (res.status === 200) {
      dispatch(setUser({
        id: auth.id,
        username: auth.username,
        firstname: auth.firstname,
        token: auth.toke
      }));
      dispatch(setLoggedIn());
      var object = {
        id: auth.id,
        username: auth.username,
        firstname: auth.firstname
      };
      localStorage.setItem('userData', JSON.stringify(object));
      navigate('/');
      return true;
    }

    var time = setTimeout(function () {
      navigate('/auth/signup');
      return false;
    }, 500);
    usernameRef.current.textContent = 'Username';
    passwordRef.current.textContent = 'Password';
    setError(auth.error);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/Clients/LandingpageClient/src/components/Navbar.jsx":
/*!*****************************************************************!*\
  !*** ./src/Clients/LandingpageClient/src/components/Navbar.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _public_img_newgen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../public/img/newgen.png */ "./public/img/newgen.png");
/* harmony import */ var _css_Navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/Navbar.css */ "./src/Clients/LandingpageClient/src/css/Navbar.css");
/* harmony import */ var _js_click__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/click */ "./src/Clients/LandingpageClient/src/js/click.js");
/* harmony import */ var _redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../redux/slices/authSlice */ "./src/redux/slices/authSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");














var logout = function logout(e, dispatch, navigate) {
  e.preventDefault();
  dispatch((0,_redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__.setLoggedIn)());
  navigate('/');
};

var Navbar = function Navbar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var User = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.auth;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dropbtnref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var userData = JSON.parse(localStorage.getItem('userData'));

    if (User.username === '' && userData) {
      dispatch((0,_redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__.setUser)({
        username: userData.username,
        firstname: userData.firstname
      }));
      dispatch((0,_redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__.setLoggedIn)());
    }

    dropbtnref.current.addEventListener('click', function () {
      navigate('/blog/new');
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("nav", {
    className: "lpage-nav",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "lpage-logo lpage-navbarLeft",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
        id: "lpage-navbarCompanyLogo",
        src: _public_img_newgen_png__WEBPACK_IMPORTED_MODULE_3__,
        alt: "img"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
      to: '/',
      className: "lpage-a",
      id: "lpage-home",
      children: "Home"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "lpage-navbarRight".concat(toggle),
      children: [
      /*#__PURE__*/

      /*!User.isLoggedIn ? */
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: '/auth/signup',
        className: "lpage-a",
        id: "lpage-about",
        children: "Signup"
      })
      /*:''*/
      ,
      /*#__PURE__*/

      /*User.profileCreated ?*/
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "dropdown",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "dropbtn",
          id: "btn-blog",
          ref: dropbtnref,
          children: "Blogs"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "dropdown-content",
          id: "drp-blog",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
            to: '/blog/new',
            children: "Create New"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
            to: '/blog/bulkupload',
            children: "Bulk Upload"
          })]
        })]
      })
      /*: ''*/
      ,
      /*#__PURE__*/

      /*!User.isLoggedIn ? */
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: '/auth/login',
        className: "lpage-a",
        id: "lpage-login",
        children: "Login"
      })
      /*: ''*/
      ,
      /*#__PURE__*/

      /* User.isLoggedIn ?*/
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "dropdown",
        id: "dropdown-btn",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "dropbtn",
          id: "lpage-profile",
          children: "VP"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "dropdown-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
            to: '/username',
            className: "lpage-a",
            children: "Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
            to: '/dashboard',
            className: "lpage-a",
            children: "Dashboard"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
            to: '/',
            className: "lpage-a",
            onClick: function onClick(e) {
              return logout(e, dispatch, navigate);
            },
            children: "Logout"
          })]
        })]
      })
      /*: ''*/
      ]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "lpage-navbarButton",
      onClick: function onClick(e) {
        (0,_js_click__WEBPACK_IMPORTED_MODULE_5__["default"])(e, toggle, setToggle);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        id: "lpage-span1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        id: "lpage-span2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        id: "lpage-span3"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/Clients/LandingpageClient/src/js/click.js":
/*!*******************************************************!*\
  !*** ./src/Clients/LandingpageClient/src/js/click.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var click = function click(e, toggle, setToggle) {
  e.preventDefault();

  if (toggle === '') {
    setToggle('Active');
  } else {
    setToggle('');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (click);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/js/cookie.js":
/*!**************************!*\
  !*** ./src/js/cookie.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function setCookie(cName, cValue, expDays) {
  var date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + date.toUTCString();
  document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCookie);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/Clients/AuthClient/src/css/loginform.css":
/*!******************************************************!*\
  !*** ./src/Clients/AuthClient/src/css/loginform.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/LandingpageClient/src/css/Navbar.css":
/*!**********************************************************!*\
  !*** ./src/Clients/LandingpageClient/src/css/Navbar.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/img/avatar.png":
/*!*******************************!*\
  !*** ./public/img/avatar.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/c800a62d41d3e534241c].png";

/***/ }),

/***/ "./public/img/bg.png":
/*!***************************!*\
  !*** ./public/img/bg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/949e27314c838c50c7d7].png";

/***/ }),

/***/ "./public/img/newgen.png":
/*!*******************************!*\
  !*** ./public/img/newgen.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ab49a17e7048400c5d73].png";

/***/ }),

/***/ "./public/img/wave.png":
/*!*****************************!*\
  !*** ./public/img/wave.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/40d1887aeaea7ecd70cb].png";

/***/ })

}]);
//# sourceMappingURL=src_Clients_AuthClient_src_component_LoginForm_jsx.clientbundle.js.map