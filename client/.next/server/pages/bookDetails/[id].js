(function() {
var exports = {};
exports.id = "pages/bookDetails/[id]";
exports.ids = ["pages/bookDetails/[id]"];
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

/***/ "./pages/bookDetails/[id].js":
/*!***********************************!*\
  !*** ./pages/bookDetails/[id].js ***!
  \***********************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_utils_verification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/utils/verification */ "./components/utils/verification.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\srsah\\Desktop\\graphql-server\\client\\pages\\bookDetails\\[id].js";







const bookDetails = ({
  data
}) => {
  const {
    book
  } = data;
  const {
    uid,
    role
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_6__.parseCookies)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  if (router.isFallback) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: " Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 32
  }, undefined);
  const [cartOperation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_2__.addToCartMutation);
  const [removeBook] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_2__.addBookMutation);

  const handleAddToCart = async id => {
    const addBook = await cartOperation({
      variables: {
        id,
        type: "ADD",
        customerId: uid
      }
    });
    console.log(addBook);
  };

  const handleDelete = async id => {
    const removedBook = await removeBook({
      variables: {
        id,
        type: "REMOVE"
      }
    });
    console.log(removedBook);
    router.push("/");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [book && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card mb-3",
      style: {
        maxWidth: "600px",
        margin: "10px",
        padding: "10px",
        justifyContent: "space-between"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row g-0",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: book.image,
            style: {
              width: "200px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "card-title",
              children: ["Title: ", book.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "card-title",
              children: ["Genre: ", book.genre]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "card-title",
              children: ["Author: ", book.author]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: book.about
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "card-title",
              children: ["Price: $", book.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, undefined), book && role == "admin" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      className: "btn btn-dark",
      onClick: () => handleDelete(book._id),
      children: "Delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

const getServerSideProps = async ctx => {
  const {
    auth
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_6__.parseCookies)(ctx);
  const verify = (0,_components_utils_verification__WEBPACK_IMPORTED_MODULE_5__.default)(auth);

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
    query: _components_queries__WEBPACK_IMPORTED_MODULE_2__.bookDetailsQuery,
    variables: {
      id: ctx.params.id
    }
  });
  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
      data
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
var __webpack_exports__ = __webpack_require__.X(0, ["components_resolvers_js-components_typeDefs_js","components_queries_js","components_utils_apollo_js"], function() { return __webpack_exec__("./pages/bookDetails/[id].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9ib29rRGV0YWlscy9baWRdLmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWFcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidmVyaWZpY2F0aW9uIiwidG9rZW4iLCJ2ZXJpZmllZCIsInZlcmlmeSIsImVyciIsImVycm9yIiwiYm9va0RldGFpbHMiLCJkYXRhIiwiYm9vayIsInVpZCIsInJvbGUiLCJwYXJzZUNvb2tpZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwiY2FydE9wZXJhdGlvbiIsInVzZU11dGF0aW9uIiwiYWRkVG9DYXJ0TXV0YXRpb24iLCJyZW1vdmVCb29rIiwiYWRkQm9va011dGF0aW9uIiwiaGFuZGxlQWRkVG9DYXJ0IiwiaWQiLCJhZGRCb29rIiwidmFyaWFibGVzIiwidHlwZSIsImN1c3RvbWVySWQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwicmVtb3ZlZEJvb2siLCJwdXNoIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJpbWFnZSIsIndpZHRoIiwibmFtZSIsImdlbnJlIiwiYXV0aG9yIiwiYWJvdXQiLCJwcmljZSIsIl9pZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImF1dGgiLCJyZWRpcmVjdCIsInBlcm1hbmVudCIsImRlc3RpbmF0aW9uIiwicHJvcHMiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwicXVlcnkiLCJib29rRGV0YWlsc1F1ZXJ5IiwicGFyYW1zIiwiaW5pdGlhbGl6ZUFwb2xsb1N0YXRlIiwiY2FjaGUiLCJleHRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQy9CO0FBQ0E7QUFDQSxNQUFJQyxRQUFKOztBQUNBLE1BQUk7QUFDSEEsWUFBUSxHQUFHQyxvREFBTSxDQUFDRixLQUFELEVBQVEsWUFBUixDQUFqQjtBQUNBLEdBRkQsQ0FFRSxPQUFPRyxHQUFQLEVBQVk7QUFDYixXQUFPO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQVA7QUFDQTs7QUFDRCxTQUFPSCxRQUFQO0FBQ0EsQ0FWRDs7QUFZQSwrREFBZUYsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUNqQyxRQUFNO0FBQUVDO0FBQUYsTUFBV0QsSUFBakI7QUFDQSxRQUFNO0FBQUVFLE9BQUY7QUFBT0M7QUFBUCxNQUFnQkMscURBQVksRUFBbEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBSUQsTUFB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QUFPQyxHQUFQLElBQWU7QUFDaEQsUUFBTTtBQUFFQztBQUFGLE1BQVdsQyxxREFBWSxDQUFDaUMsR0FBRCxDQUE3QjtBQUNBLFFBQU16QyxNQUFNLEdBQUdILHVFQUFZLENBQUM2QyxJQUFELENBQTNCOztBQUNBLE1BQUkxQyxNQUFNLENBQUNFLEtBQVgsRUFBa0I7QUFDakIsV0FBTztBQUNOeUMsY0FBUSxFQUFFO0FBQ1RDLGlCQUFTLEVBQUUsS0FERjtBQUVUQyxtQkFBVyxFQUFFO0FBRkosT0FESjtBQUtOQyxXQUFLLEVBQUU7QUFMRCxLQUFQO0FBT0E7O0FBQ0QsUUFBTUMsWUFBWSxHQUFHQywwRUFBZ0IsRUFBckM7QUFDQSxRQUFNO0FBQUU1QztBQUFGLE1BQVcsTUFBTTJDLFlBQVksQ0FBQ0UsS0FBYixDQUFtQjtBQUN6Q0EsU0FBSyxFQUFFQyxpRUFEa0M7QUFFekM5QixhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFFdUIsR0FBRyxDQUFDVSxNQUFKLENBQVdqQztBQUFqQjtBQUY4QixHQUFuQixDQUF2QjtBQUlBLFNBQU87QUFDTjRCLFNBQUssRUFBRTtBQUFFTSwyQkFBcUIsRUFBRUwsWUFBWSxDQUFDTSxLQUFiLENBQW1CQyxPQUFuQixFQUF6QjtBQUF1RGxEO0FBQXZEO0FBREQsR0FBUDtBQUdBLENBcEJNO0FBc0JQLCtEQUFlRCxXQUFmLEU7Ozs7Ozs7Ozs7O0FDMUdBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2Jvb2tEZXRhaWxzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xyXG5cclxuY29uc3QgdmVyaWZpY2F0aW9uID0gKHRva2VuKSA9PiB7XHJcblx0Ly8gY29uc3QgYXV0aENvb2tpZSA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpO1xyXG5cdC8vIGNvbnN0IHRva2VuID0gYXV0aENvb2tpZS5hdXRoO1xyXG5cdGxldCB2ZXJpZmllZDtcclxuXHR0cnkge1xyXG5cdFx0dmVyaWZpZWQgPSB2ZXJpZnkodG9rZW4sIFwic2VjcmV0X2tleVwiKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJldHVybiB7IGVycm9yOiBcIkNhbm5vdCBWZXJpZnlcIiB9O1xyXG5cdH1cclxuXHRyZXR1cm4gdmVyaWZpZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2ZXJpZmljYXRpb247XHJcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9hcG9sbG9cIjtcclxuaW1wb3J0IHtcclxuXHRhZGRCb29rTXV0YXRpb24sXHJcblx0YWRkVG9DYXJ0TXV0YXRpb24sXHJcblx0Ym9va0RldGFpbHNRdWVyeSxcclxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgdmVyaWZpY2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5cclxuY29uc3QgYm9va0RldGFpbHMgPSAoeyBkYXRhIH0pID0+IHtcclxuXHRjb25zdCB7IGJvb2sgfSA9IGRhdGE7XHJcblx0Y29uc3QgeyB1aWQsIHJvbGUgfSA9IHBhcnNlQ29va2llcygpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGlmIChyb3V0ZXIuaXNGYWxsYmFjaykgcmV0dXJuIDxoMT4gTG9hZGluZy4uLjwvaDE+O1xyXG5cclxuXHRjb25zdCBbY2FydE9wZXJhdGlvbl0gPSB1c2VNdXRhdGlvbihhZGRUb0NhcnRNdXRhdGlvbik7XHJcblx0Y29uc3QgW3JlbW92ZUJvb2tdID0gdXNlTXV0YXRpb24oYWRkQm9va011dGF0aW9uKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gYXN5bmMgKGlkKSA9PiB7XHJcblx0XHRjb25zdCBhZGRCb29rID0gYXdhaXQgY2FydE9wZXJhdGlvbih7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiQUREXCIsXHJcblx0XHRcdFx0Y3VzdG9tZXJJZDogdWlkLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhhZGRCb29rKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuXHRcdGNvbnN0IHJlbW92ZWRCb29rID0gYXdhaXQgcmVtb3ZlQm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiUkVNT1ZFXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlbW92ZWRCb29rKTtcclxuXHRcdHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2Jvb2sgJiYgKFxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQgbWItM1wiXHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRtYXhXaWR0aDogXCI2MDBweFwiLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IFwiMTBweFwiLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjEwcHhcIixcclxuXHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTBcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtib29rLmltYWdlfSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19IC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGl0bGU6IHtib29rLm5hbWV9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+R2VucmU6IHtib29rLmdlbnJlfTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkF1dGhvcjoge2Jvb2suYXV0aG9yfTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57Ym9vay5hYm91dH08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlByaWNlOiAke2Jvb2sucHJpY2V9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHJcblx0XHRcdHtib29rICYmIHJvbGUgPT0gXCJhZG1pblwiICYmIChcclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoYm9vay5faWQpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdERlbGV0ZVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0Y29uc3QgeyBhdXRoIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHRjb25zdCB2ZXJpZnkgPSB2ZXJpZmljYXRpb24oYXV0aCk7XHJcblx0aWYgKHZlcmlmeS5lcnJvcikge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9TaWduaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuXHRcdHF1ZXJ5OiBib29rRGV0YWlsc1F1ZXJ5LFxyXG5cdFx0dmFyaWFibGVzOiB7IGlkOiBjdHgucGFyYW1zLmlkIH0sXHJcblx0fSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7IGluaXRpYWxpemVBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSwgZGF0YSB9LFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib29rRGV0YWlscztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==