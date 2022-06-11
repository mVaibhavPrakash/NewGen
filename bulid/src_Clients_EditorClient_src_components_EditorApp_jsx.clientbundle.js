(self["webpackChunknewgen"] = self["webpackChunknewgen"] || []).push([["src_Clients_EditorClient_src_components_EditorApp_jsx"],{

/***/ "./src/Clients/EditorClient/src/components/Editor.jsx":
/*!************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Editor.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/Clients/EditorClient/src/components/Navbar.jsx");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./src/Clients/EditorClient/src/components/Title.jsx");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Selector */ "./src/Clients/EditorClient/src/components/Selector.jsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ "./src/Clients/EditorClient/src/components/Input.jsx");
/* harmony import */ var _Submit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Submit */ "./src/Clients/EditorClient/src/components/Submit.jsx");
/* harmony import */ var _ShowPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShowPreview */ "./src/Clients/EditorClient/src/components/ShowPreview.jsx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideNav */ "./src/Clients/EditorClient/src/components/SideNav.jsx");
/* harmony import */ var _hooks_InputContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/InputContext */ "./src/Clients/EditorClient/src/hooks/InputContext.jsx");
/* harmony import */ var _hooks_EditContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/EditContext */ "./src/Clients/EditorClient/src/hooks/EditContext.jsx");
/* harmony import */ var _hooks_SelectedTextContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/SelectedTextContext */ "./src/Clients/EditorClient/src/hooks/SelectedTextContext.jsx");
/* harmony import */ var _hooks_RenderPreviewContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/RenderPreviewContext */ "./src/Clients/EditorClient/src/hooks/RenderPreviewContext.jsx");
/* harmony import */ var _css_editor_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/editor.css */ "./src/Clients/EditorClient/src/css/editor.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


















var Editor = function Editor(_ref) {
  var footerRef = _ref.footerRef;
  var SidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var EditRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var EditorDivRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var NavRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    footerRef.current.style.width = '100vw';
    return function () {
      footerRef.current.style.width = '100vw';
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      NavRef: NavRef,
      SidebarRef: SidebarRef,
      EditRef: EditRef,
      EditorDivRef: EditorDivRef,
      footerRef: footerRef
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      ref: EditRef,
      className: "editor-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        ref: EditorDivRef,
        className: "editor-editorDiv",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_hooks_InputContext__WEBPACK_IMPORTED_MODULE_8__.InputContextProvider, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_hooks_RenderPreviewContext__WEBPACK_IMPORTED_MODULE_11__.RenderPreviewContextProvider, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_hooks_SelectedTextContext__WEBPACK_IMPORTED_MODULE_10__.SelectedTextContextProvider, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                ModalRef: ModalRef
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_hooks_EditContext__WEBPACK_IMPORTED_MODULE_9__.EditContextProvider, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Submit__WEBPACK_IMPORTED_MODULE_5__.Submit, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ShowPreview__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  ModalRef: ModalRef
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        ref: SidebarRef,
        className: "editor-sideBarDiv",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_SideNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
          NavRef: NavRef,
          SidebarRef: SidebarRef,
          EditRef: EditRef,
          EditorDivRef: EditorDivRef,
          footerRef: footerRef
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

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

/***/ "./src/Clients/EditorClient/src/components/EditorApp.jsx":
/*!***************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/EditorApp.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./src/Clients/EditorClient/src/components/Editor.jsx");
/* harmony import */ var _css_editorapp_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/editorapp.css */ "./src/Clients/EditorClient/src/css/editorapp.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var EditorApp = function EditorApp(_ref) {
  var footerRef = _ref.footerRef;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "editor-editor-app",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Editor__WEBPACK_IMPORTED_MODULE_0__["default"], {
      footerRef: footerRef
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorApp);

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

/***/ "./src/Clients/EditorClient/src/components/Input.jsx":
/*!***********************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Input.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_InputContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/InputContext */ "./src/Clients/EditorClient/src/hooks/InputContext.jsx");
/* harmony import */ var _hooks_SelectedTextContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/SelectedTextContext */ "./src/Clients/EditorClient/src/hooks/SelectedTextContext.jsx");
/* harmony import */ var _js_selectInputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/selectInputText */ "./src/Clients/EditorClient/src/js/selectInputText.js");
/* harmony import */ var _css_input_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/input.css */ "./src/Clients/EditorClient/src/css/input.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








