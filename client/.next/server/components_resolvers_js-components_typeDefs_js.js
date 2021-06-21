exports.id = "components_resolvers_js-components_typeDefs_js";
exports.ids = ["components_resolvers_js-components_typeDefs_js"];
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

/***/ "./components/utils/db.js":
/*!********************************!*\
  !*** ./components/utils/db.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connect = () => {
  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) return;
  mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://me:me@cluster0.jskqd.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("connected to database")).catch(err => console.log(err));
};

/* harmony default export */ __webpack_exports__["default"] = (connect);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9hZG1pbi5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9ib29rcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9jdXN0b21lci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL21vZGVscy9zZWxsZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9yZXNvbHZlcnMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy90eXBlRGVmcy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3V0aWxzL2RiLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiYWRtaW5TY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiZW1haWwiLCJwYXNzd29yZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJBZG1pbiIsIm1vZGVsIiwiT2JqZWN0SWQiLCJUeXBlcyIsImJvb2tTY2hlbWEiLCJnZW5yZSIsImF1dGhvciIsImltYWdlIiwicHJpY2UiLCJOdW1iZXIiLCJhYm91dCIsInNlbGxlcklkIiwidHlwZSIsInJlZiIsIkJvb2siLCJjdXN0b21lclNjaGVtYSIsImNhcnQiLCJpdGVtIiwicXVhbnRpdHkiLCJkZWZhdWx0IiwiQ3VzdG9tZXIiLCJzZWxsZXJTY2hlbWEiLCJwcm9kdWN0cyIsIlNlbGxlciIsInJlc29sdmVycyIsIlF1ZXJ5IiwiYm9va3MiLCJmaW5kIiwiYm9vayIsIl8iLCJhcmdzIiwiZmluZEJ5SWQiLCJpZCIsImN1c3RvbWVyIiwicG9wdWxhdGUiLCJzZWxsZXIiLCJjdXN0b21lcnMiLCJhZG1pbnMiLCJzZWxsZXJzIiwiYWxsUHJvZHVjdHMiLCJNdXRhdGlvbiIsImFkZEJvb2siLCJzYXZlIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCIkcHVzaCIsIl9pZCIsIm5ldyIsInVwZGF0ZSIsIiRwdWxsIiwicmVtb3ZlZEJvb2siLCJmaW5kQnlJZEFuZFJlbW92ZSIsImFkZEN1c3RvbWVyIiwicm9sZSIsInNhdmVkQ3VzdG9tZXIiLCJ1bmRlZmluZWQiLCJFcnJvciIsImhhc2hlZFBhc3N3b3JkIiwiYmNyeXB0IiwiaGFzaCIsInNhdmVkU2VsbGVyIiwic2F2ZWRBZG1pbiIsImFkbWluIiwibWF0Y2giLCJjb21wYXJlIiwiYWRkVG9DYXJ0IiwiY3VzdG9tZXJJZCIsImJvb2tJZCIsIm5ld0NhcnQiLCJtYXAiLCIkc2V0IiwicmVtb3ZlQ3VzdG9tZXIiLCJyZW1vdmVTZWxsZXIiLCJyZW1vdmVBZG1pbiIsImNoZWNrb3V0IiwiZ3FsIiwicmVxdWlyZSIsInR5cGVEZWZzIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBLE1BQU1BLE1BQU0sR0FBR0Msa0JBQVNELE1BQXhCO0FBRUEsTUFBTUUsV0FBVyxHQUFHLElBQUlGLE1BQUosQ0FBVztBQUM5QkcsTUFBSSxFQUFFQyxNQUR3QjtBQUUzQkMsT0FBSyxFQUFFRCxNQUZvQjtBQUczQkUsVUFBUSxFQUFFRjtBQUhpQixDQUFYLENBQXBCO0FBTUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsa0JBQVNRLE1BQVQsQ0FBZ0JDLEtBQWhCLElBQXlCVCxrQkFBU1UsS0FBVCxDQUFlLE9BQWYsRUFBd0JULFdBQXhCLENBQTFDLEM7Ozs7Ozs7Ozs7Ozs7QUNUQTs7OztBQUNBLE1BQU1GLE1BQU0sR0FBR0Msa0JBQVNELE1BQXhCO0FBQ0EsTUFBTTtBQUFFWTtBQUFGLElBQWVYLGtCQUFTRCxNQUFULENBQWdCYSxLQUFyQztBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJZCxNQUFKLENBQVc7QUFDN0JHLE1BQUksRUFBRUMsTUFEdUI7QUFFN0JXLE9BQUssRUFBRVgs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EvRUE7QUFpRkE3RSxNQUFNLENBQUNDLE9BQVAsR0FBaUI4RSxRQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ25GQTs7QUFHQSxNQUFNQyxPQUFPLEdBQUksTUFBTTtBQUN0QixNQUFJdEYsMkVBQUosRUFBd0M7QUFDeENBLHlEQUFBLENBRUUsaUZBRkYsRUFHRTtBQUFFdUYsbUJBQWUsRUFBRSxJQUFuQjtBQUF5QkMsc0JBQWtCLEVBQUU7QUFBN0MsR0FIRixFQUtFQyxJQUxGLENBS08sTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosQ0FMYixFQU1FQyxLQU5GLENBTVNDLEdBQUQsSUFBU0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVosQ0FOakI7QUFPQSxDQVREOztBQVdBLCtEQUFlUCxPQUFmLEUiLCJmaWxlIjoiY29tcG9uZW50c19yZXNvbHZlcnNfanMtY29tcG9uZW50c190eXBlRGVmc19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5cclxuY29uc3QgYWRtaW5TY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuXHRuYW1lOiBTdHJpbmcsXHJcbiAgICBlbWFpbDogU3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IFN0cmluZyxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5BZG1pbiB8fCBtb25nb29zZS5tb2RlbChcIkFkbWluXCIsIGFkbWluU2NoZW1hKTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IG1vbmdvb3NlLlNjaGVtYS5UeXBlcztcclxuXHJcbmNvbnN0IGJvb2tTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuXHRuYW1lOiBTdHJpbmcsXHJcblx0Z2VucmU6IFN0cmluZyxcclxuXHRhdXRob3I6IFN0cmluZyxcclxuXHRpbWFnZTogU3RyaW5nLFxyXG5cdHByaWNlOiBOdW1iZXIsXHJcblx0YWJvdXQ6IFN0cmluZyxcclxuXHRzZWxsZXJJZDoge1xyXG5cdFx0dHlwZTogT2JqZWN0SWQsXHJcblx0XHRyZWY6IFwiU2VsbGVyXCIsXHJcblx0fSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Cb29rIHx8IG1vbmdvb3NlLm1vZGVsKFwiQm9va1wiLCBib29rU2NoZW1hKTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IG1vbmdvb3NlLlNjaGVtYS5UeXBlcztcclxuXHJcbmNvbnN0IGN1c3RvbWVyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcblx0bmFtZTogU3RyaW5nLFxyXG5cdGVtYWlsOiBTdHJpbmcsXHJcblx0cGFzc3dvcmQ6IFN0cmluZyxcclxuXHRjYXJ0OiBbXHJcblx0XHR7XHJcblx0XHRcdGl0ZW06IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3RJZCxcclxuXHRcdFx0XHRyZWY6IFwiQm9va1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRxdWFudGl0eToge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAxLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRdLFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuXHRtb25nb29zZS5tb2RlbHMuQ3VzdG9tZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJDdXN0b21lclwiLCBjdXN0b21lclNjaGVtYSk7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5jb25zdCB7IE9iamVjdElkIH0gPSBtb25nb29zZS5TY2hlbWEuVHlwZXM7XHJcblxyXG5jb25zdCBzZWxsZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuXHRuYW1lOiBTdHJpbmcsXHJcblx0ZW1haWw6IFN0cmluZyxcclxuXHRwYXNzd29yZDogU3RyaW5nLFxyXG5cdHByb2R1Y3RzOiBbXHJcblx0XHR7XHJcblx0XHRcdHR5cGU6IE9iamVjdElkLFxyXG5cdFx0XHRyZWY6IFwiQm9va1wiLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuXHRtb25nb29zZS5tb2RlbHMuU2VsbGVyIHx8IG1vbmdvb3NlLm1vZGVsKFwiU2VsbGVyXCIsIHNlbGxlclNjaGVtYSk7XHJcbiIsImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi91dGlscy9kYlwiO1xyXG5pbXBvcnQgQm9vayBmcm9tIFwiLi9tb2RlbHMvYm9va3NcIjtcclxuaW1wb3J0IEN1c3RvbWVyIGZyb20gXCIuL21vZGVscy9jdXN0b21lclwiO1xyXG5pbXBvcnQgU2VsbGVyIGZyb20gXCIuL21vZGVscy9zZWxsZXJcIjtcclxuaW1wb3J0IEFkbWluIGZyb20gXCIuL21vZGVscy9hZG1pblwiO1xyXG5cclxuY29ubmVjdCgpO1xyXG5jb25zdCByZXNvbHZlcnMgPSB7XHJcblx0UXVlcnk6IHtcclxuXHRcdGJvb2tzOiAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBCb29rLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0XHRib29rOiAoXywgYXJncykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gQm9vay5maW5kQnlJZChhcmdzLmlkKTtcclxuXHRcdH0sXHJcblx0XHRjYXJ0OiBhc3luYyAoXywgYXJncykgPT4ge1xyXG5cdFx0XHRjb25zdCBjdXN0b21lciA9IGF3YWl0IEN1c3RvbWVyLmZpbmRCeUlkKGFyZ3MuaWQpLnBvcHVsYXRlKFwiY2FydC5pdGVtXCIpO1xyXG5cdFx0XHRyZXR1cm4gY3VzdG9tZXIuY2FydDtcclxuXHRcdH0sXHJcblx0XHRwcm9kdWN0czogYXN5bmMgKF8sIGFyZ3MpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2VsbGVyID0gYXdhaXQgU2VsbGVyLmZpbmRCeUlkKGFyZ3MuaWQpLnBvcHVsYXRlKFwicHJvZHVjdHNcIik7XHJcblx0XHRcdHJldHVybiBzZWxsZXIucHJvZHVjdHM7XHJcblx0XHR9LFxyXG5cdFx0c2VsbGVyOiBhc3luYyAoXywgYXJncykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgU2VsbGVyLmZpbmRCeUlkKGFyZ3MuaWQpLnBvcHVsYXRlKFwicHJvZHVjdHNcIik7XHJcblx0XHR9LFxyXG5cdFx0Y3VzdG9tZXJzOiAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBDdXN0b21lci5maW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0YWRtaW5zOiAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBBZG1pbi5maW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0c2VsbGVyczogKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gU2VsbGVyLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0XHRhbGxQcm9kdWN0czogKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gQm9vay5maW5kKCk7XHJcblx0XHR9LFxyXG5cdH0sXHJcblx0TXV0YXRpb246IHtcclxuXHRcdGFzeW5jIGFkZEJvb2soXywgYXJncykge1xyXG5cdFx0XHRpZiAoYXJncy50eXBlID09IFwiQUREXCIpIHtcclxuXHRcdFx0XHRsZXQgYm9vayA9IG5ldyBCb29rKHtcclxuXHRcdFx0XHRcdG5hbWU6IGFyZ3MubmFtZSxcclxuXHRcdFx0XHRcdGdlbnJlOiBhcmdzLmdlbnJlLFxyXG5cdFx0XHRcdFx0YXV0aG9yOiBhcmdzLmF1dGhvcixcclxuXHRcdFx0XHRcdGltYWdlOiBhcmdzLmltYWdlLFxyXG5cdFx0XHRcdFx0cHJpY2U6IGFyZ3MucHJpY2UsXHJcblx0XHRcdFx0XHRhYm91dDogYXJncy5hYm91dCxcclxuXHRcdFx0XHRcdHNlbGxlcklkOiBhcmdzLnNlbGxlcklkLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGJvb2sgPSBhd2FpdCBib29rLnNhdmUoKTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhib29rKTtcclxuXHRcdFx0XHRjb25zdCBzZWxsZXIgPSBhd2FpdCBTZWxsZXIuZmluZEJ5SWRBbmRVcGRhdGUoXHJcblx0XHRcdFx0XHRhcmdzLnNlbGxlcklkLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQkcHVzaDogeyBwcm9kdWN0czogYm9vay5faWQgfSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7IG5ldzogdHJ1ZSB9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzZWxsZXIpO1xyXG5cdFx0XHRcdHJldHVybiBib29rO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF3YWl0IEN1c3RvbWVyLnVwZGF0ZShcclxuXHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQkcHVsbDoge1xyXG5cdFx0XHRcdFx0XHRcdGNhcnQ6IHsgaXRlbTogYXJncy5pZCB9LFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHsgbmV3OiB0cnVlIH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNvbnN0IHJlbW92ZWRCb29rID0gYXdhaXQgQm9vay5maW5kQnlJZEFuZFJlbW92ZShhcmdzLmlkKTtcclxuXHRcdFx0XHRjb25zdCBzZWxsZXJJZCA9IHJlbW92ZWRCb29rLnNlbGxlcklkO1xyXG5cdFx0XHRcdGF3YWl0IFNlbGxlci5maW5kQnlJZEFuZFVwZGF0ZShcclxuXHRcdFx0XHRcdHNlbGxlcklkLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQkcHVsbDogeyBwcm9kdWN0czogcmVtb3ZlZEJvb2suX2lkIH0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eyBuZXc6IHRydWUgfVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0cmV0dXJuIHJlbW92ZWRCb29rO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgYWRkQ3VzdG9tZXIoXywgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHR5cGUsIHJvbGUgfSkge1xyXG5cdFx0XHRpZiAodHlwZSA9PSBcInNpZ251cFwiKSB7XHJcblx0XHRcdFx0aWYgKHJvbGUgPT0gXCJjdXN0b21lclwiKSB7XHJcblx0XHRcdFx0XHRsZXQgc2F2ZWRDdXN0b21lciA9IGF3YWl0IEN1c3RvbWVyLmZpbmQoeyBuYW1lIH0pO1xyXG5cdFx0XHRcdFx0c2F2ZWRDdXN0b21lciA9IHNhdmVkQ3VzdG9tZXJbMF07XHJcblx0XHRcdFx0XHRpZiAoc2F2ZWRDdXN0b21lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4geyBFcnJvcjogXCJVc2VybmFtZSBub3QgYXZhaWxhYmxlXCIgfTtcclxuXHRcdFx0XHRcdGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDgpO1xyXG5cdFx0XHRcdFx0Y29uc3QgY3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIoe1xyXG5cdFx0XHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdFx0XHRlbWFpbCxcclxuXHRcdFx0XHRcdFx0cGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VzdG9tZXIuc2F2ZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocm9sZSA9PSBcInNlbGxlclwiKSB7XHJcblx0XHRcdFx0XHRsZXQgc2F2ZWRTZWxsZXIgPSBhd2FpdCBTZWxsZXIuZmluZCh7IG5hbWUgfSk7XHJcblx0XHRcdFx0XHRzYXZlZFNlbGxlciA9IHNhdmVkU2VsbGVyWzBdO1xyXG5cdFx0XHRcdFx0aWYgKHNhdmVkU2VsbGVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdHJldHVybiB7IEVycm9yOiBcIlVzZXJuYW1lIG5vdCBhdmFpbGFibGVcIiB9O1xyXG5cdFx0XHRcdFx0Y29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgOCk7XHJcblx0XHRcdFx0XHRjb25zdCBzZWxsZXIgPSBuZXcgU2VsbGVyKHtcclxuXHRcdFx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRcdFx0ZW1haWwsXHJcblx0XHRcdFx0XHRcdHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNlbGxlci5zYXZlKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBzYXZlZEFkbWluID0gYXdhaXQgQWRtaW4uZmluZCh7IG5hbWUgfSk7XHJcblx0XHRcdFx0XHRzYXZlZEFkbWluID0gc2F2ZWRBZG1pblswXTtcclxuXHRcdFx0XHRcdGlmIChzYXZlZEFkbWluICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdHJldHVybiB7IEVycm9yOiBcIlVzZXJuYW1lIG5vdCBhdmFpbGFibGVcIiB9O1xyXG5cdFx0XHRcdFx0Y29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgOCk7XHJcblx0XHRcdFx0XHRjb25zdCBhZG1pbiA9IG5ldyBBZG1pbih7XHJcblx0XHRcdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0XHRcdGVtYWlsLFxyXG5cdFx0XHRcdFx0XHRwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybiBhZG1pbi5zYXZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChyb2xlID09IFwiY3VzdG9tZXJcIikge1xyXG5cdFx0XHRcdFx0bGV0IHNhdmVkQ3VzdG9tZXIgPSBhd2FpdCBDdXN0b21lci5maW5kKHsgbmFtZSB9KTtcclxuXHRcdFx0XHRcdHNhdmVkQ3VzdG9tZXIgPSBzYXZlZEN1c3RvbWVyWzBdO1xyXG5cdFx0XHRcdFx0aWYgKHNhdmVkQ3VzdG9tZXIgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIFVzZXIgRm91bmRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zdCBtYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBzYXZlZEN1c3RvbWVyLnBhc3N3b3JkKTtcclxuXHRcdFx0XHRcdGlmIChtYXRjaCkgcmV0dXJuIHNhdmVkQ3VzdG9tZXI7XHJcblx0XHRcdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIldyb25nIENyZWRlbnRpYWxzXCIpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocm9sZSA9PSBcInNlbGxlclwiKSB7XHJcblx0XHRcdFx0XHRsZXQgc2F2ZWRTZWxsZXIgPSBhd2FpdCBTZWxsZXIuZmluZCh7IG5hbWUgfSk7XHJcblx0XHRcdFx0XHRzYXZlZFNlbGxlciA9IHNhdmVkU2VsbGVyWzBdO1xyXG5cdFx0XHRcdFx0aWYgKHNhdmVkU2VsbGVyID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyBVc2VyIEZvdW5kXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3QgbWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgc2F2ZWRTZWxsZXIucGFzc3dvcmQpO1xyXG5cdFx0XHRcdFx0aWYgKG1hdGNoKSByZXR1cm4gc2F2ZWRTZWxsZXI7XHJcblx0XHRcdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIldyb25nIENyZWRlbnRpYWxzXCIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgc2F2ZWRBZG1pbiA9IGF3YWl0IEFkbWluLmZpbmQoeyBuYW1lIH0pO1xyXG5cdFx0XHRcdFx0c2F2ZWRBZG1pbiA9IHNhdmVkQWRtaW5bMF07XHJcblx0XHRcdFx0XHRpZiAoc2F2ZWRBZG1pbiA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gVXNlciBGb3VuZFwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGNvbnN0IG1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHNhdmVkQWRtaW4ucGFzc3dvcmQpO1xyXG5cdFx0XHRcdFx0aWYgKHBhc3N3b3JkID09IHNhdmVkQWRtaW4ucGFzc3dvcmQpIHJldHVybiBzYXZlZEFkbWluO1xyXG5cdFx0XHRcdFx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBDcmVkZW50aWFsc1wiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRhc3luYyBhZGRUb0NhcnQoXywgYXJncykge1xyXG5cdFx0XHRpZiAoYXJncy50eXBlID09IFwiQUREXCIpIHtcclxuXHRcdFx0XHRjb25zdCBjdXN0b21lciA9IGF3YWl0IEN1c3RvbWVyLmZpbmRCeUlkQW5kVXBkYXRlKFxyXG5cdFx0XHRcdFx0YXJncy5jdXN0b21lcklkLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQkcHVzaDogeyBjYXJ0OiB7IGl0ZW06IGFyZ3MuYm9va0lkIH0gfSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7IG5ldzogdHJ1ZSB9XHJcblx0XHRcdFx0KS5wb3B1bGF0ZShcImNhcnQuaXRlbVwiKTtcclxuXHRcdFx0XHRyZXR1cm4gY3VzdG9tZXIuY2FydDtcclxuXHRcdFx0fSBlbHNlIGlmIChhcmdzLnR5cGUgPT0gXCJSRU1PVkVcIikge1xyXG5cdFx0XHRcdGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgQ3VzdG9tZXIuZmluZEJ5SWRBbmRVcGRhdGUoXHJcblx0XHRcdFx0XHRhcmdzLmN1c3RvbWVySWQsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCRwdWxsOiB7IGNhcnQ6IHsgaXRlbTogYXJncy5ib29rSWQgfSB9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHsgbmV3OiB0cnVlIH1cclxuXHRcdFx0XHQpLnBvcHVsYXRlKFwiY2FydC5pdGVtXCIpO1xyXG5cdFx0XHRcdHJldHVybiBjdXN0b21lci5jYXJ0O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFyZ3MudHlwZSA9PSBcIkNIQU5HRV9RVUFOVElUWVwiKSB7XHJcblx0XHRcdFx0Y29uc3QgY3VzdG9tZXIgPSBhd2FpdCBDdXN0b21lci5maW5kQnlJZChhcmdzLmN1c3RvbWVySWQpLnBvcHVsYXRlKFxyXG5cdFx0XHRcdFx0XCJjYXJ0Lml0ZW1cIlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29uc3QgY2FydCA9IGN1c3RvbWVyLmNhcnQ7XHJcblx0XHRcdFx0Y29uc3QgbmV3Q2FydCA9IGNhcnQubWFwKCh7IGl0ZW0sIHF1YW50aXR5IH0pID0+IHtcclxuXHRcdFx0XHRcdGlmIChpdGVtLl9pZCA9PSBhcmdzLmJvb2tJZCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4geyBpdGVtLCBxdWFudGl0eTogYXJncy5xdWFudGl0eSB9O1xyXG5cdFx0XHRcdFx0fSBlbHNlIHJldHVybiB7IGl0ZW0sIHF1YW50aXR5IH07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YXdhaXQgQ3VzdG9tZXIuZmluZEJ5SWRBbmRVcGRhdGUoXHJcblx0XHRcdFx0XHRhcmdzLmN1c3RvbWVySWQsXHJcblx0XHRcdFx0XHR7ICRzZXQ6IHsgY2FydDogbmV3Q2FydCB9IH0sXHJcblx0XHRcdFx0XHR7IG5ldzogdHJ1ZSB9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRyZXR1cm4gbmV3Q2FydDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIHJlbW92ZUN1c3RvbWVyKF8sIGFyZ3MpIHtcclxuXHRcdFx0YXdhaXQgQ3VzdG9tZXIuZmluZEJ5SWRBbmRSZW1vdmUoYXJncy5pZCk7XHJcblx0XHRcdHJldHVybiBhd2FpdCBDdXN0b21lci5maW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgcmVtb3ZlU2VsbGVyKF8sIGFyZ3MpIHtcclxuXHRcdFx0YXdhaXQgU2VsbGVyLmZpbmRCeUlkQW5kUmVtb3ZlKGFyZ3MuaWQpO1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgU2VsbGVyLmZpbmQoKTtcclxuXHRcdH0sXHJcblx0XHRhc3luYyByZW1vdmVBZG1pbihfLCBhcmdzKSB7XHJcblx0XHRcdGF3YWl0IEFkbWluLmZpbmRCeUlkQW5kUmVtb3ZlKGFyZ3MuaWQpO1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgQWRtaW4uZmluZCgpO1xyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGNoZWNrb3V0KF8sIGFyZ3MpIHtcclxuXHRcdFx0Y29uc3QgY3VzdG9tZXIgPSBhd2FpdCBDdXN0b21lci5maW5kQnlJZEFuZFVwZGF0ZShhcmdzLmlkLCB7XHJcblx0XHRcdFx0JHNldDogeyBjYXJ0OiBbXSB9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGN1c3RvbWVyO1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXNvbHZlcnM7XHJcbiIsImNvbnN0IHsgZ3FsIH0gPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7XHJcblxyXG5jb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuXHR0eXBlIEJvb2sge1xyXG5cdFx0X2lkOiBTdHJpbmdcclxuXHRcdG5hbWU6IFN0cmluZ1xyXG5cdFx0Z2VucmU6IFN0cmluZ1xyXG5cdFx0YXV0aG9yOiBTdHJpbmdcclxuXHRcdGltYWdlOiBTdHJpbmdcclxuXHRcdHByaWNlOiBJbnRcclxuXHRcdGFib3V0OiBTdHJpbmdcclxuXHR9XHJcblxyXG5cdHR5cGUgSXRlbSB7XHJcblx0XHRpdGVtOiBCb29rXHJcblx0XHRxdWFudGl0eTogSW50XHJcblx0fVxyXG5cclxuXHR0eXBlIEN1c3RvbWVyIHtcclxuXHRcdF9pZDogU3RyaW5nXHJcblx0XHRuYW1lOiBTdHJpbmdcclxuXHRcdGVtYWlsOiBTdHJpbmdcclxuXHRcdG9yZGVyczogW0l0ZW1dXHJcblx0XHRjYXJ0OiBbSXRlbV1cclxuXHR9XHJcblxyXG5cdHR5cGUgU2VsbGVyIHtcclxuXHRcdF9pZDogU3RyaW5nXHJcblx0XHRuYW1lOiBTdHJpbmdcclxuXHRcdGVtYWlsOiBTdHJpbmdcclxuXHRcdHByb2R1Y3RzOiBbQm9va11cclxuXHR9XHJcblxyXG5cdHR5cGUgQWRtaW4ge1xyXG5cdFx0X2lkOiBTdHJpbmdcclxuXHRcdG5hbWU6IFN0cmluZ1xyXG5cdFx0ZW1haWw6IFN0cmluZ1xyXG5cdH1cclxuXHJcblx0dHlwZSBRdWVyeSB7XHJcblx0XHRib29rczogW0Jvb2tdXHJcblx0XHRib29rKGlkOiBTdHJpbmchKTogQm9va1xyXG5cdFx0Y3VzdG9tZXJzOiBbQ3VzdG9tZXJdXHJcblx0XHRzZWxsZXJzOiBbU2VsbGVyXVxyXG5cdFx0YWRtaW5zOiBbQWRtaW5dXHJcblx0XHRzZWxsZXIoaWQ6IFN0cmluZyEpOiBTZWxsZXJcclxuXHRcdGNhcnQoaWQ6IFN0cmluZyEpOiBbSXRlbV1cclxuXHRcdHByb2R1Y3RzKGlkOiBTdHJpbmchKTogW0Jvb2tdXHJcblx0XHRhbGxQcm9kdWN0czogW0Jvb2tdXHJcblx0fVxyXG5cclxuXHR0eXBlIE11dGF0aW9uIHtcclxuXHRcdGFkZEJvb2soXHJcblx0XHRcdGlkOiBTdHJpbmdcclxuXHRcdFx0bmFtZTogU3RyaW5nXHJcblx0XHRcdGdlbnJlOiBTdHJpbmdcclxuXHRcdFx0YXV0aG9yOiBTdHJpbmdcclxuXHRcdFx0cHJpY2U6IEludFxyXG5cdFx0XHRhYm91dDogU3RyaW5nXHJcblx0XHRcdGltYWdlOiBTdHJpbmdcclxuXHRcdFx0dHlwZTogU3RyaW5nIVxyXG5cdFx0XHRzZWxsZXJJZDogU3RyaW5nXHJcblx0XHQpOiBCb29rXHJcblx0XHRhZGRDdXN0b21lcihcclxuXHRcdFx0bmFtZTogU3RyaW5nIVxyXG5cdFx0XHRwYXNzd29yZDogU3RyaW5nIVxyXG5cdFx0XHRlbWFpbDogU3RyaW5nXHJcblx0XHRcdHR5cGU6IFN0cmluZyFcclxuXHRcdFx0cm9sZTogU3RyaW5nIVxyXG5cdFx0KTogQ3VzdG9tZXJcclxuXHRcdHJlbW92ZUN1c3RvbWVyKGlkOiBTdHJpbmchKTogW0N1c3RvbWVyXVxyXG5cdFx0cmVtb3ZlU2VsbGVyKGlkOiBTdHJpbmchKTogW1NlbGxlcl1cclxuXHRcdHJlbW92ZUFkbWluKGlkOiBTdHJpbmchKTogW0FkbWluXVxyXG5cdFx0YWRkVG9DYXJ0KFxyXG5cdFx0XHRjdXN0b21lcklkOiBTdHJpbmchXHJcblx0XHRcdGJvb2tJZDogU3RyaW5nIVxyXG5cdFx0XHR0eXBlOiBTdHJpbmchXHJcblx0XHRcdHF1YW50aXR5OiBJbnRcclxuXHRcdCk6IFtJdGVtXVxyXG5cdFx0Y2hlY2tvdXQoaWQ6IFN0cmluZyEpOiBDdXN0b21lclxyXG5cdH1cclxuYDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdHlwZURlZnM7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcblxyXG5jb25zdCBjb25uZWN0ID0gICgpID0+IHtcclxuXHRpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuO1xyXG5cdG1vbmdvb3NlXHJcblx0XHQuY29ubmVjdChcclxuXHRcdFx0XCJtb25nb2RiK3NydjovL21lOm1lQGNsdXN0ZXIwLmpza3FkLm1vbmdvZGIubmV0L3Rlc3Q/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXHJcblx0XHRcdHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUgfVxyXG5cdFx0KVxyXG5cdFx0LnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJjb25uZWN0ZWQgdG8gZGF0YWJhc2VcIikpXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9