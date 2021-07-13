import { verify } from "jsonwebtoken";
import { secret_key } from "../../keys";

const verification = (token) => {
	let verified;
	try {
		verified = verify(token, secret_key);
	} catch (err) {
		return { error: "Cannot Verify" };
	}
	return verified;
};

export default verification;
