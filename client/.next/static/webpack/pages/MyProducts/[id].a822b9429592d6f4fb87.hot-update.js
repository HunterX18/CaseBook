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
    }, _this), products.map(function (product, ind) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                lineNumber: 39,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
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
                  lineNumber: 43,
                  columnNumber: 11
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  className: "card-title",
                  children: ["Price: $", product.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
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
                          lineNumber: 52,
                          columnNumber: 15
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 14
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 13
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
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
                      lineNumber: 57,
                      columnNumber: 13
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 12
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 8
          }, _this)
        }, ind, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTXlQcm9kdWN0cy9baWRdLmpzIl0sIm5hbWVzIjpbImJvb2tEZXRhaWxzIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsInVzZU11dGF0aW9uIiwiYWRkQm9va011dGF0aW9uIiwicmVtb3ZlQm9vayIsImhhbmRsZVJlbW92ZSIsImlkIiwidmFyaWFibGVzIiwidHlwZSIsInJlbW92ZWRCb29rIiwicHVzaCIsIm1hcCIsInByb2R1Y3QiLCJpbmQiLCJtYXhXaWR0aCIsImltYWdlIiwibmFtZSIsInByaWNlIiwiX2lkIiwicGFkZGluZyIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDckNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0EsTUFBTUcsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQUlELE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQOztBQUhjLHFCQUtoQkMsMkRBQVcsQ0FBQ0MsZ0VBQUQsQ0FMSztBQUFBO0FBQUEsTUFLOUJDLFVBTDhCOztBQU9yQyxNQUFNQyxZQUFZO0FBQUEsMFNBQUcsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTUYsVUFBVSxDQUFDO0FBQ3BDRyx5QkFBUyxFQUFFO0FBQ1ZELG9CQUFFLEVBQUZBLEVBRFU7QUFFVkUsc0JBQUksRUFBRTtBQUZJO0FBRHlCLGVBQUQsQ0FEaEI7O0FBQUE7QUFDZEMseUJBRGM7QUFPcEJaLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVcsV0FBWjtBQUNBVixvQkFBTSxDQUFDVyxJQUFQLENBQVksR0FBWjs7QUFSb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkwsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFVQSxzQkFDQztBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsRUFFRVQsUUFBUSxDQUFDZSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQy9CLDBCQUNDO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBTSxXQUFYO0FBQXVCLGVBQUssRUFBRTtBQUFFQyxvQkFBUSxFQUFFO0FBQVosV0FBOUI7QUFBQSxpQ0FDQztBQUFLLHFCQUFNLFNBQVg7QUFBQSxvQ0FDQztBQUFLLHVCQUFNLFVBQVg7QUFBQSxxQ0FDQztBQUFLLG1CQUFHLEVBQUVGLE9BQU8sQ0FBQ0csS0FBbEI7QUFBeUIscUJBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDO0FBQUssdUJBQU0sVUFBWDtBQUFBLHFDQUNDO0FBQUsseUJBQU0sV0FBWDtBQUFBLHdDQUNDO0FBQUksMkJBQU0sWUFBVjtBQUFBLDRCQUF3QkgsT0FBTyxDQUFDSTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBRUM7QUFBSSwyQkFBUyxFQUFDLFlBQWQ7QUFBQSx5Q0FBb0NKLE9BQU8sQ0FBQ0ssS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZELGVBR0M7QUFBSSwyQkFBUyxFQUFDLGlCQUFkO0FBQUEsMENBQ0M7QUFBSSw2QkFBUyxFQUFDLFVBQWQ7QUFBQSwyQ0FDQyw4REFBQyxrREFBRDtBQUFNLDBCQUFJLHlCQUFrQkwsT0FBTyxDQUFDTSxHQUExQixDQUFWO0FBQUEsNkNBQ0M7QUFDQyxpQ0FBUyxFQUFDLGlCQURYO0FBRUMsNkJBQUssRUFBRTtBQUFFQyxpQ0FBTyxFQUFFLEtBQVg7QUFBa0JDLGdDQUFNLEVBQUU7QUFBMUIseUJBRlI7QUFBQSwrQ0FJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERCxlQVdDO0FBQUksNkJBQVMsRUFBQyxVQUFkO0FBQUEsMkNBQ0M7QUFBUSw2QkFBTyxFQUFFO0FBQUEsK0JBQU1mLFlBQVksQ0FBQ08sT0FBTyxDQUFDTSxHQUFULENBQWxCO0FBQUEsdUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxXQUEwREwsR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBLHNCQUREO0FBeURBLEtBMURBLENBRkY7QUFBQSxrQkFERDtBQWdFQSxDQWpGRDs7R0FBTWxCLFc7VUFFVUssa0QsRUFHTUUsdUQ7Ozs7QUF1R3RCLCtEQUFlUCxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL015UHJvZHVjdHMvW2lkXS5hODIyYjk0Mjk1OTJkNmY0ZmI4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsb1wiO1xyXG5pbXBvcnQge1xyXG5cdGFkZEJvb2tNdXRhdGlvbixcclxuXHRib29rRGV0YWlsc1F1ZXJ5LFxyXG5cdGdldFByb2R1Y3RzUXVlcnksXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVlcmllc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgdmVyaWZpY2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvblwiO1xyXG5cclxuY29uc3QgYm9va0RldGFpbHMgPSAoeyBwcm9kdWN0cyB9KSA9PiB7XHJcblx0Y29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGlmIChyb3V0ZXIuaXNGYWxsYmFjaykgcmV0dXJuIDxoMT4gTG9hZGluZy4uLjwvaDE+O1xyXG5cclxuXHRjb25zdCBbcmVtb3ZlQm9va10gPSB1c2VNdXRhdGlvbihhZGRCb29rTXV0YXRpb24pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAoaWQpID0+IHtcclxuXHRcdGNvbnN0IHJlbW92ZWRCb29rID0gYXdhaXQgcmVtb3ZlQm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiUkVNT1ZFXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlbW92ZWRCb29rKTtcclxuXHRcdHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8aDE+TXkgUHJvZHVjdHMhPC9oMT5cclxuXHRcdFx0e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkIG1iLTNcIiBzdHlsZT17eyBtYXhXaWR0aDogXCI2MDBweFwiIH19IGtleT17aW5kfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSB3aWR0aD1cIjIwMHB4XCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UHJpY2U6ICR7cHJvZHVjdC5wcmljZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXYgZmxleC1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2Jvb2tEZXRhaWxzLyR7cHJvZHVjdC5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiBcIjJweFwiLCBtYXJnaW46IFwiMnB4XCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDY+VmlldyBCb29rPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUocHJvZHVjdC5faWQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSZW1vdmUgQm9va1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdHsvKiA8ZGl2IGtleT17aW5kfT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjIwcHhcIixcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdGtleT17cHJvZHVjdC5faWR9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gd2lkdGg9XCIxNTBweFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDI+UHJpY2U6IHtwcm9kdWN0LnByaWNlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2Jvb2tEZXRhaWxzLyR7cHJvZHVjdC5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5WaWV3IEJvb2s8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUocHJvZHVjdC5faWQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UmVtb3ZlIEJvb2tcclxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuXHRjb25zdCB7IGF1dGggfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cdGNvbnN0IHZlcmlmeSA9IHZlcmlmaWNhdGlvbihhdXRoKTtcclxuXHRpZiAodmVyaWZ5LmVycm9yKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyZWRpcmVjdDoge1xyXG5cdFx0XHRcdHBlcm1hbmVudDogZmFsc2UsXHJcblx0XHRcdFx0ZGVzdGluYXRpb246IFwiL1NpZ25pblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG5cdH1cclxuXHRjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKCk7XHJcblx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG5cdFx0cXVlcnk6IGdldFByb2R1Y3RzUXVlcnksXHJcblx0XHR2YXJpYWJsZXM6IHsgaWQ6IGN0eC5wYXJhbXMuaWQgfSxcclxuXHR9KTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aW5pdGlhbGl6ZUFwb2xsb1N0YXRlOiBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpLFxyXG5cdFx0XHRwcm9kdWN0czogZGF0YS5wcm9kdWN0cyxcclxuXHRcdH0sXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvb2tEZXRhaWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9