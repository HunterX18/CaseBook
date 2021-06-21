import { gql } from "@apollo/client";

const getBooksQuery = gql`
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

const bookDetailsQuery = gql`
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

const getCustomersQuery = gql`
	query {
		customers {
			_id
			name
			email
		}
	}
`;
const getSellersQuery = gql`
	query {
		sellers {
			_id
			name
			email
		}
	}
`;
const getAdminsQuery = gql`
	query {
		admins {
			_id
			name
			email
		}
	}
`;
const getAllProductsQuery = gql`
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

const getProductsQuery = gql`
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

const addCustomerMutation = gql`
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

const removeCustomerMutation = gql`
	mutation ($id: String!) {
		removeCustomer(id: $id) {
			_id
			name
			email
		}
	}
`;
const removeSellerMutation = gql`
	mutation ($id: String!) {
		removeSeller(id: $id) {
			_id
			name
			email
		}
	}
`;
const removeAdminMutation = gql`
	mutation ($id: String!) {
		removeAdmin(id: $id) {
			_id
			name
			email
		}
	}
`;

const addBookMutation = gql`
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

const getCartQuery = gql`
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

const checkoutMutation = gql`
	mutation ($id: String!) {
		checkout(id: $id) {
			name
			email
		}
	}
`;

const addToCartMutation = gql`
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

export {
	getBooksQuery,
	bookDetailsQuery,
	addCustomerMutation,
	getCartQuery,
	addToCartMutation,
	addBookMutation,
	getProductsQuery,
	getCustomersQuery,
	getSellersQuery,
	getAllProductsQuery,
	removeCustomerMutation,
	removeSellerMutation,
	checkoutMutation,
	removeAdminMutation,
	getAdminsQuery,
};
