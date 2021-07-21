import mongoose from "mongoose";

const connect = () => {
	if (mongoose.connections[0].readyState) return;
	mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("connected to database"))
		.catch((err) => console.log(err));
};

export default connect;
