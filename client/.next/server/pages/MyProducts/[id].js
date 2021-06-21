(function() {
var exports = {};
exports.id = "pages/MyProducts/[id]";
exports.ids = ["pages/MyProducts/[id]"];
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
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);



const verification = token => {
  // const authCookie = cookie.parse(req.headers.cookie);
  // const token = authCookie.auth;
  let verified;

  try {
    verified = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, "secret_key");
  } catch (err) {
    return {
      error: "Cannot Verify"
    };
  }

  return verified;
};

/* harmony default export */ __webpack_exports__["default"] = (verification);

/***/ }),

/***/ "./pages/MyProducts/[id].js":
/*!**********************************!*\
  !*** ./pages/MyProducts/[id].js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_utils_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/utils/apollo */ "./components/utils/apollo.js");
/* harmony import */ var _components_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/queries */ "./components/queries.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_utils_verification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/utils/verification */ "./components/utils/verification.js");

var _jsxFileName = "C:\\Users\\srsah\\Desktop\\graphql-server\\client\\pages\\MyProducts\\[id].js";








const bookDetails = ({
  products
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  if (router.isFallback) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: " Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 32
  }, undefined);
  const [removeBook] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_2__.addBookMutation);

  const handleRemove = async id => {
    const removedBook = await removeBook({
      variables: {
        id,
        type: "REMOVE"
      }
    });
    console.log(removedBook);
    router.push("/");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    style: {
      marginTop: "10px"
    },
    children: products.map((product, ind) => {
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
              src: product.image,
              width: "200px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "card-title",
                children: product.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 10
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "card-title",
                children: ["Price: $", product.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 10
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: "nav flex-column",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: `/bookDetails/${product._id}`,
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
                        lineNumber: 49,
                        columnNumber: 14
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 13
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 12
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    className: "btn btn-danger",
                    onClick: () => handleRemove(product._id),
                    children: "Remove Book"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 12
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }, undefined)
      }, ind, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 6
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, undefined);
};

