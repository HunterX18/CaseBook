import mongoose from "mongoose";


const connect =  () => {
	if (mongoose.connections[0].readyState) return;
	mongoose
		.connect(
			"mongodb+srv://me:me@cluster0.jskqd.mongodb.net/test?retryWrites=true&w=majority",
			{ useNewUrlParser: true, useUnifiedTopology: true }
		)
		.then(() => console.log("connected to database"))
		.catch((err) => console.log(err));
};

export default connect;
