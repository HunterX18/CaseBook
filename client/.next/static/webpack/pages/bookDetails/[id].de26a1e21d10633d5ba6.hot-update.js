self["webpackHotUpdate_N_E"]("pages/bookDetails/[id]",{

/***/ "./pages/bookDetails/[id].js":
/*!***********************************!*\
  !*** ./pages/bookDetails/[id].js ***!
  \***********************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\srsah\\Desktop\\graphql-server\\client\\pages\\bookDetails\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();






var bookDetails = function bookDetails(_ref) {
  _s();

  var data = _ref.data;
  var book = data.book;

  var _parseCookies = (0,nookies__WEBPACK_IMPORTED_MODULE_6__.parseCookies)(),
      uid = _parseCookies.uid,
      role = _parseCookies.role;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  if (router.isFallback) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: " Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 32
  }, _this);

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_4__.addToCartMutation),
      _useMutation2 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      cartOperation = _useMutation2[0];

  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_4__.addBookMutation),
      _useMutation4 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation3, 1),
      removeBook = _useMutation4[0];

  var handleAddToCart = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id) {
      var addBook;
      return C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return cartOperation({
                variables: {
                  id: id,
                  type: "ADD",
                  customerId: uid
                }
              });

            case 2:
              addBook = _context.sent;
              console.log(addBook);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleAddToCart(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(id) {
      var removedBook;
      return C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return removeBook({
                variables: {
                  id: id,
                  type: "REMOVE"
                }
              });

            case 2:
              removedBook = _context2.sent;
              console.log(removedBook);
              router.push("/");

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDelete(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [book && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card mb-3",
      style: {
        maxWidth: "600px",
        margin: "10px",
        padding: "10px",
        justifyContent: "space-between"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row g-0",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: book.image,
            style: {
              width: "200px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "card-title",
              children: ["Title: ", book.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "card-title",
              children: ["Genre: ", book.genre]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "card-title",
              children: ["Author: ", book.author]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: book.about
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "card-title",
              children: ["Price: $", book.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, _this), role == "admin" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      className: "btn btn-dark",
      onClick: function onClick() {
        return handleDelete(book._id);
      },
      children: "Delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(bookDetails, "LbC2HtD9wISRPrJmwGHCwvOTbZk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9va0RldGFpbHMvW2lkXS5qcyJdLCJuYW1lcyI6WyJib29rRGV0YWlscyIsImRhdGEiLCJib29rIiwicGFyc2VDb29raWVzIiwidWlkIiwicm9sZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJ1c2VNdXRhdGlvbiIsImFkZFRvQ2FydE11dGF0aW9uIiwiY2FydE9wZXJhdGlvbiIsImFkZEJvb2tNdXRhdGlvbiIsInJlbW92ZUJvb2siLCJoYW5kbGVBZGRUb0NhcnQiLCJpZCIsInZhcmlhYmxlcyIsInR5cGUiLCJjdXN0b21lcklkIiwiYWRkQm9vayIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEZWxldGUiLCJyZW1vdmVkQm9vayIsInB1c2giLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImltYWdlIiwid2lkdGgiLCJuYW1lIiwiZ2VucmUiLCJhdXRob3IiLCJhYm91dCIsInByaWNlIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUtBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUEsTUFDekJDLElBRHlCLEdBQ2hCRCxJQURnQixDQUN6QkMsSUFEeUI7O0FBQUEsc0JBRVhDLHFEQUFZLEVBRkQ7QUFBQSxNQUV6QkMsR0FGeUIsaUJBRXpCQSxHQUZ5QjtBQUFBLE1BRXBCQyxJQUZvQixpQkFFcEJBLElBRm9COztBQUdqQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXVCLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7O0FBSlUscUJBTVRDLDJEQUFXLENBQUNDLGtFQUFELENBTkY7QUFBQTtB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QUdDLGFBQU8sRUFBRTtBQUFBLGVBQU1pQixZQUFZLENBQUNwQixJQUFJLENBQUNrQyxHQUFOLENBQWxCO0FBQUEsT0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCRjtBQUFBLGtCQUREO0FBd0NBLENBdkVEOztHQUFNcEMsVztVQUdVTyxrRCxFQUdTRSx1RCxFQUNIQSx1RDs7OztBQXdGdEIsK0RBQWVULFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9va0RldGFpbHMvW2lkXS5kZTI2YTFlMjFkMTA2MzNkNWJhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsb1wiO1xyXG5pbXBvcnQge1xyXG5cdGFkZEJvb2tNdXRhdGlvbixcclxuXHRhZGRUb0NhcnRNdXRhdGlvbixcclxuXHRib29rRGV0YWlsc1F1ZXJ5LFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB2ZXJpZmljYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXRpbHMvdmVyaWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcblxyXG5jb25zdCBib29rRGV0YWlscyA9ICh7IGRhdGEgfSkgPT4ge1xyXG5cdGNvbnN0IHsgYm9vayB9ID0gZGF0YTtcclxuXHRjb25zdCB7IHVpZCwgcm9sZSB9ID0gcGFyc2VDb29raWVzKCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0aWYgKHJvdXRlci5pc0ZhbGxiYWNrKSByZXR1cm4gPGgxPiBMb2FkaW5nLi4uPC9oMT47XHJcblxyXG5cdGNvbnN0IFtjYXJ0T3BlcmF0aW9uXSA9IHVzZU11dGF0aW9uKGFkZFRvQ2FydE11dGF0aW9uKTtcclxuXHRjb25zdCBbcmVtb3ZlQm9va10gPSB1c2VNdXRhdGlvbihhZGRCb29rTXV0YXRpb24pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSBhc3luYyAoaWQpID0+IHtcclxuXHRcdGNvbnN0IGFkZEJvb2sgPSBhd2FpdCBjYXJ0T3BlcmF0aW9uKHtcclxuXHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0aWQsXHJcblx0XHRcdFx0dHlwZTogXCJBRERcIixcclxuXHRcdFx0XHRjdXN0b21lcklkOiB1aWQsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKGFkZEJvb2spO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG5cdFx0Y29uc3QgcmVtb3ZlZEJvb2sgPSBhd2FpdCByZW1vdmVCb29rKHtcclxuXHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0aWQsXHJcblx0XHRcdFx0dHlwZTogXCJSRU1PVkVcIixcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2cocmVtb3ZlZEJvb2spO1xyXG5cdFx0cm91dGVyLnB1c2goXCIvXCIpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7Ym9vayAmJiAoXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZCBtYi0zXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdG1heFdpZHRoOiBcIjYwMHB4XCIsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogXCIxMHB4XCIsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiMTBweFwiLFxyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGctMFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2Jvb2suaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIgfX0gLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UaXRsZToge2Jvb2submFtZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5HZW5yZToge2Jvb2suZ2VucmV9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+QXV0aG9yOiB7Ym9vay5hdXRob3J9PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntib29rLmFib3V0fTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UHJpY2U6ICR7Ym9vay5wcmljZX08L2g1PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cclxuXHRcdFx0e3JvbGUgPT0gXCJhZG1pblwiICYmIChcclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoYm9vay5faWQpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdERlbGV0ZVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0Y29uc3QgeyBhdXRoIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHRjb25zdCB2ZXJpZnkgPSB2ZXJpZmljYXRpb24oYXV0aCk7XHJcblx0aWYgKHZlcmlmeS5lcnJvcikge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9TaWduaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHM6IHt9LFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuXHRcdHF1ZXJ5OiBib29rRGV0YWlsc1F1ZXJ5LFxyXG5cdFx0dmFyaWFibGVzOiB7IGlkOiBjdHgucGFyYW1zLmlkIH0sXHJcblx0fSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7IGluaXRpYWxpemVBcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSwgZGF0YSB9LFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib29rRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==