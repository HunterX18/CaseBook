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
/* harmony import */ var C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
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
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  if (router.isFallback) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
    children: " Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 32
  }, _this);

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_4__.addBookMutation),
      _useMutation2 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 1),
      removeBook = _useMutation2[0];

  var handleRemove = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
      var removedBook;
      return C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "container",
    style: {
      marg: marg
    },
    children: products.map(function (product, ind) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "card mb-3",
        style: {
          maxWidth: "600px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "row g-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: product.image,
              width: "200px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 8
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "col-md-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
                className: "card-title",
                children: product.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 10
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
                className: "card-title",
                children: ["Price: $", product.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 10
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
                className: "nav flex-column",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/bookDetails/".concat(product._id),
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                      className: "btn btn-primary",
                      style: {
                        padding: "2px",
                        margin: "2px"
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                        children: "View Book"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 11
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    className: "btn btn-danger",
                    onClick: function onClick() {
                      return handleRemove(product._id);
                    },
                    children: "Remove Book"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 12
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 10
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 8
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }, _this)
      }, ind, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 6
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTXlQcm9kdWN0cy9baWRdLmpzIl0sIm5hbWVzIjpbImJvb2tEZXRhaWxzIiwicHJvZHVjdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJyZW1vdmVCb29rIiwiaGFuZGxlUmVtb3ZlIiwiaWQiLCJ2YXJpYWJsZXMiLCJ0eXBlIiwicmVtb3ZlZEJvb2siLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIm1hcmciLCJtYXAiLCJwcm9kdWN0IiwiaW5kIiwibWF4V2lkdGgiLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsIl9pZCIsInBhZGRpbmciLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQUlELE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQOztBQUZjLHFCQUloQkMsMkRBQVcsQ0FBQ0MsZ0VBQUQsQ0FKSztBQUFBO0FBQUEsTUFJOUJDLFVBSjhCOztBQU1yQyxNQUFNQyxZQUFZO0FBQUEsMFNBQUcsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTUYsVUFBVSxDQUFDO0FBQ3BDRyx5QkFBUyxFQUFFO0FBQ1ZELG9CQUFFLEVBQUZBLEVBRFU7QUFFVkUsc0JBQUksRUFBRTtBQUZJO0FBRHlCLGVBQUQsQ0FEaEI7O0FBQUE7QUFDZEMseUJBRGM7QUFPcEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBVixvQkFBTSxDQUFDYSxJQUFQLENBQVksR0FBWjs7QUFSb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlAsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFVQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUssRUFBRTtBQUFDUSxVQUFJLEVBQUpBO0FBQUQsS0FBbEM7QUFBQSxjQUNFZixRQUFRLENBQUNnQixHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQy9CLDBCQUNDO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQTJCLGFBQUssRUFBRTtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FBbEM7QUFBQSwrQkFDQztBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsbUNBQ0M7QUFBSyxpQkFBRyxFQUFFRixPQUFPLENBQUNHLEtBQWxCO0FBQXlCLG1CQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFJQztBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNDO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQUEsc0NBQ0M7QUFBSSx5QkFBUyxFQUFDLFlBQWQ7QUFBQSwwQkFBNEJILE9BQU8sQ0FBQ0k7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUVDO0FBQUkseUJBQVMsRUFBQyxZQUFkO0FBQUEsdUNBQW9DSixPQUFPLENBQUNLLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRCxlQUdDO0FBQUkseUJBQVMsRUFBQyxpQkFBZDtBQUFBLHdDQUNDO0FBQUksMkJBQVMsRUFBQyxVQUFkO0FBQUEseUNBQ0MsOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSx5QkFBa0JMLE9BQU8sQ0FBQ00sR0FBMUIsQ0FBVjtBQUFBLDJDQUNDO0FBQ0MsK0JBQVMsRUFBQyxpQkFEWDtBQUVDLDJCQUFLLEVBQUU7QUFBRUMsK0JBQU8sRUFBRSxLQUFYO0FBQWtCQyw4QkFBTSxFQUFFO0FBQTFCLHVCQUZSO0FBQUEsNkNBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZUFXQztBQUFJLDJCQUFTLEVBQUMsVUFBZDtBQUFBLHlDQUNDO0FBQVEsNkJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsMkJBQU8sRUFBRTtBQUFBLDZCQUFNbEIsWUFBWSxDQUFDVSxPQUFPLENBQUNNLEdBQVQsQ0FBbEI7QUFBQSxxQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELFNBQThETCxHQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFnQ0EsS0FqQ0E7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFzQ0EsQ0F0REQ7O0dBQU1uQixXO1VBQ1VHLGtELEVBR01FLHVEOzs7O0FBNkV0QiwrREFBZUwsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9NeVByb2R1Y3RzL1tpZF0uZWQ0Y2U3ZDM0YjBjNDNmOGFlNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9hcG9sbG9cIjtcclxuaW1wb3J0IHtcclxuXHRhZGRCb29rTXV0YXRpb24sXHJcblx0Ym9va0RldGFpbHNRdWVyeSxcclxuXHRnZXRQcm9kdWN0c1F1ZXJ5LFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHZlcmlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy92ZXJpZmljYXRpb25cIjtcclxuXHJcbmNvbnN0IGJvb2tEZXRhaWxzID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGlmIChyb3V0ZXIuaXNGYWxsYmFjaykgcmV0dXJuIDxoMT4gTG9hZGluZy4uLjwvaDE+O1xyXG5cclxuXHRjb25zdCBbcmVtb3ZlQm9va10gPSB1c2VNdXRhdGlvbihhZGRCb29rTXV0YXRpb24pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAoaWQpID0+IHtcclxuXHRcdGNvbnN0IHJlbW92ZWRCb29rID0gYXdhaXQgcmVtb3ZlQm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiUkVNT1ZFXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlbW92ZWRCb29rKTtcclxuXHRcdHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7bWFyZ319PlxyXG5cdFx0XHR7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIiBzdHlsZT17eyBtYXhXaWR0aDogXCI2MDBweFwiIH19IGtleT17aW5kfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZy0wXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IHdpZHRoPVwiMjAwcHhcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlByaWNlOiAke3Byb2R1Y3QucHJpY2V9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBmbGV4LWNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9ib29rRGV0YWlscy8ke3Byb2R1Y3QuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogXCIycHhcIiwgbWFyZ2luOiBcIjJweFwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDY+VmlldyBCb29rPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXInIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShwcm9kdWN0Ll9pZCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSZW1vdmUgQm9va1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0Y29uc3QgeyBhdXRoIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHRjb25zdCB2ZXJpZnkgPSB2ZXJpZmljYXRpb24oYXV0aCk7XHJcblx0aWYgKHZlcmlmeS5lcnJvcikge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9TaWduaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuXHRcdHF1ZXJ5OiBnZXRQcm9kdWN0c1F1ZXJ5LFxyXG5cdFx0dmFyaWFibGVzOiB7IGlkOiBjdHgucGFyYW1zLmlkIH0sXHJcblx0fSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGluaXRpYWxpemVBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcclxuXHRcdFx0cHJvZHVjdHM6IGRhdGEucHJvZHVjdHMsXHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib29rRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==