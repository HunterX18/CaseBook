self["webpackHotUpdate_N_E"]("pages/MyProducts/[id]",{

/***/ "./pages/MyProducts/[id].js":
/*!**********************************!*\
  !*** ./pages/MyProducts/[id].js ***!
  \**********************************/
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
/* harmony import */ var _components_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/queries */ "./components/queries.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\srsah\\Desktop\\graphql-server\\client\\pages\\MyProducts\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();






var bookDetails = function bookDetails(_ref) {
  _s();

  var prodcuts = _ref.prodcuts;
  console.log(products);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  if (router.isFallback) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: " Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 32
  }, _this);

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_4__.addBookMutation),
      _useMutation2 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      removeBook = _useMutation2[0];

  var handleRemove = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id) {
      var removedBook;
      return C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return removeBook({
                variables: {
                  id: id,
                  type: "REMOVE"
                }
              });

            case 2:
              removedBook = _context.sent;
              console.log(removedBook);
              router.push("/");

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleRemove(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "My Products!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this), products.map(function (product, ind) {
      /*#__PURE__*/
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, _this), ";"]
      }, void 0, true);
    })]
  }, void 0, true);
};

_s(bookDetails, "bpiqrDHyd485zxokQUyDwIYnUqY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation];
});

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (bookDetails);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTXlQcm9kdWN0cy9baWRdLmpzIl0sIm5hbWVzIjpbImJvb2tEZXRhaWxzIiwicHJvZGN1dHMiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJyZW1vdmVCb29rIiwiaGFuZGxlUmVtb3ZlIiwiaWQiLCJ2YXJpYWJsZXMiLCJ0eXBlIiwicmVtb3ZlZEJvb2siLCJwdXNoIiwibWFwIiwicHJvZHVjdCIsImluZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3JDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWjtBQUNBLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFJRCxNQUFNLENBQUNFLFVBQVgsRUFBdUIsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDs7QUFIYyxxQkFLaEJDLDJEQUFXLENBQUNDLGdFQUFELENBTEs7QUFBQTtBQUFBLE1BSzlCQyxVQUw4Qjs7QUFPckMsTUFBTUMsWUFBWTtBQUFBLDBTQUFHLGlCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ01GLFVBQVUsQ0FBQztBQUNwQ0cseUJBQVMsRUFBRTtBQUNWRCxvQkFBRSxFQUFGQSxFQURVO0FBRVZFLHNCQUFJLEVBQUU7QUFGSTtBQUR5QixlQUFELENBRGhCOztBQUFBO0FBQ2RDLHlCQURjO0FBT3BCYixxQkFBTyxDQUFDQyxHQUFSLENBQVlZLFdBQVo7QUFDQVYsb0JBQU0sQ0FBQ1csSUFBUCxDQUFZLEdBQVo7O0FBUm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpMLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBVUEsc0JBQ0M7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEVBRUVQLFFBQVEsQ0FBQ2EsR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUMvQjtBQUFBO0FBQUEsZ0NBQ0M7QUFBQSxvQkFBS0QsT0FBTyxDQUFDRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQXdEQSxLQXpEQSxDQUZGO0FBQUEsa0JBREQ7QUErREEsQ0FoRkQ7O0dBQU1wQixXO1VBRVVNLGtELEVBR01FLHVEOzs7O0FBc0d0QiwrREFBZVIsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9NeVByb2R1Y3RzL1tpZF0uZjg1MDlmZTg4NWQ4MTJjNjI0MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9hcG9sbG9cIjtcclxuaW1wb3J0IHtcclxuXHRhZGRCb29rTXV0YXRpb24sXHJcblx0Ym9va0RldGFpbHNRdWVyeSxcclxuXHRnZXRQcm9kdWN0c1F1ZXJ5LFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHZlcmlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy92ZXJpZmljYXRpb25cIjtcclxuXHJcbmNvbnN0IGJvb2tEZXRhaWxzID0gKHsgcHJvZGN1dHMgfSkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRpZiAocm91dGVyLmlzRmFsbGJhY2spIHJldHVybiA8aDE+IExvYWRpbmcuLi48L2gxPjtcclxuXHJcblx0Y29uc3QgW3JlbW92ZUJvb2tdID0gdXNlTXV0YXRpb24oYWRkQm9va011dGF0aW9uKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUmVtb3ZlID0gYXN5bmMgKGlkKSA9PiB7XHJcblx0XHRjb25zdCByZW1vdmVkQm9vayA9IGF3YWl0IHJlbW92ZUJvb2soe1xyXG5cdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHRpZCxcclxuXHRcdFx0XHR0eXBlOiBcIlJFTU9WRVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhyZW1vdmVkQm9vayk7XHJcblx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGgxPk15IFByb2R1Y3RzITwvaDE+XHJcblx0XHRcdHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZCkgPT4ge1xyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8aDE+e3Byb2R1Y3QubmFtZX08L2gxPlxyXG5cdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTNcIiBzdHlsZT17eyBtYXhXaWR0aDogXCI2MDBweFwiIH19IGtleT17aW5kfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvdyBnLTBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSB3aWR0aD1cIjIwMHB4XCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPntwcm9kdWN0Lm5hbWV9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5QcmljZTogJHtwcm9kdWN0LnByaWNlfTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXYgZmxleC1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYm9va0RldGFpbHMvJHtwcm9kdWN0Ll9pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmc6IFwiMnB4XCIsIG1hcmdpbjogXCIycHhcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg2PlZpZXcgQm9vazwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUocHJvZHVjdC5faWQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0VmlldyBCb29rXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0ey8qIDxkaXYga2V5PXtpbmR9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiMjBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0a2V5PXtwcm9kdWN0Ll9pZH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSB3aWR0aD1cIjE1MHB4XCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgxPntwcm9kdWN0Lm5hbWV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMj5QcmljZToge3Byb2R1Y3QucHJpY2V9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYm9va0RldGFpbHMvJHtwcm9kdWN0Ll9pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlZpZXcgQm9vazwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShwcm9kdWN0Ll9pZCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRSZW1vdmUgQm9va1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdDwvPjtcclxuXHRcdFx0fSl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuXHRjb25zdCB7IGF1dGggfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cdGNvbnN0IHZlcmlmeSA9IHZlcmlmaWNhdGlvbihhdXRoKTtcclxuXHRpZiAodmVyaWZ5LmVycm9yKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyZWRpcmVjdDoge1xyXG5cdFx0XHRcdHBlcm1hbmVudDogZmFsc2UsXHJcblx0XHRcdFx0ZGVzdGluYXRpb246IFwiL1NpZ25pblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG5cdH1cclxuXHRjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKCk7XHJcblx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG5cdFx0cXVlcnk6IGdldFByb2R1Y3RzUXVlcnksXHJcblx0XHR2YXJpYWJsZXM6IHsgaWQ6IGN0eC5wYXJhbXMuaWQgfSxcclxuXHR9KTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aW5pdGlhbGl6ZUFwb2xsb1N0YXRlOiBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpLFxyXG5cdFx0XHRwcm9kY3V0czogZGF0YS5wcm9kY3V0cyxcclxuXHRcdH0sXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvb2tEZXRhaWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9