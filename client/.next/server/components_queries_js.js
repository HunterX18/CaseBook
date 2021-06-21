exports.id = "components_queries_js";
exports.ids = ["components_queries_js"];
exports.modules = {

/***/ "./components/queries.js":
/*!*******************************!*\
  !*** ./components/queries.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const getBooksQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	{
		books {
			_id
			name
			genre
			author
			image
			price
			about
		}
	}
`;
const bookDetailsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	query ($id: String!) {
		book(id: $id) {
			_id
			name
			genre
			author
			image
			price
			about
		}
	}
`;
const getCustomersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	query {
		customers {
			_id
			name
			email
		}
	}
`;
const getSellersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	query {
		sellers {
			_id
			name
			email
		}
	}
`;
const getAdminsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	query {
		admins {
			_id
			name
			email
		}
	}
`;
const getAllProductsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	query {
		allProducts {
			_id
			name
			author
			price
			image
			about
		}
	}
`;
const getProductsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	query ($id: String!) {
		products(id: $id) {
			_id
			name
			genre
			author
			image
			price
			about
		}
	}
`;
const addCustomerMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation (
		$name: String!
		$password: String!
		$email: String
		$type: String!
		$role: String!
	) {
		addCustomer(
			name: $name
			email: $email
			password: $password
			type: $type
			role: $role
		) {
			_id
			name
			email
			orders
			cart
			role
		}
	}
`;
const removeCustomerMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation ($id: String!) {
		removeCustomer(id: $id) {
			_id
			name
			email
		}
	}
`;
const removeSellerMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation ($id: String!) {
		removeSeller(id: $id) {
			_id
			name
			email
		}
	}
`;
const removeAdminMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation ($id: String!) {
		removeAdmin(id: $id) {
			_id
			name
			email
		}
	}
`;
const addBookMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation (
		$id: String
		$name: String
		$author: String
		$genre: String
		$price: Int
		$about: String
		$image: String
		$type: String!
		$sellerId: String
	) {
		addBook(
			id: $id
			name: $name
			author: $author
			genre: $genre
			price: $price
			about: $about
			image: $image
			type: $type
			sellerId: $sellerId
		) {
			_id
			name
			price
		}
	}
`;
const getCartQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	query ($id: String!) {
		cart(id: $id) {
			item {
				_id
				name
				image
				price
			}
			quantity
		}
	}
`;
const checkoutMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation ($id: String!) {
		checkout(id: $id) {
			name
			email
		}
	}
`;
const addToCartMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	mutation (
		$customerId: String!
		$bookId: String!
		$type: String!
		$quantity: Int
	) {
		addToCart(
			customerId: $customerId
			bookId: $bookId
			type: $type
			quantity: $quantity
		) {
			item {
				_id
				name
				image
				price
			}
			quantity
		}
	}
`;


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3F1ZXJpZXMuanMiXSwibmFtZXMiOlsiZ2V0Qm9va3NRdWVyeSIsImdxbCIsImJvb2tEZXRhaWxzUXVlcnkiLCJnZXRDdXN0b21lcnNRdWVyeSIsImdldFNlbGxlcnNRdWVyeSIsImdldEFkbWluc1F1ZXJ5IiwiZ2V0QWxsUHJvZHVjdHNRdWVyeSIsImdldFByb2R1Y3RzUXVlcnkiLCJhZGRDdXN0b21lck11dGF0aW9uIiwicmVtb3ZlQ3VzdG9tZXJNdXRhdGlvbiIsInJlbW92ZVNlbGxlck11dGF0aW9uIiwicmVtb3ZlQWRtaW5NdXRhdGlvbiIsImFkZEJvb2tNdXRhdGlvbiIsImdldENhcnRRdWVyeSIsImNoZWNrb3V0TXV0YXRpb24iLCJhZGRUb0NhcnRNdXRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsYUFBYSxHQUFHQywrQ0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTtBQWNBLE1BQU1DLGdCQUFnQixHQUFHRCwrQ0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTtBQWNBLE1BQU1FLGlCQUFpQixHQUFHRiwrQ0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7QUFTQSxNQUFNRyxlQUFlLEdBQUdILCtDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSQTtBQVNBLE1BQU1JLGNBQWMsR0FBR0osK0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJBO0FBU0EsTUFBTUssbUJBQW1CLEdBQUdMLCtDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYQTtBQWFBLE1BQU1NLGdCQUFnQixHQUFHTiwrQ0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTtBQWNBLE1BQU1PLG1CQUFtQixHQUFHUCwrQ0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkJBO0FBeUJBLE1BQU1RLHNCQUFzQixHQUFHUiwrQ0FBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7QUFTQSxNQUFNUyxvQkFBb0IsR0FBR1QsK0NBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJBO0FBU0EsTUFBTVUsbUJBQW1CLEdBQUdWLCtDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSQTtBQVVBLE1BQU1XLGVBQWUsR0FBR1gsK0NBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E1QkE7QUE4QkEsTUFBTVksWUFBWSxHQUFHWiwrQ0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTtBQWNBLE1BQU1hLGdCQUFnQixHQUFHYiwrQ0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBO0FBU0EsTUFBTWMsaUJBQWlCLEdBQUdkLCtDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdEJBIiwiZmlsZSI6ImNvbXBvbmVudHNfcXVlcmllc19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgZ2V0Qm9va3NRdWVyeSA9IGdxbGBcclxuXHR7XHJcblx0XHRib29rcyB7XHJcblx0XHRcdF9pZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGdlbnJlXHJcblx0XHRcdGF1dGhvclxyXG5cdFx0XHRpbWFnZVxyXG5cdFx0XHRwcmljZVxyXG5cdFx0XHRhYm91dFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IGJvb2tEZXRhaWxzUXVlcnkgPSBncWxgXHJcblx0cXVlcnkgKCRpZDogU3RyaW5nISkge1xyXG5cdFx0Ym9vayhpZDogJGlkKSB7XHJcblx0XHRcdF9pZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGdlbnJlXHJcblx0XHRcdGF1dGhvclxyXG5cdFx0XHRpbWFnZVxyXG5cdFx0XHRwcmljZVxyXG5cdFx0XHRhYm91dFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEN1c3RvbWVyc1F1ZXJ5ID0gZ3FsYFxyXG5cdHF1ZXJ5IHtcclxuXHRcdGN1c3RvbWVycyB7XHJcblx0XHRcdF9pZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGVtYWlsXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5jb25zdCBnZXRTZWxsZXJzUXVlcnkgPSBncWxgXHJcblx0cXVlcnkge1xyXG5cdFx0c2VsbGVycyB7XHJcblx0XHRcdF9pZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGVtYWlsXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5jb25zdCBnZXRBZG1pbnNRdWVyeSA9IGdxbGBcclxuXHRxdWVyeSB7XHJcblx0XHRhZG1pbnMge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRlbWFpbFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuY29uc3QgZ2V0QWxsUHJvZHVjdHNRdWVyeSA9IGdxbGBcclxuXHRxdWVyeSB7XHJcblx0XHRhbGxQcm9kdWN0cyB7XHJcblx0XHRcdF9pZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGF1dGhvclxyXG5cdFx0XHRwcmljZVxyXG5cdFx0XHRpbWFnZVxyXG5cdFx0XHRhYm91dFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RzUXVlcnkgPSBncWxgXHJcblx0cXVlcnkgKCRpZDogU3RyaW5nISkge1xyXG5cdFx0cHJvZHVjdHMoaWQ6ICRpZCkge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRnZW5yZVxyXG5cdFx0XHRhdXRob3JcclxuXHRcdFx0aW1hZ2VcclxuXHRcdFx0cHJpY2VcclxuXHRcdFx0YWJvdXRcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBhZGRDdXN0b21lck11dGF0aW9uID0gZ3FsYFxyXG5cdG11dGF0aW9uIChcclxuXHRcdCRuYW1lOiBTdHJpbmchXHJcblx0XHQkcGFzc3dvcmQ6IFN0cmluZyFcclxuXHRcdCRlbWFpbDogU3RyaW5nXHJcblx0XHQkdHlwZTogU3RyaW5nIVxyXG5cdFx0JHJvbGU6IFN0cmluZyFcclxuXHQpIHtcclxuXHRcdGFkZEN1c3RvbWVyKFxyXG5cdFx0XHRuYW1lOiAkbmFtZVxyXG5cdFx0XHRlbWFpbDogJGVtYWlsXHJcblx0XHRcdHBhc3N3b3JkOiAkcGFzc3dvcmRcclxuXHRcdFx0dHlwZTogJHR5cGVcclxuXHRcdFx0cm9sZTogJHJvbGVcclxuXHRcdCkge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRlbWFpbFxyXG5cdFx0XHRvcmRlcnNcclxuXHRcdFx0Y2FydFxyXG5cdFx0XHRyb2xlXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgcmVtb3ZlQ3VzdG9tZXJNdXRhdGlvbiA9IGdxbGBcclxuXHRtdXRhdGlvbiAoJGlkOiBTdHJpbmchKSB7XHJcblx0XHRyZW1vdmVDdXN0b21lcihpZDogJGlkKSB7XHJcblx0XHRcdF9pZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGVtYWlsXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5jb25zdCByZW1vdmVTZWxsZXJNdXRhdGlvbiA9IGdxbGBcclxuXHRtdXRhdGlvbiAoJGlkOiBTdHJpbmchKSB7XHJcblx0XHRyZW1vdmVTZWxsZXIoaWQ6ICRpZCkge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0bmFtZVxyXG5cdFx0XHRlbWFpbFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuY29uc3QgcmVtb3ZlQWRtaW5NdXRhdGlvbiA9IGdxbGBcclxuXHRtdXRhdGlvbiAoJGlkOiBTdHJpbmchKSB7XHJcblx0XHRyZW1vdmVBZG1pbihpZDogJGlkKSB7XHJcblx0XHRcdF9pZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdGVtYWlsXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgYWRkQm9va011dGF0aW9uID0gZ3FsYFxyXG5cdG11dGF0aW9uIChcclxuXHRcdCRpZDogU3RyaW5nXHJcblx0XHQkbmFtZTogU3RyaW5nXHJcblx0XHQkYXV0aG9yOiBTdHJpbmdcclxuXHRcdCRnZW5yZTogU3RyaW5nXHJcblx0XHQkcHJpY2U6IEludFxyXG5cdFx0JGFib3V0OiBTdHJpbmdcclxuXHRcdCRpbWFnZTogU3RyaW5nXHJcblx0XHQkdHlwZTogU3RyaW5nIVxyXG5cdFx0JHNlbGxlcklkOiBTdHJpbmdcclxuXHQpIHtcclxuXHRcdGFkZEJvb2soXHJcblx0XHRcdGlkOiAkaWRcclxuXHRcdFx0bmFtZTogJG5hbWVcclxuXHRcdFx0YXV0aG9yOiAkYXV0aG9yXHJcblx0XHRcdGdlbnJlOiAkZ2VucmVcclxuXHRcdFx0cHJpY2U6ICRwcmljZVxyXG5cdFx0XHRhYm91dDogJGFib3V0XHJcblx0XHRcdGltYWdlOiAkaW1hZ2VcclxuXHRcdFx0dHlwZTogJHR5cGVcclxuXHRcdFx0c2VsbGVySWQ6ICRzZWxsZXJJZFxyXG5cdFx0KSB7XHJcblx0XHRcdF9pZFxyXG5cdFx0XHRuYW1lXHJcblx0XHRcdHByaWNlXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2FydFF1ZXJ5ID0gZ3FsYFxyXG5cdHF1ZXJ5ICgkaWQ6IFN0cmluZyEpIHtcclxuXHRcdGNhcnQoaWQ6ICRpZCkge1xyXG5cdFx0XHRpdGVtIHtcclxuXHRcdFx0XHRfaWRcclxuXHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0aW1hZ2VcclxuXHRcdFx0XHRwcmljZVxyXG5cdFx0XHR9XHJcblx0XHRcdHF1YW50aXR5XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgY2hlY2tvdXRNdXRhdGlvbiA9IGdxbGBcclxuXHRtdXRhdGlvbiAoJGlkOiBTdHJpbmchKSB7XHJcblx0XHRjaGVja291dChpZDogJGlkKSB7XHJcblx0XHRcdG5hbWVcclxuXHRcdFx0ZW1haWxcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBhZGRUb0NhcnRNdXRhdGlvbiA9IGdxbGBcclxuXHRtdXRhdGlvbiAoXHJcblx0XHQkY3VzdG9tZXJJZDogU3RyaW5nIVxyXG5cdFx0JGJvb2tJZDogU3RyaW5nIVxyXG5cdFx0JHR5cGU6IFN0cmluZyFcclxuXHRcdCRxdWFudGl0eTogSW50XHJcblx0KSB7XHJcblx0XHRhZGRUb0NhcnQoXHJcblx0XHRcdGN1c3RvbWVySWQ6ICRjdXN0b21lcklkXHJcblx0XHRcdGJvb2tJZDogJGJvb2tJZFxyXG5cdFx0XHR0eXBlOiAkdHlwZVxyXG5cdFx0XHRxdWFudGl0eTogJHF1YW50aXR5XHJcblx0XHQpIHtcclxuXHRcdFx0aXRlbSB7XHJcblx0XHRcdFx0X2lkXHJcblx0XHRcdFx0bmFtZVxyXG5cdFx0XHRcdGltYWdlXHJcblx0XHRcdFx0cHJpY2VcclxuXHRcdFx0fVxyXG5cdFx0XHRxdWFudGl0eVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCB7XHJcblx0Z2V0Qm9va3NRdWVyeSxcclxuXHRib29rRGV0YWlsc1F1ZXJ5LFxyXG5cdGFkZEN1c3RvbWVyTXV0YXRpb24sXHJcblx0Z2V0Q2FydFF1ZXJ5LFxyXG5cdGFkZFRvQ2FydE11dGF0aW9uLFxyXG5cdGFkZEJvb2tNdXRhdGlvbixcclxuXHRnZXRQcm9kdWN0c1F1ZXJ5LFxyXG5cdGdldEN1c3RvbWVyc1F1ZXJ5LFxyXG5cdGdldFNlbGxlcnNRdWVyeSxcclxuXHRnZXRBbGxQcm9kdWN0c1F1ZXJ5LFxyXG5cdHJlbW92ZUN1c3RvbWVyTXV0YXRpb24sXHJcblx0cmVtb3ZlU2VsbGVyTXV0YXRpb24sXHJcblx0Y2hlY2tvdXRNdXRhdGlvbixcclxuXHRyZW1vdmVBZG1pbk11dGF0aW9uLFxyXG5cdGdldEFkbWluc1F1ZXJ5LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9