var Input = function Input() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_InputContext__WEBPACK_IMPORTED_MODULE_2__.InputContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      Input = _useContext2[0],
      setInput = _useContext2[1];

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_SelectedTextContext__WEBPACK_IMPORTED_MODULE_3__.SelectedTextContext),
      _useContext4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext3, 2),
      selected = _useContext4[0],
      setSelected = _useContext4[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
    id: "editor-input",
    autoFocus: true,
    placeholder: "Type something here!",
    className: "editor-blogInput",
    value: Input,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    onSelect: function onSelect(e) {
      return (0,_js_selectInputText__WEBPACK_IMPORTED_MODULE_4__["default"])(e, selected, setSelected, Input, setInput);
    }
  });
};

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

/***/ "./src/Clients/EditorClient/src/components/Navbar.jsx":
/*!************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Navbar.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _js_navToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/navToggle */ "./src/Clients/EditorClient/src/js/navToggle.js");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/navbar.css */ "./src/Clients/EditorClient/src/css/navbar.css");
/* harmony import */ var _public_img_newgen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../public/img/newgen.png */ "./public/img/newgen.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");










var Navbar = function Navbar(_ref) {
  var NavRef = _ref.NavRef,
      SidebarRef = _ref.SidebarRef,
      EditRef = _ref.EditRef,
      EditorDivRef = _ref.EditorDivRef,
      footerRef = _ref.footerRef;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav", {
    ref: NavRef,
    className: "editor-nav",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "editor-navbarLeft",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        id: "editor-navbarCompanyLogo",
        src: _public_img_newgen_png__WEBPACK_IMPORTED_MODULE_3__,
        alt: "img"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        to: '/',
        id: "editor-home",
        children: "Home"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "editor-navbarRight",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        id: "editor-cog",
        title: "Settings",
        onClick: function onClick() {
          (0,_js_navToggle__WEBPACK_IMPORTED_MODULE_1__.navToggle)(NavRef, SidebarRef, EditRef, EditorDivRef, footerRef);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCog,
          id: "editor-cog-btn"
        })
      })
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

/***/ "./src/Clients/EditorClient/src/components/Preview/Blockquote.jsx":
/*!************************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Blockquote.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Blog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.css */ "./src/Clients/EditorClient/src/components/Preview/Blog.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var Blockquote = function Blockquote(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "notepaper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("figure", {
      className: "quote",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("blockquote", {
        className: "curly-quotes",
        style: {
          display: 'inline'
        },
        children: props.children
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blockquote);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Code.jsx":
/*!******************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Code.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_preview_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/preview.css */ "./src/Clients/EditorClient/src/css/preview.css");
/* harmony import */ var _Blog_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.css */ "./src/Clients/EditorClient/src/components/Preview/Blog.css");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/prism.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");







var Code = function Code(props) {
  var match = /language-(\w+)/.exec(props.className || '');
  var result = [];
  props.inline === true ? result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre", {
    className: "inline-pre",
    children: props.children
  }, 1)) : result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    language: match !== null ? match[1] : null,
    CodeTag: code,
    customStyle: {
      height: '100%',
      backgroundColor: '#2d3e50',
      color: 'white',
      fontSize: '.36rem',
      marginTop: '12px'
    },
    children: props.children
  }, 2));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: result
  });
};

