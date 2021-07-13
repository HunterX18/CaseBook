(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\srsah\\Desktop\\CaseBook\\client\\components\\Navbar.js";





const Navbar = () => {
  const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();
  const signedin = cookies.signedin ? true : false;
  const role = cookies.role;
  const uid = cookies.uid;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const handleSignout = async () => {
    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(null, "signedin");
    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(null, "role");
    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(null, "uid");
    const res = await fetch("/api/signout");
    const data = await res.json();
    console.log(data);
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-dark sticky-top",
      style: {
        backgroundColor: "#e3f2fd"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "navbar-brand",
          children: "CaseBook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "nav nav-tabs",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "nav-link",
                "aria-current": "page",
                style: {
                  color: "white"
                },
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, undefined), signedin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [role == "customer" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/Cart/${uid}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "nav-link",
                  "aria-current": "page",
                  style: {
                    color: "white"
                  },
                  children: "My Cart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 10
            }, undefined), role == "seller" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: `/MyProducts/${uid}`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    "aria-current": "page",
                    style: {
                      color: "white"
                    },
                    children: "My Products"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/Create",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    "aria-current": "page",
                    style: {
                      color: "white"
                    },
                    children: "Add Products"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 11
              }, undefined)]
            }, void 0, true), role == "admin" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: `/Customers`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    "aria-current": "page",
                    style: {
                      color: "white"
                    },
                    children: "All Customers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/Sellers",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    "aria-current": "page",
                    style: {
                      color: "white"
                    },
                    children: "All Sellers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/Admins",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    "aria-current": "page",
                    style: {
                      color: "white"
                    },
                    children: "All Admins"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/AddAdmin",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    "aria-current": "page",
                    style: {
                      color: "white"
                    },
                    children: "Add Admin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 11
              }, undefined)]
            }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "#",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "nav-link",
                  style: {
                    color: "#dc3545"
                  },
                  onClick: handleSignout,
                  children: "Signout"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 11
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 9
            }, undefined)]
          }, void 0, true), !signedin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/Signin",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "nav-link",
                  "aria-current": "page",
                  style: {
                    color: "white"
                  },
                  children: "Sign In"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 11
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/Signup",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "nav-link",
                  "aria-current": "page",
                  style: {
                    color: "white"
                  },
                  children: "Sign up"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 11
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 9
            }, undefined)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_utils_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils/apollo */ "./components/utils/apollo.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\srsah\\Desktop\\CaseBook\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  const client = (0,_components_utils_apollo__WEBPACK_IMPORTED_MODULE_3__.useApollo)(pageProps.initialApolloState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {
    client: client,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/link/schema":
/*!*********************************************!*\
  !*** external "@apollo/client/link/schema" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/link/schema");;

/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@graphql-tools/schema");;

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcrypt");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_utils_apollo_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWFcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NsaWVudC9pZ25vcmVkfEM6XFxVc2Vyc1xcc3JzYWhcXERlc2t0b3BcXENhc2VCb29rXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJjb29raWVzIiwicGFyc2VDb29raWVzIiwic2lnbmVkaW4iLCJyb2xlIiwidWlkIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlU2lnbm91dCIsImRlc3Ryb3lDb29raWUiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ1c2VBcG9sbG8iLCJpbml0aWFsQXBvbGxvU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNwQixRQUFNQyxPQUFPLEdBQUdDLHFEQUFZLEVBQTVCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHRixPQUFPLENBQUNFLFFBQVIsR0FBbUIsSUFBbkIsR0FBMEIsS0FBM0M7QUFDQSxRQUFNQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0csSUFBckI7QUFDQSxRQUFNQyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0ksR0FBcEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLFFBQU1DLGFBQWEsR0FBRyxZQUFZO0FBQ2pDQywwREFBYSxDQUFDLElBQUQsRUFBTyxVQUFQLENBQWI7QUFDQUEsMERBQWEsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFiO0FBQ0FBLDBEQUFhLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBYjtBQUNBLFVBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsY0FBRCxDQUF2QjtBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUksMkRBQUEsQ0FBWSxHQUFaO0FBQ0EsR0FSRDs7QUFVQSxzQkFDQztBQUFBLDJCQUNDO0FBQ0MsZUFBUyxFQUFDLHdEQURYO0FBRUMs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O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUsIHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcygpO1xyXG5cdGNvbnN0IHNpZ25lZGluID0gY29va2llcy5zaWduZWRpbiA/IHRydWUgOiBmYWxzZTtcclxuXHRjb25zdCByb2xlID0gY29va2llcy5yb2xlO1xyXG5cdGNvbnN0IHVpZCA9IGNvb2tpZXMudWlkO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVTaWdub3V0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0ZGVzdHJveUNvb2tpZShudWxsLCBcInNpZ25lZGluXCIpO1xyXG5cdFx0ZGVzdHJveUNvb2tpZShudWxsLCBcInJvbGVcIik7XHJcblx0XHRkZXN0cm95Q29va2llKG51bGwsIFwidWlkXCIpO1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3NpZ25vdXRcIik7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0Um91dGVyLnB1c2goXCIvXCIpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8bmF2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFyayBzdGlja3ktdG9wXCJcclxuXHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2UzZjJmZFwiIH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+Q2FzZUJvb2s8L2E+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY3VycmVudD1cInBhZ2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEhvbWVcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdHtzaWduZWRpbiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdHtyb2xlID09IFwiY3VzdG9tZXJcIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvQ2FydC8ke3VpZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jdXJyZW50PVwicGFnZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0TXkgQ2FydFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHR7cm9sZSA9PSBcInNlbGxlclwiICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvTXlQcm9kdWN0cy8ke3VpZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jdXJyZW50PVwicGFnZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0TXkgUHJvZHVjdHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL0NyZWF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGQgUHJvZHVjdHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdHtyb2xlID09IFwiYWRtaW5cIiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL0N1c3RvbWVyc2B9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBbGwgQ3VzdG9tZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9TZWxsZXJzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY3VycmVudD1cInBhZ2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFsbCBTZWxsZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9BZG1pbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jdXJyZW50PVwicGFnZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWxsIEFkbWluc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvQWRkQWRtaW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jdXJyZW50PVwicGFnZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWRkIEFkbWluXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IFwiI2RjMzU0NVwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVTaWdub3V0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNpZ25vdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdHshc2lnbmVkaW4gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9TaWduaW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jdXJyZW50PVwicGFnZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBJblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1NpZ251cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTaWduIHVwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlscy9hcG9sbG9cIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXHRjb25zdCBjbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzLmluaXRpYWxBcG9sbG9TdGF0ZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuXHRcdFx0PE5hdmJhciAvPlxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdDwvQXBvbGxvUHJvdmlkZXI+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==