self["webpackHotUpdate_N_E"]("pages/Create",{

/***/ "./pages/Create.js":
/*!*************************!*\
  !*** ./pages/Create.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/queries */ "./components/queries.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\srsah\\Desktop\\graphql-server\\client\\pages\\Create.js",
    _this = undefined,
    _s = $RefreshSig$();







var Create = function Create() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      author = _useState2[0],
      setAuthor = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      genre = _useState3[0],
      setGenre = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
      price = _useState4[0],
      setPrice = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      about = _useState5[0],
      setAbout = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      image = _useState6[0],
      setImage = _useState6[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_6__.addBookMutation),
      _useMutation2 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      addNewBook = _useMutation2[0];

  var uploadImage = /*#__PURE__*/function () {
    var _ref = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var data, res, result;
      return C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = new FormData();
              data.append("file", image);
              data.append("upload_preset", "bookstore");
              data.append("cloud_name", "instahunterx");
              _context.next = 6;
              return fetch("https://api.cloudinary.com/v1_1/instahunterx/image/upload", {
                method: "POST",
                body: data
              });

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              result = _context.sent;
              return _context.abrupt("return", result.url);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function uploadImage() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var _parseCookies, uid, imageUrl, data;

      return C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _parseCookies = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)(), uid = _parseCookies.uid;
              _context2.next = 3;
              return uploadImage();

            case 3:
              imageUrl = _context2.sent;
              _context2.next = 6;
              return addNewBook({
                variables: {
                  name: name,
                  author: author,
                  genre: genre,
                  price: Number(price),
                  about: about,
                  image: imageUrl,
                  sellerId: uid,
                  type: "ADD"
                }
              });

            case 6:
              data = _context2.sent;
              console.log(data);
              router.push("/");

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        height: "80vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "name",
          className: "form-label",
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control",
          id: "name",
          placeholder: "name",
          value: name,
          onChange: function onChange(e) {
            return setName(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "author",
          className: "form-label",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control",
          id: "author",
          placeholder: "author",
          value: author,
          onChange: function onChange(e) {
            return setAuthor(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "genre",
          className: "form-label",
          children: "Genre"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control",
          id: "genre",
          placeholder: "genre",
          value: genre,
          onChange: function onChange(e) {
            return setGenre(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "about",
          className: "form-label",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control",
          id: "about",
          placeholder: "about",
          value: about,
          onChange: function onChange(e) {
            return setAbout(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "price",
          className: "form-label",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          className: "form-control",
          id: "price",
          placeholder: "price",
          value: price,
          onChange: function onChange(e) {
            return setPrice(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input-group mb-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "file",
            className: "form-control",
            id: "inputGroupFile02",
            onChange: function onChange(e) {
              return setImage(e.target.files[0]);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "input-group-text",
            htmlFor: "inputGroupFile02",
            children: "Upload Image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn btn-primary",
          onClick: handleSubmit,
          children: "Add Book"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(Create, "Lpr3kNSsA8UskPx+azSor/uHHEo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation];
});

_c = Create;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Create);

var _c;

$RefreshReg$(_c, "Create");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJnZW5yZSIsInNldEdlbnJlIiwicHJpY2UiLCJzZXRQcmljZSIsImFib3V0Iiwic2V0QWJvdXQiLCJpbWFnZSIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJhZGROZXdCb29rIiwidXBsb2FkSW1hZ2UiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJqc29uIiwicmVzdWx0IiwidXJsIiwiaGFuZGxlU3VibWl0IiwicGFyc2VDb29raWVzIiwidWlkIiwiaW1hZ2VVcmwiLCJ2YXJpYWJsZXMiLCJOdW1iZXIiLCJzZWxsZXJJZCIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNJQywrQ0FBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ2JDLElBRGE7QUFBQSxNQUNQQyxPQURPOztBQUFBLG1CQUVRRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUViRyxNQUZhO0FBQUEsTUFFTEMsU0FGSzs7QUFBQSxtQkFHTUosK0NBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUdiSyxLQUhhO0FBQUEsTUFHTkMsUUFITTs7QUFBQSxtQkFJTU4sK0NBQVEsQ0FBQyxD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QUFBO0FBQUE7QUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFzRkEsQ0FwSUQ7O0dBQU05QixNO1VBUVVlLGtELEVBRU1DLHVEOzs7S0FWaEJoQixNOztBQXVKTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9DcmVhdGUuNjY1MWE4ZjhlMjM4ZmM5NGM0ZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBhZGRCb29rTXV0YXRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB2ZXJpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHMvdmVyaWZpY2F0aW9uXCI7XHJcblxyXG5jb25zdCBDcmVhdGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtnZW5yZSwgc2V0R2VucmVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbYWJvdXQsIHNldEFib3V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW2FkZE5ld0Jvb2tdID0gdXNlTXV0YXRpb24oYWRkQm9va011dGF0aW9uKTtcclxuXHJcblx0Y29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRkYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2UpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwiYm9va3N0b3JlXCIpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwiaW5zdGFodW50ZXJ4XCIpO1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcblx0XHRcdFwiaHR0cHM6Ly9hcGkuY2xvdWRpbmFyeS5jb20vdjFfMS9pbnN0YWh1bnRlcngvaW1hZ2UvdXBsb2FkXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdGJvZHk6IGRhdGEsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdC51cmw7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFyc2VDb29raWVzKCk7XHJcblx0XHRjb25zdCBpbWFnZVVybCA9IGF3YWl0IHVwbG9hZEltYWdlKCk7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYWRkTmV3Qm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0YXV0aG9yLFxyXG5cdFx0XHRcdGdlbnJlLFxyXG5cdFx0XHRcdHByaWNlOiBOdW1iZXIocHJpY2UpLFxyXG5cdFx0XHRcdGFib3V0LFxyXG5cdFx0XHRcdGltYWdlOiBpbWFnZVVybCxcclxuXHRcdFx0XHRzZWxsZXJJZDogdWlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiQUREXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0cm91dGVyLnB1c2goXCIvXCIpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdGhlaWdodDogXCI4MHZoXCIsXHJcblx0XHRcdFx0XHR3aWR0aDogXCIxMDB2d1wiLFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRUaXRsZVxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYXV0aG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRBdXRob3JcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImF1dGhvclwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYXV0aG9yXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2F1dGhvcn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZ2VucmVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEdlbnJlXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJnZW5yZVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZ2VucmVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17Z2VucmV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VucmUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEFib3V0XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17YWJvdXR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWJvdXQoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFByaWNlXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cInByaWNlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJwcmljZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtwcmljZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiaW5wdXRHcm91cEZpbGUwMlwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaHRtbEZvcj1cImlucHV0R3JvdXBGaWxlMDJcIj5cclxuXHRcdFx0XHRcdFx0XHRVcGxvYWQgSW1hZ2VcclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0QWRkIEJvb2tcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cdGNvbnN0IHsgYXV0aCB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblx0Y29uc3QgdmVyaWZ5ID0gdmVyaWZpY2F0aW9uKGF1dGgpO1xyXG5cdGlmICh2ZXJpZnkuZXJyb3IpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlZGlyZWN0OiB7XHJcblx0XHRcdFx0cGVybWFuZW50OiBmYWxzZSxcclxuXHRcdFx0XHRkZXN0aW5hdGlvbjogXCIvU2lnbmluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHByb3BzOiB7fSxcclxuXHRcdH07XHJcblx0fSBlbHNlXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9