import Router from "next/router";
import { parseCookies } from "nookies";

const Check = (req,res) => {
	const { auth } = parseCookies();
	console.log(auth);
	return (
		<>
			<h1>CHeck Page</h1>;
		</>
	);
};

// export const getServerSideProps = async (ctx) => {
// 	const cookie = ctx.req.headers.cookie;
// 	const response = await fetch("http://localhost:3000/api/check", {
// 		headers: { cookie },
// 	});

// 	if (response.status == "401") {
// 		if (!ctx.req) {
// 			Router.push("/Signin");
// 			return { props: {} };
// 		} else {
// 			ctx.res.writeHead(302, {
// 				Location: "http://localhost:3000/Signin",
// 			});
// 			ctx.res.end();
// 			return { props: {} };
// 		}
// 	} else {
// 		const data = await response.json();
// 		return {
// 			props: {
// 				data,
// 			},
// 		};
// 	}
// };

export default Check;
