self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/queries.js":
/*!*******************************!*\
  !*** ./components/queries.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBooksQuery": function() { return /* binding */ getBooksQuery; },
/* harmony export */   "bookDetailsQuery": function() { return /* binding */ bookDetailsQuery; },
/* harmony export */   "addCustomerMutation": function() { return /* binding */ addCustomerMutation; },
/* harmony export */   "getCartQuery": function() { return /* binding */ getCartQuery; },
/* harmony export */   "addToCartMutation": function() { return /* binding */ addToCartMutation; },
/* harmony export */   "addBookMutation": function() { return /* binding */ addBookMutation; },
/* harmony export */   "getProductsQuery": function() { return /* binding */ getProductsQuery; },
/* harmony export */   "getCustomersQuery": function() { return /* binding */ getCustomersQuery; },
/* harmony export */   "getSellersQuery": function() { return /* binding */ getSellersQuery; },
/* harmony export */   "getAllProductsQuery": function() { return /* binding */ getAllProductsQuery; },
/* harmony export */   "removeCustomerMutation": function() { return /* binding */ removeCustomerMutation; },
/* harmony export */   "removeSellerMutation": function() { return /* binding */ removeSellerMutation; },
/* harmony export */   "checkoutMutation": function() { return /* binding */ checkoutMutation; },
/* harmony export */   "removeAdminMutation": function() { return /* binding */ removeAdminMutation; },
/* harmony export */   "getAdminsQuery": function() { return /* binding */ getAdminsQuery; }
/* harmony export */ });
/* harmony import */ var C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject15() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation (\n\t\t$customerId: String!\n\t\t$bookId: String!\n\t\t$type: String!\n\t\t$quantity: Int\n\t) {\n\t\taddToCart(\n\t\t\tcustomerId: $customerId\n\t\t\tbookId: $bookId\n\t\t\ttype: $type\n\t\t\tquantity: $quantity\n\t\t) {\n\t\t\titem {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t\timage\n\t\t\t\tprice\n\t\t\t}\n\t\t\tquantity\n\t\t}\n\t}\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation ($id: String!) {\n\t\tcheckout(id: $id) {\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tquery ($id: String!) {\n\t\tcart(id: $id) {\n\t\t\titem {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t\timage\n\t\t\t\tprice\n\t\t\t}\n\t\t\tquantity\n\t\t}\n\t}\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation (\n\t\t$id: String\n\t\t$name: String\n\t\t$author: String\n\t\t$genre: String\n\t\t$image: String\n\t\t$price: Int\n\t\t$about: String\n\t\t$type: String!\n\t\t$sellerId: String\n\t) {\n\t\taddBook(\n\t\t\tid: $id\n\t\t\tname: $name\n\t\t\tauthor: $author\n\t\t\tgenre: $genre\n\t\t\timage: $image\n\t\t\tprice: $price\n\t\t\tabout: $about\n\t\t\ttype: $type\n\t\t\tsellerId: $sellerId\n\t\t) {\n\t\t\t_id\n\t\t\tname\n\t\t\tprice\n\t\t}\n\t}\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation ($id: String!) {\n\t\tremoveAdmin(id: $id) {\n\t\t\t_id\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation ($id: String!) {\n\t\tremoveSeller(id: $id) {\n\t\t\t_id\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation ($id: String!) {\n\t\tremoveCustomer(id: $id) {\n\t\t\t_id\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation (\n\t\t$name: String!\n\t\t$password: String!\n\t\t$email: String\n\t\t$type: String!\n\t\t$role: String!\n\t) {\n\t\taddCustomer(\n\t\t\tname: $name\n\t\t\temail: $email\n\t\t\tpassword: $password\n\t\t\ttype: $type\n\t\t\trole: $role\n\t\t) {\n\t\t\t_id\n\t\t\tname\n\t\t\temail\n\t\t\torders\n\t\t\tcart\n\t\t\trole\n\t\t}\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tquery ($id: String!) {\n\t\tproducts(id: $id) {\n\t\t\t_id\n\t\t\tname\n\t\t\tgenre\n\t\t\tauthor\n\t\t\timage\n\t\t\tprice\n\t\t\tabout\n\t\t}\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tquery {\n\t\tallProducts {\n\t\t\t_id\n\t\t\tname\n\t\t\tauthor\n\t\t\tprice\n\t\t\timage\n\t\t\tabout\n\t\t}\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tquery {\n\t\tadmins {\n\t\t\t_id\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tquery {\n\t\tsellers {\n\t\t\t_id\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tquery {\n\t\tcustomers {\n\t\t\t_id\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tquery ($id: String!) {\n\t\tbook(id: $id) {\n\t\t\t_id\n\t\t\tname\n\t\t\tgenre\n\t\t\tauthor\n\t\t\timage\n\t\t\tprice\n\t\t\tabout\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_srsah_Desktop_graphql_server_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t{\n\t\tbooks {\n\t\t\t_id\n\t\t\tname\n\t\t\tgenre\n\t\t\tauthor\n\t\t\timage\n\t\t\tprice\n\t\t\tabout\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var getBooksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());
var bookDetailsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());
var getCustomersQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject3());
var getSellersQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject4());
var getAdminsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject5());
var getAllProductsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject6());
var getProductsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject7());
var addCustomerMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject8());
var removeCustomerMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject9());
var removeSellerMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject10());
var removeAdminMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject11());
var addBookMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject12());
var getCartQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject13());
var checkoutMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject14());
var addToCartMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject15());


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdWVyaWVzLmpzIl0sIm5hbWVzIjpbImdldEJvb2tzUXVlcnkiLCJncWwiLCJib29rRGV0YWlsc1F1ZXJ5IiwiZ2V0Q3VzdG9tZXJzUXVlcnkiLCJnZXRTZWxsZXJzUXVlcnkiLCJnZXRBZG1pbnNRdWVyeSIsImdldEFsbFByb2R1Y3RzUXVlcnkiLCJnZXRQcm9kdWN0c1F1ZXJ5IiwiYWRkQ3VzdG9tZXJNdXRhdGlvbiIsInJlbW92ZUN1c3RvbWVyTXV0YXRpb24iLCJyZW1vdmVTZWxsZXJNdXRhdGlvbiIsInJlbW92ZUFkbWluTXV0YXRpb24iLCJhZGRCb29rTXV0YXRpb24iLCJnZXRDYXJ0UXVlcnkiLCJjaGVja291dE11dGF0aW9uIiwiYWRkVG9DYXJ0TXV0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLG1EQUFILG1CQUFuQjtBQWNBLElBQU1DLGdCQUFnQixHQUFHRCxtREFBSCxvQkFBdEI7QUFjQSxJQUFNRSxpQkFBaUIsR0FBR0YsbURBQUgsb0JBQXZCO0FBU0EsSUFBTUcsZUFBZSxHQUFHSCxtREFBSCxvQkFBckI7QUFTQSxJQUFNSSxjQUFjLEdBQUdKLG1EQUFILG9CQUFwQjtBQVNBLElBQU1LLG1CQUFtQixHQUFHTCxtREFBSCxvQkFBekI7QUFhQSxJQUFNTSxnQkFBZ0IsR0FBR04sbURBQUgsb0JBQXRCO0FBY0EsSUFBTU8sbUJBQW1CLEdBQUdQLG1EQUFILG9CQUF6QjtBQXlCQSxJQUFNUSxzQkFBc0IsR0FBR1IsbURBQUgsb0JBQTVCO0FBU0EsSUFBTVMsb0JBQW9CLEdBQUdULG1EQUFILHFCQUExQjtBQVNBLElBQU1VLG1CQUFtQixHQUFHVixtREFBSCxxQkFBekI7QUFVQSxJQUFNVyxlQUFlLEdBQUdYLG1EQUFILHFCQUFyQjtBQThCQSxJQUFNWSxZQUFZLEdBQUdaLG1EQUFILHFCQUFsQjtBQWNBLElBQU1hLGdCQUFnQixHQUFHYixtREFBSCxxQkFBdEI7QUFTQSxJQUFNYyxpQkFBaUIsR0FBR2QsbURBQUgscUJBQXZCO0FBd0JBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk5OTQwZTIyNDM2MmY0ZWUwMWExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGdldEJvb2tzUXVlcnkgPSBncWxgXHJcblx0e1xyXG5cdFx0Ym9va3Mge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRnZW5yZVxyXG5cdFx0XHRhdXRob3JcclxuXHRcdFx0aW1hZ2VcclxuXHRcdFx0cHJpY2VcclxuXHRcdFx0YWJvdXRcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBib29rRGV0YWlsc1F1ZXJ5ID0gZ3FsYFxyXG5cdHF1ZXJ5ICgkaWQ6IFN0cmluZyEpIHtcclxuXHRcdGJvb2soaWQ6ICRpZCkge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRnZW5yZVxyXG5cdFx0XHRhdXRob3JcclxuXHRcdFx0aW1hZ2VcclxuXHRcdFx0cHJpY2VcclxuXHRcdFx0YWJvdXRcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDdXN0b21lcnNRdWVyeSA9IGdxbGBcclxuXHRxdWVyeSB7XHJcblx0XHRjdXN0b21lcnMge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRlbWFpbFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuY29uc3QgZ2V0U2VsbGVyc1F1ZXJ5ID0gZ3FsYFxyXG5cdHF1ZXJ5IHtcclxuXHRcdHNlbGxlcnMge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRlbWFpbFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuY29uc3QgZ2V0QWRtaW5zUXVlcnkgPSBncWxgXHJcblx0cXVlcnkge1xyXG5cdFx0YWRtaW5zIHtcclxuXHRcdFx0X2lkXHJcblx0XHRcdG5hbWVcclxuXHRcdFx0ZW1haWxcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcbmNvbnN0IGdldEFsbFByb2R1Y3RzUXVlcnkgPSBncWxgXHJcblx0cXVlcnkge1xyXG5cdFx0YWxsUHJvZHVjdHMge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRhdXRob3JcclxuXHRcdFx0cHJpY2VcclxuXHRcdFx0aW1hZ2VcclxuXHRcdFx0YWJvdXRcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0c1F1ZXJ5ID0gZ3FsYFxyXG5cdHF1ZXJ5ICgkaWQ6IFN0cmluZyEpIHtcclxuXHRcdHByb2R1Y3RzKGlkOiAkaWQpIHtcclxuXHRcdFx0X2lkXHJcblx0XHRcdG5hbWVcclxuXHRcdFx0Z2VucmVcclxuXHRcdFx0YXV0aG9yXHJcblx0XHRcdGltYWdlXHJcblx0XHRcdHByaWNlXHJcblx0XHRcdGFib3V0XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgYWRkQ3VzdG9tZXJNdXRhdGlvbiA9IGdxbGBcclxuXHRtdXRhdGlvbiAoXHJcblx0XHQkbmFtZTogU3RyaW5nIVxyXG5cdFx0JHBhc3N3b3JkOiBTdHJpbmchXHJcblx0XHQkZW1haWw6IFN0cmluZ1xyXG5cdFx0JHR5cGU6IFN0cmluZyFcclxuXHRcdCRyb2xlOiBTdHJpbmchXHJcblx0KSB7XHJcblx0XHRhZGRDdXN0b21lcihcclxuXHRcdFx0bmFtZTogJG5hbWVcclxuXHRcdFx0ZW1haWw6ICRlbWFpbFxyXG5cdFx0XHRwYXNzd29yZDogJHBhc3N3b3JkXHJcblx0XHRcdHR5cGU6ICR0eXBlXHJcblx0XHRcdHJvbGU6ICRyb2xlXHJcblx0XHQpIHtcclxuXHRcdFx0X2lkXHJcblx0XHRcdG5hbWVcclxuXHRcdFx0ZW1haWxcclxuXHRcdFx0b3JkZXJzXHJcblx0XHRcdGNhcnRcclxuXHRcdFx0cm9sZVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IHJlbW92ZUN1c3RvbWVyTXV0YXRpb24gPSBncWxgXHJcblx0bXV0YXRpb24gKCRpZDogU3RyaW5nISkge1xyXG5cdFx0cmVtb3ZlQ3VzdG9tZXIoaWQ6ICRpZCkge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRlbWFpbFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuY29uc3QgcmVtb3ZlU2VsbGVyTXV0YXRpb24gPSBncWxgXHJcblx0bXV0YXRpb24gKCRpZDogU3RyaW5nISkge1xyXG5cdFx0cmVtb3ZlU2VsbGVyKGlkOiAkaWQpIHtcclxuXHRcdFx0X2lkXHJcblx0XHRcdG5hbWVcclxuXHRcdFx0ZW1haWxcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcbmNvbnN0IHJlbW92ZUFkbWluTXV0YXRpb24gPSBncWxgXHJcblx0bXV0YXRpb24gKCRpZDogU3RyaW5nISkge1xyXG5cdFx0cmVtb3ZlQWRtaW4oaWQ6ICRpZCkge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRlbWFpbFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IGFkZEJvb2tNdXRhdGlvbiA9IGdxbGBcclxuXHRtdXRhdGlvbiAoXHJcblx0XHQkaWQ6IFN0cmluZ1xyXG5cdFx0JG5hbWU6IFN0cmluZ1xyXG5cdFx0JGF1dGhvcjogU3RyaW5nXHJcblx0XHQkZ2VucmU6IFN0cmluZ1xyXG5cdFx0JGltYWdlOiBTdHJpbmdcclxuXHRcdCRwcmljZTogSW50XHJcblx0XHQkYWJvdXQ6IFN0cmluZ1xyXG5cdFx0JHR5cGU6IFN0cmluZyFcclxuXHRcdCRzZWxsZXJJZDogU3RyaW5nXHJcblx0KSB7XHJcblx0XHRhZGRCb29rKFxyXG5cdFx0XHRpZDogJGlkXHJcblx0XHRcdG5hbWU6ICRuYW1lXHJcblx0XHRcdGF1dGhvcjogJGF1dGhvclxyXG5cdFx0XHRnZW5yZTogJGdlbnJlXHJcblx0XHRcdGltYWdlOiAkaW1hZ2VcclxuXHRcdFx0cHJpY2U6ICRwcmljZVxyXG5cdFx0XHRhYm91dDogJGFib3V0XHJcblx0XHRcdHR5cGU6ICR0eXBlXHJcblx0XHRcdHNlbGxlcklkOiAkc2VsbGVySWRcclxuXHRcdCkge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRwcmljZVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENhcnRRdWVyeSA9IGdxbGBcclxuXHRxdWVyeSAoJGlkOiBTdHJpbmchKSB7XHJcblx0XHRjYXJ0KGlkOiAkaWQpIHtcclxuXHRcdFx0aXRlbSB7XHJcblx0XHRcdFx0X2lkXHJcblx0XHRcdFx0bmFtZVxyXG5cdFx0XHRcdGltYWdlXHJcblx0XHRcdFx0cHJpY2VcclxuXHRcdFx0fVxyXG5cdFx0XHRxdWFudGl0eVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IGNoZWNrb3V0TXV0YXRpb24gPSBncWxgXHJcblx0bXV0YXRpb24gKCRpZDogU3RyaW5nISkge1xyXG5cdFx0Y2hlY2tvdXQoaWQ6ICRpZCkge1xyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGVtYWlsXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgYWRkVG9DYXJ0TXV0YXRpb24gPSBncWxgXHJcblx0bXV0YXRpb24gKFxyXG5cdFx0JGN1c3RvbWVySWQ6IFN0cmluZyFcclxuXHRcdCRib29rSWQ6IFN0cmluZyFcclxuXHRcdCR0eXBlOiBTdHJpbmchXHJcblx0XHQkcXVhbnRpdHk6IEludFxyXG5cdCkge1xyXG5cdFx0YWRkVG9DYXJ0KFxyXG5cdFx0XHRjdXN0b21lcklkOiAkY3VzdG9tZXJJZFxyXG5cdFx0XHRib29rSWQ6ICRib29rSWRcclxuXHRcdFx0dHlwZTogJHR5cGVcclxuXHRcdFx0cXVhbnRpdHk6ICRxdWFudGl0eVxyXG5cdFx0KSB7XHJcblx0XHRcdGl0ZW0ge1xyXG5cdFx0XHRcdF9pZFxyXG5cdFx0XHRcdG5hbWVcclxuXHRcdFx0XHRpbWFnZVxyXG5cdFx0XHRcdHByaWNlXHJcblx0XHRcdH1cclxuXHRcdFx0cXVhbnRpdHlcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQge1xyXG5cdGdldEJvb2tzUXVlcnksXHJcblx0Ym9va0RldGFpbHNRdWVyeSxcclxuXHRhZGRDdXN0b21lck11dGF0aW9uLFxyXG5cdGdldENhcnRRdWVyeSxcclxuXHRhZGRUb0NhcnRNdXRhdGlvbixcclxuXHRhZGRCb29rTXV0YXRpb24sXHJcblx0Z2V0UHJvZHVjdHNRdWVyeSxcclxuXHRnZXRDdXN0b21lcnNRdWVyeSxcclxuXHRnZXRTZWxsZXJzUXVlcnksXHJcblx0Z2V0QWxsUHJvZHVjdHNRdWVyeSxcclxuXHRyZW1vdmVDdXN0b21lck11dGF0aW9uLFxyXG5cdHJlbW92ZVNlbGxlck11dGF0aW9uLFxyXG5cdGNoZWNrb3V0TXV0YXRpb24sXHJcblx0cmVtb3ZlQWRtaW5NdXRhdGlvbixcclxuXHRnZXRBZG1pbnNRdWVyeVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9