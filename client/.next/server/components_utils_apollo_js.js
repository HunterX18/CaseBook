exports.id = "components_utils_apollo_js";
exports.ids = ["components_utils_apollo_js"];
exports.modules = {

/***/ "./components/models/admin.js":
/*!************************************!*\
  !*** ./components/models/admin.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ "mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const adminSchema = new Schema({
  name: String,
  email: String,
  password: String
});
module.exports = _mongoose.default.models.Admin || _mongoose.default.model("Admin", adminSchema);

/***/ }),

/***/ "./components/models/books.js":
/*!************************************!*\
  !*** ./components/models/books.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ "mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const {
  ObjectId
} = _mongoose.default.Schema.Types;
const bookSchema = new Schema({
  name: String,
  genre: String,
  author: String,
  image: String,
  price: Number,
  about: String,
  sellerId: {
    type: ObjectId,
    ref: "Seller"
  }
});
module.exports = _mongoose.default.models.Book || _mongoose.default.model("Book", bookSchema);

/***/ }),

/***/ "./components/models/customer.js":
/*!***************************************!*\
  !*** ./components/models/customer.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ "mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const {
  ObjectId
} = _mongoose.default.Schema.Types;
const customerSchema = new Schema({
  name: String,
  email: String,
  password: String,
  cart: [{
    item: {
      type: ObjectId,
      ref: "Book"
    },
    quantity: {
      type: Number,
      default: 1
    }
  }]
});
module.exports = _mongoose.default.models.Customer || _mongoose.default.model("Customer", customerSchema);

/***/ }),

/***/ "./components/models/seller.js":
/*!*************************************!*\
  !*** ./components/models/seller.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ "mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const {
  ObjectId
} = _mongoose.default.Schema.Types;
const sellerSchema = new Schema({
  name: String,
  email: String,
  password: String,
  products: [{
    type: ObjectId,
    ref: "Book"
  }]
});
module.exports = _mongoose.default.models.Seller || _mongoose.default.model("Seller", sellerSchema);

/***/ }),

/***/ "./components/resolvers.js":
/*!*********************************!*\
  !*** ./components/resolvers.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _bcrypt = _interopRequireDefault(__webpack_require__(/*! bcrypt */ "bcrypt"));

var _db = _interopRequireDefault(__webpack_require__(/*! ./utils/db */ "./components/utils/db.js"));

var _books = _interopRequireDefault(__webpack_require__(/*! ./models/books */ "./components/models/books.js"));

var _customer = _interopRequireDefault(__webpack_require__(/*! ./models/customer */ "./components/models/customer.js"));

var _seller = _interopRequireDefault(__webpack_require__(/*! ./models/seller */ "./components/models/seller.js"));

