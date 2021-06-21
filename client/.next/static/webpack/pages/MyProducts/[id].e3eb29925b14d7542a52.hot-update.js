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

  var products = _ref.products;
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: products[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this), products.map(function (product, ind) {
      /*#__PURE__*/
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTXlQcm9kdWN0cy9baWRdLmpzIl0sIm5hbWVzIjpbImJvb2tEZXRhaWxzIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsInVzZU11dGF0aW9uIiwiYWRkQm9va011dGF0aW9uIiwicmVtb3ZlQm9vayIsImhhbmRsZVJlbW92ZSIsImlkIiwidmFyaWFibGVzIiwidHlwZSIsInJlbW92ZWRCb29rIiwicHVzaCIsIm1hcCIsInByb2R1Y3QiLCJpbmQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNyQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxNQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXVCLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7O0FBSGMscUJBS2hCQywyREFBVyxDQUFDQyxnRUFBRCxDQUxLO0FBQUE7QUFBQSxNQUs5QkMsVUFMOEI7O0FBT3JDLE1BQU1DLFlBQVk7QUFBQSwwU0FBRyxpQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNNRixVQUFVLENBQUM7QUFDcENHLHlCQUFTLEVBQUU7QUFDVkQsb0JBQUUsRUFBRkEsRUFEVTtBQUVWRSxzQkFBSSxFQUFFO0FBRkk7QUFEeUIsZUFBRCxDQURoQjs7QUFBQTtBQUNkQyx5QkFEYztBQU9wQloscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVyxXQUFaO0FBQ0FWLG9CQUFNLENBQUNXLElBQVAsQ0FBWSxHQUFaOztBQVJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaTCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVVBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDO0FBQUEsZ0JBQUtULFFBQVEsQ0FBQyxDQUFEO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELEVBR0VBLFFBQVEsQ0FBQ2UsR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUMvQjtBQUFBO0FBQUEsZ0NBQ0M7QUFBQSxvQkFBS0QsT0FBTyxDQUFDRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQXdEQSxLQXpEQSxDQUhGO0FBQUEsa0JBREQ7QUFnRUEsQ0FqRkQ7O0dBQU1uQixXO1VBRVVLLGtELEVBR01FLHVEOzs7O0FBdUd0QiwrREFBZVAsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9NeVByb2R1Y3RzL1tpZF0uZTNlYjI5OTI1YjE0ZDc1NDJhNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9hcG9sbG9cIjtcclxuaW1wb3J0IHtcclxuXHRhZGRCb29rTXV0YXRpb24sXHJcblx0Ym9va0RldGFpbHNRdWVyeSxcclxuXHRnZXRQcm9kdWN0c1F1ZXJ5LFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHZlcmlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy92ZXJpZmljYXRpb25cIjtcclxuXHJcbmNvbnN0IGJvb2tEZXRhaWxzID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRpZiAocm91dGVyLmlzRmFsbGJhY2spIHJldHVybiA8aDE+IExvYWRpbmcuLi48L2gxPjtcclxuXHJcblx0Y29uc3QgW3JlbW92ZUJvb2tdID0gdXNlTXV0YXRpb24oYWRkQm9va011dGF0aW9uKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUmVtb3ZlID0gYXN5bmMgKGlkKSA9PiB7XHJcblx0XHRjb25zdCByZW1vdmVkQm9vayA9IGF3YWl0IHJlbW92ZUJvb2soe1xyXG5cdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHRpZCxcclxuXHRcdFx0XHR0eXBlOiBcIlJFTU9WRVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhyZW1vdmVkQm9vayk7XHJcblx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGgxPk15IFByb2R1Y3RzITwvaDE+XHJcblx0XHRcdDxoMT57cHJvZHVjdHNbMF19PC9oMT5cclxuXHRcdFx0e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kKSA9PiB7XHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XHJcblx0XHRcdFx0XHR7LyogPGRpdiBjbGFzcz1cImNhcmQgbWItM1wiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjYwMHB4XCIgfX0ga2V5PXtpbmR9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IHdpZHRoPVwiMjAwcHhcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlByaWNlOiAke3Byb2R1Y3QucHJpY2V9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBmbGV4LWNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9ib29rRGV0YWlscy8ke3Byb2R1Y3QuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogXCIycHhcIiwgbWFyZ2luOiBcIjJweFwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDY+VmlldyBCb29rPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShwcm9kdWN0Ll9pZCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWaWV3IEJvb2tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHR7LyogPGRpdiBrZXk9e2luZH0+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIyMHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRrZXk9e3Byb2R1Y3QuX2lkfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IHdpZHRoPVwiMTUwcHhcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDE+e3Byb2R1Y3QubmFtZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgyPlByaWNlOiB7cHJvZHVjdC5wcmljZX08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9ib29rRGV0YWlscy8ke3Byb2R1Y3QuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+VmlldyBCb29rPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKHByb2R1Y3QuX2lkKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFJlbW92ZSBCb29rXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0PC8+O1xyXG5cdFx0XHR9KX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cdGNvbnN0IHsgYXV0aCB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblx0Y29uc3QgdmVyaWZ5ID0gdmVyaWZpY2F0aW9uKGF1dGgpO1xyXG5cdGlmICh2ZXJpZnkuZXJyb3IpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlZGlyZWN0OiB7XHJcblx0XHRcdFx0cGVybWFuZW50OiBmYWxzZSxcclxuXHRcdFx0XHRkZXN0aW5hdGlvbjogXCIvU2lnbmluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHByb3BzOiB7fSxcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcclxuXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcblx0XHRxdWVyeTogZ2V0UHJvZHVjdHNRdWVyeSxcclxuXHRcdHZhcmlhYmxlczogeyBpZDogY3R4LnBhcmFtcy5pZCB9LFxyXG5cdH0pO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpbml0aWFsaXplQXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXHJcblx0XHRcdHByb2R1Y3RzOiBkYXRhLnByb2R1Y3RzLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYm9va0RldGFpbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=