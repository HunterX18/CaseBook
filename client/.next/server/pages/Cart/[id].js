(function() {
var exports = {};
exports.id = "pages/Cart/[id]";
exports.ids = ["pages/Cart/[id]"];
exports.modules = {

/***/ "./components/utils/verification.js":
/*!******************************************!*\
  !*** ./components/utils/verification.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../keys */ "./keys.js");



const verification = token => {
  let verified;

  try {
    verified = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, _keys__WEBPACK_IMPORTED_MODULE_1__.secret_key);
  } catch (err) {
    return {
      error: "Cannot Verify"
    };
  }

  return verified;
};

/* harmony default export */ __webpack_exports__["default"] = (verification);

/***/ }),

/***/ "./pages/Cart/[id].js":
/*!****************************!*\
  !*** ./pages/Cart/[id].js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/queries */ "./components/queries.js");
/* harmony import */ var _components_utils_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/utils/apollo */ "./components/utils/apollo.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_utils_verification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/utils/verification */ "./components/utils/verification.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-stripe-checkout */ "react-stripe-checkout");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\srsah\\Desktop\\CaseBook\\client\\pages\\Cart\\[id].js";










const Cart = ({
  data: {
    cart
  },
  price
}) => {
  const {
    uid,
    role
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();
  const {
    0: mycart,
    1: setMycart
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(cart);
  const {
    0: totalprice,
    1: setTotalprice
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(price);
  const [cartOperation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_1__.addToCartMutation);
  const [checkout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_1__.checkoutMutation);

  const handleRemoveFromCart = async book => {
    const newCart = await cartOperation({
      variables: {
        bookId: book._id,
        type: "REMOVE",
        customerId: uid
      }
    });
    setTotalprice(prevPrice => prevPrice - book.price);
    setMycart(newCart.data.addToCart);
  };

  const handlePayment = async paymentInfo => {
    console.log(paymentInfo);
    await checkout({
      variables: {
        id: uid
      }
    });
    next_router__WEBPACK_IMPORTED_MODULE_9___default().push("/");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      padding: "20px"
    },
    children: [mycart && mycart.map(({
      item,
      quantity
    }, ind) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card mb-3",
        style: {
          maxWidth: "600px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row g-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: item.image,
              width: "200px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 10
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 9
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "card-title",
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "card-title",
                children: ["Price: $", item.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                className: "card-title",
                children: ["Quantity: ", quantity]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: "nav flex-column",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: `/bookDetails/${item._id}`,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "btn btn-primary",
                      style: {
                        padding: "2px",
                        margin: "2px"
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                        children: "View Book"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 15
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 14
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: `/AddToCart/${item._id}`,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "btn btn-primary",
                      style: {
                        padding: "2px",
                        margin: "2px"
                      },
                      children: "Change Quantity"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 14
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    type: "button",
                    className: "btn btn-primary",
                    style: {
                      padding: "2px",
                      margin: "2px"
                    },
                    onClick: () => handleRemoveFromCart(item),
                    children: "Remove From Cart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 12
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 11
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 10
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 8
        }, undefined)
      }, ind, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }, undefined);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ["Total Price:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge bg-info text-dark",
        children: ["$", totalprice]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_stripe_checkout__WEBPACK_IMPORTED_MODULE_8___default()), {
      name: "CaseBook",
      amount: totalprice * 100,
      currency: "USD",
      shippingAddress: true,
      billingAddress: true,
      zipCode: true,
      stripeKey: "pk_test_51J3v0OSCBrcjAr84yvK2APPpP1SIhDF9YGNrH3OOZEOdb16PWz6OmrLGQOhQoV2DPC63SBNGv8ZK67y2stCdvveq00eitvU64k",
      token: paymentInfo => handlePayment(paymentInfo),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: "btn btn-success",
        children: "Proceed To Payment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, undefined);
};

const getServerSideProps = async ctx => {
  const {
    auth
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(ctx);
  const verify = (0,_components_utils_verification__WEBPACK_IMPORTED_MODULE_7__.default)(auth);

  if (verify.error) {
    return {
      redirect: {
        permanent: false,
        destination: "/Signin"
      },
      props: {}
    };
  }

  const apolloClient = (0,_components_utils_apollo__WEBPACK_IMPORTED_MODULE_2__.initializeApollo)();
  const {
    data
  } = await apolloClient.query({
    query: _components_queries__WEBPACK_IMPORTED_MODULE_1__.getCartQuery,
    variables: {
      id: ctx.params.id
    }
  });
  let price = 0;
  data.cart.map(book => price += book.quantity * book.item.price);
  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
      data,
      price
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Cart);

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

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

/***/ "react-stripe-checkout":
/*!****************************************!*\
  !*** external "react-stripe-checkout" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-stripe-checkout");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_resolvers_js-components_typeDefs_js","components_utils_apollo_js","components_queries_js"], function() { return __webpack_exec__("./pages/Cart/[id].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9DYXJ0L1tpZF0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3Qtc3RyaXBlLWNoZWNrb3V0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2lnbm9yZWR8QzpcXFVzZXJzXFxzcnNhaFxcRGVza3RvcFxcQ2FzZUJvb2tcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbInZlcmlmaWNhdGlvbiIsInRva2VuIiwidmVyaWZpZWQiLCJ2ZXJpZnkiLCJzZWNyZXRfa2V5IiwiZXJyIiwiZXJyb3IiLCJDYXJ0IiwiZGF0YSIsImNhcnQiLCJwcmljZSIsInVpZCIsInJvbGUiLCJwYXJzZUNvb2tpZXMiLCJteWNhcnQiLCJzZXRNeWNhcnQiLCJ1c2VTdGF0ZSIsInRvdGFscHJpY2UiLCJzZXRUb3RhbHByaWNlIiwiY2FydE9wZXJhdGlvbiIsInVzZU11dGF0aW9uIiwiYWRkVG9DYXJ0TXV0YXRpb24iLCJjaGVja291dCIsImNoZWNrb3V0TXV0YXRpb24iLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsImJvb2siLCJuZXdDYXJ0IiwidmFyaWFibGVzIiwiYm9va0lkIiwiX2lkIiwidHlwZSIsImN1c3RvbWVySWQiLCJwcmV2UHJpY2UiLCJhZGRUb0NhcnQiLCJoYW5kbGVQYXltZW50IiwicGF5bWVudEluZm8iLCJjb25zb2xlIiwibG9nIiwiaWQiLCJSb3V0ZXIiLCJwYWRkaW5nIiwibWFwIiwiaXRlbSIsInF1YW50aXR5IiwiaW5kIiwibWF4V2lkdGgiLCJpbWFnZSIsIm5hbWUiLCJtYXJnaW4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJhdXRoIiwicmVkaXJlY3QiLCJwZXJtYW5lbnQiLCJkZXN0aW5hdGlvbiIsInByb3BzIiwiYXBvbGxvQ2xpZW50IiwiaW5pdGlhbGl6ZUFwb2xsbyIsInF1ZXJ5IiwiZ2V0Q2FydFF1ZXJ5IiwicGFyYW1zIiwiaW5pdGlhbGl6ZUFwb2xsb1N0YXRlIiwiY2FjaGUiLCJleHRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDL0IsTUFBSUMsUUFBSjs7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L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHNlY3JldF9rZXkgfSBmcm9tIFwiLi4vLi4va2V5c1wiO1xyXG5cclxuY29uc3QgdmVyaWZpY2F0aW9uID0gKHRva2VuKSA9PiB7XHJcblx0bGV0IHZlcmlmaWVkO1xyXG5cdHRyeSB7XHJcblx0XHR2ZXJpZmllZCA9IHZlcmlmeSh0b2tlbiwgc2VjcmV0X2tleSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXR1cm4geyBlcnJvcjogXCJDYW5ub3QgVmVyaWZ5XCIgfTtcclxuXHR9XHJcblx0cmV0dXJuIHZlcmlmaWVkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmVyaWZpY2F0aW9uO1xyXG4iLCJpbXBvcnQge1xyXG5cdGFkZFRvQ2FydE11dGF0aW9uLFxyXG5cdGNoZWNrb3V0TXV0YXRpb24sXHJcblx0Z2V0Q2FydFF1ZXJ5LFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsb1wiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB2ZXJpZmljYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvdmVyaWZpY2F0aW9uXCI7XHJcbmltcG9ydCBTdHJpcGVDaGVja291dCBmcm9tIFwicmVhY3Qtc3RyaXBlLWNoZWNrb3V0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBDYXJ0ID0gKHsgZGF0YTogeyBjYXJ0IH0sIHByaWNlIH0pID0+IHtcclxuXHRjb25zdCB7IHVpZCwgcm9sZSB9ID0gcGFyc2VDb29raWVzKCk7XHJcblx0Y29uc3QgW215Y2FydCwgc2V0TXljYXJ0XSA9IHVzZVN0YXRlKGNhcnQpO1xyXG5cdGNvbnN0IFt0b3RhbHByaWNlLCBzZXRUb3RhbHByaWNlXSA9IHVzZVN0YXRlKHByaWNlKTtcclxuXHRjb25zdCBbY2FydE9wZXJhdGlvbl0gPSB1c2VNdXRhdGlvbihhZGRUb0NhcnRNdXRhdGlvbik7XHJcblx0Y29uc3QgW2NoZWNrb3V0XSA9IHVzZU11dGF0aW9uKGNoZWNrb3V0TXV0YXRpb24pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9IGFzeW5jIChib29rKSA9PiB7XHJcblx0XHRjb25zdCBuZXdDYXJ0ID0gYXdhaXQgY2FydE9wZXJhdGlvbih7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGJvb2tJZDogYm9vay5faWQsXHJcblx0XHRcdFx0dHlwZTogXCJSRU1PVkVcIixcclxuXHRcdFx0XHRjdXN0b21lcklkOiB1aWQsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHNldFRvdGFscHJpY2UoKHByZXZQcmljZSkgPT4gcHJldlByaWNlIC0gYm9vay5wcmljZSk7XHJcblx0XHRzZXRNeWNhcnQobmV3Q2FydC5kYXRhLmFkZFRvQ2FydCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUGF5bWVudCA9IGFzeW5jIChwYXltZW50SW5mbykgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocGF5bWVudEluZm8pO1xyXG5cdFx0YXdhaXQgY2hlY2tvdXQoeyB2YXJpYWJsZXM6IHsgaWQ6IHVpZCB9IH0pO1xyXG5cdFx0Um91dGVyLnB1c2goXCIvXCIpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG5cdFx0XHR7bXljYXJ0ICYmXHJcblx0XHRcdFx0bXljYXJ0Lm1hcCgoeyBpdGVtLCBxdWFudGl0eSB9LCBpbmQpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0zXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNjAwcHhcIiB9fSBrZXk9e2luZH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZy0wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpdGVtLmltYWdlfSB3aWR0aD1cIjIwMHB4XCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2l0ZW0ubmFtZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UHJpY2U6ICR7aXRlbS5wcmljZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UXVhbnRpdHk6IHtxdWFudGl0eX08L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXYgZmxleC1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2Jvb2tEZXRhaWxzLyR7aXRlbS5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiLCBtYXJnaW46IFwiMnB4XCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDY+VmlldyBCb29rPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9BZGRUb0NhcnQvJHtpdGVtLl9pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmc6IFwiMnB4XCIsIG1hcmdpbjogXCIycHhcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdENoYW5nZSBRdWFudGl0eVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiLCBtYXJnaW46IFwiMnB4XCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGcm9tQ2FydChpdGVtKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlbW92ZSBGcm9tIENhcnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PGgxPlxyXG5cdFx0XHRcdFRvdGFsIFByaWNlOntcIiBcIn1cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiZy1pbmZvIHRleHQtZGFya1wiPiR7dG90YWxwcmljZX08L3NwYW4+XHJcblx0XHRcdDwvaDE+XHJcblx0XHRcdDxTdHJpcGVDaGVja291dFxyXG5cdFx0XHRcdG5hbWU9XCJDYXNlQm9va1wiXHJcblx0XHRcdFx0YW1vdW50PXt0b3RhbHByaWNlICogMTAwfVxyXG5cdFx0XHRcdGN1cnJlbmN5PVwiVVNEXCJcclxuXHRcdFx0XHRzaGlwcGluZ0FkZHJlc3M9e3RydWV9XHJcblx0XHRcdFx0YmlsbGluZ0FkZHJlc3M9e3RydWV9XHJcblx0XHRcdFx0emlwQ29kZT17dHJ1ZX1cclxuXHRcdFx0XHRzdHJpcGVLZXk9XCJwa190ZXN0XzUxSjN2ME9TQ0JyY2pBcjg0eXZLMkFQUHBQMVNJaERGOVlHTnJIM09PWkVPZGIxNlBXejZPbXJMR1FPaFFvVjJEUEM2M1NCTkd2OFpLNjd5MnN0Q2R2dmVxMDBlaXR2VTY0a1wiXHJcblx0XHRcdFx0dG9rZW49eyhwYXltZW50SW5mbykgPT4gaGFuZGxlUGF5bWVudChwYXltZW50SW5mbyl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cclxuXHRcdFx0XHRcdFByb2NlZWQgVG8gUGF5bWVudFxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L1N0cmlwZUNoZWNrb3V0PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0Y29uc3QgeyBhdXRoIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHRjb25zdCB2ZXJpZnkgPSB2ZXJpZmljYXRpb24oYXV0aCk7XHJcblx0aWYgKHZlcmlmeS5lcnJvcikge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9TaWduaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuXHRcdHF1ZXJ5OiBnZXRDYXJ0UXVlcnksXHJcblx0XHR2YXJpYWJsZXM6IHsgaWQ6IGN0eC5wYXJhbXMuaWQgfSxcclxuXHR9KTtcclxuXHRsZXQgcHJpY2UgPSAwO1xyXG5cdGRhdGEuY2FydC5tYXAoKGJvb2spID0+IChwcmljZSArPSBib29rLnF1YW50aXR5ICogYm9vay5pdGVtLnByaWNlKSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7IGluaXRpYWxpemVBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSwgZGF0YSwgcHJpY2UgfSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RyaXBlLWNoZWNrb3V0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=