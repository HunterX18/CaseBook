import {
	getCustomersQuery,
	removeCustomerMutation,
} from "../components/queries";
import { initializeApollo } from "../components/utils/apollo";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import verification from "../components/utils/verification";

const Customers = ({ data: { customers } }) => {
	const { uid, role } = parseCookies();
	const [Customers, setCustomers] = useState(customers);

	const [removeCustomer] = useMutation(removeCustomerMutation);

	const handleRemoveCustomer = async (id) => {
		console.log(id);
		const newData = await removeCustomer({
			variables: {
				id,
			},
		});
		setCustomers(newData.data.removeCustomer);
	};

	return (
		<>
			<ol className="list-group list-group-numbered">
				{Customers &&
					Customers.map((customer, ind) => {
						return (
							<li
								className="list-group-item d-flex justify-content-between align-items-start"
								key={ind}
							>
								<div className="ms-2 me-auto">
									<div className="fw-bold">{customer.name}</div>
									email: {customer.email}
								</div>
								<button
									className="btn btn-danger"
									onClick={() => handleRemoveCustomer(customer._id)}
								>
									Remove Customer
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
							// 		<h1>{customer.name}</h1>
							// 		<h2>{customer.email}</h2>
							// 		<button onClick={() => handleRemoveCustomer(customer._id)}>
							// 			Remove Customer
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
		query: getCustomersQuery,
	});
	return {
		props: { initializeApolloState: apolloClient.cache.extract(), data },
	};
};

export default Customers;
