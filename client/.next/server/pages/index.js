(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/queries */ "./components/queries.js");
/* harmony import */ var _components_utils_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/utils/apollo */ "./components/utils/apollo.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\srsah\\Desktop\\graphql-server\\client\\pages\\index.js";







function Home({
  books
}) {
  const {
    uid,
    role
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)();
  const [cartOperation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_5__.addToCartMutation);

  const handleAddToCart = async id => {
    await cartOperation({
      variables: {
        bookId: id,
        type: "ADD",
        customerId: uid
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      marginTop: "30px"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: books.map(book => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            style: {
              marginTop: '10px'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "card",
              style: {
                width: "18rem"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: book.image,
                style: {
                  height: "20rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "card-body",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  className: "card-title",
                  children: book.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  className: "card-title",
                  children: ["Price: $", book.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 11
                }, this), role == "admin" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: `/bookDetails/${book._id}`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    className: "btn btn-primary",
                    children: "View Book"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 12
                }, this), role == "customer" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "btn btn-info",
                  onClick: () => handleAddToCart(book._id),
                  children: "Add To Cart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 12
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 10
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 9
            }, this)
          }, book._id, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 8
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, this);
}
const getServerSideProps = async ctx => {
  const apolloClient = (0,_components_utils_apollo__WEBPACK_IMPORTED_MODULE_6__.initializeApollo)();
  const {
    data
  } = await apolloClient.query({
    query: _components_queries__WEBPACK_IMPORTED_MODULE_5__.getBooksQuery
  });
  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
      books: data.books
    }
  };
};

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_resolvers_js-components_typeDefs_js","components_utils_apollo_js","components_queries_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIb21lIiwiYm9va3MiLCJ1aWQiLCJyb2xlIiwicGFyc2VDb29raWVzIiwiY2FydE9wZXJhdGlvbiIsInVzZU11dGF0aW9uIiwiYWRkVG9DYXJ0TXV0YXRpb24iLCJoYW5kbGVBZGRUb0NhcnQiLCJpZCIsInZhcmlhYmxlcyIsImJvb2tJZCIsInR5cGUiLCJjdXN0b21lcklkIiwibWFyZ2luVG9wIiwibWFwIiwiYm9vayIsIndpZHRoIiwiaW1hZ2UiLCJoZWlnaHQiLCJuYW1lIiwicHJpY2UiLCJfaWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwiZGF0YSIsInF1ZXJ5IiwiZ2V0Qm9va3NRdWVyeSIsInByb3BzIiwiaW5pdGlhbGl6ZUFwb2xsb1N0YXRlIiwiY2FjaGUiLCJleHRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQXlCO0FBQ3ZDLFFBQU07QUFBRUMsT0FBRjtBQUFPQztBQUFQLE1BQWdCQyxxREFBWSxFQUFsQztBQUVBLFFBQU0sQ0FBQ0MsYUFBRCxJQUFrQkMsMkRBQVcsQ0FBQ0Msa0VBQUQsQ0FBbkM7O0FBRUEsUUFBTUMsZUFBZSxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUNyQyxVQUFNSixhQUFhLENBQUM7QUFDbkJLLGVBQVMsRUFBRTtBQUNWQyxjQUFNLEVBQUVGLEVBREU7QUFFVkcsWUFBSSxFQUFFLEtBRkk7QUFHVkMsa0JBQVUsRUFBRVg7QUFIRjtBQURRLEtBQUQsQ0FBbkI7QUFPQSxHQVJEOztBQVVBLHNCQUNDO0FBQUssU0FBSyxFQUFFO0FBQUVZLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDRWIsS0FBSyxDQUFDYyxHQUFOLENBQVdDLElBQUQsSUFBVTtBQUNwQiw4QkFDQztBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFvQyxpQkFBSyxFQUFFO0FBQUNGLHVCQUFTLEVBQUU7QUFBWixhQUEzQztBQUFBLG1DQUNDO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQXNCLG1CQUFLLEVBQUU7QUFBRUcscUJBQUssRUFBRTtBQUFULGVBQTdCO0FBQUEsc0NBQ0M7QUFBSyxtQkFBRyxFQUFFRCxJQUFJLENBQUNFLEtBQWY7QUFBc0IscUJBQUssRUFBRTtBQUFDQyx3QkFBTSxFQUFFO0FBQVQ7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQUVDO0FBQUsseUJBQVMsRUFBQyxXQUFmO0FBQUEsd0NBQ0M7QUFBSSwyQkFBUyxFQUFDLFlBQWQ7QUFBQSw0QkFBNEJILElBQUksQ0FBQ0k7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQUVDO0FBQUksMkJBQVMsRUFBQyxZQUFkO0FBQUEseUNBQW9DSixJQUFJLENBQUNLLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRCxFQUdFbEIsSUFBSSxJQUFJLE9BQVIsaUJBQ0EsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFHLGdCQUFlYSxJQUFJLENBQUNNLEdBQUksRUFBckM7QUFBQSx5Q0FDQztBQUFHLHdCQUFJLEVBQUMsR0FBUjtBQUFZLDZCQUFTLEVBQUMsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixFQVVFbkIsSUFBSSxJQUFJLFVBQVIsaUJBQ0E7QUFDQyxzQkFBSSxFQUFDLFFBRE47QUFFQywyQkFBUyxFQUFDLGNBRlg7QUFHQyx5QkFBTyxFQUFFLE1BQU1LLGVBQWUsQ0FBQ1EsSUFBSSxDQUFDTSxHQUFOLENBSC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxhQUEwQk4sSUFBSSxDQUFDTSxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUREO0FBMkJBLFNBNUJBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFxQ0E7QUFFTSxNQUFNQyxrQkFBa0IsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFDaEQsUUFBTUMsWUFBWSxHQUFHQywwRUFBZ0IsRUFBckM7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBVyxNQUFNRixZQUFZLENBQUNHLEtBQWIsQ0FBbUI7QUFDekNBLFNBQUssRUFBRUMsOERBQWFBO0FBRHFCLEdBQW5CLENBQXZCO0FBR0EsU0FBTztBQUNOQyxTQUFLLEVBQUU7QUFDTkMsMkJBQXFCLEVBQUVOLFlBQVksQ0FBQ08sS0FBYixDQUFtQkMsT0FBbkIsRUFEakI7QUFFTmhDLFdBQUssRUFBRTBCLElBQUksQ0FBQzFCO0FBRk47QUFERCxHQUFQO0FBTUEsQ0FYTSxDOzs7Ozs7Ozs7OztBQ2xFUCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHtcblx0Z2V0Qm9va3NRdWVyeSxcblx0YWRkVG9DYXJ0TXV0YXRpb24sXG5cdGFkZEJvb2tNdXRhdGlvbixcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcXVlcmllc1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsb1wiO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGJvb2tzIH0pIHtcblx0Y29uc3QgeyB1aWQsIHJvbGUgfSA9IHBhcnNlQ29va2llcygpO1xuXG5cdGNvbnN0IFtjYXJ0T3BlcmF0aW9uXSA9IHVzZU11dGF0aW9uKGFkZFRvQ2FydE11dGF0aW9uKTtcblxuXHRjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSBhc3luYyAoaWQpID0+IHtcblx0XHRhd2FpdCBjYXJ0T3BlcmF0aW9uKHtcblx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRib29rSWQ6IGlkLFxuXHRcdFx0XHR0eXBlOiBcIkFERFwiLFxuXHRcdFx0XHRjdXN0b21lcklkOiB1aWQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHR7Ym9va3MubWFwKChib29rKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIGtleT17Ym9vay5faWR9IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTBweCd9fT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyB3aWR0aDogXCIxOHJlbVwifX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Ym9vay5pbWFnZX0gc3R5bGU9e3toZWlnaHQ6IFwiMjByZW1cIn19Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2Jvb2submFtZX08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlByaWNlOiAke2Jvb2sucHJpY2V9PC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3JvbGUgPT0gXCJhZG1pblwiICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2Jvb2tEZXRhaWxzLyR7Ym9vay5faWR9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWaWV3IEJvb2tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtyb2xlID09IFwiY3VzdG9tZXJcIiAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9DYXJ0KGJvb2suX2lkKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGQgVG8gQ2FydFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG5cdFx0cXVlcnk6IGdldEJvb2tzUXVlcnksXG5cdH0pO1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRpbml0aWFsaXplQXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXG5cdFx0XHRib29rczogZGF0YS5ib29rcyxcblx0XHR9LFxuXHR9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=