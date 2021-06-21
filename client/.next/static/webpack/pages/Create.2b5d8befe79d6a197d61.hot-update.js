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
      var _parseCookies, uid, data;

      return C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // e.preventDefault();
              _parseCookies = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)(), uid = _parseCookies.uid; // console.log(uid);
              // const imageUrl = await uploadImage();

              console.log(name, author, genre, price, about, uid); // console.log(typeof(imageUrl));

              _context2.next = 4;
              return addNewBook({
                variables: {
                  name: name,
                  author: author,
                  genre: genre,
                  price: price,
                  about: about,
                  // image: imageUrl,
                  sellerId: uid,
                  type: "ADD"
                }
              });

            case 4:
              data = _context2.sent;
              console.log(data);
              router.push("/");

            case 7:
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

_s(Create, "FlzcI6QQJN96SwGFKci2QOgz7kc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJnZW5yZSIsInNldEdlbnJlIiwicHJpY2UiLCJzZXRQcmljZSIsImFib3V0Iiwic2V0QWJvdXQiLCJpbWFnZSIsInNldEltYWdlIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJhZGROZXdCb29rIiwidXBsb2FkSW1hZ2UiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJqc29uIiwicmVzdWx0IiwidXJsIiwiaGFuZGxlU3VibWl0IiwicGFyc2VDb29raWVzIiwidWlkIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInNlbGxlcklkIiwidHlwZSIsInJvdXRlciIsInB1c2giLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLCtDQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBQUEsbUJBRVFGLCtDQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRWJHLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUFBLG1CQUdNSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR2JLLEtBSGE7QUFBQSxNQUdOQyxRQUhNOztBQUFBLG1CQUlNTiwrQ0FBUSxDQUFDLENBQUQsQ0FKZDtBQUFBLE1BSWJPLEtBSmE7QUFBQSxNQUlOQyxRQUpN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QSxtQkFBT2hDLFFBQVEsQ0FBQ2dDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckNELGVBNkNDO0FBQU8saUJBQU8sRUFBQyxPQUFmO0FBQXVCLG1CQUFTLEVBQUMsWUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0NELGVBZ0RDO0FBQ0MsY0FBSSxFQUFDLFFBRE47QUFFQyxtQkFBUyxFQUFDLGNBRlg7QUFHQyxZQUFFLEVBQUMsT0FISjtBQUlDLHFCQUFXLEVBQUMsT0FKYjtBQUtDLGVBQUssRUFBRXJDLEtBTFI7QUFNQyxrQkFBUSxFQUFFLGtCQUFDbUMsQ0FBRDtBQUFBLG1CQUFPbEMsUUFBUSxDQUFDa0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoREQsZUFvRUM7QUFBUSxtQkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxpQkFBTyxFQUFFakIsWUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQXlIQSxDQTFLRDs7R0FBTTVCLE07VUFRZ0JjLHVEOzs7S0FSaEJkLE07O0FBNkxOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NyZWF0ZS4yYjVkOGJlZmU3OWQ2YTE5N2Q2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IGFkZEJvb2tNdXRhdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHZlcmlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlscy92ZXJpZmljYXRpb25cIjtcclxuXHJcbmNvbnN0IENyZWF0ZSA9ICgpID0+IHtcclxuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cdGNvbnN0IFthZGROZXdCb29rXSA9IHVzZU11dGF0aW9uKGFkZEJvb2tNdXRhdGlvbik7XHJcblxyXG5cdGNvbnN0IHVwbG9hZEltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlKTtcclxuXHRcdGRhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcImJvb2tzdG9yZVwiKTtcclxuXHRcdGRhdGEuYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcImluc3RhaHVudGVyeFwiKTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG5cdFx0XHRcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvaW5zdGFodW50ZXJ4L2ltYWdlL3VwbG9hZFwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRib2R5OiBkYXRhLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRyZXR1cm4gcmVzdWx0LnVybDtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuXHRcdC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHsgdWlkIH0gPSBwYXJzZUNvb2tpZXMoKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHVpZCk7XHJcblx0XHQvLyBjb25zdCBpbWFnZVVybCA9IGF3YWl0IHVwbG9hZEltYWdlKCk7XHJcblx0XHRjb25zb2xlLmxvZyhuYW1lLCBhdXRob3IsIGdlbnJlLCBwcmljZSwgYWJvdXQsIHVpZCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0eXBlb2YoaW1hZ2VVcmwpKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhZGROZXdCb29rKHtcclxuXHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRhdXRob3IsXHJcblx0XHRcdFx0Z2VucmUsXHJcblx0XHRcdFx0cHJpY2UsXHJcblx0XHRcdFx0YWJvdXQsXHJcblx0XHRcdFx0Ly8gaW1hZ2U6IGltYWdlVXJsLFxyXG5cdFx0XHRcdHNlbGxlcklkOiB1aWQsXHJcblx0XHRcdFx0dHlwZTogXCJBRERcIixcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjgwdmhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjEwMHZ3XCIsXHJcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFRpdGxlXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhdXRob3JcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEF1dGhvclxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwiYXV0aG9yXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJhdXRob3JcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17YXV0aG9yfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0R2VucmVcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImdlbnJlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJnZW5yZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtnZW5yZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5yZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhYm91dFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0QWJvdXRcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXthYm91dH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBYm91dChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0UHJpY2VcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInByaWNlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ByaWNlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiaW5wdXRHcm91cEZpbGUwMlwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaHRtbEZvcj1cImlucHV0R3JvdXBGaWxlMDJcIj5cclxuXHRcdFx0XHRcdFx0XHRVcGxvYWQgSW1hZ2VcclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHRcdEFkZCBCb29rXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHR7LyogPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImF1dGhvclwiXHJcblx0XHRcdFx0XHR2YWx1ZT17YXV0aG9yfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImdlbnJlXCJcclxuXHRcdFx0XHRcdHZhbHVlPXtnZW5yZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VucmUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInByaWNlXCJcclxuXHRcdFx0XHRcdHZhbHVlPXtwcmljZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImFib3V0XCJcclxuXHRcdFx0XHRcdHZhbHVlPXthYm91dH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWJvdXQoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9IC8+IFxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGQgQm9va1wiIC8+XHJcblx0XHRcdDwvZm9ybT4gKi99XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuXHRjb25zdCB7IGF1dGggfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cdGNvbnN0IHZlcmlmeSA9IHZlcmlmaWNhdGlvbihhdXRoKTtcclxuXHRpZiAodmVyaWZ5LmVycm9yKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyZWRpcmVjdDoge1xyXG5cdFx0XHRcdHBlcm1hbmVudDogZmFsc2UsXHJcblx0XHRcdFx0ZGVzdGluYXRpb246IFwiL1NpZ25pblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG5cdH0gZWxzZVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==