"use strict";
(self["webpackChunknewgen"] = self["webpackChunknewgen"] || []).push([["src_Clients_ProfileClient_src_components_Profile_jsx"],{

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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var userData = JSON.parse(localStorage.getItem('userData'));

    if (User.username === '' && userData) {
      dispatch((0,_redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__.setUser)({
        username: userData.username,
        firstname: userData.firstname
      }));
      dispatch((0,_redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__.setLoggedIn)());
    }
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
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
          children: "Blogs"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "dropdown-content",
          id: "drp-blog",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
            to: '/blog/new',
            children: "Create New"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
            to: '/dashboard',
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

/***/ "./src/Clients/ProfileClient/src/components/Profile.jsx":
/*!**************************************************************!*\
  !*** ./src/Clients/ProfileClient/src/components/Profile.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LandingpageClient_src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LandingpageClient/src/components/Navbar */ "./src/Clients/LandingpageClient/src/components/Navbar.jsx");
/* harmony import */ var _css_profile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/profile.css */ "./src/Clients/ProfileClient/src/css/profile.css");
/* harmony import */ var _public_img_wave_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../public/img/wave.png */ "./public/img/wave.png");
/* harmony import */ var _js_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/profile */ "./src/Clients/ProfileClient/src/js/profile.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");











var Profile = function Profile(_ref) {
  var footerRef = _ref.footerRef;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Edit'),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      Status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      Name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      UserName = _useState6[0],
      setUserName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      DOB = _useState8[0],
      setDOB = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      Bio = _useState10[0],
      setBio = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      About = _useState12[0],
      setAbout = _useState12[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LandingpageClient_src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "auth",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
        className: "auth-wave",
        src: _public_img_wave_png__WEBPACK_IMPORTED_MODULE_4__
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "profile",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        id: "h2div",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          children: "User Profile"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          onClick: function onClick(e) {
            e.preventDefault();
            (0,_js_profile__WEBPACK_IMPORTED_MODULE_5__["default"])({
              Name: Name,
              UserName: UserName,
              DOB: DOB,
              Bio: Bio,
              About: About
            }, setStatus);
          },
          disabled: Status === 'Edit' ? false : true,
          children: Status
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        id: "profile-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          id: "profile-d",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: "You can change your profile here, click on Edit option to edit"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "profile-content-div",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: "Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "Your name appears on your Profile page, as your byline, and in your responses. It is a required field. "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "Ex:- Aman",
            id: "profile-textarea",
            name: "fullname",
            value: Name,
            onChange: function onChange(e) {
              return setName(e.target.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "profile-content-div",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: "Username"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "Your username appears on your Profile page, as your byline, and in your responses. It is a required field."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "Ex:- striver",
            id: "profile-textarea",
            name: "username",
            value: UserName,
            onChange: function onChange(e) {
              return setUserName(e.target.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "profile-content-div",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: "Short Bio"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "Your short bio appears on your Profile and next to your stories. Max 160 characters. "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "Enter bio details",
            id: "profile-textarea-seo-desc",
            name: "bio",
            value: Bio,
            onChange: function onChange(e) {
              return setBio(e.target.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "profile-content-div",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: "D.O.B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "Date of Birth"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              type: "date",
              id: "profile-input",
              name: "dob",
              value: DOB,
              onChange: function onChange(e) {
                return setDOB(e.target.value);
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "profile-content-div",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: "About you"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "This page should tell your readers more about you and explain the benefits of reading your work."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "Enter details here",
            id: "profile-textarea",
            name: "about",
            value: About,
            onChange: function onChange(e) {
              return setAbout(e.target.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "profile-content-div",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: "Tech Stack"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "This will tell your readers about your area of expertise. Enter comma(,)seperated values"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "Enter tech stack, comma (,) seperated",
            id: "profile-textarea",
            name: "about",
            value: About,
            onChange: function onChange(e) {
              return setAbout(e.target.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "profile-content-div",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: "Social"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "Twitter Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "https://twitter.com/",
            id: "profile-textarea",
            name: "about",
            value: About,
            onChange: function onChange(e) {
              return setAbout(e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "LinkedIn Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "https://linkedin.com/",
            id: "profile-textarea",
            name: "about",
            value: About,
            onChange: function onChange(e) {
              return setAbout(e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "Stackoverflow Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "https://stackoverflow.com/",
            id: "profile-textarea",
            name: "about",
            value: About,
            onChange: function onChange(e) {
              return setAbout(e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "Github Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "https://github.com/",
            id: "profile-textarea",
            name: "about",
            value: About,
            onChange: function onChange(e) {
              return setAbout(e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "Personal Website"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "https://xyz.com/",
            id: "profile-textarea",
            name: "about",
            value: About,
            onChange: function onChange(e) {
              return setAbout(e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            style: {
              wordBreak: 'break-word'
            },
            children: "Youtube Channel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
            placeholder: "https://youtube.com/",
            id: "profile-textarea",
            name: "about",
            value: About,
            onChange: function onChange(e) {
              return setAbout(e.target.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "profile-content-div",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: "Email Address(Not changeable)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {})]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

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

/***/ "./src/Clients/ProfileClient/src/js/profile.js":
/*!*****************************************************!*\
  !*** ./src/Clients/ProfileClient/src/js/profile.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var EditProfile = function EditProfile(obj, setStatus) {
  axios__WEBPACK_IMPORTED_MODULE_0___default().post({
    method: 'POST',
    url: '/signup',
    data: obj
  }).then(function (res) {
    setStatus('Saved');

    if (res.status === 200) {
      setStatus('Saved');
      var time = setTimeout(function () {
        setStatus('Edit');
      }, 500);
      clearTimeout(time);
    } else {
      setStatus('Try Again');

      var _time = setTimeout(function () {
        setStatus('Edit');
      }, 500);

      clearTimeout(_time);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProfile);

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

/***/ "./src/Clients/LandingpageClient/src/css/Navbar.css":
/*!**********************************************************!*\
  !*** ./src/Clients/LandingpageClient/src/css/Navbar.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/ProfileClient/src/css/profile.css":
/*!*******************************************************!*\
  !*** ./src/Clients/ProfileClient/src/css/profile.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
//# sourceMappingURL=src_Clients_ProfileClient_src_components_Profile_jsx.clientbundle.js.map