var code = function code(props) {
  var array = props.children[1].map(function (value, key) {
    if (value.type === "span") {
      var style;

      if (value.props.style.background !== undefined) {
        delete value.props.style.background;
        style = value.props.style;
      } else {
        var _value$props$style;

        style = (_value$props$style = value.props.style) !== null && _value$props$style !== void 0 ? _value$props$style : null;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: value.props.className,
        style: style,
        children: value.props.children
      }, key);
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
    style: {
      textShadow: 'none',
      background: 'none'
    },
    children: array
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Edit.jsx":
/*!******************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Edit.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_EditContext_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/EditContext.jsx */ "./src/Clients/EditorClient/src/hooks/EditContext.jsx");
/* harmony import */ var _hooks_InputContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/InputContext.jsx */ "./src/Clients/EditorClient/src/hooks/InputContext.jsx");
/* harmony import */ var _js_EditBlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/EditBlog */ "./src/Clients/EditorClient/src/js/EditBlog.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








var Edit = function Edit(props) {
  console.log(props);
  var style = {
    width: '25vw',
    height: '1rem',
    color: '#2d3e50',
    fontSize: '0.5rem',
    borderStyle: 'none',
    backgroundColor: 'rgb(50, 190, 143)'
  };

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_InputContext_jsx__WEBPACK_IMPORTED_MODULE_3__.InputContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      Input = _useContext2[0],
      setInput = _useContext2[1];

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_EditContext_jsx__WEBPACK_IMPORTED_MODULE_2__.EditContext),
      _useContext4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext3, 2),
      isEdit = _useContext4[0],
      setEdit = _useContext4[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
    id: "editor-edit-preview-button",
    style: style,
    onClick: function onClick(e) {
      e.preventDefault();
      (0,_js_EditBlog__WEBPACK_IMPORTED_MODULE_4__["default"])(props.ModalRef, props.data, setInput, setEdit);
    },
    children: "Edit Blog"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Heading1.jsx":
/*!**********************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Heading1.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var Heading1 = function Heading1(props) {
  var _style;

  var style = (_style = {
    textAlign: 'justify',
    fontSize: 'unset'
  }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "fontSize", '0.8rem'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "margin", '0.6rem 0 0.6rem 0'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "color", '#2d3e50'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "fontFamily", 'serif'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "fontSize", '0.96rem'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "lineHeight", '1.32rem'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "overflowWrap", 'break-word'), _style);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
    className: "editor-peview-head1",
    style: style,
    children: props.children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading1);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Heading2.jsx":
/*!**********************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Heading2.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var Heading2 = function Heading2(props) {
  var _style;

  var style = (_style = {
    textAlign: 'justify',
    fontSize: 'unset'
  }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "fontSize", '0.72rem'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "margin", '0.6rem 0 0.6rem 0'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "color", '#2d3e50'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "fontFamily", 'manrope'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "lineHeight", '0.80rem'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "overflowWrap", 'break-word'), _style);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
    className: "editor-preview-head2",
    style: style,
    children: props.children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading2);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Heading3.jsx":
/*!**********************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Heading3.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var Heading3 = function Heading3(props) {
  var _style;

  var style = (_style = {
    textAlign: 'justify',
    fontSize: 'unset'
  }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "fontSize", '0.62rem'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "margin", '0.6rem 0 0.6rem 0'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "color", '#2d3e50'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_style, "overflowWrap", 'break-word'), _style);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
    className: "editor-preview-head3",
    style: style,
    children: props.children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading3);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Image.jsx":
/*!*******************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Image.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var Image = function Image(props) {
  var style = {
    margin: '0.8rem 0 0.8rem 0',
    width: '100%',
    height: '600px'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
    src: props.src,
    style: style,
    className: "editor-previewImage"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/LiGenerator.jsx":
/*!*************************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/LiGenerator.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Blog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.css */ "./src/Clients/EditorClient/src/components/Preview/Blog.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var LiGenerator = function LiGenerator(props) {
  console.log(props);
  var array = props.props.children.map(function (value, key) {
    if (value.type === 'li') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        className: "editor-preview-li",
        style: {
          margin: '0 auto',
          color: '#111111',
          fontSize: '0.47rem',
          fontFamily: 'inter',
          lineHeight: '1.8',
          paddingLeft: '1.28571429em',
          textIndent: '-1.28571429em',
          marginBottom: '0.4rem',
          tabSize: '3'
        },
        children: value.props.children
      }, key);
    }
  });
  return array;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LiGenerator);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Link.jsx":
/*!******************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Link.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Blog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.css */ "./src/Clients/EditorClient/src/components/Preview/Blog.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var Link = function Link(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    id: "blog-link",
    href: props.href,
    target: "_blank",
    children: props.children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Olist.jsx":
/*!*******************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Olist.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LiGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiGenerator */ "./src/Clients/EditorClient/src/components/Preview/LiGenerator.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var Olist = function Olist(props) {
  var style = {
    listStylePosition: 'inside',
    margin: '0 auto',
    padding: '0',
    width: '100%',
    fontSize: '0.55rem',
    marginTop: '0.7rem',
    marginBottom: '0.7rem'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ol", {
    style: style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_LiGenerator__WEBPACK_IMPORTED_MODULE_0__["default"], {
      props: props
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Olist);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Paragraph.jsx":
/*!***********************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Paragraph.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Blog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.css */ "./src/Clients/EditorClient/src/components/Preview/Blog.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    className: "editor-preview-para",
    children: props.children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paragraph);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Preview.jsx":
