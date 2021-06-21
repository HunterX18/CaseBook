import { verify } from "jsonwebtoken";
import cookie from "cookie";

const verification = (token) => {
	// const authCookie = cookie.parse(req.headers.cookie);
	// const token = authCookie.auth;
	let verified;
	try {
		verified = verify(token, "secret_key");
	} catch (err) {
		return { error: "Cannot Verify" };
	}
	return verified;
};

export default verification;
