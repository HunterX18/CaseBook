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

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_6__.addBookMutation),
      _useMutation2 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      addBook = _useMutation2[0];

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
              // e.preventDefault();
              _parseCookies = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)(), uid = _parseCookies.uid;
              console.log(name, author, genre, price, about, uid); // console.log(uid);

              _context2.next = 4;
              return uploadImage();

            case 4:
              imageUrl = _context2.sent;
              console.log(imageUrl);
              _context2.next = 8;
              return addBook({
                variables: {
                  name: name,
                  author: author,
                  genre: genre,
                  price: price,
                  about: about,
                  image: imageUrl,
                  sellerId: uid,
                  type: "ADD"
                }
              });

            case 8:
              data = _context2.sent;
              console.log(data);

            case 10:
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
          lineNumber: 68,
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
          lineNumber: 71,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "author",
          className: "form-label",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
          lineNumber: 82,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "genre",
          className: "form-label",
          children: "Genre"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
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
          lineNumber: 93,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "about",
          className: "form-label",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
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
          lineNumber: 104,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "price",
          className: "form-label",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
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
          lineNumber: 115,
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
            lineNumber: 124,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "input-group-text",
            htmlFor: "inputGroupFile02",
            children: "Upload Image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn btn-primary",
          onClick: handleSubmit,
          children: "Add Book"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(Create, "WYXk/fMBQQOcmhRsxRfW1gBIn+I=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJnZW5yZSIsInNldEdlbnJlIiwicHJpY2UiLCJzZXRQcmljZSIsImFib3V0Iiwic2V0QWJvdXQiLCJpbWFnZSIsInNldEltYWdlIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJhZGRCb29rIiwidXBsb2FkSW1hZ2UiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJqc29uIiwicmVzdWx0IiwidXJsIiwiaGFuZGxlU3VibWl0IiwicGFyc2VDb29raWVzIiwidWlkIiwiY29uc29sZSIsImxvZyIsImltYWdlVXJsIiwidmFyaWFibGVzIiwic2VsbGVySWQiLCJ0eXBlIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLCtDQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBQUEsbUJBRVFGLCtDQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRWJHLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUFBLG1CQUdNSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR2JLLEtBSGE7QUFBQSxNQUdOQyxRQUhNOztBQUFBLG1CQUlNTiwrQ0FBUSxDQUFDLENBQUQsQ0FKZDtBQUFBLE1BSWJPLEtBSmE7QUFBQSxNQUlOQyxRQUpN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QUE7QUFBQSxpQkFwRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBeUhBLENBektEOztHQUFNNUIsTTtVQVFhYyx1RDs7O0tBUmJkLE07O0FBNExOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NyZWF0ZS5hOTg3MzNiNjBjMTZhMWVhMTY3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IGFkZEJvb2tNdXRhdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHZlcmlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlscy92ZXJpZmljYXRpb25cIjtcclxuXHJcbmNvbnN0IENyZWF0ZSA9ICgpID0+IHtcclxuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cdGNvbnN0IFthZGRCb29rXSA9IHVzZU11dGF0aW9uKGFkZEJvb2tNdXRhdGlvbik7XHJcblxyXG5cdGNvbnN0IHVwbG9hZEltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlKTtcclxuXHRcdGRhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcImJvb2tzdG9yZVwiKTtcclxuXHRcdGRhdGEuYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcImluc3RhaHVudGVyeFwiKTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG5cdFx0XHRcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvaW5zdGFodW50ZXJ4L2ltYWdlL3VwbG9hZFwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRib2R5OiBkYXRhLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRyZXR1cm4gcmVzdWx0LnVybDtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuXHRcdC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHsgdWlkIH0gPSBwYXJzZUNvb2tpZXMoKTtcclxuXHRcdGNvbnNvbGUubG9nKG5hbWUsIGF1dGhvciwgZ2VucmUsIHByaWNlLCBhYm91dCwgdWlkKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHVpZCk7XHJcblx0XHRjb25zdCBpbWFnZVVybCA9IGF3YWl0IHVwbG9hZEltYWdlKCk7XHJcblx0XHRjb25zb2xlLmxvZyhpbWFnZVVybCk7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYWRkQm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0YXV0aG9yLFxyXG5cdFx0XHRcdGdlbnJlLFxyXG5cdFx0XHRcdHByaWNlLFxyXG5cdFx0XHRcdGFib3V0LFxyXG5cdFx0XHRcdGltYWdlOiBpbWFnZVVybCxcclxuXHRcdFx0XHRzZWxsZXJJZDogdWlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiQUREXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdGhlaWdodDogXCI4MHZoXCIsXHJcblx0XHRcdFx0XHR3aWR0aDogXCIxMDB2d1wiLFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRUaXRsZVxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYXV0aG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRBdXRob3JcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImF1dGhvclwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYXV0aG9yXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2F1dGhvcn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZ2VucmVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEdlbnJlXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJnZW5yZVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZ2VucmVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17Z2VucmV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VucmUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEFib3V0XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17YWJvdXR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWJvdXQoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFByaWNlXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cInByaWNlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJwcmljZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtwcmljZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiaW5wdXRHcm91cEZpbGUwMlwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaHRtbEZvcj1cImlucHV0R3JvdXBGaWxlMDJcIj5cclxuXHRcdFx0XHRcdFx0XHRVcGxvYWQgSW1hZ2VcclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0QWRkIEJvb2tcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHsvKiA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcblx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYXV0aG9yXCJcclxuXHRcdFx0XHRcdHZhbHVlPXthdXRob3J9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZ2VucmVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e2dlbnJlfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5yZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e3ByaWNlfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e2Fib3V0fVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBYm91dChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKX0gLz4gXHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZCBCb29rXCIgLz5cclxuXHRcdFx0PC9mb3JtPiAqL31cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cdGNvbnN0IHsgYXV0aCB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblx0Y29uc3QgdmVyaWZ5ID0gdmVyaWZpY2F0aW9uKGF1dGgpO1xyXG5cdGlmICh2ZXJpZnkuZXJyb3IpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlZGlyZWN0OiB7XHJcblx0XHRcdFx0cGVybWFuZW50OiBmYWxzZSxcclxuXHRcdFx0XHRkZXN0aW5hdGlvbjogXCIvU2lnbmluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHByb3BzOiB7fSxcclxuXHRcdH07XHJcblx0fSBlbHNlXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9