/*!*********************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Preview.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var _css_preview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/preview.css */ "./src/Clients/EditorClient/src/css/preview.css");
/* harmony import */ var _Heading1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Heading1 */ "./src/Clients/EditorClient/src/components/Preview/Heading1.jsx");
/* harmony import */ var _Heading2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Heading2 */ "./src/Clients/EditorClient/src/components/Preview/Heading2.jsx");
/* harmony import */ var _Heading3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading3 */ "./src/Clients/EditorClient/src/components/Preview/Heading3.jsx");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Paragraph */ "./src/Clients/EditorClient/src/components/Preview/Paragraph.jsx");
/* harmony import */ var _UList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UList */ "./src/Clients/EditorClient/src/components/Preview/UList.jsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Image */ "./src/Clients/EditorClient/src/components/Preview/Image.jsx");
/* harmony import */ var _Blockquote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Blockquote */ "./src/Clients/EditorClient/src/components/Preview/Blockquote.jsx");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Code */ "./src/Clients/EditorClient/src/components/Preview/Code.jsx");
/* harmony import */ var _Olist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Olist */ "./src/Clients/EditorClient/src/components/Preview/Olist.jsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Link */ "./src/Clients/EditorClient/src/components/Preview/Link.jsx");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Edit */ "./src/Clients/EditorClient/src/components/Preview/Edit.jsx");
/* harmony import */ var _SubmitBlog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SubmitBlog */ "./src/Clients/EditorClient/src/components/Preview/SubmitBlog.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




















var Preview = function Preview(_ref) {
  var ModalRef = _ref.ModalRef,
      dat = _ref.dat;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var renderers = {
    h1: _Heading1__WEBPACK_IMPORTED_MODULE_3__["default"],
    h2: _Heading2__WEBPACK_IMPORTED_MODULE_4__["default"],
    h3: _Heading3__WEBPACK_IMPORTED_MODULE_5__["default"],
    p: _Paragraph__WEBPACK_IMPORTED_MODULE_6__["default"],
    img: _Image__WEBPACK_IMPORTED_MODULE_8__["default"],
    code: _Code__WEBPACK_IMPORTED_MODULE_10__["default"],
    ul: _UList__WEBPACK_IMPORTED_MODULE_7__["default"],
    ol: _Olist__WEBPACK_IMPORTED_MODULE_11__["default"],
    a: _Link__WEBPACK_IMPORTED_MODULE_12__["default"],
    blockquote: _Blockquote__WEBPACK_IMPORTED_MODULE_9__["default"]
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (data !== localStorage.getItem('data')) {
      setData(localStorage.getItem('data'));
    }
  }, [data, dat]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: "editor-preview",
    style: {
      marginBottom: '20px',
      overflow: 'scroll'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Edit__WEBPACK_IMPORTED_MODULE_13__["default"], {
        ModalRef: ModalRef,
        data: data
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_SubmitBlog__WEBPACK_IMPORTED_MODULE_14__["default"], {
        data: data
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_markdown__WEBPACK_IMPORTED_MODULE_16__.ReactMarkdown, {
      children: data,
      components: renderers
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preview);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/SubmitBlog.jsx":
/*!************************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/SubmitBlog.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var SubmitBlog = function SubmitBlog() {
  var style = {
    width: '25vw',
    height: '1rem',
    color: '#2d3e50',
    fontSize: '0.5rem',
    borderStyle: 'none',
    backgroundColor: 'rgb(50, 190, 143)'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
    id: "editor-submit-blog-btn",
    style: style,
    children: "Submit Blog"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitBlog);

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

/***/ "./src/Clients/EditorClient/src/components/Preview/UList.jsx":
/*!*******************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/UList.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LiGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiGenerator */ "./src/Clients/EditorClient/src/components/Preview/LiGenerator.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var UList = function UList(props) {
  var style = {
    listStylePosition: 'inside',
    margin: '0 auto',
    padding: '0',
    width: '100%',
    fontSize: '0.55rem',
    marginTop: '0.7rem',
    marginBottom: '0.7rem'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
    style: style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_LiGenerator__WEBPACK_IMPORTED_MODULE_0__["default"], {
      props: props
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UList);

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

/***/ "./src/Clients/EditorClient/src/components/Selector.jsx":
/*!**************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Selector.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _hooks_InputContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/InputContext */ "./src/Clients/EditorClient/src/hooks/InputContext.jsx");
/* harmony import */ var _hooks_RenderPreviewContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/RenderPreviewContext */ "./src/Clients/EditorClient/src/hooks/RenderPreviewContext.jsx");
/* harmony import */ var _hooks_SelectedTextContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/SelectedTextContext */ "./src/Clients/EditorClient/src/hooks/SelectedTextContext.jsx");
/* harmony import */ var _js_showPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/showPreview */ "./src/Clients/EditorClient/src/js/showPreview.js");
/* harmony import */ var _js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/markdownEdit */ "./src/Clients/EditorClient/src/js/markdownEdit.js");
/* harmony import */ var _css_selector_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/selector.css */ "./src/Clients/EditorClient/src/css/selector.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");














