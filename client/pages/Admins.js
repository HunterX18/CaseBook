import {
	getSellersQuery,
	removeAdminMutation,
	getAdminsQuery,
} from "../components/queries";
import { initializeApollo } from "../components/utils/apollo";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import verification from "../components/utils/verification";

const Admins = ({ data: { admins } }) => {
	console.log(admins);
	const { uid, role } = parseCookies();
	const [Admins, setAdmins] = useState(admins);

	const [removeAdmin] = useMutation(removeAdminMutation);

	const handleRemoveAdmin = async (id) => {
		console.log(id);
		const newData = await removeAdmin({
			variables: {
				id,
			},
		});
		setAdmins(newData.data.removeAdmin);
	};

	return (
		<>
			<ol className="list-group list-group-numbered">
				{Admins &&
					Admins.map((admin, ind) => {
						return (
							<>
								<li
									className="list-group-item d-flex justify-content-between align-items-start"
									key={ind}
								>
									<div className="ms-2 me-auto">
										<div className="fw-bold">{admin.name}</div>
										email: {admin.email}
									</div>
										<button className="btn btn-danger" onClick={() => handleRemoveAdmin(admin._id)}>
											Remove Admin
										</button>
								</li>

								{/* <div
									style={{
										display: "flex",
										flexDirection: "column",
										padding: "20px",
									}}
									key={ind}
								>
									<div style={{ padding: "20px" }}>
										<h1>{admin.name}</h1>
										<h2>{admin.email}</h2>
										<button onClick={() => handleRemoveAdmin(admin._id)}>
											Remove Admin
										</button>
									</div>
								</div> */}
							</>
						);
					})}
			</ol>
		</>
	);
};

export const getServerSideProps = async (ctx) => {
	const { auth, role } = parseCookies(ctx);
	const verify = verification(auth);
	if (verify.error || role !== "admin") {
		return {
			redirect: {
				permanent: false,
				destination: "/Signin",
			},
			props: {},
		};
	}
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query({
		query: getAdminsQuery,
	});
	return {
		props: { initializeApolloState: apolloClient.cache.extract(), data },
	};
};

export default Admins;
