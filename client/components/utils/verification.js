import { verify } from "jsonwebtoken";

const verification = (token) => {
	let verified;
	try {
		verified = verify(token, process.env.SECRET_KEY);
	} catch (err) {
		return { error: "Cannot Verify" };
	}
	return verified;
};

export default verification;
