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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_utils_apollo_js","components_queries_js"], function() { return __webpack_exec__("./pages/Cart/[id].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9DYXJ0L1tpZF0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3Qtc3RyaXBlLWNoZWNrb3V0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidmVyaWZpY2F0aW9uIiwidG9rZW4iLCJ2ZXJpZmllZCIsInZlcmlmeSIsInNlY3JldF9rZXkiLCJlcnIiLCJlcnJvciIsIkNhcnQiLCJkYXRhIiwiY2FydCIsInByaWNlIiwidWlkIiwicm9sZSIsInBhcnNlQ29va2llcyIsIm15Y2FydCIsInNldE15Y2FydCIsInVzZVN0YXRlIiwidG90YWxwcmljZSIsInNldFRvdGFscHJpY2UiLCJjYXJ0T3BlcmF0aW9uIiwidXNlTXV0YXRpb24iLCJhZGRUb0NhcnRNdXRhdGlvbiIsImNoZWNrb3V0IiwiY2hlY2tvdXRNdXRhdGlvbiIsImhhbmRsZVJlbW92ZUZyb21DYXJ0IiwiYm9vayIsIm5ld0NhcnQiLCJ2YXJpYWJsZXMiLCJib29rSWQiLCJfaWQiLCJ0eXBlIiwiY3VzdG9tZXJJZCIsInByZXZQcmljZSIsImFkZFRvQ2FydCIsImhhbmRsZVBheW1lbnQiLCJwYXltZW50SW5mbyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIlJvdXRlciIsInBhZGRpbmciLCJtYXAiLCJpdGVtIiwicXVhbnRpdHkiLCJpbmQiLCJtYXhXaWR0aCIsImltYWdlIiwibmFtZSIsIm1hcmdpbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImF1dGgiLCJyZWRpcmVjdCIsInBlcm1hbmVudCIsImRlc3RpbmF0aW9uIiwicHJvcHMiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwicXVlcnkiLCJnZXRDYXJ0UXVlcnkiLCJwYXJhbXMiLCJpbml0aWFsaXplQXBvbGxvU3RhdGUiLCJjYWNoZSIsImV4dHJhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUMvQixNQUFJQyxRQUFKOztBQUNBLE1BQUk7QUFDSEEsWUFBUSxHQUFHQyxvREFBTSxDQUFDRixLQUFELEVBQVFHLDZDQUFSLENBQWpCO0FBQ0EsR0FGRCxDQUVFLE9BQU9DLEdBQVAsRUFBWTtBQUNiLFdBQU87QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBUDtBQUNBOztBQUNELFNBQU9KLFFB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LEVBQXJDO0FBQ0EsUUFBTTtBQUFFakQ7QUFBRixNQUFXLE1BQU1nRCxZQUFZLENBQUNFLEtBQWIsQ0FBbUI7QUFDekNBLFNBQUssRUFBRUMsNkRBRGtDO0FBRXpDaEMsYUFBUyxFQUFFO0FBQUVXLFFBQUUsRUFBRVksR0FBRyxDQUFDVSxNQUFKLENBQVd0QjtBQUFqQjtBQUY4QixHQUFuQixDQUF2QjtBQUlBLE1BQUk1QixLQUFLLEdBQUcsQ0FBWjtBQUNBRixNQUFJLENBQUNDLElBQUwsQ0FBVWdDLEdBQVYsQ0FBZWhCLElBQUQsSUFBV2YsS0FBSyxJQUFJZSxJQUFJLENBQUNrQixRQUFMLEdBQWdCbEIsSUFBSSxDQUFDaUIsSUFBTCxDQUFVaEMsS0FBNUQ7QUFDQSxTQUFPO0FBQ042QyxTQUFLLEVBQUU7QUFBRU0sMkJBQXFCLEVBQUVMLFlBQVksQ0FBQ00sS0FBYixDQUFtQkMsT0FBbkIsRUFBekI7QUFBdUR2RCxVQUF2RDtBQUE2REU7QUFBN0Q7QUFERCxHQUFQO0FBR0EsQ0F0Qk07QUF3QlAsK0RBQWVILElBQWYsRTs7Ozs7Ozs7Ozs7QUMxSUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvQ2FydC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBzZWNyZXRfa2V5IH0gZnJvbSBcIi4uLy4uL2tleXNcIjtcclxuXHJcbmNvbnN0IHZlcmlmaWNhdGlvbiA9ICh0b2tlbikgPT4ge1xyXG5cdGxldCB2ZXJpZmllZDtcclxuXHR0cnkge1xyXG5cdFx0dmVyaWZpZWQgPSB2ZXJpZnkodG9rZW4sIHNlY3JldF9rZXkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmV0dXJuIHsgZXJyb3I6IFwiQ2Fubm90IFZlcmlmeVwiIH07XHJcblx0fVxyXG5cdHJldHVybiB2ZXJpZmllZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZlcmlmaWNhdGlvbjtcclxuIiwiaW1wb3J0IHtcclxuXHRhZGRUb0NhcnRNdXRhdGlvbixcclxuXHRjaGVja291dE11dGF0aW9uLFxyXG5cdGdldENhcnRRdWVyeSxcclxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9hcG9sbG9cIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdmVyaWZpY2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvblwiO1xyXG5pbXBvcnQgU3RyaXBlQ2hlY2tvdXQgZnJvbSBcInJlYWN0LXN0cmlwZS1jaGVja291dFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQ2FydCA9ICh7IGRhdGE6IHsgY2FydCB9LCBwcmljZSB9KSA9PiB7XHJcblx0Y29uc3QgeyB1aWQsIHJvbGUgfSA9IHBhcnNlQ29va2llcygpO1xyXG5cdGNvbnN0IFtteWNhcnQsIHNldE15Y2FydF0gPSB1c2VTdGF0ZShjYXJ0KTtcclxuXHRjb25zdCBbdG90YWxwcmljZSwgc2V0VG90YWxwcmljZV0gPSB1c2VTdGF0ZShwcmljZSk7XHJcblx0Y29uc3QgW2NhcnRPcGVyYXRpb25dID0gdXNlTXV0YXRpb24oYWRkVG9DYXJ0TXV0YXRpb24pO1xyXG5cdGNvbnN0IFtjaGVja291dF0gPSB1c2VNdXRhdGlvbihjaGVja291dE11dGF0aW9uKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUmVtb3ZlRnJvbUNhcnQgPSBhc3luYyAoYm9vaykgPT4ge1xyXG5cdFx0Y29uc3QgbmV3Q2FydCA9IGF3YWl0IGNhcnRPcGVyYXRpb24oe1xyXG5cdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHRib29rSWQ6IGJvb2suX2lkLFxyXG5cdFx0XHRcdHR5cGU6IFwiUkVNT1ZFXCIsXHJcblx0XHRcdFx0Y3VzdG9tZXJJZDogdWlkLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRzZXRUb3RhbHByaWNlKChwcmV2UHJpY2UpID0+IHByZXZQcmljZSAtIGJvb2sucHJpY2UpO1xyXG5cdFx0c2V0TXljYXJ0KG5ld0NhcnQuZGF0YS5hZGRUb0NhcnQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVBheW1lbnQgPSBhc3luYyAocGF5bWVudEluZm8pID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHBheW1lbnRJbmZvKTtcclxuXHRcdGF3YWl0IGNoZWNrb3V0KHsgdmFyaWFibGVzOiB7IGlkOiB1aWQgfSB9KTtcclxuXHRcdFJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuXHRcdFx0e215Y2FydCAmJlxyXG5cdFx0XHRcdG15Y2FydC5tYXAoKHsgaXRlbSwgcXVhbnRpdHkgfSwgaW5kKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItM1wiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjYwMHB4XCIgfX0ga2V5PXtpbmR9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGctMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17aXRlbS5pbWFnZX0gd2lkdGg9XCIyMDBweFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntpdGVtLm5hbWV9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlByaWNlOiAke2l0ZW0ucHJpY2V9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlF1YW50aXR5OiB7cXVhbnRpdHl9PC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IGZsZXgtY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9ib29rRGV0YWlscy8ke2l0ZW0uX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogXCIycHhcIiwgbWFyZ2luOiBcIjJweFwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg2PlZpZXcgQm9vazwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvQWRkVG9DYXJ0LyR7aXRlbS5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiLCBtYXJnaW46IFwiMnB4XCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDaGFuZ2UgUXVhbnRpdHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogXCIycHhcIiwgbWFyZ2luOiBcIjJweFwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRnJvbUNhcnQoaXRlbSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSZW1vdmUgRnJvbSBDYXJ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDxoMT5cclxuXHRcdFx0XHRUb3RhbCBQcmljZTp7XCIgXCJ9XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmctaW5mbyB0ZXh0LWRhcmtcIj4ke3RvdGFscHJpY2V9PC9zcGFuPlxyXG5cdFx0XHQ8L2gxPlxyXG5cdFx0XHQ8U3RyaXBlQ2hlY2tvdXRcclxuXHRcdFx0XHRuYW1lPVwiQ2FzZUJvb2tcIlxyXG5cdFx0XHRcdGFtb3VudD17dG90YWxwcmljZSAqIDEwMH1cclxuXHRcdFx0XHRjdXJyZW5jeT1cIlVTRFwiXHJcblx0XHRcdFx0c2hpcHBpbmdBZGRyZXNzPXt0cnVlfVxyXG5cdFx0XHRcdGJpbGxpbmdBZGRyZXNzPXt0cnVlfVxyXG5cdFx0XHRcdHppcENvZGU9e3RydWV9XHJcblx0XHRcdFx0c3RyaXBlS2V5PVwicGtfdGVzdF81MUozdjBPU0NCcmNqQXI4NHl2SzJBUFBwUDFTSWhERjlZR05ySDNPT1pFT2RiMTZQV3o2T21yTEdRT2hRb1YyRFBDNjNTQk5HdjhaSzY3eTJzdENkdnZlcTAwZWl0dlU2NGtcIlxyXG5cdFx0XHRcdHRva2VuPXsocGF5bWVudEluZm8pID0+IGhhbmRsZVBheW1lbnQocGF5bWVudEluZm8pfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcblx0XHRcdFx0XHRQcm9jZWVkIFRvIFBheW1lbnRcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9TdHJpcGVDaGVja291dD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cdGNvbnN0IHsgYXV0aCB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblx0Y29uc3QgdmVyaWZ5ID0gdmVyaWZpY2F0aW9uKGF1dGgpO1xyXG5cdGlmICh2ZXJpZnkuZXJyb3IpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlZGlyZWN0OiB7XHJcblx0XHRcdFx0cGVybWFuZW50OiBmYWxzZSxcclxuXHRcdFx0XHRkZXN0aW5hdGlvbjogXCIvU2lnbmluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHByb3BzOiB7fSxcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcclxuXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcblx0XHRxdWVyeTogZ2V0Q2FydFF1ZXJ5LFxyXG5cdFx0dmFyaWFibGVzOiB7IGlkOiBjdHgucGFyYW1zLmlkIH0sXHJcblx0fSk7XHJcblx0bGV0IHByaWNlID0gMDtcclxuXHRkYXRhLmNhcnQubWFwKChib29rKSA9PiAocHJpY2UgKz0gYm9vay5xdWFudGl0eSAqIGJvb2suaXRlbS5wcmljZSkpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyBpbml0aWFsaXplQXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksIGRhdGEsIHByaWNlIH0sXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0cmlwZS1jaGVja291dFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9