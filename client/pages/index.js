import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import {
	getBooksQuery,
	addToCartMutation,
	addBookMutation,
} from "../components/queries";
import { initializeApollo } from "../components/utils/apollo";
import { parseCookies } from "nookies";

export default function Home({ books }) {
	const { uid, role } = parseCookies();

	const [cartOperation] = useMutation(addToCartMutation);

	const handleAddToCart = async (id) => {
		await cartOperation({
			variables: {
				bookId: id,
				type: "ADD",
				customerId: uid,
			},
		});
	};

	return (
		<div style={{ marginTop: "30px" }}>
			<div className="container">
				<div className="row">
					{books.map((book) => {
						return (
							<div className="col" key={book._id} style={{marginTop: '10px'}}>
								<div className="card" style={{ width: "18rem"}}>
									<img src={book.image} style={{height: "20rem"}}/>
									<div className="card-body">
										<h5 className="card-title">{book.name}</h5>
										<h5 className="card-title">Price: ${book.price}</h5>
										{role == "admin" && (
											<Link href={`/bookDetails/${book._id}`}>
												<a href="#" className="btn btn-primary">
													View Book
												</a>
											</Link>
										)}
										{role == "customer" && (
											<button
												type="button"
												className="btn btn-info"
												onClick={() => handleAddToCart(book._id)}
											>
												Add To Cart
											</button>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = async (ctx) => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query({
		query: getBooksQuery,
	});
	return {
		props: {
			initializeApolloState: apolloClient.cache.extract(),
			books: data.books,
		},
	};
};