var _admin = _interopRequireDefault(__webpack_require__(/*! ./models/admin */ "./components/models/admin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _db.default)();
const resolvers = {
  Query: {
    books: () => {
      return _books.default.find();
    },
    book: (_, args) => {
      return _books.default.findById(args.id);
    },
    cart: async (_, args) => {
      const customer = await _customer.default.findById(args.id).populate("cart.item");
      return customer.cart;
    },
    products: async (_, args) => {
      const seller = await _seller.default.findById(args.id).populate("products");
      return seller.products;
    },
    seller: async (_, args) => {
      return await _seller.default.findById(args.id).populate("products");
    },
    customers: () => {
      return _customer.default.find();
    },
    admins: () => {
      return _admin.default.find();
    },
    sellers: () => {
      return _seller.default.find();
    },
    allProducts: () => {
      return _books.default.find();
    }
  },
  Mutation: {
    async addBook(_, args) {
      if (args.type == "ADD") {
        let book = new _books.default({
          name: args.name,
          genre: args.genre,
          author: args.author,
          image: args.image,
          price: args.price,
          about: args.about,
          sellerId: args.sellerId
        });
        book = await book.save(); // console.log(book);

        const seller = await _seller.default.findByIdAndUpdate(args.sellerId, {
          $push: {
            products: book._id
          }
        }, {
          new: true
        }); // console.log(seller);

        return book;
      } else {
        await _customer.default.update({}, {
          $pull: {
            cart: {
              item: args.id
            }
          }
        }, {
          new: true
        });
        const removedBook = await _books.default.findByIdAndRemove(args.id);
        const sellerId = removedBook.sellerId;
        await _seller.default.findByIdAndUpdate(sellerId, {
          $pull: {
            products: removedBook._id
          }
        }, {
          new: true
        });
        return removedBook;
      }
    },

    async addCustomer(_, {
      name,
      email,
      password,
      type,
      role
    }) {
      if (type == "signup") {
        if (role == "customer") {
          let savedCustomer = await _customer.default.find({
            name
          });
          savedCustomer = savedCustomer[0];
          if (savedCustomer !== undefined) return {
            Error: "Username not available"
          };
          const hashedPassword = await _bcrypt.default.hash(password, 8);
          const customer = new _customer.default({
            name,
            email,
            password: hashedPassword
          });
          return customer.save();
        } else if (role == "seller") {
          let savedSeller = await _seller.default.find({
            name
          });
          savedSeller = savedSeller[0];
          if (savedSeller !== undefined) return {
            Error: "Username not available"
          };
          const hashedPassword = await _bcrypt.default.hash(password, 8);
          const seller = new _seller.default({
            name,
            email,
            password: hashedPassword
          });
          return seller.save();
        } else {
          let savedAdmin = await _admin.default.find({
            name
          });
          savedAdmin = savedAdmin[0];
          if (savedAdmin !== undefined) return {
            Error: "Username not available"
          };
          const hashedPassword = await _bcrypt.default.hash(password, 8);
          const admin = new _admin.default({
            name,
            email,
            password: hashedPassword
          });
          return admin.save();
        }
      } else {
        if (role == "customer") {
          let savedCustomer = await _customer.default.find({
            name
          });
          savedCustomer = savedCustomer[0];

          if (savedCustomer == undefined) {
            throw new Error("No User Found");
          }

          const match = await _bcrypt.default.compare(password, savedCustomer.password);
          if (match) return savedCustomer;else throw new Error("Wrong Credentials");
        } else if (role == "seller") {
          let savedSeller = await _seller.default.find({
            name
          });
          savedSeller = savedSeller[0];

          if (savedSeller == undefined) {
            throw new Error("No User Found");
          }

          const match = await _bcrypt.default.compare(password, savedSeller.password);
          if (match) return savedSeller;else throw new Error("Wrong Credentials");
        } else {
          let savedAdmin = await _admin.default.find({
            name
          });
          savedAdmin = savedAdmin[0];

          if (savedAdmin == undefined) {
            throw new Error("No User Found");
          } // const match = await bcrypt.compare(password, savedAdmin.password);


          if (password == savedAdmin.password) return savedAdmin;else throw new Error("Wrong Credentials");
        }
      }
    },

    async addToCart(_, args) {
      if (args.type == "ADD") {
        const customer = await _customer.default.findByIdAndUpdate(args.customerId, {
          $push: {
            cart: {
              item: args.bookId
            }
          }
        }, {
          new: true
        }).populate("cart.item");
        return customer.cart;
      } else if (args.type == "REMOVE") {
        const customer = await _customer.default.findByIdAndUpdate(args.customerId, {
          $pull: {
            cart: {
              item: args.bookId
            }
          }
        }, {
          new: true
        }).populate("cart.item");
        return customer.cart;
      } else if (args.type == "CHANGE_QUANTITY") {
        const customer = await _customer.default.findById(args.customerId).populate("cart.item");
        const cart = customer.cart;
        const newCart = cart.map(({
          item,
          quantity
        }) => {
          if (item._id == args.bookId) {
            return {
              item,
              quantity: args.quantity
            };
          } else return {
            item,
            quantity
          };
        });
        await _customer.default.findByIdAndUpdate(args.customerId, {
          $set: {
            cart: newCart
          }
        }, {
          new: true
        });
        return newCart;
      }
    },

    async removeCustomer(_, args) {
      await _customer.default.findByIdAndRemove(args.id);
      return await _customer.default.find();
    },

    async removeSeller(_, args) {
      await _seller.default.findByIdAndRemove(args.id);
      return await _seller.default.find();
    },

    async removeAdmin(_, args) {
      await _admin.default.findByIdAndRemove(args.id);
      return await _admin.default.find();
    },

    async checkout(_, args) {
      const customer = await _customer.default.findByIdAndUpdate(args.id, {
        $set: {
          cart: []
        }
      });
      return customer;
    }

  }
};
module.exports = resolvers;

/***/ }),

/***/ "./components/typeDefs.js":
/*!********************************!*\
  !*** ./components/typeDefs.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  gql
} = __webpack_require__(/*! @apollo/client */ "@apollo/client");

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

/***/ }),

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

/***/ "./components/utils/db.js":
/*!********************************!*\
  !*** ./components/utils/db.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../keys */ "./keys.js");



const connect = () => {
  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) return;
  mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_keys__WEBPACK_IMPORTED_MODULE_1__.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("connected to database")).catch(err => console.log(err));
};

/* harmony default export */ __webpack_exports__["default"] = (connect);

/***/ }),

/***/ "./keys.js":
/*!*****************!*\
  !*** ./keys.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MONGO_URI": function() { return /* binding */ MONGO_URI; },
