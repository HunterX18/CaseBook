(function() {
var exports = {};
exports.id = "pages/api/signout";
exports.ids = ["pages/api/signout"];
exports.modules = {

/***/ "./pages/api/signout.js":
/*!******************************!*\
  !*** ./pages/api/signout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);


const signout = (req, res) => {
  res.setHeader("Set-Cookie", (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)("auth", "", {
    httpOnly: true,
    // secure: process.NODE_ENV !== "development",
    sameSite: true,
    path: "/",
    maxAge: 0
  }));
  res.json({
    mssg: "signout successful"
  });
  return;
};

/* harmony default export */ __webpack_exports__["default"] = (signout);

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/signout.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvc2lnbm91dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJjb29raWVcIiJdLCJuYW1lcyI6WyJzaWdub3V0IiwicmVxIiwicmVzIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsInBhdGgiLCJtYXhBZ2UiLCJqc29uIiwibXNzZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUM3QkEsS0FBRyxDQUFDQyxTQUFKLENBQ0MsWUFERCxFQUVDQyxpREFBUyxDQUFDLE1BQUQsRUFBUyxFQUFULEVBQWE7QUFDckJDLFlBQVEsRUFBRSxJQURXO0FBRXJCO0FBQ0FDLFlBQVEsRUFBRSxJQUhXO0FBSXJCQyxRQUFJLEVBQUUsR0FKZTtBQUtyQkMsVUFBTSxFQUFFO0FBTGEsR0FBYixDQUZWO0FBVUFOLEtBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQVQ7QUFDQTtBQUNBLENBYkQ7O0FBZUEsK0RBQWVWLE9BQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3NpZ25vdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwiY29va2llXCI7XHJcblxyXG5jb25zdCBzaWdub3V0ID0gKHJlcSwgcmVzKSA9PiB7XHJcblx0cmVzLnNldEhlYWRlcihcclxuXHRcdFwiU2V0LUNvb2tpZVwiLFxyXG5cdFx0c2VyaWFsaXplKFwiYXV0aFwiLCBcIlwiLCB7XHJcblx0XHRcdGh0dHBPbmx5OiB0cnVlLFxyXG5cdFx0XHQvLyBzZWN1cmU6IHByb2Nlc3MuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIixcclxuXHRcdFx0c2FtZVNpdGU6IHRydWUsXHJcblx0XHRcdHBhdGg6IFwiL1wiLFxyXG5cdFx0XHRtYXhBZ2U6IDAsXHJcblx0XHR9KVxyXG5cdCk7XHJcblx0cmVzLmpzb24oeyBtc3NnOiBcInNpZ25vdXQgc3VjY2Vzc2Z1bFwiIH0pO1xyXG5cdHJldHVybjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25vdXQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==