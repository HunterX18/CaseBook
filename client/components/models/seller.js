import mongoose from "mongoose";
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const sellerSchema = new Schema({
	name: String,
	email: String,
	password: String,
	products: [
		{
			type: ObjectId,
			ref: "Book",
		},
	],
});

module.exports =
	mongoose.models.Seller || mongoose.model("Seller", sellerSchema);
