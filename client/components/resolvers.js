import bcrypt from "bcrypt";
import connect from "./utils/db";
import Book from "./models/books";
import Customer from "./models/customer";
import Seller from "./models/seller";
import Admin from "./models/admin";

connect();
const resolvers = {
	Query: {
		books: () => {
			return Book.find();
		},
		book: (_, args) => {
			return Book.findById(args.id);
		},
		cart: async (_, args) => {
			const customer = await Customer.findById(args.id).populate("cart.item");
			return customer.cart;
		},
		products: async (_, args) => {
			const seller = await Seller.findById(args.id).populate("products");
			return seller.products;
		},
		seller: async (_, args) => {
			return await Seller.findById(args.id).populate("products");
		},
		customers: () => {
			return Customer.find();
		},
		admins: () => {
			return Admin.find();
		},
		sellers: () => {
			return Seller.find();
		},
		allProducts: () => {
			return Book.find();
		},
	},
	Mutation: {
		async addBook(_, args) {
			if (args.type == "ADD") {
				let book = new Book({
					name: args.name,
					genre: args.genre,
					author: args.author,
					image: args.image,
					price: args.price,
					about: args.about,
					sellerId: args.sellerId,
				});
				book = await book.save();
				// console.log(book);
				const seller = await Seller.findByIdAndUpdate(
					args.sellerId,
					{
						$push: { products: book._id },
					},
					{ new: true }
				);
				// console.log(seller);
				return book;
			} else {
				await Customer.update(
					{},
					{
						$pull: {
							cart: { item: args.id },
						},
					},
					{ new: true }
				);
				const removedBook = await Book.findByIdAndRemove(args.id);
				const sellerId = removedBook.sellerId;
				await Seller.findByIdAndUpdate(
					sellerId,
					{
						$pull: { products: removedBook._id },
					},
					{ new: true }
				);
				return removedBook;
			}
		},
		async addCustomer(_, { name, email, password, type, role }) {
			if (type == "signup") {
				if (role == "customer") {
					let savedCustomer = await Customer.find({ name });
					savedCustomer = savedCustomer[0];
					if (savedCustomer !== undefined)
						return { Error: "Username not available" };
					const hashedPassword = await bcrypt.hash(password, 8);
					const customer = new Customer({
						name,
						email,
						password: hashedPassword,
					});
					return customer.save();
				} else if (role == "seller") {
					let savedSeller = await Seller.find({ name });
					savedSeller = savedSeller[0];
					if (savedSeller !== undefined)
						return { Error: "Username not available" };
					const hashedPassword = await bcrypt.hash(password, 8);
					const seller = new Seller({
						name,
						email,
						password: hashedPassword,
					});
					return seller.save();
				} else {
					let savedAdmin = await Admin.find({ name });
					savedAdmin = savedAdmin[0];
					if (savedAdmin !== undefined)
						return { Error: "Username not available" };
					const hashedPassword = await bcrypt.hash(password, 8);
					const admin = new Admin({
						name,
						email,
						password: hashedPassword,
					});
					return admin.save();
				}
			} else {
				if (role == "customer") {
					let savedCustomer = await Customer.find({ name });
					savedCustomer = savedCustomer[0];
					if (savedCustomer == undefined) {
						throw new Error("No User Found");
					}
					const match = await bcrypt.compare(password, savedCustomer.password);
					if (match) return savedCustomer;
					else throw new Error("Wrong Credentials");
				} else if (role == "seller") {
					let savedSeller = await Seller.find({ name });
					savedSeller = savedSeller[0];
					if (savedSeller == undefined) {
						throw new Error("No User Found");
					}
					const match = await bcrypt.compare(password, savedSeller.password);
					if (match) return savedSeller;
					else throw new Error("Wrong Credentials");
				} else {
					let savedAdmin = await Admin.find({ name });
					savedAdmin = savedAdmin[0];
					if (savedAdmin == undefined) {
						throw new Error("No User Found");
					}
					// const match = await bcrypt.compare(password, savedAdmin.password);
					if (password == savedAdmin.password) return savedAdmin;
					else throw new Error("Wrong Credentials");
				}
			}
		},
		async addToCart(_, args) {
			if (args.type == "ADD") {
				const customer = await Customer.findByIdAndUpdate(
					args.customerId,
					{
						$push: { cart: { item: args.bookId } },
					},
					{ new: true }
				).populate("cart.item");
				return customer.cart;
			} else if (args.type == "REMOVE") {
				const customer = await Customer.findByIdAndUpdate(
					args.customerId,
					{
						$pull: { cart: { item: args.bookId } },
					},
					{ new: true }
				).populate("cart.item");
				return customer.cart;
			} else if (args.type == "CHANGE_QUANTITY") {
				const customer = await Customer.findById(args.customerId).populate(
					"cart.item"
				);
				const cart = customer.cart;
				const newCart = cart.map(({ item, quantity }) => {
					if (item._id == args.bookId) {
						return { item, quantity: args.quantity };
					} else return { item, quantity };
				});
				await Customer.findByIdAndUpdate(
					args.customerId,
					{ $set: { cart: newCart } },
					{ new: true }
				);
				return newCart;
			}
		},
		async removeCustomer(_, args) {
			await Customer.findByIdAndRemove(args.id);
			return await Customer.find();
		},
		async removeSeller(_, args) {
			await Seller.findByIdAndRemove(args.id);
			return await Seller.find();
		},
		async removeAdmin(_, args) {
			await Admin.findByIdAndRemove(args.id);
			return await Admin.find();
		},
		async checkout(_, args) {
			const customer = await Customer.findByIdAndUpdate(args.id, {
				$set: { cart: [] },
			});
			return customer;
		},
	},
};

module.exports = resolvers;
