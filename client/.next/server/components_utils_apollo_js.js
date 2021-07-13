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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9hZG1pbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9ib29rcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9jdXN0b21lci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9zZWxsZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9yZXNvbHZlcnMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy90eXBlRGVmcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL2RiLmpzIiwid2VicGFjazovL2NsaWVudC8uL2tleXMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2lnbm9yZWR8QzpcXFVzZXJzXFxzcnNhaFxcRGVza3RvcFxcQ2FzZUJvb2tcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiYWRtaW5TY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiZW1haWwiLCJwYXNzd29yZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJBZG1pbiIsIm1vZGVsIiwiT2JqZWN0SWQiLCJUeXBlcyIsImJvb2tTY2hlbWEiLCJnZW5yZSIsImF1dGhvciIsImltYWdlIiwicHJpY2UiLCJOdW1iZXIiLCJhYm91dCIsInNlbGxlcklkIiwidHlwZSIsInJlZiIsIkJvb2siLCJjdXN0b21lclNjaGVtYSIsImNhcnQiLCJpdGVtIiwicXVhbnRpdHkiLCJkZWZhdWx0IiwiQ3VzdG9tZXIiLCJzZWxsZXJTY2hlbWEiLCJwcm9kdWN0cyIsIlNlbGxlciIsInJlc29sdmVycyIsIlF1ZXJ5IiwiYm9va3MiLCJmaW5kIiwiYm9vayIsIl8iLCJhcmdzIiwiZmluZEJ5SWQiLCJpZCIsImN1c3RvbWVyIiwicG9wdWxhdGUiLCJzZWxsZXIiLCJjdXN0b21lcnMiLCJhZG1pbnMiLCJzZWxsZXJzIiwiYWxsUHJvZHVjdHMiLCJNdXRhdGlvbiIsImFkZEJvb2siLCJzYXZlIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCIkcHVzaCIsIl9pZCIsIm5ldyIsInVwZGF0ZSIsIiRwdWxsIiwicmVtb3ZlZEJvb2siLCJmaW5kQnlJZEFuZFJlbW92ZSIsImFkZEN1c3RvbWVyIiwicm9sZSIsInNhdmVkQ3VzdG9tZXIiLCJ1bmRlZmluZWQiLCJFcnJvciIsImhhc2hlZFBhc3N3b3JkIiwiYmNyeXB0IiwiaGFzaCIsInNhdmVkU2VsbGVyIiwic2F2ZWRBZG1pbiIsImFkbWluIiwibWF0Y2giLCJjb21wYXJlIiwiYWRkVG9DYXJ0IiwiY3VzdG9tZXJJZCIsImJvb2tJZCIsIm5ld0NhcnQiLCJtYXAiLCIkc2V0IiwicmVtb3ZlQ3VzdG9tZXIiLCJyZW1vdmVTZWxsZXIiLCJyZW1vdmVBZG1pbiIsImNoZWNrb3V0IiwiZ3FsIiwicmVxdWlyZSIsInR5cGVEZWZzIiwiYXBvbGxvQ2xpZW50IiwiY3JlYXRlSXNvbW9ycGhpY0xpbmsiLCJTY2hlbWFMaW5rIiwic2NoZW1hIiwibWFrZUV4ZWN1dGFibGVTY2hlbWEiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiY2xpZW50IiwicmVzdG9yZSIsInVzZUFwb2xsbyIsInN0b3JlIiwidXNlTWVtbyIsImNvbm5lY3QiLCJNT05HT19VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiY29uc29sZSIsImxv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Ozs7Ozs7QUN6Q1A7QUFDQTs7QUFFQSxNQUFNRSxPQUFPLEdBQUcsTUFBTTtBQUNyQixNQUFJekcsMkVBQUosRUFBd0M7QUFDeENBLHlEQUFBLENBQ1UwRyw0Q0FEVixFQUNxQjtBQUFFQyxtQkFBZSxFQUFFLElBQW5CO0FBQXlCQyxzQkFBa0IsRUFBRTtBQUE3QyxHQURyQixFQUVFQyxJQUZGLENBRU8sTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosQ0FGYixFQUdFQyxLQUhGLENBR1NDLEdBQUQsSUFBU0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVosQ0FIakI7QUFJQSxDQU5EOztBQVFBLCtEQUFlUixPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTyxNQUFNQyxTQUFTLEdBQ3JCLGlGQURNO0FBR0EsTUFBTVEsVUFBVSxHQUFHLFlBQW5CLEM7Ozs7Ozs7Ozs7QUNIUCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfdXRpbHNfYXBvbGxvX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcblxyXG5jb25zdCBhZG1pblNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG5cdG5hbWU6IFN0cmluZyxcclxuICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICBwYXNzd29yZDogU3RyaW5nLFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLkFkbWluIHx8IG1vbmdvb3NlLm1vZGVsKFwiQWRtaW5cIiwgYWRtaW5TY2hlbWEpO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgeyBPYmplY3RJZCB9ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzO1xyXG5cclxuY29uc3QgYm9va1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG5cdG5hbWU6IFN0cmluZyxcclxuXHRnZW5yZTogU3RyaW5nLFxyXG5cdGF1dGhvcjogU3RyaW5nLFxyXG5cdGltYWdlOiBTdHJpbmcsXHJcblx0cHJpY2U6IE51bWJlcixcclxuXHRhYm91dDogU3RyaW5nLFxyXG5cdHNlbGxlcklkOiB7XHJcblx0XHR0eXBlOiBPYmplY3RJZCxcclxuXHRcdHJlZjogXCJTZWxsZXJcIixcclxuXHR9LFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLkJvb2sgfHwgbW9uZ29vc2UubW9kZWwoXCJCb29rXCIsIGJvb2tTY2hlbWEpO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgeyBPYmplY3RJZCB9ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzO1xyXG5cclxuY29uc3QgY3VzdG9tZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuXHRuYW1lOiBTdHJpbmcsXHJcblx0ZW1haWw6IFN0cmluZyxcclxuXHRwYXNzd29yZDogU3RyaW5nLFxyXG5cdGNhcnQ6IFtcclxuXHRcdHtcclxuXHRcdFx0aXRlbToge1xyXG5cdFx0XHRcdHR5cGU6IE9iamVjdElkLFxyXG5cdFx0XHRcdHJlZjogXCJCb29rXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHF1YW50aXR5OiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDEsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdF0sXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPVxyXG5cdG1vbmdvb3NlLm1vZGVscy5DdXN0b21lciB8fCBtb25nb29zZS5tb2RlbChcIkN1c3RvbWVyXCIsIGN1c3RvbWVyU2NoZW1hKTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IG1vbmdvb3NlLlNjaGVtYS5UeXBlcztcclxuXHJcbmNvbnN0IHNlbGxlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG5cdG5hbWU6IFN0cmluZyxcclxuXHRlbWFpbDogU3RyaW5nLFxyXG5cdHBhc3N3b3JkOiBTdHJpbmcsXHJcblx0cHJvZHVjdHM6IFtcclxuXHRcdHtcclxuXHRcdFx0dHlwZTogT2JqZWN0SWQsXHJcblx0XHRcdHJlZjogXCJCb29rXCIsXHJcblx0XHR9LFxyXG5cdF0sXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPVxyXG5cdG1vbmdvb3NlLm1vZGVscy5TZWxsZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJTZWxsZXJcIiwgc2VsbGVyU2NoZW1hKTtcclxuIiwiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcbmltcG9ydCBjb25uZWN0IGZyb20gXCIuL3V0aWxzL2RiXCI7XHJcbmltcG9ydCBCb29rIGZyb20gXCIuL21vZGVscy9ib29rc1wiO1xyXG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSBcIi4vbW9kZWxzL2N1c3RvbWVyXCI7XHJcbmltcG9ydCBTZWxsZXIgZnJvbSBcIi4vbW9kZWxzL3NlbGxlclwiO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSBcIi4vbW9kZWxzL2FkbWluXCI7XHJcblxyXG5jb25uZWN0KCk7XHJcbmNvbnN0IHJlc29sdmVycyA9IHtcclxuXHRRdWVyeToge1xyXG5cdFx0Ym9va3M6ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIEJvb2suZmluZCgpO1xyXG5cdFx0fSxcclxuXHRcdGJvb2s6IChfLCBhcmdzKSA9PiB7XHJcblx0XHRcdHJldHVybiBCb29rLmZpbmRCeUlkKGFyZ3MuaWQpO1xyXG5cdFx0fSxcclxuXHRcdGNhcnQ6IGFzeW5jIChfLCBhcmdzKSA9PiB7XHJcblx0XHRcdGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgQ3VzdG9tZXIuZmluZEJ5SWQoYXJncy5pZCkucG9wdWxhdGUoXCJjYXJ0Lml0ZW1cIik7XHJcblx0XHRcdHJldHVybiBjdXN0b21lci5jYXJ0O1xyXG5cdFx0fSxcclxuXHRcdHByb2R1Y3RzOiBhc3luYyAoXywgYXJncykgPT4ge1xyXG5cdFx0XHRjb25zdCBzZWxsZXIgPSBhd2FpdCBTZWxsZXIuZmluZEJ5SWQoYXJncy5pZCkucG9wdWxhdGUoXCJwcm9kdWN0c1wiKTtcclxuXHRcdFx0cmV0dXJuIHNlbGxlci5wcm9kdWN0cztcclxuXHRcdH0sXHJcblx0XHRzZWxsZXI6IGFzeW5jIChfLCBhcmdzKSA9PiB7XHJcblx0XHRcdHJldHVybiBhd2FpdCBTZWxsZXIuZmluZEJ5SWQoYXJncy5pZCkucG9wdWxhdGUoXCJwcm9kdWN0c1wiKTtcclxuXHRcdH0sXHJcblx0XHRjdXN0b21lcnM6ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIEN1c3RvbWVyLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0XHRhZG1pbnM6ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIEFkbWluLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0XHRzZWxsZXJzOiAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBTZWxsZXIuZmluZCgpO1xyXG5cdFx0fSxcclxuXHRcdGFsbFByb2R1Y3RzOiAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBCb29rLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0fSxcclxuXHRNdXRhdGlvbjoge1xyXG5cdFx0YXN5bmMgYWRkQm9vayhfLCBhcmdzKSB7XHJcblx0XHRcdGlmIChhcmdzLnR5cGUgPT0gXCJBRERcIikge1xyXG5cdFx0XHRcdGxldCBib29rID0gbmV3IEJvb2soe1xyXG5cdFx0XHRcdFx0bmFtZTogYXJncy5uYW1lLFxyXG5cdFx0XHRcdFx0Z2VucmU6IGFyZ3MuZ2VucmUsXHJcblx0XHRcdFx0XHRhdXRob3I6IGFyZ3MuYXV0aG9yLFxyXG5cdFx0XHRcdFx0aW1hZ2U6IGFyZ3MuaW1hZ2UsXHJcblx0XHRcdFx0XHRwcmljZTogYXJncy5wcmljZSxcclxuXHRcdFx0XHRcdGFib3V0OiBhcmdzLmFib3V0LFxyXG5cdFx0XHRcdFx0c2VsbGVySWQ6IGFyZ3Muc2VsbGVySWQsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ym9vayA9IGF3YWl0IGJvb2suc2F2ZSgpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGJvb2spO1xyXG5cdFx0XHRcdGNvbnN0IHNlbGxlciA9IGF3YWl0IFNlbGxlci5maW5kQnlJZEFuZFVwZGF0ZShcclxuXHRcdFx0XHRcdGFyZ3Muc2VsbGVySWQsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCRwdXNoOiB7IHByb2R1Y3RzOiBib29rLl9pZCB9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHsgbmV3OiB0cnVlIH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHNlbGxlcik7XHJcblx0XHRcdFx0cmV0dXJuIGJvb2s7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXdhaXQgQ3VzdG9tZXIudXBkYXRlKFxyXG5cdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCRwdWxsOiB7XHJcblx0XHRcdFx0XHRcdFx0Y2FydDogeyBpdGVtOiBhcmdzLmlkIH0sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eyBuZXc6IHRydWUgfVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29uc3QgcmVtb3ZlZEJvb2sgPSBhd2FpdCBCb29rLmZpbmRCeUlkQW5kUmVtb3ZlKGFyZ3MuaWQpO1xyXG5cdFx0XHRcdGNvbnN0IHNlbGxlcklkID0gcmVtb3ZlZEJvb2suc2VsbGVySWQ7XHJcblx0XHRcdFx0YXdhaXQgU2VsbGVyLmZpbmRCeUlkQW5kVXBkYXRlKFxyXG5cdFx0XHRcdFx0c2VsbGVySWQsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCRwdWxsOiB7IHByb2R1Y3RzOiByZW1vdmVkQm9vay5faWQgfSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7IG5ldzogdHJ1ZSB9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRyZXR1cm4gcmVtb3ZlZEJvb2s7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRhc3luYyBhZGRDdXN0b21lcihfLCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgdHlwZSwgcm9sZSB9KSB7XHJcblx0XHRcdGlmICh0eXBlID09IFwic2lnbnVwXCIpIHtcclxuXHRcdFx0XHRpZiAocm9sZSA9PSBcImN1c3RvbWVyXCIpIHtcclxuXHRcdFx0XHRcdGxldCBzYXZlZEN1c3RvbWVyID0gYXdhaXQgQ3VzdG9tZXIuZmluZCh7IG5hbWUgfSk7XHJcblx0XHRcdFx0XHRzYXZlZEN1c3RvbWVyID0gc2F2ZWRDdXN0b21lclswXTtcclxuXHRcdFx0XHRcdGlmIChzYXZlZEN1c3RvbWVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdHJldHVybiB7IEVycm9yOiBcIlVzZXJuYW1lIG5vdCBhdmFpbGFibGVcIiB9O1xyXG5cdFx0XHRcdFx0Y29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgOCk7XHJcblx0XHRcdFx0XHRjb25zdCBjdXN0b21lciA9IG5ldyBDdXN0b21lcih7XHJcblx0XHRcdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0XHRcdGVtYWlsLFxyXG5cdFx0XHRcdFx0XHRwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybiBjdXN0b21lci5zYXZlKCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChyb2xlID09IFwic2VsbGVyXCIpIHtcclxuXHRcdFx0XHRcdGxldCBzYXZlZFNlbGxlciA9IGF3YWl0IFNlbGxlci5maW5kKHsgbmFtZSB9KTtcclxuXHRcdFx0XHRcdHNhdmVkU2VsbGVyID0gc2F2ZWRTZWxsZXJbMF07XHJcblx0XHRcdFx0XHRpZiAoc2F2ZWRTZWxsZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHsgRXJyb3I6IFwiVXNlcm5hbWUgbm90IGF2YWlsYWJsZVwiIH07XHJcblx0XHRcdFx0XHRjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCA4KTtcclxuXHRcdFx0XHRcdGNvbnN0IHNlbGxlciA9IG5ldyBTZWxsZXIoe1xyXG5cdFx0XHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdFx0XHRlbWFpbCxcclxuXHRcdFx0XHRcdFx0cGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2VsbGVyLnNhdmUoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bGV0IHNhdmVkQWRtaW4gPSBhd2FpdCBBZG1pbi5maW5kKHsgbmFtZSB9KTtcclxuXHRcdFx0XHRcdHNhdmVkQWRtaW4gPSBzYXZlZEFkbWluWzBdO1xyXG5cdFx0XHRcdFx0aWYgKHNhdmVkQWRtaW4gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHsgRXJyb3I6IFwiVXNlcm5hbWUgbm90IGF2YWlsYWJsZVwiIH07XHJcblx0XHRcdFx0XHRjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCA4KTtcclxuXHRcdFx0XHRcdGNvbnN0IGFkbWluID0gbmV3IEFkbWluKHtcclxuXHRcdFx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRcdFx0ZW1haWwsXHJcblx0XHRcdFx0XHRcdHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGFkbWluLnNhdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHJvbGUgPT0gXCJjdXN0b21lclwiKSB7XHJcblx0XHRcdFx0XHRsZXQgc2F2ZWRDdXN0b21lciA9IGF3YWl0IEN1c3RvbWVyLmZpbmQoeyBuYW1lIH0pO1xyXG5cdFx0XHRcdFx0c2F2ZWRDdXN0b21lciA9IHNhdmVkQ3VzdG9tZXJbMF07XHJcblx0XHRcdFx0XHRpZiAoc2F2ZWRDdXN0b21lciA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gVXNlciBGb3VuZFwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvbnN0IG1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHNhdmVkQ3VzdG9tZXIucGFzc3dvcmQpO1xyXG5cdFx0XHRcdFx0aWYgKG1hdGNoKSByZXR1cm4gc2F2ZWRDdXN0b21lcjtcclxuXHRcdFx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgQ3JlZGVudGlhbHNcIik7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChyb2xlID09IFwic2VsbGVyXCIpIHtcclxuXHRcdFx0XHRcdGxldCBzYXZlZFNlbGxlciA9IGF3YWl0IFNlbGxlci5maW5kKHsgbmFtZSB9KTtcclxuXHRcdFx0XHRcdHNhdmVkU2VsbGVyID0gc2F2ZWRTZWxsZXJbMF07XHJcblx0XHRcdFx0XHRpZiAoc2F2ZWRTZWxsZXIgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIFVzZXIgRm91bmRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zdCBtYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBzYXZlZFNlbGxlci5wYXNzd29yZCk7XHJcblx0XHRcdFx0XHRpZiAobWF0Y2gpIHJldHVybiBzYXZlZFNlbGxlcjtcclxuXHRcdFx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgQ3JlZGVudGlhbHNcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBzYXZlZEFkbWluID0gYXdhaXQgQWRtaW4uZmluZCh7IG5hbWUgfSk7XHJcblx0XHRcdFx0XHRzYXZlZEFkbWluID0gc2F2ZWRBZG1pblswXTtcclxuXHRcdFx0XHRcdGlmIChzYXZlZEFkbWluID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyBVc2VyIEZvdW5kXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gY29uc3QgbWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgc2F2ZWRBZG1pbi5wYXNzd29yZCk7XHJcblx0XHRcdFx0XHRpZiAocGFzc3dvcmQgPT0gc2F2ZWRBZG1pbi5wYXNzd29yZCkgcmV0dXJuIHNhdmVkQWRtaW47XHJcblx0XHRcdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIldyb25nIENyZWRlbnRpYWxzXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGFkZFRvQ2FydChfLCBhcmdzKSB7XHJcblx0XHRcdGlmIChhcmdzLnR5cGUgPT0gXCJBRERcIikge1xyXG5cdFx0XHRcdGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgQ3VzdG9tZXIuZmluZEJ5SWRBbmRVcGRhdGUoXHJcblx0XHRcdFx0XHRhcmdzLmN1c3RvbWVySWQsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCRwdXNoOiB7IGNhcnQ6IHsgaXRlbTogYXJncy5ib29rSWQgfSB9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHsgbmV3OiB0cnVlIH1cclxuXHRcdFx0XHQpLnBvcHVsYXRlKFwiY2FydC5pdGVtXCIpO1xyXG5cdFx0XHRcdHJldHVybiBjdXN0b21lci5jYXJ0O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFyZ3MudHlwZSA9PSBcIlJFTU9WRVwiKSB7XHJcblx0XHRcdFx0Y29uc3QgY3VzdG9tZXIgPSBhd2FpdCBDdXN0b21lci5maW5kQnlJZEFuZFVwZGF0ZShcclxuXHRcdFx0XHRcdGFyZ3MuY3VzdG9tZXJJZCxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0JHB1bGw6IHsgY2FydDogeyBpdGVtOiBhcmdzLmJvb2tJZCB9IH0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eyBuZXc6IHRydWUgfVxyXG5cdFx0XHRcdCkucG9wdWxhdGUoXCJjYXJ0Lml0ZW1cIik7XHJcblx0XHRcdFx0cmV0dXJuIGN1c3RvbWVyLmNhcnQ7XHJcblx0XHRcdH0gZWxzZSBpZiAoYXJncy50eXBlID09IFwiQ0hBTkdFX1FVQU5USVRZXCIpIHtcclxuXHRcdFx0XHRjb25zdCBjdXN0b21lciA9IGF3YWl0IEN1c3RvbWVyLmZpbmRCeUlkKGFyZ3MuY3VzdG9tZXJJZCkucG9wdWxhdGUoXHJcblx0XHRcdFx0XHRcImNhcnQuaXRlbVwiXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjb25zdCBjYXJ0ID0gY3VzdG9tZXIuY2FydDtcclxuXHRcdFx0XHRjb25zdCBuZXdDYXJ0ID0gY2FydC5tYXAoKHsgaXRlbSwgcXVhbnRpdHkgfSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW0uX2lkID09IGFyZ3MuYm9va0lkKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB7IGl0ZW0sIHF1YW50aXR5OiBhcmdzLnF1YW50aXR5IH07XHJcblx0XHRcdFx0XHR9IGVsc2UgcmV0dXJuIHsgaXRlbSwgcXVhbnRpdHkgfTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRhd2FpdCBDdXN0b21lci5maW5kQnlJZEFuZFVwZGF0ZShcclxuXHRcdFx0XHRcdGFyZ3MuY3VzdG9tZXJJZCxcclxuXHRcdFx0XHRcdHsgJHNldDogeyBjYXJ0OiBuZXdDYXJ0IH0gfSxcclxuXHRcdFx0XHRcdHsgbmV3OiB0cnVlIH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHJldHVybiBuZXdDYXJ0O1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgcmVtb3ZlQ3VzdG9tZXIoXywgYXJncykge1xyXG5cdFx0XHRhd2FpdCBDdXN0b21lci5maW5kQnlJZEFuZFJlbW92ZShhcmdzLmlkKTtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IEN1c3RvbWVyLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0XHRhc3luYyByZW1vdmVTZWxsZXIoXywgYXJncykge1xyXG5cdFx0XHRhd2FpdCBTZWxsZXIuZmluZEJ5SWRBbmRSZW1vdmUoYXJncy5pZCk7XHJcblx0XHRcdHJldHVybiBhd2FpdCBTZWxsZXIuZmluZCgpO1xyXG5cdFx0fSxcclxuXHRcdGFzeW5jIHJlbW92ZUFkbWluKF8sIGFyZ3MpIHtcclxuXHRcdFx0YXdhaXQgQWRtaW4uZmluZEJ5SWRBbmRSZW1vdmUoYXJncy5pZCk7XHJcblx0XHRcdHJldHVybiBhd2FpdCBBZG1pbi5maW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgY2hlY2tvdXQoXywgYXJncykge1xyXG5cdFx0XHRjb25zdCBjdXN0b21lciA9IGF3YWl0IEN1c3RvbWVyLmZpbmRCeUlkQW5kVXBkYXRlKGFyZ3MuaWQsIHtcclxuXHRcdFx0XHQkc2V0OiB7IGNhcnQ6IFtdIH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gY3VzdG9tZXI7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlc29sdmVycztcclxuIiwiY29uc3QgeyBncWwgfSA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTtcclxuXHJcbmNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG5cdHR5cGUgQm9vayB7XHJcblx0XHRfaWQ6IFN0cmluZ1xyXG5cdFx0bmFtZTogU3RyaW5nXHJcblx0XHRnZW5yZTogU3RyaW5nXHJcblx0XHRhdXRob3I6IFN0cmluZ1xyXG5cdFx0aW1hZ2U6IFN0cmluZ1xyXG5cdFx0cHJpY2U6IEludFxyXG5cdFx0YWJvdXQ6IFN0cmluZ1xyXG5cdH1cclxuXHJcblx0dHlwZSBJdGVtIHtcclxuXHRcdGl0ZW06IEJvb2tcclxuXHRcdHF1YW50aXR5OiBJbnRcclxuXHR9XHJcblxyXG5cdHR5cGUgQ3VzdG9tZXIge1xyXG5cdFx0X2lkOiBTdHJpbmdcclxuXHRcdG5hbWU6IFN0cmluZ1xyXG5cdFx0ZW1haWw6IFN0cmluZ1xyXG5cdFx0b3JkZXJzOiBbSXRlbV1cclxuXHRcdGNhcnQ6IFtJdGVtXVxyXG5cdH1cclxuXHJcblx0dHlwZSBTZWxsZXIge1xyXG5cdFx0X2lkOiBTdHJpbmdcclxuXHRcdG5hbWU6IFN0cmluZ1xyXG5cdFx0ZW1haWw6IFN0cmluZ1xyXG5cdFx0cHJvZHVjdHM6IFtCb29rXVxyXG5cdH1cclxuXHJcblx0dHlwZSBBZG1pbiB7XHJcblx0XHRfaWQ6IFN0cmluZ1xyXG5cdFx0bmFtZTogU3RyaW5nXHJcblx0XHRlbWFpbDogU3RyaW5nXHJcblx0fVxyXG5cclxuXHR0eXBlIFF1ZXJ5IHtcclxuXHRcdGJvb2tzOiBbQm9va11cclxuXHRcdGJvb2soaWQ6IFN0cmluZyEpOiBCb29rXHJcblx0XHRjdXN0b21lcnM6IFtDdXN0b21lcl1cclxuXHRcdHNlbGxlcnM6IFtTZWxsZXJdXHJcblx0XHRhZG1pbnM6IFtBZG1pbl1cclxuXHRcdHNlbGxlcihpZDogU3RyaW5nISk6IFNlbGxlclxyXG5cdFx0Y2FydChpZDogU3RyaW5nISk6IFtJdGVtXVxyXG5cdFx0cHJvZHVjdHMoaWQ6IFN0cmluZyEpOiBbQm9va11cclxuXHRcdGFsbFByb2R1Y3RzOiBbQm9va11cclxuXHR9XHJcblxyXG5cdHR5cGUgTXV0YXRpb24ge1xyXG5cdFx0YWRkQm9vayhcclxuXHRcdFx0aWQ6IFN0cmluZ1xyXG5cdFx0XHRuYW1lOiBTdHJpbmdcclxuXHRcdFx0Z2VucmU6IFN0cmluZ1xyXG5cdFx0XHRhdXRob3I6IFN0cmluZ1xyXG5cdFx0XHRwcmljZTogSW50XHJcblx0XHRcdGFib3V0OiBTdHJpbmdcclxuXHRcdFx0aW1hZ2U6IFN0cmluZ1xyXG5cdFx0XHR0eXBlOiBTdHJpbmchXHJcblx0XHRcdHNlbGxlcklkOiBTdHJpbmdcclxuXHRcdCk6IEJvb2tcclxuXHRcdGFkZEN1c3RvbWVyKFxyXG5cdFx0XHRuYW1lOiBTdHJpbmchXHJcblx0XHRcdHBhc3N3b3JkOiBTdHJpbmchXHJcblx0XHRcdGVtYWlsOiBTdHJpbmdcclxuXHRcdFx0dHlwZTogU3RyaW5nIVxyXG5cdFx0XHRyb2xlOiBTdHJpbmchXHJcblx0XHQpOiBDdXN0b21lclxyXG5cdFx0cmVtb3ZlQ3VzdG9tZXIoaWQ6IFN0cmluZyEpOiBbQ3VzdG9tZXJdXHJcblx0XHRyZW1vdmVTZWxsZXIoaWQ6IFN0cmluZyEpOiBbU2VsbGVyXVxyXG5cdFx0cmVtb3ZlQWRtaW4oaWQ6IFN0cmluZyEpOiBbQWRtaW5dXHJcblx0XHRhZGRUb0NhcnQoXHJcblx0XHRcdGN1c3RvbWVySWQ6IFN0cmluZyFcclxuXHRcdFx0Ym9va0lkOiBTdHJpbmchXHJcblx0XHRcdHR5cGU6IFN0cmluZyFcclxuXHRcdFx0cXVhbnRpdHk6IEludFxyXG5cdFx0KTogW0l0ZW1dXHJcblx0XHRjaGVja291dChpZDogU3RyaW5nISk6IEN1c3RvbWVyXHJcblx0fVxyXG5gO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0eXBlRGVmcztcclxuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSBcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50O1xyXG5cclxuY29uc3QgY3JlYXRlSXNvbW9ycGhpY0xpbmsgPSAoKSA9PiB7XHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdC8vIHNlcnZlclxyXG5cdFx0Y29uc3QgeyBTY2hlbWFMaW5rIH0gPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9zY2hlbWFcIik7XHJcblx0XHRjb25zdCB0eXBlRGVmcyA9IHJlcXVpcmUoXCIuLi90eXBlRGVmc1wiKTtcclxuXHRcdGNvbnN0IHJlc29sdmVycyA9IHJlcXVpcmUoXCIuLi9yZXNvbHZlcnNcIik7XHJcblx0XHRjb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XHJcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUxpbmsoeyBzY2hlbWEgfSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIGNsaWVudFxyXG5cdFx0Y29uc3QgeyBIdHRwTGluayB9ID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvaHR0cFwiKTtcclxuXHRcdHJldHVybiBuZXcgSHR0cExpbmsoeyB1cmk6IFwiL2FwaS9ncmFwaHFsXCIgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwb2xsb0NsaWVudCA9ICgpID0+IHtcclxuXHRyZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcblx0XHRzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiLFxyXG5cdFx0bGluazogY3JlYXRlSXNvbW9ycGhpY0xpbmsoKSxcclxuXHRcdGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVBcG9sbG8gPSAoaW5pdGlhbFN0YXRlID0gbnVsbCkgPT4ge1xyXG5cdGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XHJcblx0aWYgKGluaXRpYWxTdGF0ZSkge1xyXG5cdFx0X2Fwb2xsb0NsaWVudC5jbGllbnQucmVzdG9yZShpbml0aWFsU3RhdGUpO1xyXG5cdH1cclxuXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xyXG5cclxuXHRhcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gX2Fwb2xsb0NsaWVudDtcclxuXHRyZXR1cm4gYXBvbGxvQ2xpZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFwb2xsbyA9IChpbml0aWFsU3RhdGUpID0+IHtcclxuXHRjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XHJcblx0cmV0dXJuIHN0b3JlO1xyXG59O1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IE1PTkdPX1VSSSB9IGZyb20gXCIuLi8uLi9rZXlzXCI7XHJcblxyXG5jb25zdCBjb25uZWN0ID0gKCkgPT4ge1xyXG5cdGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSByZXR1cm47XHJcblx0bW9uZ29vc2VcclxuXHRcdC5jb25uZWN0KE1PTkdPX1VSSSwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KVxyXG5cdFx0LnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJjb25uZWN0ZWQgdG8gZGF0YWJhc2VcIikpXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0O1xyXG4iLCJleHBvcnQgY29uc3QgTU9OR09fVVJJID1cclxuXHRcIm1vbmdvZGIrc3J2Oi8vbWU6bWVAY2x1c3RlcjAuanNrcWQubW9uZ29kYi5uZXQvdGVzdD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWNyZXRfa2V5ID0gXCJzZWNyZXRfa2V5XCI7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=