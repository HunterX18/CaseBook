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
              console.log(uid); // const imageUrl = await uploadImage();
              // console.log(name, author, genre, price, about, uid);
              // console.log(typeof(imageUrl));

              _context2.next = 4;
              return addNewBook({
                variables: {
                  name: "ADS",
                  author: "ASD",
                  genre: "ASDF",
                  price: 45,
                  about: "ASDF",
                  image: "SDFH",
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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "btn btn-primary",
      onClick: handleSubmit,
      children: "Add Book"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 6
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJnZW5yZSIsInNldEdlbnJlIiwicHJpY2UiLCJzZXRQcmljZSIsImFib3V0Iiwic2V0QWJvdXQiLCJpbWFnZSIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJhZGROZXdCb29rIiwidXBsb2FkSW1hZ2UiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJqc29uIiwicmVzdWx0IiwidXJsIiwiaGFuZGxlU3VibWl0IiwicGFyc2VDb29raWVzIiwidWlkIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInNlbGxlcklkIiwidHlwZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLCtDQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBQUEsbUJBRVFGLCtDQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRWJHLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUFBLG1CQUdNSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR2JLLEtBSGE7QUFBQSxNQUdOQyxRQUhNOztBQUFBLG1CQUlNTiwrQ0FBUSxDQUFDLENBQUQsQ0FKZDtBQUFBLE1BSWJPLEtBSmE7QUFBQSxNQUlOQyxRQUpNOztBQUFBLG1CQUtNUiwrQ0FBUSxDQUFDLEVBQUQsQ0FMZDtBQUFBLE1BS2JTLEtBTGE7QUFBQSxNQUtOQyxRQUxNOztBQUFBLG1CQU1NViwrQ0FBUSxDQUFDLEVBQUQsQ0FOZDtBQUFBLE1BTWJXLEtBTmE7QUFBQSxNQU1OQyxRQU5NOztBQVFwQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQVJvQixxQkFVQ0MsMkRBQVcsQ0FBQ0MsZ0VBQUQsQ0FWWjtBQUFBO0FBQUEsTUFVYkMsVUFWYTs7QUFZcEIsTUFBTUMsV0FBVztBQUFBLHlTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQyxrQkFEYSxHQUNOLElBQUlDLFFBQUosRUFETTtBQUVuQkQsa0JBQUksQ0FBQ0UsTUFBTCxDQUFZLE1BQVosRUFBb0JWLEtBQXBCO0FBQ0FRLGtCQUFJLENBQUNFLE1BQUwsQ0FBWSxlQUFaLEVBQTZCLFdBQTdCO0FBQ0FGLGtCQUFJLENBQUNFLE1BQUwsQ0FBWSxZQUFaLEVBQTBCLGNBQTFCO0FBSm1CO0FBQUEscUJBS0RDLEtBQUssQ0FDdEIsMkRBRHNCLEVBRXRCO0FBQ0NDLHNCQUFNLEVBQUUsTUFEVDtBQUVDQyxvQkFBSSxFQUFFTDtBQUZQLGVBRnNCLENBTEo7O0FBQUE7QUFLYk0saUJBTGE7QUFBQTtBQUFBLHFCQVlFQSxHQUFHLENBQUNDLElBQUosRUFaRjs7QUFBQTtBQVliQyxvQkFaYTtBQUFBLCtDQWNaQSxNQUFNLENBQUNDLEdBZEs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWFYsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFnQkEsTUFBTVcsWUFBWTtBQUFBLDBTQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYb0IsOEJBWUpDLHFEQUFZLEVBWlIsRUFZWkMsR0FaWSxpQkFZWkEsR0FaWTtBQWFwQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBYm9CLENBY3BCO0FBQ0E7QUFDQTs7QUFoQm9CO0FBQUEscUJBaUJEZCxVQUFVLENBQUM7QUFDN0JpQix5QkFBUyxFQUFFO0FBQ1ZqQyxzQkFBSSxFQUFFLEtBREk7QUFFVkUsd0JBQU0sRUFBRSxLQUZFO0FBR1ZFLHVCQUFLLEVBQUUsTUFIRztBQUlWRSx1QkFBSyxFQUFFLEVBSkc7QUFLVkUsdUJBQUssRUFBRSxNQUxHO0FBTVZFLHVCQUFLLEVBQUUsTUFORztBQU9Wd0IsMEJBQVEsRUFBRUosR0FQQTtBQVFWSyxzQkFBSSxFQUFFO0FBUkk7QUFEa0IsZUFBRCxDQWpCVDs7QUFBQTtBQWlCZGpCLGtCQWpCYztBQTZCcEJhLHFCQUFPLENBQUNDLEdBQVIsQ0FBWWQsSUFBWjtBQUNBTixvQkFBTSxDQUFDd0IsSUFBUCxDQUFZLEdBQVo7O0FBOUJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaUixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWlDQSxzQkFDQztBQUFBLDJCQThFRztBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBb0MsYUFBTyxFQUFFQSxZQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTlFSCxtQkFERDtBQXNGQSxDQW5KRDs7R0FBTTlCLE07VUFRVWUsa0QsRUFFTUMsdUQ7OztLQVZoQmhCLE07O0FBdUtOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NyZWF0ZS4xZDIyMmVhZWI0OTk0ZDM3NTRmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IGFkZEJvb2tNdXRhdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHZlcmlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlscy92ZXJpZmljYXRpb25cIjtcclxuXHJcbmNvbnN0IENyZWF0ZSA9ICgpID0+IHtcclxuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCBbYWRkTmV3Qm9va10gPSB1c2VNdXRhdGlvbihhZGRCb29rTXV0YXRpb24pO1xyXG5cclxuXHRjb25zdCB1cGxvYWRJbWFnZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdGRhdGEuYXBwZW5kKFwiZmlsZVwiLCBpbWFnZSk7XHJcblx0XHRkYXRhLmFwcGVuZChcInVwbG9hZF9wcmVzZXRcIiwgXCJib29rc3RvcmVcIik7XHJcblx0XHRkYXRhLmFwcGVuZChcImNsb3VkX25hbWVcIiwgXCJpbnN0YWh1bnRlcnhcIik7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuXHRcdFx0XCJodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL2luc3RhaHVudGVyeC9pbWFnZS91cGxvYWRcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0Ym9keTogZGF0YSxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdC51cmw7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcblxyXG5cdFx0Ly8gbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG5cdFx0Ly8gXHRjb25zdCByZW1vdmVkQm9vayA9IGF3YWl0IHJlbW92ZUJvb2soe1xyXG5cdFx0Ly8gXHRcdHZhcmlhYmxlczoge1xyXG5cdFx0Ly8gXHRcdFx0aWQsXHJcblx0XHQvLyBcdFx0XHR0eXBlOiBcIlJFTU9WRVwiLFxyXG5cdFx0Ly8gXHRcdH0sXHJcblx0XHQvLyBcdH0pO1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhyZW1vdmVkQm9vayk7XHJcblx0XHQvLyBcdHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHRcdC8vIH07XHJcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFyc2VDb29raWVzKCk7XHJcblx0XHRjb25zb2xlLmxvZyh1aWQpO1xyXG5cdFx0Ly8gY29uc3QgaW1hZ2VVcmwgPSBhd2FpdCB1cGxvYWRJbWFnZSgpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2cobmFtZSwgYXV0aG9yLCBnZW5yZSwgcHJpY2UsIGFib3V0LCB1aWQpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codHlwZW9mKGltYWdlVXJsKSk7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYWRkTmV3Qm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdG5hbWU6IFwiQURTXCIsXHJcblx0XHRcdFx0YXV0aG9yOiBcIkFTRFwiLFxyXG5cdFx0XHRcdGdlbnJlOiBcIkFTREZcIixcclxuXHRcdFx0XHRwcmljZTogNDUsXHJcblx0XHRcdFx0YWJvdXQ6IFwiQVNERlwiLFxyXG5cdFx0XHRcdGltYWdlOiBcIlNERkhcIixcclxuXHRcdFx0XHRzZWxsZXJJZDogdWlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiQUREXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0cm91dGVyLnB1c2goXCIvXCIpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7LyogPGRpdlxyXG5cdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiODB2aFwiLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMTAwdndcIixcclxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0VGl0bGVcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImF1dGhvclwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0QXV0aG9yXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJhdXRob3JcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImF1dGhvclwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXthdXRob3J9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRHZW5yZVxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwiZ2VucmVcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImdlbnJlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2dlbnJlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEdlbnJlKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImFib3V0XCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRBYm91dFxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2Fib3V0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEFib3V0KGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInByaWNlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRQcmljZVxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJwcmljZVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicHJpY2VcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cHJpY2V9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz4gKi99XHJcblx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiaW5wdXRHcm91cEZpbGUwMlwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaHRtbEZvcj1cImlucHV0R3JvdXBGaWxlMDJcIj5cclxuXHRcdFx0XHRcdFx0XHRVcGxvYWQgSW1hZ2VcclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHRcdEFkZCBCb29rXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHR7LyogPC9kaXY+XHJcblx0XHRcdDwvZGl2PiAqL31cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKFwic2VydmVyXCIpO1xyXG5cdGNvbnN0IHsgYXV0aCB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblx0Y29uc3QgdmVyaWZ5ID0gdmVyaWZpY2F0aW9uKGF1dGgpO1xyXG5cdGlmICh2ZXJpZnkuZXJyb3IpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlZGlyZWN0OiB7XHJcblx0XHRcdFx0cGVybWFuZW50OiBmYWxzZSxcclxuXHRcdFx0XHRkZXN0aW5hdGlvbjogXCIvU2lnbmluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHByb3BzOiB7fSxcclxuXHRcdH07XHJcblx0fSBlbHNlXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9