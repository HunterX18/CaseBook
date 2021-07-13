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
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../keys */ "./keys.js");






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
    }, _keys__WEBPACK_IMPORTED_MODULE_4__.secret_key);
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
var __webpack_exports__ = __webpack_require__.X(0, ["components_utils_apollo_js","components_queries_js"], function() { return __webpack_exec__("./pages/api/signin.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvc2lnbmluLmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWFcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsic2lnbmluIiwicmVxIiwicmVzIiwibmFtZSIsInBhc3N3b3JkIiwidHlwZSIsInJvbGUiLCJib2R5IiwiYXBvbGxvQ2xpZW50IiwiaW5pdGlhbGl6ZUFwb2xsbyIsImRhdGEiLCJtdXRhdGUiLCJtdXRhdGlvbiIsImFkZEN1c3RvbWVyTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJvcGVyYXRpb24iLCJfaWQiLCJlbWFpbCIsImNhcnQiLCJvcmRlcnMiLCJhZGRDdXN0b21lciIsInRva2VuIiwiand0Iiwic2VjcmV0X2tleSIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJwYXRoIiwianNvbiIsImVyciIsIkVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2xDLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxZQUFSO0FBQWtCQyxRQUFsQjtBQUF3QkM7QUFBeEIsTUFBaUNMLEdBQUcsQ0FBQ00sSUFBM0M7QUFFQSxRQUFNQyxZQUFZLEdBQUdDLDBFQUFnQixFQUFyQzs7QUFDQSxNQUFJO0FBQ0gsVUFBTTtBQUFFQztBQUFGLFFBQVcsTUFBTUYsWUFBWSxDQUFDRyxNQUFiLENBQW9CO0FBQzFDQyxjQUFRLEVBQUVDLG9FQURnQztBQUUxQ0MsZUFBUyxFQUFFO0FBQUVYLFlBQUY7QUFBUUMsZ0JBQVI7QUFBa0JDLFlBQWxCO0FBQXdCQyxZQUF4QjtBQUE4QlMsaUJBQVMsRUFBRTtBQUF6QztBQUYrQixLQUFwQixDQUF2QjtBQUlBLFVBQU07QUFBRUMsU0FBRjtBQUFPQyxXQUFQO0FBQWNDLFVBQWQ7QUFBb0JDO0FBQXBCLFFBQStCVCxJQUFJLENBQUNVLFdBQTFDO0FBQ0EsVUFBTUMsS0FBSyxHQUFHQyx3REFBQSxDQUFTO0FBQUVOLFNBQUY7QUFBT2IsVUFBUDtBQUFhYztBQUFiLEtBQVQsRUFBK0JNLDZDQUEvQixDQUFkO0FBQ0FyQixPQUFHLENBQUNzQixTQUFKLENBQ0MsWUFERCxFQUVDQyxpREFBUyxDQUFDLE1BQUQsRUFBU0osS0FBVCxFQUFnQjtBQUN4QkssY0FBUSxFQUFFLElBRGM7QUFFeEI7QUFDQUMsY0FBUSxFQUFFLElBSGM7QUFJeEJDLFVBQUksRUFBRTtBQUprQixLQUFoQixDQUZWO0FBU0ExQixPQUFHLENBQUMyQixJQUFKLENBQVM7QUFBRTFCLFVBQUY7QUFBUWMsV0FBUjtBQUFlRCxTQUFmO0FBQW9CRSxVQUFwQjtBQUEwQkMsWUFBMUI7QUFBa0NFLFdBQWxDO0FBQXlDZjtBQUF6QyxLQUFUO0FBQ0EsR0FqQkQsQ0FpQkUsT0FBT3dCLEdBQVAsRUFBWTtBQUNiNUIsT0FBRyxDQUFDMkIsSUFBSixDQUFTO0FBQUVFLFdBQUssRUFBRUQsR0FBRyxDQUFDRTtBQUFiLEtBQVQ7QUFDQTtBQUNELENBeEJEOztBQTBCQSwrREFBZWhDLE1BQWYsRTs7Ozs7Ozs7Ozs7QUNoQ0EsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL3NpZ25pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEN1c3RvbWVyTXV0YXRpb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9hcG9sbG9cIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCJjb29raWVcIjtcclxuaW1wb3J0IHsgc2VjcmV0X2tleSB9IGZyb20gXCIuLi8uLi9rZXlzXCI7XHJcblxyXG5jb25zdCBzaWduaW4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCB7IG5hbWUsIHBhc3N3b3JkLCB0eXBlLCByb2xlIH0gPSByZXEuYm9keTtcclxuXHJcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5tdXRhdGUoe1xyXG5cdFx0XHRtdXRhdGlvbjogYWRkQ3VzdG9tZXJNdXRhdGlvbixcclxuXHRcdFx0dmFyaWFibGVzOiB7IG5hbWUsIHBhc3N3b3JkLCB0eXBlLCByb2xlLCBvcGVyYXRpb246IFwiQUREXCIgfSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgeyBfaWQsIGVtYWlsLCBjYXJ0LCBvcmRlcnMgfSA9IGRhdGEuYWRkQ3VzdG9tZXI7XHJcblx0XHRjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgX2lkLCBuYW1lLCBlbWFpbCB9LCBzZWNyZXRfa2V5KTtcclxuXHRcdHJlcy5zZXRIZWFkZXIoXHJcblx0XHRcdFwiU2V0LUNvb2tpZVwiLFxyXG5cdFx0XHRzZXJpYWxpemUoXCJhdXRoXCIsIHRva2VuLCB7XHJcblx0XHRcdFx0aHR0cE9ubHk6IHRydWUsXHJcblx0XHRcdFx0Ly8gc2VjdXJlOiBwcm9jZXNzLk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsXHJcblx0XHRcdFx0c2FtZVNpdGU6IHRydWUsXHJcblx0XHRcdFx0cGF0aDogXCIvXCIsXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0cmVzLmpzb24oeyBuYW1lLCBlbWFpbCwgX2lkLCBjYXJ0LCBvcmRlcnMsIHRva2VuLCByb2xlIH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0cmVzLmpzb24oeyBFcnJvcjogZXJyLm1lc3NhZ2UgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lnbmluO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9