import authentication from "../../components/utils/authentication";
import { parseCookies } from "nookies";
const check = (req, res) => {
	// console.log(req);
	const { auth } = parseCookies();
	console.log(auth);
	res.json({ mssg: "check successfull" });
};

export default authentication(check);
