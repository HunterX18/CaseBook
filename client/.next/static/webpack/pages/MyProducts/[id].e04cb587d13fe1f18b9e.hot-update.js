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
    children: products.map(function (product, ind) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "card mb-3",
        style: {
          maxWidth: "600px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "row g-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "col-md-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: product.image,
              width: "200px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 10
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 9
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "col-md-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "card-body",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                "class": "card-title",
                children: product.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 11
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "card-title",
                children: ["Price: $", product.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 11
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: "nav flex-column",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/bookDetails/".concat(product._id),
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "btn btn-primary",
                      style: {
                        padding: "2px",
                        margin: "2px"
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                        children: "View Book"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 15
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 14
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 13
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 12
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    onClick: function onClick() {
                      return handleRemove(product._id);
                    },
                    children: "Remove Book"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 13
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 12
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 11
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 10
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 8
        }, _this)
      }, ind, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTXlQcm9kdWN0cy9baWRdLmpzIl0sIm5hbWVzIjpbImJvb2tEZXRhaWxzIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsInVzZU11dGF0aW9uIiwiYWRkQm9va011dGF0aW9uIiwicmVtb3ZlQm9vayIsImhhbmRsZVJlbW92ZSIsImlkIiwidmFyaWFibGVzIiwidHlwZSIsInJlbW92ZWRCb29rIiwicHVzaCIsIm1hcCIsInByb2R1Y3QiLCJpbmQiLCJtYXhXaWR0aCIsImltYWdlIiwibmFtZSIsInByaWNlIiwiX2lkIiwicGFkZGluZyIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDckNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0EsTUFBTUcsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQUlELE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQOztBQUhjLHFCQUtoQkMsMkRBQVcsQ0FBQ0MsZ0VBQUQsQ0FMSztBQUFBO0FBQUEsTUFLOUJDLFVBTDhCOztBQU9yQyxNQUFNQyxZQUFZO0FBQUEsMFNBQUcsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTUYsVUFBVSxDQUFDO0FBQ3BDRyx5QkFBUyxFQUFFO0FBQ1ZELG9CQUFFLEVBQUZBLEVBRFU7QUFFVkUsc0JBQUksRUFBRTtBQUZJO0FBRHlCLGVBQUQsQ0FEaEI7O0FBQUE7QUFDZEMseUJBRGM7QUFPcEJaLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVcsV0FBWjtBQUNBVixvQkFBTSxDQUFDVyxJQUFQLENBQVksR0FBWjs7QUFSb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkwsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFVQSxzQkFDQztBQUFBLGNBQ0VULFFBQVEsQ0FBQ2UsR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUMvQiwwQkFDRTtBQUFLLGlCQUFNLFdBQVg7QUFBdUIsYUFBSyxFQUFFO0FBQUVDLGtCQUFRLEVBQUU7QUFBWixTQUE5QjtBQUFBLCtCQUNDO0FBQUssbUJBQU0sU0FBWDtBQUFBLGtDQUNDO0FBQUsscUJBQU0sVUFBWDtBQUFBLG1DQUNDO0FBQUssaUJBQUcsRUFBRUYsT0FBTyxDQUFDRyxLQUFsQjtBQUF5QixtQkFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBSUM7QUFBSyxxQkFBTSxVQUFYO0FBQUEsbUNBQ0M7QUFBSyx1QkFBTSxXQUFYO0FBQUEsc0NBQ0M7QUFBSSx5QkFBTSxZQUFWO0FBQUEsMEJBQXdCSCxPQUFPLENBQUNJO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFFQztBQUFJLHlCQUFTLEVBQUMsWUFBZDtBQUFBLHVDQUFvQ0osT0FBTyxDQUFDSyxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQsZUFHQztBQUFJLHlCQUFTLEVBQUMsaUJBQWQ7QUFBQSx3Q0FDQztBQUFJLDJCQUFTLEVBQUMsVUFBZDtBQUFBLHlDQUNDLDhEQUFDLGtEQUFEO0FBQU0sd0JBQUkseUJBQWtCTCxPQUFPLENBQUNNLEdBQTFCLENBQVY7QUFBQSwyQ0FDQztBQUNDLCtCQUFTLEVBQUMsaUJBRFg7QUFFQywyQkFBSyxFQUFFO0FBQUVDLCtCQUFPLEVBQUUsS0FBWDtBQUFrQkMsOEJBQU0sRUFBRTtBQUExQix1QkFGUjtBQUFBLDZDQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBV0M7QUFBSSwyQkFBUyxFQUFDLFVBQWQ7QUFBQSx5Q0FDQztBQUFRLDJCQUFPLEVBQUU7QUFBQSw2QkFBTWYsWUFBWSxDQUFDTyxPQUFPLENBQUNNLEdBQVQsQ0FBbEI7QUFBQSxxQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELFNBQTBETCxHQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQ0EsS0FuQ0E7QUFERixtQkFERDtBQXdDQSxDQXpERDs7R0FBTWxCLFc7VUFFVUssa0QsRUFHTUUsdUQ7Ozs7QUErRXRCLCtEQUFlUCxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL015UHJvZHVjdHMvW2lkXS5lMDRjYjU4N2QxM2ZlMWYxOGI5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsb1wiO1xyXG5pbXBvcnQge1xyXG5cdGFkZEJvb2tNdXRhdGlvbixcclxuXHRib29rRGV0YWlsc1F1ZXJ5LFxyXG5cdGdldFByb2R1Y3RzUXVlcnksXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVlcmllc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgdmVyaWZpY2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvblwiO1xyXG5cclxuY29uc3QgYm9va0RldGFpbHMgPSAoeyBwcm9kdWN0cyB9KSA9PiB7XHJcblx0Y29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGlmIChyb3V0ZXIuaXNGYWxsYmFjaykgcmV0dXJuIDxoMT4gTG9hZGluZy4uLjwvaDE+O1xyXG5cclxuXHRjb25zdCBbcmVtb3ZlQm9va10gPSB1c2VNdXRhdGlvbihhZGRCb29rTXV0YXRpb24pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAoaWQpID0+IHtcclxuXHRcdGNvbnN0IHJlbW92ZWRCb29rID0gYXdhaXQgcmVtb3ZlQm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiUkVNT1ZFXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlbW92ZWRCb29rKTtcclxuXHRcdHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZCBtYi0zXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNjAwcHhcIiB9fSBrZXk9e2luZH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvdyBnLTBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gd2lkdGg9XCIyMDBweFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPntwcm9kdWN0Lm5hbWV9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlByaWNlOiAke3Byb2R1Y3QucHJpY2V9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IGZsZXgtY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9ib29rRGV0YWlscy8ke3Byb2R1Y3QuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogXCIycHhcIiwgbWFyZ2luOiBcIjJweFwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg2PlZpZXcgQm9vazwvaDY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKHByb2R1Y3QuX2lkKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UmVtb3ZlIEJvb2tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0Y29uc3QgeyBhdXRoIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHRjb25zdCB2ZXJpZnkgPSB2ZXJpZmljYXRpb24oYXV0aCk7XHJcblx0aWYgKHZlcmlmeS5lcnJvcikge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9TaWduaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuXHRcdHF1ZXJ5OiBnZXRQcm9kdWN0c1F1ZXJ5LFxyXG5cdFx0dmFyaWFibGVzOiB7IGlkOiBjdHgucGFyYW1zLmlkIH0sXHJcblx0fSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGluaXRpYWxpemVBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcclxuXHRcdFx0cHJvZHVjdHM6IGRhdGEucHJvZHVjdHMsXHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib29rRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==