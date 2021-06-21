(function() {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; }
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_typeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/typeDefs */ "./components/typeDefs.js");
/* harmony import */ var _components_typeDefs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_typeDefs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/resolvers */ "./components/resolvers.js");
/* harmony import */ var _components_resolvers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_resolvers__WEBPACK_IMPORTED_MODULE_2__);



const server = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
  typeDefs: (_components_typeDefs__WEBPACK_IMPORTED_MODULE_1___default()),
  resolvers: (_components_resolvers__WEBPACK_IMPORTED_MODULE_2___default()),
  uploads: false
});
const handler = server.createHandler({
  path: "/api/graphql"
});
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-server-micro");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_resolvers_js-components_typeDefs_js"], function() { return __webpack_exec__("./pages/api/graphql.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItbWljcm9cIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbInNlcnZlciIsIkFwb2xsb1NlcnZlciIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwidXBsb2FkcyIsImhhbmRsZXIiLCJjcmVhdGVIYW5kbGVyIiwicGF0aCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLDZEQUFKLENBQWlCO0FBQUVDLFVBQUY7QUFBWUMsV0FBWjtBQUF1QkMsU0FBTyxFQUFFO0FBQWhDLENBQWpCLENBQWY7QUFFQSxNQUFNQyxPQUFPLEdBQUdMLE1BQU0sQ0FBQ00sYUFBUCxDQUFxQjtBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUFyQixDQUFoQjtBQUVPLE1BQU1DLE1BQU0sR0FBRztBQUNyQkMsS0FBRyxFQUFFO0FBQ0pDLGNBQVUsRUFBRTtBQURSO0FBRGdCLENBQWY7QUFNUCwrREFBZUwsT0FBZixFOzs7Ozs7Ozs7OztBQ2RBLDRDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InBhZ2VzL2FwaS9ncmFwaHFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItbWljcm9cIjtcclxuaW1wb3J0IHR5cGVEZWZzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3R5cGVEZWZzXCI7XHJcbmltcG9ydCByZXNvbHZlcnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHsgdHlwZURlZnMsIHJlc29sdmVycywgdXBsb2FkczogZmFsc2UgfSk7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gc2VydmVyLmNyZWF0ZUhhbmRsZXIoeyBwYXRoOiBcIi9hcGkvZ3JhcGhxbFwiIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuXHRhcGk6IHtcclxuXHRcdGJvZHlQYXJzZXI6IGZhbHNlLFxyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1taWNyb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==