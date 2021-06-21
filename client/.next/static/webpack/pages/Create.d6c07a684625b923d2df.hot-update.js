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
          lineNumber: 71,
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
          lineNumber: 74,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "author",
          className: "form-label",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
          lineNumber: 85,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "genre",
          className: "form-label",
          children: "Genre"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
          lineNumber: 96,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "about",
          className: "form-label",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
          lineNumber: 107,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "price",
          className: "form-label",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
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
          lineNumber: 118,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn btn-primary",
          onClick: handleSubmit,
          children: "Add Book"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJnZW5yZSIsInNldEdlbnJlIiwicHJpY2UiLCJzZXRQcmljZSIsImFib3V0Iiwic2V0QWJvdXQiLCJpbWFnZSIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJhZGROZXdCb29rIiwidXBsb2FkSW1hZ2UiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJqc29uIiwicmVzdWx0IiwidXJsIiwiaGFuZGxlU3VibWl0IiwicGFyc2VDb29raWVzIiwidWlkIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInNlbGxlcklkIiwidHlwZSIsInB1c2giLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLCtDQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBQUEsbUJBRVFGLCtDQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRWJHLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUFBLG1CQUdNSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR2JLLEtBSGE7QUFBQSxNQUdOQyxRQUhNOztBQUFBLG1CQUlNTiwrQ0FBUSxDQUFDLENBQUQsQ0FKZDtBQUFBLE1BSWJPLEtBSmE7QUFB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ZUFBSyxFQUFFcEMsS0FMUjtBQU1DLGtCQUFRLEVBQUUsa0JBQUNrQyxDQUFEO0FBQUEsbUJBQU9qQyxRQUFRLENBQUNpQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJDRCxlQTZDQztBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUF1QixtQkFBUyxFQUFDLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdDRCxlQWdEQztBQUNDLGNBQUksRUFBQyxRQUROO0FBRUMsbUJBQVMsRUFBQyxjQUZYO0FBR0MsWUFBRSxFQUFDLE9BSEo7QUFJQyxxQkFBVyxFQUFDLE9BSmI7QUFLQyxlQUFLLEVBQUV0QyxLQUxSO0FBTUMsa0JBQVEsRUFBRSxrQkFBQ29DLENBQUQ7QUFBQSxtQkFBT25DLFFBQVEsQ0FBQ21DLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaERELGVBb0VDO0FBQVEsbUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsaUJBQU8sRUFBRWhCLFlBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUF5SEEsQ0E1S0Q7O0dBQU05QixNO1VBUVVlLGtELEVBRU1DLHVEOzs7S0FWaEJoQixNOztBQWdNTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9DcmVhdGUuZDZjMDdhNjg0NjI1YjkyM2QyZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBhZGRCb29rTXV0YXRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB2ZXJpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHMvdmVyaWZpY2F0aW9uXCI7XHJcblxyXG5jb25zdCBDcmVhdGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtnZW5yZSwgc2V0R2VucmVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbYWJvdXQsIHNldEFib3V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW2FkZE5ld0Jvb2tdID0gdXNlTXV0YXRpb24oYWRkQm9va011dGF0aW9uKTtcclxuXHJcblx0Y29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRkYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2UpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwiYm9va3N0b3JlXCIpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwiaW5zdGFodW50ZXJ4XCIpO1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcblx0XHRcdFwiaHR0cHM6Ly9hcGkuY2xvdWRpbmFyeS5jb20vdjFfMS9pbnN0YWh1bnRlcngvaW1hZ2UvdXBsb2FkXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdGJvZHk6IGRhdGEsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdHJldHVybiByZXN1bHQudXJsO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgeyB1aWQgfSA9IHBhcnNlQ29va2llcygpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codWlkKTtcclxuXHRcdC8vIGNvbnN0IGltYWdlVXJsID0gYXdhaXQgdXBsb2FkSW1hZ2UoKTtcclxuXHRcdGNvbnNvbGUubG9nKG5hbWUsIGF1dGhvciwgZ2VucmUsIHByaWNlLCBhYm91dCwgdWlkKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHR5cGVvZihpbWFnZVVybCkpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFkZE5ld0Jvb2soe1xyXG5cdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdGF1dGhvcixcclxuXHRcdFx0XHRnZW5yZSxcclxuXHRcdFx0XHRwcmljZSxcclxuXHRcdFx0XHRhYm91dCxcclxuXHRcdFx0XHQvLyBpbWFnZTogaW1hZ2VVcmwsXHJcblx0XHRcdFx0c2VsbGVySWQ6IHVpZCxcclxuXHRcdFx0XHR0eXBlOiBcIkFERFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiODB2aFwiLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMTAwdndcIixcclxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0VGl0bGVcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImF1dGhvclwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0QXV0aG9yXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJhdXRob3JcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImF1dGhvclwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXthdXRob3J9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRHZW5yZVxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwiZ2VucmVcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImdlbnJlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2dlbnJlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEdlbnJlKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImFib3V0XCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRBYm91dFxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2Fib3V0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEFib3V0KGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInByaWNlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRQcmljZVxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJwcmljZVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cHJpY2V9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImZpbGVcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJpbnB1dEdyb3VwRmlsZTAyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBodG1sRm9yPVwiaW5wdXRHcm91cEZpbGUwMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFVwbG9hZCBJbWFnZVxyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0QWRkIEJvb2tcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHsvKiA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcblx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYXV0aG9yXCJcclxuXHRcdFx0XHRcdHZhbHVlPXthdXRob3J9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZ2VucmVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e2dlbnJlfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5yZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e3ByaWNlfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e2Fib3V0fVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBYm91dChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKX0gLz4gXHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZCBCb29rXCIgLz5cclxuXHRcdFx0PC9mb3JtPiAqL31cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKClcclxuXHRjb25zdCB7IGF1dGggfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cdGNvbnN0IHZlcmlmeSA9IHZlcmlmaWNhdGlvbihhdXRoKTtcclxuXHRpZiAodmVyaWZ5LmVycm9yKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyZWRpcmVjdDoge1xyXG5cdFx0XHRcdHBlcm1hbmVudDogZmFsc2UsXHJcblx0XHRcdFx0ZGVzdGluYXRpb246IFwiL1NpZ25pblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG5cdH0gZWxzZVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==