var Selector = function Selector(_ref) {
  var ModalRef = _ref.ModalRef;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_RenderPreviewContext__WEBPACK_IMPORTED_MODULE_4__.RenderPreviewContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      state = _useContext2[0],
      setState = _useContext2[1];

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_InputContext__WEBPACK_IMPORTED_MODULE_3__.InputContext),
      _useContext4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext3, 2),
      Input = _useContext4[0],
      setInput = _useContext4[1];

  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_SelectedTextContext__WEBPACK_IMPORTED_MODULE_5__.SelectedTextContext),
      _useContext6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext5, 2),
      selected = _useContext6[0],
      setSelected = _useContext6[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "editor-select",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "editor-selector",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        id: "editor-head-btn",
        "aria-label": "justify",
        title: "Header",
        onClick: function onClick(e) {
          return (0,_js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'head-btn', selected, Input, setInput);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faHeading
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        id: "editor-bold-btn",
        "aria-label": "justify",
        title: "Bold text",
        onClick: function onClick(e) {
          return (0,_js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'bold-btn', selected, Input, setInput);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faBold
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        id: "editor-italic-btn",
        "aria-label": "justify",
        title: "Italic text",
        onClick: function onClick(e) {
          return (0,_js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'italic-btn', selected, Input, setInput);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faItalic
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        id: "editor-block-btn",
        "aria-label": "justify",
        title: "Block Quote",
        onClick: function onClick(e) {
          return (0,_js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'block-btn', selected, Input, setInput);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faQuoteLeft
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        id: "editor-link-btn",
        "aria-label": "justify",
        title: "Link",
        onClick: function onClick(e) {
          return (0,_js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'link-btn', selected, Input, setInput);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faLink
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        id: "editor-code-btn",
        "aria-label": "justify",
        title: "Code",
        onClick: function onClick(e) {
          return (0,_js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'code-btn', selected, Input, setInput);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCode
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        id: "editor-image-btn",
        "aria-label": "justify",
        title: "Image",
        onClick: function onClick(e) {
          return (0,_js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'image-btn', selected, Input, setInput);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faImage
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        id: "editor-ul-btn",
        "aria-label": "justify",
        title: "Un-ordered List",
        onClick: function onClick(e) {
          return (0,_js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'ul-btn', selected, Input, setInput);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faListUl
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        id: "editor-ol-btn",
        "aria-label": "justify",
        title: "Ordered List",
        onClick: function onClick(e) {
          return (0,_js_markdownEdit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'ol-btn', selected, Input, setInput);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faListOl
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "editor-showpreview-div",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        "aria-label": "justify",
        title: "Serach Markdown Syntax",
        className: "editor-showpreview",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faMars
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        "aria-label": "justify",
        title: "Preview",
        className: "editor-showpreview",
        onClick: function onClick(e) {
          return (0,_js_showPreview__WEBPACK_IMPORTED_MODULE_6__["default"])(e, ModalRef, state, setState, Input);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faEye
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selector);

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

/***/ "./src/Clients/EditorClient/src/components/ShowPreview.jsx":
/*!*****************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/ShowPreview.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _Preview_Preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Preview/Preview */ "./src/Clients/EditorClient/src/components/Preview/Preview.jsx");
/* harmony import */ var _hooks_RenderPreviewContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/RenderPreviewContext */ "./src/Clients/EditorClient/src/hooks/RenderPreviewContext.jsx");
/* harmony import */ var _js_closeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/closeModal */ "./src/Clients/EditorClient/src/js/closeModal.js");
/* harmony import */ var _css_showPreview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/showPreview.css */ "./src/Clients/EditorClient/src/css/showPreview.css");
/* harmony import */ var _js_windows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/windows */ "./src/Clients/EditorClient/src/js/windows.js");
/* harmony import */ var _js_windows__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_windows__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");












var ShowPreview = function ShowPreview(_ref) {
  var ModalRef = _ref.ModalRef;
  var style = {
    width: '60vw',
    margin: '0 auto',
    height: 'auto'
  };

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_RenderPreviewContext__WEBPACK_IMPORTED_MODULE_4__.RenderPreviewContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      state = _useContext2[0],
      setState = _useContext2[1];

  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    ref: ModalRef,
    id: "editor-myModal",
    className: "editor-modal",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "editor-modal-content",
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "editor-close",
        onClick: function onClick(e) {
          return (0,_js_closeModal__WEBPACK_IMPORTED_MODULE_5__["default"])(e, ModalRef);
        },
        children: "\xD7"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Preview_Preview__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ModalRef: ModalRef,
        dat: state
      })]
    })
  }), document.getElementById('preview-portal'));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowPreview);

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

