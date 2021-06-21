(function() {
var exports = {};
exports.id = "pages/Signin";
exports.ids = ["pages/Signin"];
exports.modules = {

/***/ "./pages/Signin.js":
/*!*************************!*\
  !*** ./pages/Signin.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\srsah\\Desktop\\graphql-server\\client\\pages\\Signin.js";




const Signin = () => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: role,
    1: setRole
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const handleSubmit = () => {
    fetch("/api/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: username,
        password,
        type: "signin",
        role
      })
    }).then(res => res.json()).then(result => {
      // console.log(result);
      if (result.Error) alert(result.Error);else {
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(null, "uid", result._id);
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(null, "signedin", "true");
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(null, "role", result.role);
        router.push("/");
      }
    }).catch(err => console.log(err));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      height: "80vh",
      width: "100vw",
      display: 'flex',
      alignItems: "center",
      justifyContent: "center"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-3",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "username",
        className: "form-label",
        children: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "email",
        className: "form-control",
        id: "username",
        placeholder: "username",
        value: username,
        onChange: e => setUsername(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "password",
        className: "form-label",
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "email",
        className: "form-control",
        id: "password",
        placeholder: "password",
        value: password,
        onChange: e => setPassword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-check",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "form-check-input",
          type: "radio",
          name: "flexRadioDefault",
          id: "flexRadioDefault1",
          onClick: () => setRole("customer")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "form-check-label",
          htmlFor: "flexRadioDefault1",
          children: "Customer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-check",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "form-check-input",
          type: "radio",
          name: "flexRadioDefault",
          id: "flexRadioDefault2",
          onClick: () => setRole("seller")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "form-check-label",
          htmlFor: "flexRadioDefault2",
          children: "Seller"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-check",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "form-check-input",
          type: "radio",
          name: "flexRadioDefault",
          id: "flexRadioDefault3",
          onClick: () => setRole("admin")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "form-check-label",
          htmlFor: "flexRadioDefault3",
          children: "Admin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-primary",
        onClick: handleSubmit,
        children: "Signin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Signin);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/Signin.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9TaWduaW4uanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJTaWduaW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm9sZSIsInNldFJvbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJ0eXBlIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJFcnJvciIsImFsZXJ0Iiwic2V0Q29va2llIiwiX2lkIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JKLCtDQUFRLENBQUMsRUFB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LG1EIiwiZmlsZSI6InBhZ2VzL1NpZ25pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xyXG5cclxuY29uc3QgU2lnbmluID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG5cdFx0ZmV0Y2goXCIvYXBpL3NpZ25pblwiLCB7XHJcblx0XHRcdG1ldGhvZDogXCJwb3N0XCIsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQsIHR5cGU6IFwic2lnbmluXCIsIHJvbGUgfSksXHJcblx0XHR9KVxyXG5cdFx0XHQudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG5cdFx0XHQudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHRpZiAocmVzdWx0LkVycm9yKSBhbGVydChyZXN1bHQuRXJyb3IpO1xyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0c2V0Q29va2llKG51bGwsIFwidWlkXCIsIHJlc3VsdC5faWQpO1xyXG5cdFx0XHRcdFx0c2V0Q29va2llKG51bGwsIFwic2lnbmVkaW5cIiwgXCJ0cnVlXCIpO1xyXG5cdFx0XHRcdFx0c2V0Q29va2llKG51bGwsIFwicm9sZVwiLCByZXN1bHQucm9sZSk7XHJcblx0XHRcdFx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjgwdmhcIiwgd2lkdGg6IFwiMTAwdndcIiwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0VXNlcm5hbWVcclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRpZD1cInVzZXJuYW1lXCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e3VzZXJuYW1lfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0UGFzc3dvcmRcclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJmbGV4UmFkaW9EZWZhdWx0XCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJmbGV4UmFkaW9EZWZhdWx0MVwiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFJvbGUoXCJjdXN0b21lclwiKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJmbGV4UmFkaW9EZWZhdWx0MVwiPlxyXG5cdFx0XHRcdFx0XHRDdXN0b21lclxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0bmFtZT1cImZsZXhSYWRpb0RlZmF1bHRcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImZsZXhSYWRpb0RlZmF1bHQyXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0Um9sZShcInNlbGxlclwiKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJmbGV4UmFkaW9EZWZhdWx0MlwiPlxyXG5cdFx0XHRcdFx0XHRTZWxsZXJcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJmbGV4UmFkaW9EZWZhdWx0XCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJmbGV4UmFkaW9EZWZhdWx0M1wiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFJvbGUoXCJhZG1pblwiKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJmbGV4UmFkaW9EZWZhdWx0M1wiPlxyXG5cdFx0XHRcdFx0XHRBZG1pblxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHRTaWduaW5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHsvKiA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gKi99XHJcblx0XHRcdHsvKiA8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e3VzZXJuYW1lfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz4gKi99XHJcblxyXG5cdFx0XHR7LyogPGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxyXG5cdFx0XHRcdFx0dmFsdWU9XCJjdXN0b21lclwiXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRSb2xlKFwiY3VzdG9tZXJcIil9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImN1c3RvbWVyXCI+Q3VzdG9tZXI8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInNlbGxlclwiIG9uQ2xpY2s9eygpID0+IHNldFJvbGUoXCJzZWxsZXJcIil9IC8+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJzZWxsZXJcIj5TZWxsZXI8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImFkbWluXCIgb25DbGljaz17KCkgPT4gc2V0Um9sZShcImFkbWluXCIpfSAvPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRtaW5cIj5BZG1pbjwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPiAqL31cclxuXHRcdFx0ey8qIDwvZm9ybT4gKi99XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmluO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==