const getServerSideProps = async ctx => {
  const {
    auth
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_6__.parseCookies)(ctx);
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

  const apolloClient = (0,_components_utils_apollo__WEBPACK_IMPORTED_MODULE_1__.initializeApollo)();
  const {
    data
  } = await apolloClient.query({
    query: _components_queries__WEBPACK_IMPORTED_MODULE_2__.getProductsQuery,
    variables: {
      id: ctx.params.id
    }
  });
  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
      products: data.products
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (bookDetails);

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

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_resolvers_js-components_typeDefs_js","components_utils_apollo_js","components_queries_js"], function() { return __webpack_exec__("./pages/MyProducts/[id].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9NeVByb2R1Y3RzL1tpZF0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidmVyaWZpY2F0aW9uIiwidG9rZW4iLCJ2ZXJpZmllZCIsInZlcmlmeSIsImVyciIsImVycm9yIiwiYm9va0RldGFpbHMiLCJwcm9kdWN0cyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJyZW1vdmVCb29rIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJoYW5kbGVSZW1vdmUiLCJpZCIsInJlbW92ZWRCb29rIiwidmFyaWFibGVzIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwibWFyZ2luVG9wIiwibWFwIiwicHJvZHVjdCIsImluZCIsIm1heFdpZHRoIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJfaWQiLCJwYWRkaW5nIiwibWFyZ2luIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwiYXV0aCIsInBhcnNlQ29va2llcyIsInJlZGlyZWN0IiwicGVybWFuZW50IiwiZGVzdGluYXRpb24iLCJwcm9wcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJkYXRhIiwicXVlcnkiLCJnZXRQcm9kdWN0c1F1ZXJ5IiwicGFyYW1zIiwiaW5pdGlhbGl6ZUFwb2xsb1N0YXRlIiwiY2FjaGUiLCJleHRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQy9CO0FBQ0E7QUFDQSxNQUFJQyxRQUFKOztBQUNBLE1BQUk7QUFDSEEsWUFBUSxHQUFHQyxvREFBTSxDQUFDRixLQUFELEVBQVEsWUFBUixDQUFqQjtBQUNBLEdBRkQsQ0FFRSxPQUFPRyxHQUFQLEVBQVk7QUFDYixXQUFPO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQVA7QUFDQTs7QUFDRCxTQUFPSCxRQUFQO0FBQ0EsQ0FWRDs7QUFZQSwrREFBZUYsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDckMsUUFBTUMs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QyxxREFBWSxDQUFDRixHQUFELENBQTdCO0FBQ0EsUUFBTS9CLE1BQU0sR0FBR0gsdUVBQVksQ0FBQ21DLElBQUQsQ0FBM0I7O0FBQ0EsTUFBSWhDLE1BQU0sQ0FBQ0UsS0FBWCxFQUFrQjtBQUNqQixXQUFPO0FBQ05nQyxjQUFRLEVBQUU7QUFDVEMsaUJBQVMsRUFBRSxLQURGO0FBRVRDLG1CQUFXLEVBQUU7QUFGSixPQURKO0FBS05DLFdBQUssRUFBRTtBQUxELEtBQVA7QUFPQTs7QUFDRCxRQUFNQyxZQUFZLEdBQUdDLDBFQUFnQixFQUFyQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXLE1BQU1GLFlBQVksQ0FBQ0csS0FBYixDQUFtQjtBQUN6Q0EsU0FBSyxFQUFFQyxpRUFEa0M7QUFFekM1QixhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFFbUIsR0FBRyxDQUFDWSxNQUFKLENBQVcvQjtBQUFqQjtBQUY4QixHQUFuQixDQUF2QjtBQUlBLFNBQU87QUFDTnlCLFNBQUssRUFBRTtBQUNOTywyQkFBcUIsRUFBRU4sWUFBWSxDQUFDTyxLQUFiLENBQW1CQyxPQUFuQixFQURqQjtBQUVOMUMsY0FBUSxFQUFFb0MsSUFBSSxDQUFDcEM7QUFGVDtBQURELEdBQVA7QUFNQSxDQXZCTTtBQXlCUCwrREFBZUQsV0FBZixFOzs7Ozs7Ozs7OztBQzdGQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9NeVByb2R1Y3RzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xyXG5cclxuY29uc3QgdmVyaWZpY2F0aW9uID0gKHRva2VuKSA9PiB7XHJcblx0Ly8gY29uc3QgYXV0aENvb2tpZSA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpO1xyXG5cdC8vIGNvbnN0IHRva2VuID0gYXV0aENvb2tpZS5hdXRoO1xyXG5cdGxldCB2ZXJpZmllZDtcclxuXHR0cnkge1xyXG5cdFx0dmVyaWZpZWQgPSB2ZXJpZnkodG9rZW4sIFwic2VjcmV0X2tleVwiKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJldHVybiB7IGVycm9yOiBcIkNhbm5vdCBWZXJpZnlcIiB9O1xyXG5cdH1cclxuXHRyZXR1cm4gdmVyaWZpZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2ZXJpZmljYXRpb247XHJcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9hcG9sbG9cIjtcclxuaW1wb3J0IHtcclxuXHRhZGRCb29rTXV0YXRpb24sXHJcblx0Ym9va0RldGFpbHNRdWVyeSxcclxuXHRnZXRQcm9kdWN0c1F1ZXJ5LFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHZlcmlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy92ZXJpZmljYXRpb25cIjtcclxuXHJcbmNvbnN0IGJvb2tEZXRhaWxzID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGlmIChyb3V0ZXIuaXNGYWxsYmFjaykgcmV0dXJuIDxoMT4gTG9hZGluZy4uLjwvaDE+O1xyXG5cclxuXHRjb25zdCBbcmVtb3ZlQm9va10gPSB1c2VNdXRhdGlvbihhZGRCb29rTXV0YXRpb24pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAoaWQpID0+IHtcclxuXHRcdGNvbnN0IHJlbW92ZWRCb29rID0gYXdhaXQgcmVtb3ZlQm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiUkVNT1ZFXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlbW92ZWRCb29rKTtcclxuXHRcdHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjEwcHhcIn19PlxyXG5cdFx0XHR7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIiBzdHlsZT17eyBtYXhXaWR0aDogXCI2MDBweFwiIH19IGtleT17aW5kfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZy0wXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IHdpZHRoPVwiMjAwcHhcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlByaWNlOiAke3Byb2R1Y3QucHJpY2V9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBmbGV4LWNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9ib29rRGV0YWlscy8ke3Byb2R1Y3QuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogXCIycHhcIiwgbWFyZ2luOiBcIjJweFwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDY+VmlldyBCb29rPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXInIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShwcm9kdWN0Ll9pZCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSZW1vdmUgQm9va1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0Y29uc3QgeyBhdXRoIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHRjb25zdCB2ZXJpZnkgPSB2ZXJpZmljYXRpb24oYXV0aCk7XHJcblx0aWYgKHZlcmlmeS5lcnJvcikge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9TaWduaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuXHRcdHF1ZXJ5OiBnZXRQcm9kdWN0c1F1ZXJ5LFxyXG5cdFx0dmFyaWFibGVzOiB7IGlkOiBjdHgucGFyYW1zLmlkIH0sXHJcblx0fSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGluaXRpYWxpemVBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcclxuXHRcdFx0cHJvZHVjdHM6IGRhdGEucHJvZHVjdHMsXHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib29rRGV0YWlscztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=