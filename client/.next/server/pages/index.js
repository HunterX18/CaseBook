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

var _jsxFileName = "C:\\Users\\srsah\\Desktop\\CaseBook\\client\\pages\\index.js";







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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_utils_apollo_js","components_queries_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvaWdub3JlZHxDOlxcVXNlcnNcXHNyc2FoXFxEZXNrdG9wXFxDYXNlQm9va1xcY2xpZW50XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSG9tZSIsImJvb2tzIiwidWlkIiwicm9sZSIsInBhcnNlQ29va2llcyIsImNhcnRPcGVyYXRpb24iLCJ1c2VNdXRhdGlvbiIsImFkZFRvQ2FydE11dGF0aW9uIiwiaGFuZGxlQWRkVG9DYXJ0IiwiaWQiLCJ2YXJpYWJsZXMiLCJib29rSWQiLCJ0eXBlIiwiY3VzdG9tZXJJZCIsIm1hcmdpblRvcCIsIm1hcCIsImJvb2siLCJ3aWR0aCIsImltYWdlIiwiaGVpZ2h0IiwibmFtZSIsInByaWNlIiwiX2lkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwiYXBvbGxvQ2xpZW50IiwiaW5pdGlhbGl6ZUFwb2xsbyIsImRhdGEiLCJxdWVyeSIsImdldEJvb2tzUXVlcnkiLCJwcm9wcyIsImluaXRpYWxpemVBcG9sbG9TdGF0ZSIsImNhY2hlIiwiZXh0cmFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUF5QjtBQUN2QyxRQUFNO0FBQUVDLE9BQUY7QUFBT0M7QUFBUCxNQUFnQkMscURBQVksRUFBbEM7QUFFQSxRQUFNLENBQUNDLGFBQUQsSUFBa0JDLDJEQUFXLENBQUNDLGtFQUFELENBQW5DOztBQUVBLFFBQU1DLGVBQWUsR0FBRyxNQUFPQyxFQUFQLElBQWM7QUFDckMsVUFBTUosYUFBYSxDQUFDO0FBQ25CSyxlQUFTLEVBQUU7QUFDVkMsY0FBTSxFQUFFRixFQURFO0FBRVZHLFlBQUksRUFBRSxLQUZJO0FBR1ZDLGtCQUFVLEVBQUVYO0FBSEY7QUFEUSxLQUFELENBQW5CO0FBT0EsR0FSRDs7QUFVQSxzQkFDQztBQUFLLFNBQUssRUFBRTtBQUFFWSxlQUFTLEVBQUU7QUFBYixLQUFaO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0ViLEtBQUssQ0FBQ2MsR0FBTixDQUFXQyxJQUFELElBQVU7QUFDcEIsOEJBQ0M7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBb0MsaUJBQUssRUFBRTtBQUFDRix1QkFBUyxFQUFFO0FBQVosYUFBM0M7QUFBQSxtQ0FDQztBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFzQixtQkFBSyxFQUFFO0FBQUVHLHFCQUFLLEVBQUU7QUFBVCxlQUE3QjtBQUFBLHNDQUNDO0FBQUssbUJBQUcsRUFBRUQsSUFBSSxDQUFDRSxLQUFmO0FBQXNCLHFCQUFLLEVBQUU7QUFBQ0Msd0JBQU0sRUFBRTtBQUFUO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsZUFFQztBQUFLLHlCQUFTLEVBQUMsV0FBZjtBQUFBLHdDQUNDO0FBQUksMkJBQVMsRUFBQyxZQUFkO0FBQUEsNEJBQTRCSCxJQUFJLENBQUNJO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFFQztBQUFJLDJCQUFTLEVBQUMsWUFBZDtBQUFBLHlDQUFvQ0osSUFBSSxDQUFDSyxLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkQsRUFHRWxCLElBQUksSUFBSSxPQUFSLGlCQUNBLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBRyxnQkFBZWEsSUFBSSxDQUFDTSxHQUFJLEVBQXJDO0FBQUEseUNBQ0M7QUFBRyx3QkFBSSxFQUFDLEdBQVI7QUFBWSw2QkFBUyxFQUFDLGlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkYsRUFVRW5CLElBQUksSUFBSSxVQUFSLGlCQUNBO0FBQ0Msc0JBQUksRUFBQyxRQUROO0FBRUMsMkJBQVMsRUFBQyxjQUZYO0FBR0MseUJBQU8sRUFBRSxNQUFNSyxlQUFlLENBQUNRLElBQUksQ0FBQ00sR0FBTixDQUgvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsYUFBMEJOLElBQUksQ0FBQ00sR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERDtBQTJCQSxTQTVCQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBcUNBO0FBRU0sTUFBTUMsa0JBQWtCLEdBQUcsTUFBT0MsR0FBUCxJQUFlO0FBQ2hELFFBQU1DLFlBQVksR0FBR0MsMEVBQWdCLEVBQXJDO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVcsTUFBTUYsWUFBWSxDQUFDRyxLQUFiLENBQW1CO0FBQ3pDQSxTQUFLLEVBQUVDLDhEQUFhQTtBQURxQixHQUFuQixDQUF2QjtBQUdBLFNBQU87QUFDTkMsU0FBSyxFQUFFO0FBQ05DLDJCQUFxQixFQUFFTixZQUFZLENBQUNPLEtBQWIsQ0FBbUJDLE9BQW5CLEVBRGpCO0FBRU5oQyxXQUFLLEVBQUUwQixJQUFJLENBQUMxQjtBQUZOO0FBREQsR0FBUDtBQU1BLENBWE0sQzs7Ozs7Ozs7Ozs7QUNsRVAsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQge1xuXHRnZXRCb29rc1F1ZXJ5LFxuXHRhZGRUb0NhcnRNdXRhdGlvbixcblx0YWRkQm9va011dGF0aW9uLFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9xdWVyaWVzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHMvYXBvbGxvXCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYm9va3MgfSkge1xuXHRjb25zdCB7IHVpZCwgcm9sZSB9ID0gcGFyc2VDb29raWVzKCk7XG5cblx0Y29uc3QgW2NhcnRPcGVyYXRpb25dID0gdXNlTXV0YXRpb24oYWRkVG9DYXJ0TXV0YXRpb24pO1xuXG5cdGNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9IGFzeW5jIChpZCkgPT4ge1xuXHRcdGF3YWl0IGNhcnRPcGVyYXRpb24oe1xuXHRcdFx0dmFyaWFibGVzOiB7XG5cdFx0XHRcdGJvb2tJZDogaWQsXG5cdFx0XHRcdHR5cGU6IFwiQUREXCIsXG5cdFx0XHRcdGN1c3RvbWVySWQ6IHVpZCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdHtib29rcy5tYXAoKGJvb2spID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCIga2V5PXtib29rLl9pZH0gc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjE4cmVtXCJ9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtib29rLmltYWdlfSBzdHlsZT17e2hlaWdodDogXCIyMHJlbVwifX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57Ym9vay5uYW1lfTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UHJpY2U6ICR7Ym9vay5wcmljZX08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cm9sZSA9PSBcImFkbWluXCIgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYm9va0RldGFpbHMvJHtib29rLl9pZH1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFZpZXcgQm9va1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3JvbGUgPT0gXCJjdXN0b21lclwiICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb0NhcnQoYm9vay5faWQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFkZCBUbyBDYXJ0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuXHRjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKCk7XG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcblx0XHRxdWVyeTogZ2V0Qm9va3NRdWVyeSxcblx0fSk7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGluaXRpYWxpemVBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcblx0XHRcdGJvb2tzOiBkYXRhLmJvb2tzLFxuXHRcdH0sXG5cdH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==