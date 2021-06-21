import mongoose from "mongoose";
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const customerSchema = new Schema({
	name: String,
	email: String,
	password: String,
	cart: [
		{
			item: {
				type: ObjectId,
				ref: "Book",
			},
			quantity: {
				type: Number,
				default: 1,
			},
		},
	],
});

module.exports =
	mongoose.models.Customer || mongoose.model("Customer", customerSchema);