/***/ "./src/Clients/EditorClient/src/components/SideNav.jsx":
/*!*************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/SideNav.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_navToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/navToggle */ "./src/Clients/EditorClient/src/js/navToggle.js");
/* harmony import */ var _css_sideNav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/sideNav.css */ "./src/Clients/EditorClient/src/css/sideNav.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






var SideNav = function SideNav(_ref) {
  var NavRef = _ref.NavRef,
      SidebarRef = _ref.SidebarRef,
      EditRef = _ref.EditRef,
      EditorDivRef = _ref.EditorDivRef,
      footerRef = _ref.footerRef;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "editor-sideBar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      id: "editor-sideBar-button",
      onClick: function onClick() {
        (0,_js_navToggle__WEBPACK_IMPORTED_MODULE_0__.navToggle)(NavRef, SidebarRef, EditRef, EditorDivRef, footerRef);
      },
      children: ["X ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: "Close"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      id: "editor-sideBar-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        id: "editor-d",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          children: "Are you ready to publish?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "Double-check your article settings before publishing."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "editor-sideBar-content-div",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          children: "SEO Title (Optional)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          style: {
            wordBreak: 'break-word'
          },
          children: "The SEO Title will be shown in place of your Title on search engine results pages, such as a Google search. SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
          placeholder: "Enter meta title",
          id: "editor-textarea-seo-title"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "editor-sideBar-content-div",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          children: "SEO Description (Optional)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          style: {
            wordBreak: 'break-word'
          },
          children: "The SEO Description will be used in place of your Subtitle on search engine results pages. Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
          placeholder: "Enter meta description",
          id: "editor-textarea-seo-desc"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "editor-sideBar-content-div",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          children: "Disable comments?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "checkbox",
            name: "Yes",
            id: "editor-check"
          }), " Yes"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "editor-sideBar-content-div",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          children: "Disable comments?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "checkbox",
            name: "Yes",
            id: "editor-check"
          }), " Yes"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "editor-sideBar-content-div",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          children: "Disable comments?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "checkbox",
            name: "Yes",
            id: "editor-check"
          }), " Yes"]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideNav);

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

/***/ "./src/Clients/EditorClient/src/components/Submit.jsx":
/*!************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Submit.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submit": () => (/* binding */ Submit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_EditContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/EditContext */ "./src/Clients/EditorClient/src/hooks/EditContext.jsx");
/* harmony import */ var _hooks_InputContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/InputContext */ "./src/Clients/EditorClient/src/hooks/InputContext.jsx");
/* harmony import */ var _js_submitData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/submitData.js */ "./src/Clients/EditorClient/src/js/submitData.js");
/* harmony import */ var _css_submit_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/submit.css */ "./src/Clients/EditorClient/src/css/submit.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








var Submit = function Submit() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_InputContext__WEBPACK_IMPORTED_MODULE_3__.InputContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      Input = _useContext2[0],
      setInput = _useContext2[1];

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_EditContext__WEBPACK_IMPORTED_MODULE_2__.EditContext),
      _useContext4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext3, 2),
      isEdit = _useContext4[0],
      setEdit = _useContext4[1];

  var data;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    data = localStorage.getItem('data');
  }, [Input, isEdit]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "editor-submitDiv",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
      id: "editor-submitBlog",
      onClick: function onClick(e) {
        return (0,_js_submitData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(e, data, Input, setInput, isEdit, setEdit);
      },
      children: "Submit"
    })
  });
};

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

