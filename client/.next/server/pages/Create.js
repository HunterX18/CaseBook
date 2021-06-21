(function() {
var exports = {};
exports.id = "pages/Create";
exports.ids = ["pages/Create"];
exports.modules = {

/***/ "./components/utils/verification.js":
/*!******************************************!*\
  !*** ./components/utils/verification.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);



const verification = token => {
  // const authCookie = cookie.parse(req.headers.cookie);
  // const token = authCookie.auth;
  let verified;

  try {
    verified = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, "secret_key");
  } catch (err) {
    return {
      error: "Cannot Verify"
    };
  }

  return verified;
};

/* harmony default export */ __webpack_exports__["default"] = (verification);

/***/ }),

/***/ "./pages/Create.js":
/*!*************************!*\
  !*** ./pages/Create.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/queries */ "./components/queries.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_utils_verification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/utils/verification */ "./components/utils/verification.js");


var _jsxFileName = "C:\\Users\\srsah\\Desktop\\graphql-server\\client\\pages\\Create.js";







const Create = () => {
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: author,
    1: setAuthor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: genre,
    1: setGenre
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: price,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: about,
    1: setAbout
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const [addNewBook] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_components_queries__WEBPACK_IMPORTED_MODULE_4__.addBookMutation);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "bookstore");
    data.append("cloud_name", "instahunterx");
    const res = await fetch("https://api.cloudinary.com/v1_1/instahunterx/image/upload", {
      method: "POST",
      body: data
    });
    const result = await res.json();
    return result.url;
  };

  const handleSubmit = async () => {
    const {
      uid
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)();
    const imageUrl = await uploadImage();
    const data = await addNewBook({
      variables: {
        name,
        author,
        genre,
        price: Number(price),
        about,
        image: imageUrl,
        sellerId: uid,
        type: "ADD"
      }
    });
    console.log(data);
    router.push("/");
  };

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
          lineNumber: 66,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control",
          id: "name",
          placeholder: "name",
          value: name,
          onChange: e => setName(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "author",
          className: "form-label",
          children: "Author"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control",
          id: "author",
          placeholder: "author",
          value: author,
          onChange: e => setAuthor(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "genre",
          className: "form-label",
          children: "Genre"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control",
          id: "genre",
          placeholder: "genre",
          value: genre,
          onChange: e => setGenre(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "about",
          className: "form-label",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "form-control",
          id: "about",
          placeholder: "about",
          value: about,
          onChange: e => setAbout(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "price",
          className: "form-label",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          className: "form-control",
          id: "price",
          placeholder: "price",
          value: price,
          onChange: e => setPrice(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "input-group mb-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "file",
            className: "form-control",
            id: "inputGroupFile02",
            onChange: e => setImage(e.target.files[0])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "input-group-text",
            htmlFor: "inputGroupFile02",
            children: "Upload Image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn btn-primary",
          onClick: handleSubmit,
          children: "Add Book"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, undefined)
  }, void 0, false);
};

const getServerSideProps = async ctx => {
  const {
    auth
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
  const verify = (0,_components_utils_verification__WEBPACK_IMPORTED_MODULE_6__.default)(auth);

  if (verify.error) {
    return {
      redirect: {
        permanent: false,
        destination: "/Signin"
      },
      props: {}
    };
  } else return {
    props: {}
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_queries_js"], function() { return __webpack_exec__("./pages/Create.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL3ZlcmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9DcmVhdGUuanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInZlcmlmaWNhdGlvbiIsInRva2VuIiwidmVyaWZpZWQiLCJ2ZXJpZnkiLCJlcnIiLCJlcnJvciIsIkNyZWF0ZSIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJnZW5yZSIsInNldEdlbnJlIiwicHJpY2UiLCJzZXRQcmljZSIsImFib3V0Iiwic2V0QWJvdXQiLCJpbWFnZSIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkTmV3Qm9vayIsInVzZU11dGF0aW9uIiwiYWRkQm9va011dGF0aW9uIiwidXBsb2FkSW1hZ2UiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXN1bHQiLCJqc29uIiwidXJsIiwiaGFuZGxlU3VibWl0IiwidWlkIiwicGFyc2VDb29raWVzIiwiaW1hZ2VVcmwiLCJ2YXJpYWJsZXMiLCJOdW1iZXIiLCJzZWxsZXJJZCIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbGVzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwiYXV0aCIsInJlZGlyZWN0IiwicGVybWFuZW50IiwiZGVzdGluYXRpb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUMvQjtBQUNBO0FBQ0EsTUFBSUMsUUFBSjs7QUFDQSxNQUFJO0FBQ0hBLFlBQVEsR0FBR0Msb0RBQU0sQ0FBQ0YsS0FBRCxFQUFRLFlBQVIsQ0FBakI7QUFDQSxHQUZELENBRUUsT0FBT0csR0FBUCxFQUFZO0FBQ2IsV0FBTztBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFQO0FBQ0E7O0FBQ0QsU0FBT0gsUUFBUDtBQUNBLENBVkQ7O0FBWUEsK0RBQWVGLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1NLE1BQU0sR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JKLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDSyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQk4sK0NBQVEsQ0FBQyxDQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1Ms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OiJwYWdlcy9DcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xyXG5cclxuY29uc3QgdmVyaWZpY2F0aW9uID0gKHRva2VuKSA9PiB7XHJcblx0Ly8gY29uc3QgYXV0aENvb2tpZSA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpO1xyXG5cdC8vIGNvbnN0IHRva2VuID0gYXV0aENvb2tpZS5hdXRoO1xyXG5cdGxldCB2ZXJpZmllZDtcclxuXHR0cnkge1xyXG5cdFx0dmVyaWZpZWQgPSB2ZXJpZnkodG9rZW4sIFwic2VjcmV0X2tleVwiKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHJldHVybiB7IGVycm9yOiBcIkNhbm5vdCBWZXJpZnlcIiB9O1xyXG5cdH1cclxuXHRyZXR1cm4gdmVyaWZpZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2ZXJpZmljYXRpb247XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBhZGRCb29rTXV0YXRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB2ZXJpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHMvdmVyaWZpY2F0aW9uXCI7XHJcblxyXG5jb25zdCBDcmVhdGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtnZW5yZSwgc2V0R2VucmVdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbYWJvdXQsIHNldEFib3V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgW2FkZE5ld0Jvb2tdID0gdXNlTXV0YXRpb24oYWRkQm9va011dGF0aW9uKTtcclxuXHJcblx0Y29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRkYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2UpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwiYm9va3N0b3JlXCIpO1xyXG5cdFx0ZGF0YS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwiaW5zdGFodW50ZXJ4XCIpO1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcblx0XHRcdFwiaHR0cHM6Ly9hcGkuY2xvdWRpbmFyeS5jb20vdjFfMS9pbnN0YWh1bnRlcngvaW1hZ2UvdXBsb2FkXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdGJvZHk6IGRhdGEsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdC51cmw7XHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCB7IHVpZCB9ID0gcGFyc2VDb29raWVzKCk7XHJcblx0XHRjb25zdCBpbWFnZVVybCA9IGF3YWl0IHVwbG9hZEltYWdlKCk7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYWRkTmV3Qm9vayh7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0YXV0aG9yLFxyXG5cdFx0XHRcdGdlbnJlLFxyXG5cdFx0XHRcdHByaWNlOiBOdW1iZXIocHJpY2UpLFxyXG5cdFx0XHRcdGFib3V0LFxyXG5cdFx0XHRcdGltYWdlOiBpbWFnZVVybCxcclxuXHRcdFx0XHRzZWxsZXJJZDogdWlkLFxyXG5cdFx0XHRcdHR5cGU6IFwiQUREXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0cm91dGVyLnB1c2goXCIvXCIpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdGhlaWdodDogXCI4MHZoXCIsXHJcblx0XHRcdFx0XHR3aWR0aDogXCIxMDB2d1wiLFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRUaXRsZVxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYXV0aG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRBdXRob3JcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImF1dGhvclwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYXV0aG9yXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2F1dGhvcn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZ2VucmVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEdlbnJlXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJnZW5yZVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZ2VucmVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17Z2VucmV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VucmUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEFib3V0XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17YWJvdXR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWJvdXQoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFByaWNlXHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRpZD1cInByaWNlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJwcmljZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtwcmljZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiaW5wdXRHcm91cEZpbGUwMlwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaHRtbEZvcj1cImlucHV0R3JvdXBGaWxlMDJcIj5cclxuXHRcdFx0XHRcdFx0XHRVcGxvYWQgSW1hZ2VcclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0QWRkIEJvb2tcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cdGNvbnN0IHsgYXV0aCB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblx0Y29uc3QgdmVyaWZ5ID0gdmVyaWZpY2F0aW9uKGF1dGgpO1xyXG5cdGlmICh2ZXJpZnkuZXJyb3IpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlZGlyZWN0OiB7XHJcblx0XHRcdFx0cGVybWFuZW50OiBmYWxzZSxcclxuXHRcdFx0XHRkZXN0aW5hdGlvbjogXCIvU2lnbmluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHByb3BzOiB7fSxcclxuXHRcdH07XHJcblx0fSBlbHNlXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge30sXHJcblx0XHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9