/* harmony export */   "secret_key": function() { return /* binding */ secret_key; }
/* harmony export */ });
const MONGO_URI = "mongodb+srv://me:me@cluster0.jskqd.mongodb.net/test?retryWrites=true&w=majority";
const secret_key = "secret_key";

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9hZG1pbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9ib29rcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9jdXN0b21lci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9zZWxsZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9yZXNvbHZlcnMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy90eXBlRGVmcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL2RiLmpzIiwid2VicGFjazovL2NsaWVudC8uL2tleXMuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJhZG1pblNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJlbWFpbCIsInBhc3N3b3JkIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIkFkbWluIiwibW9kZWwiLCJPYmplY3RJZCIsIlR5cGVzIiwiYm9va1NjaGVtYSIsImdlbnJlIiwiYXV0aG9yIiwiaW1hZ2UiLCJwcmljZSIsIk51bWJlciIsImFib3V0Iiwic2VsbGVySWQiLCJ0eXBlIiwicmVmIiwiQm9vayIsImN1c3RvbWVyU2NoZW1hIiwiY2FydCIsIml0ZW0iLCJxdWFudGl0eSIsImRlZmF1bHQiLCJDdXN0b21lciIsInNlbGxlclNjaGVtYSIsInByb2R1Y3RzIiwiU2VsbGVyIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJib29rcyIsImZpbmQiLCJib29rIiwiXyIsImFyZ3MiLCJmaW5kQnlJZCIsImlkIiwiY3VzdG9tZXIiLCJwb3B1bGF0ZSIsInNlbGxlciIsImN1c3RvbWVycyIsImFkbWlucyIsInNlbGxlcnMiLCJhbGxQcm9kdWN0cyIsIk11dGF0aW9uIiwiYWRkQm9vayIsInNhdmUiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIiRwdXNoIiwiX2lkIiwibmV3IiwidXBkYXRlIiwiJHB1bGwiLCJyZW1vdmVkQm9vayIsImZpbmRCeUlkQW5kUmVtb3ZlIiwiYWRkQ3VzdG9tZXIiLCJyb2xlIiwic2F2ZWRDdXN0b21lciIsInVuZGVmaW5lZCIsIkVycm9yIiwiaGFzaGVkUGFzc3dvcmQiLCJiY3J5cHQiLCJoYXNoIiwic2F2ZWRTZWxsZXIiLCJzYXZlZEFkbWluIiwiYWRtaW4iLCJtYXRjaCIsImNvbXBhcmUiLCJhZGRUb0NhcnQiLCJjdXN0b21lcklkIiwiYm9va0lkIiwibmV3Q2FydCIsIm1hcCIsIiRzZXQiLCJyZW1vdmVDdXN0b21lciIsInJlbW92ZVNlbGxlciIsInJlbW92ZUFkbWluIiwiY2hlY2tvdXQiLCJncWwiLCJyZXF1aXJlIiwidHlwZURlZnMiLCJhcG9sbG9DbGllbnQiLCJjcmVhdGVJc29tb3JwaGljTGluayIsIlNjaGVtYUxpbmsiLCJzY2hlbWEiLCJtYWtlRXhlY3V0YWJsZVNjaGVtYSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJjbGllbnQiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwic3RvcmUiLCJ1c2VNZW1vIiwiY29ubmVjdCIsIk1PTkdPX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJzZWNyZXRfa2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQSxNQUFNQSxNQUFNLEdBQUdDLGtCQUFTRCxNQUF4QjtBQUVBLE1BQU1FLFdBQVcsR0FBRyxJQUFJRixNQUFKLENBQVc7QUFDOUJHLE1BQUks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LEdBRHJCLEVBRUVDLElBRkYsQ0FFTyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixDQUZiLEVBR0VDLEtBSEYsQ0FHU0MsR0FBRCxJQUFTSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBWixDQUhqQjtBQUlBLENBTkQ7O0FBUUEsK0RBQWVSLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hPLE1BQU1DLFNBQVMsR0FDckIsaUZBRE07QUFHQSxNQUFNUSxVQUFVLEdBQUcsWUFBbkIsQyIsImZpbGUiOiJjb21wb25lbnRzX3V0aWxzX2Fwb2xsb19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5cclxuY29uc3QgYWRtaW5TY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuXHRuYW1lOiBTdHJpbmcsXHJcbiAgICBlbWFpbDogU3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IFN0cmluZyxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5BZG1pbiB8fCBtb25nb29zZS5tb2RlbChcIkFkbWluXCIsIGFkbWluU2NoZW1hKTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IG1vbmdvb3NlLlNjaGVtYS5UeXBlcztcclxuXHJcbmNvbnN0IGJvb2tTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuXHRuYW1lOiBTdHJpbmcsXHJcblx0Z2VucmU6IFN0cmluZyxcclxuXHRhdXRob3I6IFN0cmluZyxcclxuXHRpbWFnZTogU3RyaW5nLFxyXG5cdHByaWNlOiBOdW1iZXIsXHJcblx0YWJvdXQ6IFN0cmluZyxcclxuXHRzZWxsZXJJZDoge1xyXG5cdFx0dHlwZTogT2JqZWN0SWQsXHJcblx0XHRyZWY6IFwiU2VsbGVyXCIsXHJcblx0fSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Cb29rIHx8IG1vbmdvb3NlLm1vZGVsKFwiQm9va1wiLCBib29rU2NoZW1hKTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IG1vbmdvb3NlLlNjaGVtYS5UeXBlcztcclxuXHJcbmNvbnN0IGN1c3RvbWVyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcblx0bmFtZTogU3RyaW5nLFxyXG5cdGVtYWlsOiBTdHJpbmcsXHJcblx0cGFzc3dvcmQ6IFN0cmluZyxcclxuXHRjYXJ0OiBbXHJcblx0XHR7XHJcblx0XHRcdGl0ZW06IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3RJZCxcclxuXHRcdFx0XHRyZWY6IFwiQm9va1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRxdWFudGl0eToge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAxLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRdLFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuXHRtb25nb29zZS5tb2RlbHMuQ3VzdG9tZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJDdXN0b21lclwiLCBjdXN0b21lclNjaGVtYSk7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5jb25zdCB7IE9iamVjdElkIH0gPSBtb25nb29zZS5TY2hlbWEuVHlwZXM7XHJcblxyXG5jb25zdCBzZWxsZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuXHRuYW1lOiBTdHJpbmcsXHJcblx0ZW1haWw6IFN0cmluZyxcclxuXHRwYXNzd29yZDogU3RyaW5nLFxyXG5cdHByb2R1Y3RzOiBbXHJcblx0XHR7XHJcblx0XHRcdHR5cGU6IE9iamVjdElkLFxyXG5cdFx0XHRyZWY6IFwiQm9va1wiLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuXHRtb25nb29zZS5tb2RlbHMuU2VsbGVyIHx8IG1vbmdvb3NlLm1vZGVsKFwiU2VsbGVyXCIsIHNlbGxlclNjaGVtYSk7XHJcbiIsImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi91dGlscy9kYlwiO1xyXG5pbXBvcnQgQm9vayBmcm9tIFwiLi9tb2RlbHMvYm9va3NcIjtcclxuaW1wb3J0IEN1c3RvbWVyIGZyb20gXCIuL21vZGVscy9jdXN0b21lclwiO1xyXG5pbXBvcnQgU2VsbGVyIGZyb20gXCIuL21vZGVscy9zZWxsZXJcIjtcclxuaW1wb3J0IEFkbWluIGZyb20gXCIuL21vZGVscy9hZG1pblwiO1xyXG5cclxuY29ubmVjdCgpO1xyXG5jb25zdCByZXNvbHZlcnMgPSB7XHJcblx0UXVlcnk6IHtcclxuXHRcdGJvb2tzOiAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBCb29rLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0XHRib29rOiAoXywgYXJncykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gQm9vay5maW5kQnlJZChhcmdzLmlkKTtcclxuXHRcdH0sXHJcblx0XHRjYXJ0OiBhc3luYyAoXywgYXJncykgPT4ge1xyXG5cdFx0XHRjb25zdCBjdXN0b21lciA9IGF3YWl0IEN1c3RvbWVyLmZpbmRCeUlkKGFyZ3MuaWQpLnBvcHVsYXRlKFwiY2FydC5pdGVtXCIpO1xyXG5cdFx0XHRyZXR1cm4gY3VzdG9tZXIuY2FydDtcclxuXHRcdH0sXHJcblx0XHRwcm9kdWN0czogYXN5bmMgKF8sIGFyZ3MpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2VsbGVyID0gYXdhaXQgU2VsbGVyLmZpbmRCeUlkKGFyZ3MuaWQpLnBvcHVsYXRlKFwicHJvZHVjdHNcIik7XHJcblx0XHRcdHJldHVybiBzZWxsZXIucHJvZHVjdHM7XHJcblx0XHR9LFxyXG5cdFx0c2VsbGVyOiBhc3luYyAoXywgYXJncykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgU2VsbGVyLmZpbmRCeUlkKGFyZ3MuaWQpLnBvcHVsYXRlKFwicHJvZHVjdHNcIik7XHJcblx0XHR9LFxyXG5cdFx0Y3VzdG9tZXJzOiAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBDdXN0b21lci5maW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0YWRtaW5zOiAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBBZG1pbi5maW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0c2VsbGVyczogKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gU2VsbGVyLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0XHRhbGxQcm9kdWN0czogKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gQm9vay5maW5kKCk7XHJcblx0XHR9LFxyXG5cdH0sXHJcblx0TXV0YXRpb246IHtcclxuXHRcdGFzeW5jIGFkZEJvb2soXywgYXJncykge1xyXG5cdFx0XHRpZiAoYXJncy50eXBlID09IFwiQUREXCIpIHtcclxuXHRcdFx0XHRsZXQgYm9vayA9IG5ldyBCb29rKHtcclxuXHRcdFx0XHRcdG5hbWU6IGFyZ3MubmFtZSxcclxuXHRcdFx0XHRcdGdlbnJlOiBhcmdzLmdlbnJlLFxyXG5cdFx0XHRcdFx0YXV0aG9yOiBhcmdzLmF1dGhvcixcclxuXHRcdFx0XHRcdGltYWdlOiBhcmdzLmltYWdlLFxyXG5cdFx0XHRcdFx0cHJpY2U6IGFyZ3MucHJpY2UsXHJcblx0XHRcdFx0XHRhYm91dDogYXJncy5hYm91dCxcclxuXHRcdFx0XHRcdHNlbGxlcklkOiBhcmdzLnNlbGxlcklkLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGJvb2sgPSBhd2FpdCBib29rLnNhdmUoKTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhib29rKTtcclxuXHRcdFx0XHRjb25zdCBzZWxsZXIgPSBhd2FpdCBTZWxsZXIuZmluZEJ5SWRBbmRVcGRhdGUoXHJcblx0XHRcdFx0XHRhcmdzLnNlbGxlcklkLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQkcHVzaDogeyBwcm9kdWN0czogYm9vay5faWQgfSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7IG5ldzogdHJ1ZSB9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzZWxsZXIpO1xyXG5cdFx0XHRcdHJldHVybiBib29rO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF3YWl0IEN1c3RvbWVyLnVwZGF0ZShcclxuXHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQkcHVsbDoge1xyXG5cdFx0XHRcdFx0XHRcdGNhcnQ6IHsgaXRlbTogYXJncy5pZCB9LFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHsgbmV3OiB0cnVlIH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNvbnN0IHJlbW92ZWRCb29rID0gYXdhaXQgQm9vay5maW5kQnlJZEFuZFJlbW92ZShhcmdzLmlkKTtcclxuXHRcdFx0XHRjb25zdCBzZWxsZXJJZCA9IHJlbW92ZWRCb29rLnNlbGxlcklkO1xyXG5cdFx0XHRcdGF3YWl0IFNlbGxlci5maW5kQnlJZEFuZFVwZGF0ZShcclxuXHRcdFx0XHRcdHNlbGxlcklkLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQkcHVsbDogeyBwcm9kdWN0czogcmVtb3ZlZEJvb2suX2lkIH0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eyBuZXc6IHRydWUgfVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0cmV0dXJuIHJlbW92ZWRCb29rO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgYWRkQ3VzdG9tZXIoXywgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHR5cGUsIHJvbGUgfSkge1xyXG5cdFx0XHRpZiAodHlwZSA9PSBcInNpZ251cFwiKSB7XHJcblx0XHRcdFx0aWYgKHJvbGUgPT0gXCJjdXN0b21lclwiKSB7XHJcblx0XHRcdFx0XHRsZXQgc2F2ZWRDdXN0b21lciA9IGF3YWl0IEN1c3RvbWVyLmZpbmQoeyBuYW1lIH0pO1xyXG5cdFx0XHRcdFx0c2F2ZWRDdXN0b21lciA9IHNhdmVkQ3VzdG9tZXJbMF07XHJcblx0XHRcdFx0XHRpZiAoc2F2ZWRDdXN0b21lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4geyBFcnJvcjogXCJVc2VybmFtZSBub3QgYXZhaWxhYmxlXCIgfTtcclxuXHRcdFx0XHRcdGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDgpO1xyXG5cdFx0XHRcdFx0Y29uc3QgY3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIoe1xyXG5cdFx0XHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdFx0XHRlbWFpbCxcclxuXHRcdFx0XHRcdFx0cGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VzdG9tZXIuc2F2ZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocm9sZSA9PSBcInNlbGxlclwiKSB7XHJcblx0XHRcdFx0XHRsZXQgc2F2ZWRTZWxsZXIgPSBhd2FpdCBTZWxsZXIuZmluZCh7IG5hbWUgfSk7XHJcblx0XHRcdFx0XHRzYXZlZFNlbGxlciA9IHNhdmVkU2VsbGVyWzBdO1xyXG5cdFx0XHRcdFx0aWYgKHNhdmVkU2VsbGVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdHJldHVybiB7IEVycm9yOiBcIlVzZXJuYW1lIG5vdCBhdmFpbGFibGVcIiB9O1xyXG5cdFx0XHRcdFx0Y29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgOCk7XHJcblx0XHRcdFx0XHRjb25zdCBzZWxsZXIgPSBuZXcgU2VsbGVyKHtcclxuXHRcdFx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRcdFx0ZW1haWwsXHJcblx0XHRcdFx0XHRcdHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNlbGxlci5zYXZlKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBzYXZlZEFkbWluID0gYXdhaXQgQWRtaW4uZmluZCh7IG5hbWUgfSk7XHJcblx0XHRcdFx0XHRzYXZlZEFkbWluID0gc2F2ZWRBZG1pblswXTtcclxuXHRcdFx0XHRcdGlmIChzYXZlZEFkbWluICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdHJldHVybiB7IEVycm9yOiBcIlVzZXJuYW1lIG5vdCBhdmFpbGFibGVcIiB9O1xyXG5cdFx0XHRcdFx0Y29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgOCk7XHJcblx0XHRcdFx0XHRjb25zdCBhZG1pbiA9IG5ldyBBZG1pbih7XHJcblx0XHRcdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0XHRcdGVtYWlsLFxyXG5cdFx0XHRcdFx0XHRwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybiBhZG1pbi5zYXZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChyb2xlID09IFwiY3VzdG9tZXJcIikge1xyXG5cdFx0XHRcdFx0bGV0IHNhdmVkQ3VzdG9tZXIgPSBhd2FpdCBDdXN0b21lci5maW5kKHsgbmFtZSB9KTtcclxuXHRcdFx0XHRcdHNhdmVkQ3VzdG9tZXIgPSBzYXZlZEN1c3RvbWVyWzBdO1xyXG5cdFx0XHRcdFx0aWYgKHNhdmVkQ3VzdG9tZXIgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIFVzZXIgRm91bmRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zdCBtYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBzYXZlZEN1c3RvbWVyLnBhc3N3b3JkKTtcclxuXHRcdFx0XHRcdGlmIChtYXRjaCkgcmV0dXJuIHNhdmVkQ3VzdG9tZXI7XHJcblx0XHRcdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIldyb25nIENyZWRlbnRpYWxzXCIpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocm9sZSA9PSBcInNlbGxlclwiKSB7XHJcblx0XHRcdFx0XHRsZXQgc2F2ZWRTZWxsZXIgPSBhd2FpdCBTZWxsZXIuZmluZCh7IG5hbWUgfSk7XHJcblx0XHRcdFx0XHRzYXZlZFNlbGxlciA9IHNhdmVkU2VsbGVyWzBdO1xyXG5cdFx0XHRcdFx0aWYgKHNhdmVkU2VsbGVyID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyBVc2VyIEZvdW5kXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3QgbWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgc2F2ZWRTZWxsZXIucGFzc3dvcmQpO1xyXG5cdFx0XHRcdFx0aWYgKG1hdGNoKSByZXR1cm4gc2F2ZWRTZWxsZXI7XHJcblx0XHRcdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIldyb25nIENyZWRlbnRpYWxzXCIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgc2F2ZWRBZG1pbiA9IGF3YWl0IEFkbWluLmZpbmQoeyBuYW1lIH0pO1xyXG5cdFx0XHRcdFx0c2F2ZWRBZG1pbiA9IHNhdmVkQWRtaW5bMF07XHJcblx0XHRcdFx0XHRpZiAoc2F2ZWRBZG1pbiA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gVXNlciBGb3VuZFwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGNvbnN0IG1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHNhdmVkQWRtaW4ucGFzc3dvcmQpO1xyXG5cdFx0XHRcdFx0aWYgKHBhc3N3b3JkID09IHNhdmVkQWRtaW4ucGFzc3dvcmQpIHJldHVybiBzYXZlZEFkbWluO1xyXG5cdFx0XHRcdFx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBDcmVkZW50aWFsc1wiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRhc3luYyBhZGRUb0NhcnQoXywgYXJncykge1xyXG5cdFx0XHRpZiAoYXJncy50eXBlID09IFwiQUREXCIpIHtcclxuXHRcdFx0XHRjb25zdCBjdXN0b21lciA9IGF3YWl0IEN1c3RvbWVyLmZpbmRCeUlkQW5kVXBkYXRlKFxyXG5cdFx0XHRcdFx0YXJncy5jdXN0b21lcklkLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQkcHVzaDogeyBjYXJ0OiB7IGl0ZW06IGFyZ3MuYm9va0lkIH0gfSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7IG5ldzogdHJ1ZSB9XHJcblx0XHRcdFx0KS5wb3B1bGF0ZShcImNhcnQuaXRlbVwiKTtcclxuXHRcdFx0XHRyZXR1cm4gY3VzdG9tZXIuY2FydDtcclxuXHRcdFx0fSBlbHNlIGlmIChhcmdzLnR5cGUgPT0gXCJSRU1PVkVcIikge1xyXG5cdFx0XHRcdGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgQ3VzdG9tZXIuZmluZEJ5SWRBbmRVcGRhdGUoXHJcblx0XHRcdFx0XHRhcmdzLmN1c3RvbWVySWQsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCRwdWxsOiB7IGNhcnQ6IHsgaXRlbTogYXJncy5ib29rSWQgfSB9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHsgbmV3OiB0cnVlIH1cclxuXHRcdFx0XHQpLnBvcHVsYXRlKFwiY2FydC5pdGVtXCIpO1xyXG5cdFx0XHRcdHJldHVybiBjdXN0b21lci5jYXJ0O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFyZ3MudHlwZSA9PSBcIkNIQU5HRV9RVUFOVElUWVwiKSB7XHJcblx0XHRcdFx0Y29uc3QgY3VzdG9tZXIgPSBhd2FpdCBDdXN0b21lci5maW5kQnlJZChhcmdzLmN1c3RvbWVySWQpLnBvcHVsYXRlKFxyXG5cdFx0XHRcdFx0XCJjYXJ0Lml0ZW1cIlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29uc3QgY2FydCA9IGN1c3RvbWVyLmNhcnQ7XHJcblx0XHRcdFx0Y29uc3QgbmV3Q2FydCA9IGNhcnQubWFwKCh7IGl0ZW0sIHF1YW50aXR5IH0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChpdGVtLl9pZCA9PSBhcmdzLmJvb2tJZCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4geyBpdGVtLCBxdWFudGl0eTogYXJncy5xdWFudGl0eSB9O1xyXG5cdFx0XHRcdFx0fSBlbHNlIHJldHVybiB7IGl0ZW0sIHF1YW50aXR5IH07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YXdhaXQgQ3VzdG9tZXIuZmluZEJ5SWRBbmRVcGRhdGUoXHJcblx0XHRcdFx0XHRhcmdzLmN1c3RvbWVySWQsXHJcblx0XHRcdFx0XHR7ICRzZXQ6IHsgY2FydDogbmV3Q2FydCB9IH0sXHJcblx0XHRcdFx0XHR7IG5ldzogdHJ1ZSB9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRyZXR1cm4gbmV3Q2FydDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIHJlbW92ZUN1c3RvbWVyKF8sIGFyZ3MpIHtcclxuXHRcdFx0YXdhaXQgQ3VzdG9tZXIuZmluZEJ5SWRBbmRSZW1vdmUoYXJncy5pZCk7XHJcblx0XHRcdHJldHVybiBhd2FpdCBDdXN0b21lci5maW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgcmVtb3ZlU2VsbGVyKF8sIGFyZ3MpIHtcclxuXHRcdFx0YXdhaXQgU2VsbGVyLmZpbmRCeUlkQW5kUmVtb3ZlKGFyZ3MuaWQpO1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgU2VsbGVyLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0XHRhc3luYyByZW1vdmVBZG1pbihfLCBhcmdzKSB7XHJcblx0XHRcdGF3YWl0IEFkbWluLmZpbmRCeUlkQW5kUmVtb3ZlKGFyZ3MuaWQpO1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgQWRtaW4uZmluZCgpO1xyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGNoZWNrb3V0KF8sIGFyZ3MpIHtcclxuXHRcdFx0Y29uc3QgY3VzdG9tZXIgPSBhd2FpdCBDdXN0b21lci5maW5kQnlJZEFuZFVwZGF0ZShhcmdzLmlkLCB7XHJcblx0XHRcdFx0JHNldDogeyBjYXJ0OiBbXSB9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGN1c3RvbWVyO1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXNvbHZlcnM7XHJcbiIsImNvbnN0IHsgZ3FsIH0gPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7XHJcblxyXG5jb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuXHR0eXBlIEJvb2sge1xyXG5cdFx0X2lkOiBTdHJpbmdcclxuXHRcdG5hbWU6IFN0cmluZ1xyXG5cdFx0Z2VucmU6IFN0cmluZ1xyXG5cdFx0YXV0aG9yOiBTdHJpbmdcclxuXHRcdGltYWdlOiBTdHJpbmdcclxuXHRcdHByaWNlOiBJbnRcclxuXHRcdGFib3V0OiBTdHJpbmdcclxuXHR9XHJcblxyXG5cdHR5cGUgSXRlbSB7XHJcblx0XHRpdGVtOiBCb29rXHJcblx0XHRxdWFudGl0eTogSW50XHJcblx0fVxyXG5cclxuXHR0eXBlIEN1c3RvbWVyIHtcclxuXHRcdF9pZDogU3RyaW5nXHJcblx0XHRuYW1lOiBTdHJpbmdcclxuXHRcdGVtYWlsOiBTdHJpbmdcclxuXHRcdG9yZGVyczogW0l0ZW1dXHJcblx0XHRjYXJ0OiBbSXRlbV1cclxuXHR9XHJcblxyXG5cdHR5cGUgU2VsbGVyIHtcclxuXHRcdF9pZDogU3RyaW5nXHJcblx0XHRuYW1lOiBTdHJpbmdcclxuXHRcdGVtYWlsOiBTdHJpbmdcclxuXHRcdHByb2R1Y3RzOiBbQm9va11cclxuXHR9XHJcblxyXG5cdHR5cGUgQWRtaW4ge1xyXG5cdFx0X2lkOiBTdHJpbmdcclxuXHRcdG5hbWU6IFN0cmluZ1xyXG5cdFx0ZW1haWw6IFN0cmluZ1xyXG5cdH1cclxuXHJcblx0dHlwZSBRdWVyeSB7XHJcblx0XHRib29rczogW0Jvb2tdXHJcblx0XHRib29rKGlkOiBTdHJpbmchKTogQm9va1xyXG5cdFx0Y3VzdG9tZXJzOiBbQ3VzdG9tZXJdXHJcblx0XHRzZWxsZXJzOiBbU2VsbGVyXVxyXG5cdFx0YWRtaW5zOiBbQWRtaW5dXHJcblx0XHRzZWxsZXIoaWQ6IFN0cmluZyEpOiBTZWxsZXJcclxuXHRcdGNhcnQoaWQ6IFN0cmluZyEpOiBbSXRlbV1cclxuXHRcdHByb2R1Y3RzKGlkOiBTdHJpbmchKTogW0Jvb2tdXHJcblx0XHRhbGxQcm9kdWN0czogW0Jvb2tdXHJcblx0fVxyXG5cclxuXHR0eXBlIE11dGF0aW9uIHtcclxuXHRcdGFkZEJvb2soXHJcblx0XHRcdGlkOiBTdHJpbmdcclxuXHRcdFx0bmFtZTogU3RyaW5nXHJcblx0XHRcdGdlbnJlOiBTdHJpbmdcclxuXHRcdFx0YXV0aG9yOiBTdHJpbmdcclxuXHRcdFx0cHJpY2U6IEludFxyXG5cdFx0XHRhYm91dDogU3RyaW5nXHJcblx0XHRcdGltYWdlOiBTdHJpbmdcclxuXHRcdFx0dHlwZTogU3RyaW5nIVxyXG5cdFx0XHRzZWxsZXJJZDogU3RyaW5nXHJcblx0XHQpOiBCb29rXHJcblx0XHRhZGRDdXN0b21lcihcclxuXHRcdFx0bmFtZTogU3RyaW5nIVxyXG5cdFx0XHRwYXNzd29yZDogU3RyaW5nIVxyXG5cdFx0XHRlbWFpbDogU3RyaW5nXHJcblx0XHRcdHR5cGU6IFN0cmluZyFcclxuXHRcdFx0cm9sZTogU3RyaW5nIVxyXG5cdFx0KTogQ3VzdG9tZXJcclxuXHRcdHJlbW92ZUN1c3RvbWVyKGlkOiBTdHJpbmchKTogW0N1c3RvbWVyXVxyXG5cdFx0cmVtb3ZlU2VsbGVyKGlkOiBTdHJpbmchKTogW1NlbGxlcl1cclxuXHRcdHJlbW92ZUFkbWluKGlkOiBTdHJpbmchKTogW0FkbWluXVxyXG5cdFx0YWRkVG9DYXJ0KFxyXG5cdFx0XHRjdXN0b21lcklkOiBTdHJpbmchXHJcblx0XHRcdGJvb2tJZDogU3RyaW5nIVxyXG5cdFx0XHR0eXBlOiBTdHJpbmchXHJcblx0XHRcdHF1YW50aXR5OiBJbnRcclxuXHRcdCk6IFtJdGVtXVxyXG5cdFx0Y2hlY2tvdXQoaWQ6IFN0cmluZyEpOiBDdXN0b21lclxyXG5cdH1cclxuYDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdHlwZURlZnM7XHJcbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBtYWtlRXhlY3V0YWJsZVNjaGVtYSB9IGZyb20gXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIjtcclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxubGV0IGFwb2xsb0NsaWVudDtcclxuXHJcbmNvbnN0IGNyZWF0ZUlzb21vcnBoaWNMaW5rID0gKCkgPT4ge1xyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHQvLyBzZXJ2ZXJcclxuXHRcdGNvbnN0IHsgU2NoZW1hTGluayB9ID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvc2NoZW1hXCIpO1xyXG5cdFx0Y29uc3QgdHlwZURlZnMgPSByZXF1aXJlKFwiLi4vdHlwZURlZnNcIik7XHJcblx0XHRjb25zdCByZXNvbHZlcnMgPSByZXF1aXJlKFwiLi4vcmVzb2x2ZXJzXCIpO1xyXG5cdFx0Y29uc3Qgc2NoZW1hID0gbWFrZUV4ZWN1dGFibGVTY2hlbWEoeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH0pO1xyXG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFMaW5rKHsgc2NoZW1hIH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBjbGllbnRcclxuXHRcdGNvbnN0IHsgSHR0cExpbmsgfSA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL2h0dHBcIik7XHJcblx0XHRyZXR1cm4gbmV3IEh0dHBMaW5rKHsgdXJpOiBcIi9hcGkvZ3JhcGhxbFwiIH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVBcG9sbG9DbGllbnQgPSAoKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG5cdFx0c3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIixcclxuXHRcdGxpbms6IGNyZWF0ZUlzb21vcnBoaWNMaW5rKCksXHJcblx0XHRjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQXBvbGxvID0gKGluaXRpYWxTdGF0ZSA9IG51bGwpID0+IHtcclxuXHRjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xyXG5cdGlmIChpbml0aWFsU3RhdGUpIHtcclxuXHRcdF9hcG9sbG9DbGllbnQuY2xpZW50LnJlc3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuXHR9XHJcblxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxuXHJcblx0YXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IF9hcG9sbG9DbGllbnQ7XHJcblx0cmV0dXJuIGFwb2xsb0NsaWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcG9sbG8gPSAoaW5pdGlhbFN0YXRlKSA9PiB7XHJcblx0Y29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xyXG5cdHJldHVybiBzdG9yZTtcclxufTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBNT05HT19VUkkgfSBmcm9tIFwiLi4vLi4va2V5c1wiO1xyXG5cclxuY29uc3QgY29ubmVjdCA9ICgpID0+IHtcclxuXHRpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuO1xyXG5cdG1vbmdvb3NlXHJcblx0XHQuY29ubmVjdChNT05HT19VUkksIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUgfSlcclxuXHRcdC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiY29ubmVjdGVkIHRvIGRhdGFiYXNlXCIpKVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDtcclxuIiwiZXhwb3J0IGNvbnN0IE1PTkdPX1VSSSA9XHJcblx0XCJtb25nb2RiK3NydjovL21lOm1lQGNsdXN0ZXIwLmpza3FkLm1vbmdvZGIubmV0L3Rlc3Q/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VjcmV0X2tleSA9IFwic2VjcmV0X2tleVwiO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9