exports.id = "components_utils_apollo_js";
exports.ids = ["components_utils_apollo_js"];
exports.modules = {

/***/ "./components/utils/apollo.js":
/*!************************************!*\
  !*** ./components/utils/apollo.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApolloClient": function() { return /* binding */ createApolloClient; },
/* harmony export */   "initializeApollo": function() { return /* binding */ initializeApollo; },
/* harmony export */   "useApollo": function() { return /* binding */ useApollo; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



let apolloClient;

const createIsomorphicLink = () => {
  if (true) {
    // server
    const {
      SchemaLink
    } = __webpack_require__(/*! @apollo/client/link/schema */ "@apollo/client/link/schema");

    const typeDefs = __webpack_require__(/*! ../typeDefs */ "./components/typeDefs.js");

    const resolvers = __webpack_require__(/*! ../resolvers */ "./components/resolvers.js");

    const schema = (0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_1__.makeExecutableSchema)({
      typeDefs,
      resolvers
    });
    return new SchemaLink({
      schema
    });
  } else {}
};

const createApolloClient = () => {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    ssrMode: true,
    link: createIsomorphicLink(),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
  });
};
const initializeApollo = (initialState = null) => {
  var _apolloClient2, _apolloClient3;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient();

  if (initialState) {
    _apolloClient.client.restore(initialState);
  }

  if (true) return _apolloClient;
  apolloClient = (_apolloClient3 = apolloClient) !== null && _apolloClient3 !== void 0 ? _apolloClient3 : _apolloClient;
  return apolloClient;
};
const useApollo = initialState => {
  const store = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => initializeApollo(initialState), [initialState]);
  return store;
};

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9jbGllbnQvaWdub3JlZHxDOlxcVXNlcnNcXHNyc2FoXFxEZXNrdG9wXFxncmFwaHFsLXNlcnZlclxcY2xpZW50XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiYXBvbGxvQ2xpZW50IiwiY3JlYXRlSXNvbW9ycGhpY0xpbmsiLCJTY2hlbWFMaW5rIiwicmVxdWlyZSIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwic2NoZW1hIiwibWFrZUV4ZWN1dGFibGVTY2hlbWEiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiY2xpZW50IiwicmVzdG9yZSIsInVzZUFwb2xsbyIsInN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxZQUFKOztBQUVBLE1BQU1DLG9CQUFvQixHQUFHLE1BQU07QUFDbEMsWUFBbUM7QUFDbEM7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBaUJDLG1CQUFPLENBQUMsOERBQUQsQ0FBOUI7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHRCxtQkFBTyxDQUFDLDZDQUFELENBQXhCOztBQUNBLFVBQU1FLFNBQVMsR0FBR0YsbUJBQU8sQ0FBQywrQ0FBRCxDQUF6Qjs7QUFDQSxVQUFNRyxNQUFNLEdBQUdDLDJFQUFvQixDQUFDO0FBQUVILGNBQUY7QUFBWUM7QUFBWixLQUFELENBQW5DO0FBQ0EsV0FBTyxJQUFJSCxVQUFKLENBQWU7QUFBRUk7QUFBRixLQUFmLENBQVA7QUFDQSxHQVBELE1BT08sRUFJTjtBQUNELENBYkQ7O0FBZU8sTUFBTUUsa0JBQWtCLEdBQUcsTUFBTTtBQUN2QyxTQUFPLElBQUlDLHdEQUFKLENBQWlCO0FBQ3ZCQyxXQUFPLE1BRGdCO0FBRXZCQyxRQUFJLEVBQUVWLG9CQUFvQixFQUZIO0FBR3ZCVyxTQUFLLEVBQUUsSUFBSUMseURBQUo7QUFIZ0IsR0FBakIsQ0FBUDtBQUtBLENBTk07QUFRQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDQyxZQUFZLEdBQUcsSUFBaEIsS0FBeUI7QUFBQTs7QUFDeEQsUUFBTUMsYUFBYSxxQkFBR2hCLFlBQUgsMkRBQW1CUSxrQkFBa0IsRUFBeEQ7O0FBQ0EsTUFBSU8sWUFBSixFQUFrQjtBQUNqQkMsaUJBQWEsQ0FBQ0MsTUFBZCxDQUFxQkMsT0FBckIsQ0FBNkJILFlBQTdCO0FBQ0E7O0FBRUQsWUFBbUMsT0FBT0MsYUFBUDtBQUVuQ2hCLGNBQVkscUJBQUdBLFlBQUgsMkRBQW1CZ0IsYUFBL0I7QUFDQSxTQUFPaEIsWUFBUDtBQUNBLENBVk07QUFZQSxNQUFNbUIsU0FBUyxHQUFJSixZQUFELElBQWtCO0FBQzFDLFFBQU1LLEtBQUssR0FBR0MsOENBQU8sQ0FBQyxNQUFNUCxnQkFBZ0IsQ0FBQ0MsWUFBRCxDQUF2QixFQUF1QyxDQUFDQSxZQUFELENBQXZDLENBQXJCO0FBQ0EsU0FBT0ssS0FBUDtBQUNBLENBSE0sQzs7Ozs7Ozs7OztBQ3pDUCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfdXRpbHNfYXBvbGxvX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSBcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50O1xyXG5cclxuY29uc3QgY3JlYXRlSXNvbW9ycGhpY0xpbmsgPSAoKSA9PiB7XHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdC8vIHNlcnZlclxyXG5cdFx0Y29uc3QgeyBTY2hlbWFMaW5rIH0gPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWFcIik7XHJcblx0XHRjb25zdCB0eXBlRGVmcyA9IHJlcXVpcmUoXCIuLi90eXBlRGVmc1wiKTtcclxuXHRcdGNvbnN0IHJlc29sdmVycyA9IHJlcXVpcmUoXCIuLi9yZXNvbHZlcnNcIik7XHJcblx0XHRjb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XHJcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUxpbmsoeyBzY2hlbWEgfSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIGNsaWVudFxyXG5cdFx0Y29uc3QgeyBIdHRwTGluayB9ID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvaHR0cFwiKTtcclxuXHRcdHJldHVybiBuZXcgSHR0cExpbmsoeyB1cmk6IFwiL2FwaS9ncmFwaHFsXCIgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwb2xsb0NsaWVudCA9ICgpID0+IHtcclxuXHRyZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcblx0XHRzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiLFxyXG5cdFx0bGluazogY3JlYXRlSXNvbW9ycGhpY0xpbmsoKSxcclxuXHRcdGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVBcG9sbG8gPSAoaW5pdGlhbFN0YXRlID0gbnVsbCkgPT4ge1xyXG5cdGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XHJcblx0aWYgKGluaXRpYWxTdGF0ZSkge1xyXG5cdFx0X2Fwb2xsb0NsaWVudC5jbGllbnQucmVzdG9yZShpbml0aWFsU3RhdGUpO1xyXG5cdH1cclxuXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xyXG5cclxuXHRhcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gX2Fwb2xsb0NsaWVudDtcclxuXHRyZXR1cm4gYXBvbGxvQ2xpZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFwb2xsbyA9IChpbml0aWFsU3RhdGUpID0+IHtcclxuXHRjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XHJcblx0cmV0dXJuIHN0b3JlO1xyXG59O1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9