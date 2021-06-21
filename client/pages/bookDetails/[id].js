import { initializeApollo } from "../../components/utils/apollo";
import {
	addBookMutation,
	addToCartMutation,
	bookDetailsQuery,
} from "../../components/queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import verification from "../../components/utils/verification";
import { parseCookies } from "nookies";

const bookDetails = ({ data }) => {
	const { book } = data;
	const { uid, role } = parseCookies();
	const router = useRouter();
	if (router.isFallback) return <h1> Loading...</h1>;

	const [cartOperation] = useMutation(addToCartMutation);
	const [removeBook] = useMutation(addBookMutation);

	const handleAddToCart = async (id) => {
		const addBook = await cartOperation({
			variables: {
				id,
				type: "ADD",
				customerId: uid,
			},
		});
		console.log(addBook);
	};

	const handleDelete = async (id) => {
		const removedBook = await removeBook({
			variables: {
				id,
				type: "REMOVE",
			},
		});
		console.log(removedBook);
		// router.push("/");
	};

	return (
		<>
			{book && (
				<div
					className="card mb-3"
					style={{
						maxWidth: "600px",
						margin: "10px",
						padding: "10px",
						justifyContent: "space-between",
					}}
				>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={book.image} style={{ width: "200px" }} />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">Title: {book.name}</h5>
								<h5 className="card-title">Genre: {book.genre}</h5>
								<h5 className="card-title">Author: {book.author}</h5>
								<p className="card-text">{book.about}</p>
								<h5 className="card-title">Price: ${book.price}</h5>
							</div>
						</div>
					</div>
				</div>
			)}

			{book && role == "admin" && (
				<button
					type="button"
					className="btn btn-dark"
					onClick={() => handleDelete(book._id)}
				>
					Delete
				</button>
			)}
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

export default bookDetails;
