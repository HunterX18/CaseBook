import { initializeApollo } from "../../components/utils/apollo";
import { addToCartMutation, bookDetailsQuery } from "../../components/queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import verification from "../../components/utils/verification";
import { parseCookies } from "nookies";
import { useState } from "react";
import Link from "next/link";

const AddToCart = ({ data }) => {
	const { book } = data;
	const { uid, role } = parseCookies();
	const [quantity, setQuantity] = useState(1);
	const router = useRouter();
	if (router.isFallback) return <h1> Loading...</h1>;

	const [cartOperation] = useMutation(addToCartMutation);

	const handleAddToCart = async (bookId) => {
		const addBook = await cartOperation({
			variables: {
				bookId,
				type: "CHANGE_QUANTITY",
				customerId: uid,
				quantity,
			},
		});
		router.push(`/Cart/${uid}`);
		console.log(addBook);
	};

	return (
		<>
			<div class="card mb-3" style={{ maxWidth: "600px", margin: "10px" }}>
				<div class="row g-0">
					<div class="col-md-4">
						<img src={book.image} width="200px" />
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">Title: {book.title}</h5>
							<h5 class="card-title">Genre: {book.genre}</h5>
							<h5 class="card-title">Author: {book.author}</h5>
							<p class="card-text">About: {book.about}</p>
							<h5 class="card-title">Price: {book.price}</h5>
							<label htmlFor="quantity">Quantity:</label>
							<input
								id="quantity"
								placeholder="Quantity"
								aria-describedby="basic-addon1"
								type="number"
								placeholder="quantity"
								value={quantity}
								style={{ width: "80px", marginLeft: "5px" }}
								onChange={(e) => setQuantity(Number(e.target.value))}
							/>
						</div>
					</div>
				</div>
			</div>

			<button class="btn btn-primary" style={{margin: "10px"}} onClick={() => handleAddToCart(book._id)}>
				<h5>Add to Cart</h5>
			</button>
			<br />
		</>
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
		query: bookDetailsQuery,
		variables: { id: ctx.params.id },
	});
	return {
		props: { initializeApolloState: apolloClient.cache.extract(), data },
	};
};

export default AddToCart;
