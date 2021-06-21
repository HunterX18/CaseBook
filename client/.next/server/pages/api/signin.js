(function() {
var exports = {};
exports.id = "pages/api/signin";
exports.ids = ["pages/api/signin"];
exports.modules = {

/***/ "./pages/api/signin.js":
/*!*****************************!*\
  !*** ./pages/api/signin.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/queries */ "./components/queries.js");
/* harmony import */ var _components_utils_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/utils/apollo */ "./components/utils/apollo.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);





const signin = async (req, res) => {
  const {
    name,
    password,
    type,
    role
  } = req.body;
  const apolloClient = (0,_components_utils_apollo__WEBPACK_IMPORTED_MODULE_1__.initializeApollo)();

  try {
    const {
      data
    } = await apolloClient.mutate({
      mutation: _components_queries__WEBPACK_IMPORTED_MODULE_0__.addCustomerMutation,
      variables: {
        name,
        password,
        type,
        role,
        operation: "ADD"
      }
    });
    const {
      _id,
      email,
      cart,
      orders
    } = data.addCustomer;
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
      _id,
      name,
      email
    }, "secret_key");
    res.setHeader("Set-Cookie", (0,cookie__WEBPACK_IMPORTED_MODULE_3__.serialize)("auth", token, {
      httpOnly: true,
      // secure: process.NODE_ENV !== "development",
      sameSite: true,
      path: "/"
    }));
    res.json({
      name,
      email,
      _id,
      cart,
      orders,
      token,
      role
    });
  } catch (err) {
    res.json({
      Error: err.message
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (signin);

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_resolvers_js-components_typeDefs_js","components_queries_js","components_utils_apollo_js"], function() { return __webpack_exec__("./pages/api/signin.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvc2lnbmluLmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWFcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsic2lnbmluIiwicmVxIiwicmVzIiwibmFtZSIsInBhc3N3b3JkIiwidHlwZSIsInJvbGUiLCJib2R5IiwiYXBvbGxvQ2xpZW50IiwiaW5pdGlhbGl6ZUFwb2xsbyIsImRhdGEiLCJtdXRhdGUiLCJtdXRhdGlvbiIsImFkZEN1c3RvbWVyTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJvcGVyYXRpb24iLCJfaWQiLCJlbWFpbCIsImNhcnQiLCJvcmRlcnMiLCJhZGRDdXN0b21lciIsInRva2VuIiwiand0Iiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsInBhdGgiLCJqc29uIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbEMsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFlBQVI7QUFBa0JDLFFBQWxCO0FBQXdCQztBQUF4QixNQUFpQ0wsR0FBRyxDQUFDTSxJQUEzQztBQUVBLFFBQU1DLFlBQVksR0FBR0MsMEVBQWdCLEVBQXJDOztBQUNBLE1BQUk7QUFDSCxVQUFNO0FBQUVDO0FBQUYsUUFBVyxNQUFNRixZQUFZLENBQUNHLE1BQWIsQ0FBb0I7QUFDMUNDLGNBQVEsRUFBRUMsb0VBRGdDO0FBRTFDQyxlQUFTLEVBQUU7QUFBRVgsWUFBRjtBQUFRQyxnQkFBUjtBQUFrQkMsWUFBbEI7QUFBd0JDLFlBQXhCO0FBQThCUyxpQkFBUyxFQUFFO0FBQXpDO0FBRitCLEtBQXBCLENBQXZCO0FBSUEsVUFBTTtBQUFFQyxTQUFGO0FBQU9DLFdBQVA7QUFBY0MsVUFBZDtBQUFvQkM7QUFBcEIsUUFBK0JULElBQUksQ0FBQ1UsV0FBMUM7QUFDQSxVQUFNQyxLQUFLLEdBQUdDLHdEQUFBLENBQVM7QUFBRU4sU0FBRjtBQUFPYixVQUFQO0FBQWFjO0FBQWIsS0FBVCxFQUErQixZQUEvQixDQUFkO0FBQ0FmLE9BQUcsQ0FBQ3FCLFNBQUosQ0FDQyxZQURELEVBRUNDLGlEQUFTLENBQUMsTUFBRCxFQUFTSCxLQUFULEVBQWdCO0FBQ3hCSSxjQUFRLEVBQUUsSUFEYztBQUV4QjtBQUNBQyxjQUFRLEVBQUUsSUFIYztBQUl4QkMsVUFBSSxFQUFFO0FBSmtCLEtBQWhCLENBRlY7QUFTQXpCLE9BQUcsQ0FBQzBCLElBQUosQ0FBUztBQUFFekIsVUFBRjtBQUFRYyxXQUFSO0FBQWVELFNBQWY7QUFBb0JFLFVBQXBCO0FBQTBCQyxZQUExQjtBQUFrQ0UsV0FBbEM7QUFBeUNmO0FBQXpDLEtBQVQ7QUFDQSxHQWpCRCxDQWlCRSxPQUFPdUIsR0FBUCxFQUFZO0FBQ2IzQixPQUFHLENBQUMwQixJQUFKLENBQVM7QUFBRUUsV0FBSyxFQUFFRCxHQUFHLENBQUNFO0FBQWIsS0FBVDtBQUNBO0FBQ0QsQ0F4QkQ7O0FBMEJBLCtEQUFlL0IsTUFBZixFOzs7Ozs7Ozs7OztBQy9CQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9hcGkvc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkQ3VzdG9tZXJNdXRhdGlvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsb1wiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcImNvb2tpZVwiO1xyXG5cclxuY29uc3Qgc2lnbmluID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblx0Y29uc3QgeyBuYW1lLCBwYXNzd29yZCwgdHlwZSwgcm9sZSB9ID0gcmVxLmJvZHk7XHJcblxyXG5cdGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQubXV0YXRlKHtcclxuXHRcdFx0bXV0YXRpb246IGFkZEN1c3RvbWVyTXV0YXRpb24sXHJcblx0XHRcdHZhcmlhYmxlczogeyBuYW1lLCBwYXNzd29yZCwgdHlwZSwgcm9sZSwgb3BlcmF0aW9uOiBcIkFERFwiIH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHsgX2lkLCBlbWFpbCwgY2FydCwgb3JkZXJzIH0gPSBkYXRhLmFkZEN1c3RvbWVyO1xyXG5cdFx0Y29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IF9pZCwgbmFtZSwgZW1haWwgfSwgXCJzZWNyZXRfa2V5XCIpO1xyXG5cdFx0cmVzLnNldEhlYWRlcihcclxuXHRcdFx0XCJTZXQtQ29va2llXCIsXHJcblx0XHRcdHNlcmlhbGl6ZShcImF1dGhcIiwgdG9rZW4sIHtcclxuXHRcdFx0XHRodHRwT25seTogdHJ1ZSxcclxuXHRcdFx0XHQvLyBzZWN1cmU6IHByb2Nlc3MuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIixcclxuXHRcdFx0XHRzYW1lU2l0ZTogdHJ1ZSxcclxuXHRcdFx0XHRwYXRoOiBcIi9cIixcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHRyZXMuanNvbih7IG5hbWUsIGVtYWlsLCBfaWQsIGNhcnQsIG9yZGVycywgdG9rZW4sIHJvbGUgfSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRyZXMuanNvbih7IEVycm9yOiBlcnIubWVzc2FnZSB9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWduaW47XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=