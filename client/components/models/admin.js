import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
	name: String,
    email: String,
    password: String,
});

module.exports = mongoose.models.Admin || mongoose.model("Admin", adminSchema);
