import {
	addToCartMutation,
	checkoutMutation,
	getCartQuery,
} from "../../components/queries";
import { initializeApollo } from "../../components/utils/apollo";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import verification from "../../components/utils/verification";
import StripeCheckout from "react-stripe-checkout";
import Router from "next/router";

const Cart = ({ data: { cart }, price }) => {
	const { uid, role } = parseCookies();
	const [mycart, setMycart] = useState(cart);
	const [totalprice, setTotalprice] = useState(price);
	const [cartOperation] = useMutation(addToCartMutation);
	const [checkout] = useMutation(checkoutMutation);

	const handleRemoveFromCart = async ({ item, quantity }) => {
		const newCart = await cartOperation({
			variables: {
				bookId: item._id,
				type: "REMOVE",
				customerId: uid,
			},
		});
		setTotalprice((prevPrice) => prevPrice - item.price * quantity);
		setMycart(newCart.data.addToCart);
	};

	const handlePayment = async (paymentInfo) => {
		console.log(paymentInfo);
		await checkout({ variables: { id: uid } });
		Router.push("/");
	};

	if (mycart.length == 0) {
		return <h1>No items in your Cart :(</h1>;
	}
	return (
		<div style={{ padding: "20px" }}>
			{mycart &&
				mycart.map(({ item, quantity }, ind) => {
					return (
						<div className="card mb-3" style={{ maxWidth: "600px" }} key={ind}>
							<div className="row g-0">
								<div className="col-md-4">
									<img src={item.image} width="200px" />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<h5 className="card-title">Price: ${item.price}</h5>
										<h6 className="card-title">Quantity: {quantity}</h6>
										<ul className="nav flex-column">
											<li className="nav-item">
												<Link href={`/bookDetails/${item._id}`}>
													<a
														className="btn btn-primary"
														style={{ padding: "2px", margin: "2px" }}
													>
														<h6>View Book</h6>
													</a>
												</Link>
											</li>
											<li className="nav-item">
												<Link href={`/AddToCart/${item._id}`}>
													<a
														className="btn btn-primary"
														style={{ padding: "2px", margin: "2px" }}
													>
														Change Quantity
													</a>
												</Link>
											</li>
											<li className="nav-item">
												<button
													type="button"
													className="btn btn-primary"
													style={{ padding: "2px", margin: "2px" }}
													onClick={() =>
														handleRemoveFromCart({ item, quantity })
													}
												>
													Remove From Cart
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			<h1>
				Total Price:{" "}
				<span className="badge bg-info text-dark">${totalprice}</span>
			</h1>
			<StripeCheckout
				name="CaseBook"
				amount={totalprice * 100}
				currency="USD"
				shippingAddress={true}
				billingAddress={true}
				zipCode={true}
				stripeKey="pk_test_51J3v0OSCBrcjAr84yvK2APPpP1SIhDF9YGNrH3OOZEOdb16PWz6OmrLGQOhQoV2DPC63SBNGv8ZK67y2stCdvveq00eitvU64k"
				token={(paymentInfo) => handlePayment(paymentInfo)}
			>
				<button type="button" className="btn btn-success">
					Proceed To Payment
				</button>
			</StripeCheckout>
		</div>
	);
};

export const getServerSideProps = async (ctx) => {
	const { auth } = parseCookies(ctx);
	const verify = verification(auth);
	if (verify.error) {
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
		query: getCartQuery,
		variables: { id: ctx.params.id },
	});
	let price = 0;
	data.cart.map((book) => (price += book.quantity * book.item.price));
	return {
		props: { initializeApolloState: apolloClient.cache.extract(), data, price },
	};
};

export default Cart;
