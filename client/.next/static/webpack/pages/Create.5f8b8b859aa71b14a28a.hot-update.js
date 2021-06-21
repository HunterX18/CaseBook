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
              console.log(uid);
              _context2.next = 4;
              return uploadImage();

            case 4:
              imageUrl = _context2.sent;
              console.log(name, author, genre, price, about, uid);
              console.log(typeof Number(price));
              _context2.next = 9;
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

            case 9:
              data = _context2.sent;
              console.log(data);
              router.push("/");

            case 12:
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
          lineNumber: 69,
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
          lineNumber: 72,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "author",
          className: "form-label",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
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
          lineNumber: 83,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "genre",
          className: "form-label",
          children: "Genre"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
          lineNumber: 94,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "about",
          className: "form-label",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
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
          lineNumber: 105,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "price",
          className: "form-label",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
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
          lineNumber: 116,
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
            lineNumber: 125,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "input-group-text",
            htmlFor: "inputGroupFile02",
            children: "Upload Image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn btn-primary",
          onClick: handleSubmit,
          children: "Add Book"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJnZW5yZSIsInNldEdlbnJlIiwicHJpY2UiLCJzZXRQcmljZSIsImFib3V0Iiwic2V0QWJvdXQiLCJpbWFnZSIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJhZGROZXdCb29rIiwidXBsb2FkSW1hZ2UiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJqc29uIiwicmVzdWx0IiwidXJsIiwiaGFuZGxlU3VibWl0IiwicGFyc2VDb29raWVzIiwidWlkIiwiY29uc29sZSIsImxvZyIsImltYWdlVXJsIiwiTnVtYmVyIiwidmFyaWFibGVzIiwic2VsbGVySWQiLCJ0eXBlIiwicHVzaCIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNJQywrQ0FBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ2JDLElBRGE7QUFBQSxNQUNQQyxPQURPOztBQUFBLG1CQUVRRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUViRyxNQUZhO0FBQUEsTUFFTEMsU0FGSzs7QUFBQSxtQkFHTUosK0NBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUdiSyxLQUhhO0FBQUEsTUFHTkMsUUFITTs7QUFBQSxtQkFJTU4sK0NBQVEsQ0FBQyxD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b0MsbUJBQU8sRUFBQyxrQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhERCxlQW9FQztBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGlCQUFPLEVBQUVuQixZQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBc0ZBLENBdklEOztHQUFNOUIsTTtVQVFVZSxrRCxFQUVNQyx1RDs7O0tBVmhCaEIsTTs7QUEySk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ3JlYXRlLjVmOGI4Yjg1OWFhNzFiMTRhMjhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgYWRkQm9va011dGF0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgdmVyaWZpY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvblwiO1xyXG5cclxuY29uc3QgQ3JlYXRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFthdXRob3IsIHNldEF1dGhvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbZ2VucmUsIHNldEdlbnJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFthZGROZXdCb29rXSA9IHVzZU11dGF0aW9uKGFkZEJvb2tNdXRhdGlvbik7XHJcblxyXG5cdGNvbnN0IHVwbG9hZEltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlKTtcclxuXHRcdGRhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcImJvb2tzdG9yZVwiKTtcclxuXHRcdGRhdGEuYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcImluc3RhaHVudGVyeFwiKTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG5cdFx0XHRcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvaW5zdGFodW50ZXJ4L2ltYWdlL3VwbG9hZFwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRib2R5OiBkYXRhLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdHJldHVybiByZXN1bHQudXJsO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgeyB1aWQgfSA9IHBhcnNlQ29va2llcygpO1xyXG5cdFx0Y29uc29sZS5sb2codWlkKTtcclxuXHRcdGNvbnN0IGltYWdlVXJsID0gYXdhaXQgdXBsb2FkSW1hZ2UoKTtcclxuXHRcdGNvbnNvbGUubG9nKG5hbWUsIGF1dGhvciwgZ2VucmUsIHByaWNlLCBhYm91dCwgdWlkKTtcclxuXHRcdGNvbnNvbGUubG9nKHR5cGVvZiBOdW1iZXIocHJpY2UpKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhZGROZXdCb29rKHtcclxuXHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRhdXRob3IsXHJcblx0XHRcdFx0Z2VucmUsXHJcblx0XHRcdFx0cHJpY2U6IE51bWJlcihwcmljZSksXHJcblx0XHRcdFx0YWJvdXQsXHJcblx0XHRcdFx0aW1hZ2U6IGltYWdlVXJsLFxyXG5cdFx0XHRcdHNlbGxlcklkOiB1aWQsXHJcblx0XHRcdFx0dHlwZTogXCJBRERcIixcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjgwdmhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjEwMHZ3XCIsXHJcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFRpdGxlXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhdXRob3JcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEF1dGhvclxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwiYXV0aG9yXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJhdXRob3JcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17YXV0aG9yfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0R2VucmVcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImdlbnJlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJnZW5yZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtnZW5yZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5yZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhYm91dFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0QWJvdXRcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXthYm91dH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBYm91dChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0UHJpY2VcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInByaWNlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ByaWNlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImZpbGVcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJpbnB1dEdyb3VwRmlsZTAyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBodG1sRm9yPVwiaW5wdXRHcm91cEZpbGUwMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFVwbG9hZCBJbWFnZVxyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdFx0XHRBZGQgQm9va1xyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0Y29uc29sZS5sb2coXCJzZXJ2ZXJcIik7XHJcblx0Y29uc3QgeyBhdXRoIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHRjb25zdCB2ZXJpZnkgPSB2ZXJpZmljYXRpb24oYXV0aCk7XHJcblx0aWYgKHZlcmlmeS5lcnJvcikge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9TaWduaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9IGVsc2VcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7fSxcclxuXHRcdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=