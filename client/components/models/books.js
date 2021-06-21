import mongoose from "mongoose";
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const bookSchema = new Schema({
	name: String,
	genre: String,
	author: String,
	image: String,
	price: Number,
	about: String,
	sellerId: {
		type: ObjectId,
		ref: "Seller",
	},
});

module.exports = mongoose.models.Book || mongoose.model("Book", bookSchema);
