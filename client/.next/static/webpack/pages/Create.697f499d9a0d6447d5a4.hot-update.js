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
              // nst handleDelete = async (id) => {
              // 	const removedBook = await removeBook({
              // 		variables: {
              // 			id,
              // 			type: "REMOVE",
              // 		},
              // 	});
              // 	console.log(removedBook);
              // 	router.push("/");
              // };
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
          lineNumber: 80,
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
          lineNumber: 83,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "author",
          className: "form-label",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
          lineNumber: 94,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "genre",
          className: "form-label",
          children: "Genre"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
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
          lineNumber: 105,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "about",
          className: "form-label",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
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
          lineNumber: 116,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "price",
          className: "form-label",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
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
          lineNumber: 127,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn btn-primary",
          onClick: handleSubmit,
          children: "Add Book"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJnZW5yZSIsInNldEdlbnJlIiwicHJpY2UiLCJzZXRQcmljZSIsImFib3V0Iiwic2V0QWJvdXQiLCJpbWFnZSIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJhZGROZXdCb29rIiwidXBsb2FkSW1hZ2UiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJqc29uIiwicmVzdWx0IiwidXJsIiwiaGFuZGxlU3VibWl0IiwicGFyc2VDb29raWVzIiwidWlkIiwiY29uc29sZSIsImxvZyIsImltYWdlVXJsIiwiTnVtYmVyIiwidmFyaWFibGVzIiwic2VsbGVySWQiLCJ0eXBlIiwicHVzaCIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsK0NBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFBQSxtQkFFUUYsK0NBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFYkcsTUFGYTtBQUFBLE1BRUxDLFNBRks7O0FBQUEsbUJBR01KLCtDQUFRLENBQUMsRUFBRCxDQUhkO0FBQUEsTUFHYkssS0FIYTtBQUFBLE1BR05DLFFBSE07O0FBQUEsbUJBSU1OLCtDQUFRLENBQUMsQ0FBRCxDQUpk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QWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ3JlYXRlLjY5N2Y0OTlkOWEwZDY0NDdkNWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgYWRkQm9va011dGF0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgdmVyaWZpY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvblwiO1xyXG5cclxuY29uc3QgQ3JlYXRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFthdXRob3IsIHNldEF1dGhvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbZ2VucmUsIHNldEdlbnJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IFthZGROZXdCb29rXSA9IHVzZU11dGF0aW9uKGFkZEJvb2tNdXRhdGlvbik7XHJcblxyXG5cdGNvbnN0IHVwbG9hZEltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlKTtcclxuXHRcdGRhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcImJvb2tzdG9yZVwiKTtcclxuXHRcdGRhdGEuYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcImluc3RhaHVudGVyeFwiKTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG5cdFx0XHRcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvaW5zdGFodW50ZXJ4L2ltYWdlL3VwbG9hZFwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRib2R5OiBkYXRhLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRyZXR1cm4gcmVzdWx0LnVybDtcclxuXHR9O1xyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuXHRcdC8vIG5zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuXHRcdC8vIFx0Y29uc3QgcmVtb3ZlZEJvb2sgPSBhd2FpdCByZW1vdmVCb29rKHtcclxuXHRcdC8vIFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdC8vIFx0XHRcdGlkLFxyXG5cdFx0Ly8gXHRcdFx0dHlwZTogXCJSRU1PVkVcIixcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHR9KTtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2cocmVtb3ZlZEJvb2spO1xyXG5cdFx0Ly8gXHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0XHQvLyB9O1xyXG5cdFx0Y29uc3QgeyB1aWQgfSA9IHBhcnNlQ29va2llcygpO1xyXG5cdFx0Y29uc29sZS5sb2codWlkKTtcclxuXHRcdGNvbnN0IGltYWdlVXJsID0gYXdhaXQgdXBsb2FkSW1hZ2UoKTtcclxuXHRcdGNvbnNvbGUubG9nKG5hbWUsIGF1dGhvciwgZ2VucmUsIHByaWNlLCBhYm91dCwgdWlkKTtcclxuXHRcdGNvbnNvbGUubG9nKHR5cGVvZiBOdW1iZXIocHJpY2UpKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhZGROZXdCb29rKHtcclxuXHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRhdXRob3IsXHJcblx0XHRcdFx0Z2VucmUsXHJcblx0XHRcdFx0cHJpY2U6IE51bWJlcihwcmljZSksXHJcblx0XHRcdFx0YWJvdXQsXHJcblx0XHRcdFx0aW1hZ2U6IGltYWdlVXJsLFxyXG5cdFx0XHRcdHNlbGxlcklkOiB1aWQsXHJcblx0XHRcdFx0dHlwZTogXCJBRERcIixcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjgwdmhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjEwMHZ3XCIsXHJcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFRpdGxlXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhdXRob3JcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEF1dGhvclxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwiYXV0aG9yXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJhdXRob3JcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17YXV0aG9yfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0R2VucmVcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImdlbnJlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJnZW5yZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtnZW5yZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5yZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhYm91dFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0QWJvdXRcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXthYm91dH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBYm91dChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0UHJpY2VcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInByaWNlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ByaWNlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiaW5wdXRHcm91cEZpbGUwMlwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaHRtbEZvcj1cImlucHV0R3JvdXBGaWxlMDJcIj5cclxuXHRcdFx0XHRcdFx0XHRVcGxvYWQgSW1hZ2VcclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHRcdEFkZCBCb29rXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuXHRjb25zb2xlLmxvZyhcInNlcnZlclwiKTtcclxuXHRjb25zdCB7IGF1dGggfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cdGNvbnN0IHZlcmlmeSA9IHZlcmlmaWNhdGlvbihhdXRoKTtcclxuXHRpZiAodmVyaWZ5LmVycm9yKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyZWRpcmVjdDoge1xyXG5cdFx0XHRcdHBlcm1hbmVudDogZmFsc2UsXHJcblx0XHRcdFx0ZGVzdGluYXRpb246IFwiL1NpZ25pblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG5cdH0gZWxzZVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==