/***/ "./src/Clients/EditorClient/src/components/Title.jsx":
/*!***********************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Title.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_title_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/title.css */ "./src/Clients/EditorClient/src/css/title.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






var Title = function Title() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    title: "Enter Title of the Blog",
    className: "editor-title",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      type: "text",
      className: "editor-title-input",
      value: title,
      onChange: function onChange(e) {
        return setTitle(e.target.value);
      },
      placeholder: "tiTle!!"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

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

/***/ "./src/Clients/EditorClient/src/hooks/EditContext.jsx":
/*!************************************************************!*\
  !*** ./src/Clients/EditorClient/src/hooks/EditContext.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditContext": () => (/* binding */ EditContext),
/* harmony export */   "EditContextProvider": () => (/* binding */ EditContextProvider)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var EditContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
var EditContextProvider = function EditContextProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isEdit = _useState2[0],
      setEdit = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(EditContext.Provider, {
    value: [isEdit, setEdit],
    children: children
  });
};

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

/***/ "./src/Clients/EditorClient/src/hooks/InputContext.jsx":
/*!*************************************************************!*\
  !*** ./src/Clients/EditorClient/src/hooks/InputContext.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputContext": () => (/* binding */ InputContext),
/* harmony export */   "InputContextProvider": () => (/* binding */ InputContextProvider)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var InputContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
var InputContextProvider = function InputContextProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      Input = _useState2[0],
      setInput = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InputContext.Provider, {
    value: [Input, setInput],
    children: children
  });
};

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

/***/ "./src/Clients/EditorClient/src/hooks/RenderPreviewContext.jsx":
/*!*********************************************************************!*\
  !*** ./src/Clients/EditorClient/src/hooks/RenderPreviewContext.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPreviewContext": () => (/* binding */ RenderPreviewContext),
/* harmony export */   "RenderPreviewContextProvider": () => (/* binding */ RenderPreviewContextProvider)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var RenderPreviewContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
var RenderPreviewContextProvider = function RenderPreviewContextProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RenderPreviewContext.Provider, {
    value: [state, setState],
    children: children
  });
};

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

/***/ "./src/Clients/EditorClient/src/hooks/SelectedTextContext.jsx":
/*!********************************************************************!*\
  !*** ./src/Clients/EditorClient/src/hooks/SelectedTextContext.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectedTextContext": () => (/* binding */ SelectedTextContext),
/* harmony export */   "SelectedTextContextProvider": () => (/* binding */ SelectedTextContextProvider)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var SelectedTextContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
var SelectedTextContextProvider = function SelectedTextContextProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectedTextContext.Provider, {
    value: [selected, setSelected],
    children: children
  });
};

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

/***/ "./src/Clients/EditorClient/src/js/EditBlog.js":
/*!*****************************************************!*\
  !*** ./src/Clients/EditorClient/src/js/EditBlog.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var EditBlog = function EditBlog(ModalRef, data, setInput, setEdit) {
  ModalRef.current.style.display = 'none';
  setEdit(true);
  setInput(data);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditBlog);

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

/***/ "./src/Clients/EditorClient/src/js/closeModal.js":
/*!*******************************************************!*\
  !*** ./src/Clients/EditorClient/src/js/closeModal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var closeModal = function closeModal(e, ModalRef) {
  e.preventDefault();
  ModalRef.current.style.display = 'none';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeModal);

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

/***/ "./src/Clients/EditorClient/src/js/markdownEdit.js":
/*!*********************************************************!*\
  !*** ./src/Clients/EditorClient/src/js/markdownEdit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var markdownEdit = function markdownEdit(e, text, selected, Input, setInput) {
  e.preventDefault();

  if (Input) {
    var oldString = Input;
    var newString;

    if (text === 'bold-btn') {
      newString = '**' + selected.input + '**';
    }

    if (text === 'italic-btn') {
      newString = '*' + selected.input + '*';
    }

    if (text === 'head-btn') {
      newString = '\n' + '#' + ' ' + selected.input;
    }

    if (text === 'code-btn') {
      newString = '\n' + '~~~' + 'js' + '\n' + selected.input + '\n' + '~~~';
    }

    if (text === 'ul-btn') {
      newString = '\n' + '*' + ' ' + selected.input;
    }

    if (text === 'block-btn') {
      newString = '> ' + selected.input + '\n';
    }

    if (text === 'link-btn' || text === 'image-btn') {
      var array = selected.input.split(' ');
      var last = array.pop();
      var input = '[' + array.join(' ') + ']';
      input = input + '(' + last + ')';

      if (text === 'image-btn') {
        input = '!' + input;
      }

      newString = input;
    }

    setInput(oldString.substring(0, selected.start) + newString + oldString.substring(selected.end + 1, oldString.length));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markdownEdit);

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

/***/ "./src/Clients/EditorClient/src/js/navToggle.js":
/*!******************************************************!*\
  !*** ./src/Clients/EditorClient/src/js/navToggle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navToggle": () => (/* binding */ navToggle)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var navToggle = function navToggle(NavRef, SidebarRef, EditRef, EditorDivRef, footerRef) {
  if (EditRef.current.className === 'editor-editor') {
    SidebarRef.current.style.display = 'block';
    EditRef.current.className = 'editor-editorActive';
    EditorDivRef.current.style.margin = '0 1.7vw 0 3.3vw';
    NavRef.current.style.width = '65vw';
    footerRef.current.style.width = '65vw';
  } else {
    SidebarRef.current.style.display = 'none';
    EditRef.current.className = 'editor-editor';
    EditorDivRef.current.style.margin = '0 auto';
    NavRef.current.style.width = '100vw';
    footerRef.current.style.width = '100vw';
  }
};

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

