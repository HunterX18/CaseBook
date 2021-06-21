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

  var products = _ref.data.products;
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
        children: ";"
      }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTXlQcm9kdWN0cy9baWRdLmpzIl0sIm5hbWVzIjpbImJvb2tEZXRhaWxzIiwicHJvZHVjdHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJ1c2VNdXRhdGlvbiIsImFkZEJvb2tNdXRhdGlvbiIsInJlbW92ZUJvb2siLCJoYW5kbGVSZW1vdmUiLCJpZCIsInZhcmlhYmxlcyIsInR5cGUiLCJyZW1vdmVkQm9vayIsInB1c2giLCJtYXAiLCJwcm9kdWN0IiwiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUE0QjtBQUFBOztBQUFBLE1BQWpCQyxRQUFpQixRQUF6QkMsSUFBeUIsQ0FBakJELFFBQWlCO0FBQy9DRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWjtBQUNBLE1BQU1JLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFJRCxNQUFNLENBQUNFLFVBQVgsRUFBdUIsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDs7QUFId0IscUJBSzFCQywyREFBVyxDQUFDQyxnRUFBRCxDQUxlO0FBQUE7QUFBQSxNQUt4Q0MsVUFMd0M7O0FBTy9DLE1BQU1DLFlBQVk7QUFBQSwwU0FBRyxpQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNNRixVQUFVLENBQUM7QUFDcENHLHlCQUFTLEVBQUU7QUFDVkQsb0JBQUUsRUFBRkEsRUFEVTtBQUVWRSxzQkFBSSxFQUFFO0FBRkk7QUFEeUIsZUFBRCxDQURoQjs7QUFBQTtBQUNkQyx5QkFEYztBQU9wQloscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVyxXQUFaO0FBQ0FWLG9CQUFNLENBQUNXLElBQVAsQ0FBWSxHQUFaOztBQVJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaTCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVVBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxFQUVFVixRQUFRLENBQUNnQixHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQy9CO0FBQUE7QUFBQTtBQUFBO0FBdURBLEtBeERBLENBRkY7QUFBQSxrQkFERDtBQThEQSxDQS9FRDs7R0FBTW5CLFc7VUFFVU0sa0QsRUFHTUUsdUQ7Ozs7QUFxR3RCLCtEQUFlUixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL015UHJvZHVjdHMvW2lkXS4xZmI5YmEyOTgyM2Q4NTBlOTkyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsb1wiO1xyXG5pbXBvcnQge1xyXG5cdGFkZEJvb2tNdXRhdGlvbixcclxuXHRib29rRGV0YWlsc1F1ZXJ5LFxyXG5cdGdldFByb2R1Y3RzUXVlcnksXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVlcmllc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgdmVyaWZpY2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvblwiO1xyXG5cclxuY29uc3QgYm9va0RldGFpbHMgPSAoeyBkYXRhOiB7IHByb2R1Y3RzIH0gfSkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKHByb2R1Y3RzKVxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGlmIChyb3V0ZXIuaXNGYWxsYmFjaykgcmV0dXJuIDxoMT4gTG9hZGluZy4uLjwvaDE+O1xyXG5cclxuXHRjb25zdCBbcmVtb3ZlQm9va10gPSB1c2VNdXRhdGlvbihhZGRCb29rTXV0YXRpb24pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAoaWQpID0+IHtcclxuXHRcdGNvbnN0IHJlbW92ZWRCb29rID0gYXdhaXQgcmVtb3ZlQm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiUkVNT1ZFXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlbW92ZWRCb29rKTtcclxuXHRcdHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8aDE+TXkgUHJvZHVjdHMhPC9oMT5cclxuXHRcdFx0e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kKSA9PiB7XHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0zXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNjAwcHhcIiB9fSBrZXk9e2luZH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgZy0wXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gd2lkdGg9XCIyMDBweFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC5uYW1lfTwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UHJpY2U6ICR7cHJvZHVjdC5wcmljZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IGZsZXgtY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2Jvb2tEZXRhaWxzLyR7cHJvZHVjdC5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiLCBtYXJnaW46IFwiMnB4XCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNj5WaWV3IEJvb2s8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKHByb2R1Y3QuX2lkKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFZpZXcgQm9va1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdHsvKiA8ZGl2IGtleT17aW5kfT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjIwcHhcIixcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdGtleT17cHJvZHVjdC5faWR9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gd2lkdGg9XCIxNTBweFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDI+UHJpY2U6IHtwcm9kdWN0LnByaWNlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2Jvb2tEZXRhaWxzLyR7cHJvZHVjdC5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5WaWV3IEJvb2s8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUocHJvZHVjdC5faWQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UmVtb3ZlIEJvb2tcclxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHQ8Lz47XHJcblx0XHRcdH0pfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0Y29uc3QgeyBhdXRoIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHRjb25zdCB2ZXJpZnkgPSB2ZXJpZmljYXRpb24oYXV0aCk7XHJcblx0aWYgKHZlcmlmeS5lcnJvcikge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9TaWduaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuXHRcdHF1ZXJ5OiBnZXRQcm9kdWN0c1F1ZXJ5LFxyXG5cdFx0dmFyaWFibGVzOiB7IGlkOiBjdHgucGFyYW1zLmlkIH0sXHJcblx0fSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGluaXRpYWxpemVBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcclxuXHRcdFx0ZGF0YSxcclxuXHRcdH0sXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvb2tEZXRhaWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9