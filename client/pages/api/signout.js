import { serialize } from "cookie";

const signout = (req, res) => {
	res.setHeader(
		"Set-Cookie",
		serialize("auth", "", {
			httpOnly: true,
			// secure: process.NODE_ENV !== "development",
			sameSite: true,
			path: "/",
			maxAge: 0,
		})
	);
	res.json({ mssg: "signout successful" });
	return;
};

export default signout;