/***/ "./src/Clients/EditorClient/src/js/selectInputText.js":
/*!************************************************************!*\
  !*** ./src/Clients/EditorClient/src/js/selectInputText.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var selectInputText = function selectInputText(e, selected, setSelected, Input, setInput) {
  e.preventDefault();

  if (Input) {
    var start = e.target.selectionStart;
    var end = e.target.selectionEnd;

    if (start !== end) {
      setSelected({
        start: start,
        end: end,
        input: Input.substring(start, end + 1)
      });
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectInputText);

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

/***/ "./src/Clients/EditorClient/src/js/showPreview.js":
/*!********************************************************!*\
  !*** ./src/Clients/EditorClient/src/js/showPreview.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var showPreview = function showPreview(e, ModalRef, state, setState, Input) {
  e.preventDefault();
  var data = localStorage.getItem('data');

  if (data) {
    ModalRef.current.style.display = 'block';
    if (state) setState(false);else setState(true);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPreview);

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

/***/ "./src/Clients/EditorClient/src/js/submitData.js":
/*!*******************************************************!*\
  !*** ./src/Clients/EditorClient/src/js/submitData.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var submitData = function submitData(e, data, Input, setInput, isEdit, setEdit) {
  e.preventDefault();

  if (Input) {
    if (data !== null) {
      if (!isEdit) localStorage.setItem('data', data.concat(Input));else {
        localStorage.setItem('data', Input);
        setEdit(false);
      }
    } else {
      localStorage.setItem('data', Input);
    }

    setInput('');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitData);

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

/***/ "./src/Clients/EditorClient/src/js/windows.js":
/*!****************************************************!*\
  !*** ./src/Clients/EditorClient/src/js/windows.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

document.onclick = function (event) {
  var modal = document.getElementById('editor-myModal');

  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

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

/***/ "./src/Clients/EditorClient/src/components/Preview/Blog.css":
/*!******************************************************************!*\
  !*** ./src/Clients/EditorClient/src/components/Preview/Blog.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/editor.css":
/*!*****************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/editor.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/editorapp.css":
/*!********************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/editorapp.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/input.css":
/*!****************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/input.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/navbar.css":
/*!*****************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/navbar.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/preview.css":
/*!******************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/preview.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/selector.css":
/*!*******************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/selector.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/showPreview.css":
/*!**********************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/showPreview.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/sideNav.css":
/*!******************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/sideNav.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/submit.css":
/*!*****************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/submit.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Clients/EditorClient/src/css/title.css":
/*!****************************************************!*\
  !*** ./src/Clients/EditorClient/src/css/title.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/img/newgen.png":
/*!*******************************!*\
  !*** ./public/img/newgen.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ab49a17e7048400c5d73].png";

/***/ })

}]);
//# sourceMappingURL=src_Clients_EditorClient_src_components_EditorApp_jsx.clientbundle.js.map