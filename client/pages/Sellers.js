import { getSellersQuery, removeSellerMutation } from "../components/queries";
import { initializeApollo } from "../components/utils/apollo";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import verification from "../components/utils/verification";

const Sellers = ({ data: { sellers } }) => {
	const { uid, role } = parseCookies();
	const [Sellers, setCustomers] = useState(sellers);

	const [removeSeller] = useMutation(removeSellerMutation);

	const handleRemoveSeller = async (id) => {
		console.log(id);
		const newData = await removeSeller({
			variables: {
				id,
			},
		});
		setCustomers(newData.data.removeSeller);
	};

	return (
		<>
			<ol className="list-group list-group-numbered">
				{Sellers &&
					Sellers.map((seller, ind) => {
						return (
							<li
								className="list-group-item d-flex justify-content-between align-items-start"
								key={ind}
							>
								<div className="ms-2 me-auto">
									<div className="fw-bold">{seller.name}</div>
									email: {seller.email}
								</div>
								<button
									className="btn btn-danger"
									onClick={() => handleRemoveCustomer(seller._id)}
								>
									Remove Seller
								</button>
							</li>
							// <div
							// 	style={{
							// 		display: "flex",
							// 		flexDirection: "column",
							// 		padding: "20px",
							// 	}}
							// 	key={ind}
							// >
							// 	<div style={{ padding: "20px" }}>
							// 		<h1>{seller.name}</h1>
							// 		<h2>{seller.email}</h2>
							// 		<button onClick={() => handleRemoveSeller(seller._id)}>
							// 			Remove Seller
							// 		</button>
							// 	</div>
							// </div>
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
		query: getSellersQuery,
	});
	return {
		props: { initializeApolloState: apolloClient.cache.extract(), data },
	};
};

export default Sellers;
