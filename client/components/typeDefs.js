const { gql } = require("@apollo/client");

const typeDefs = gql`
	type Book {
		_id: String
		name: String
		genre: String
		author: String
		image: String
		price: Int
		about: String
	}

	type Item {
		item: Book
		quantity: Int
	}

	type Customer {
		_id: String
		name: String
		email: String
		orders: [Item]
		cart: [Item]
	}

	type Seller {
		_id: String
		name: String
		email: String
		products: [Book]
	}

	type Admin {
		_id: String
		name: String
		email: String
	}

	type Query {
		books: [Book]
		book(id: String!): Book
		customers: [Customer]
		sellers: [Seller]
		admins: [Admin]
		seller(id: String!): Seller
		cart(id: String!): [Item]
		products(id: String!): [Book]
		allProducts: [Book]
	}

	type Mutation {
		addBook(
			id: String
			name: String
			genre: String
			author: String
			price: Int
			about: String
			image: String
			type: String!
			sellerId: String
		): Book
		addCustomer(
			name: String!
			password: String!
			email: String
			type: String!
			role: String!
		): Customer
		removeCustomer(id: String!): [Customer]
		removeSeller(id: String!): [Seller]
		removeAdmin(id: String!): [Admin]
		addToCart(
			customerId: String!
			bookId: String!
			type: String!
			quantity: Int
		): [Item]
		checkout(id: String!): Customer
	}
`;

module.exports = typeDefs;
