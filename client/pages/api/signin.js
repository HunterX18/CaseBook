import { addCustomerMutation } from "../../components/queries";
import { initializeApollo } from "../../components/utils/apollo";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const signin = async (req, res) => {
	const { name, password, type, role } = req.body;

	const apolloClient = initializeApollo();
	try {
		const { data } = await apolloClient.mutate({
			mutation: addCustomerMutation,
			variables: { name, password, type, role, operation: "ADD" },
		});
		const { _id, email, cart, orders } = data.addCustomer;
		const token = jwt.sign({ _id, name, email }, process.env.SECRET_KEY);
		res.setHeader(
			"Set-Cookie",
			serialize("auth", token, {
				httpOnly: true,
				// secure: process.NODE_ENV !== "development",
				sameSite: true,
				path: "/",
			})
		);
		res.json({ name, email, _id, cart, orders, token, role });
	} catch (err) {
		res.json({ Error: err.message });
	}
};

export default signin;
