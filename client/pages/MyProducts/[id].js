import { initializeApollo } from "../../components/utils/apollo";
import {
	addBookMutation,
	bookDetailsQuery,
	getProductsQuery,
} from "../../components/queries";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { parseCookies } from "nookies";
import verification from "../../components/utils/verification";

const bookDetails = ({ products }) => {
	const router = useRouter();
	if (router.isFallback) return <h1> Loading...</h1>;

	const [removeBook] = useMutation(addBookMutation);

	const handleRemove = async (id) => {
		const removedBook = await removeBook({
			variables: {
				id,
				type: "REMOVE",
			},
		});
		console.log(removedBook);
		router.push("/");
	};
	return (
		<div className="container" style={{marginTop: "10px"}}>
			{products.map((product, ind) => {
				return (
					<div className="card mb-3" style={{ maxWidth: "600px" }} key={ind}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src={product.image} width="200px" />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{product.name}</h5>
									<h5 className="card-title">Price: ${product.price}</h5>
									<ul className="nav flex-column">
										<li className="nav-item">
											<Link href={`/bookDetails/${product._id}`}>
												<a
													className="btn btn-primary"
													style={{ padding: "2px", margin: "2px" }}
												>
													<h6>View Book</h6>
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<button className='btn btn-danger' onClick={() => handleRemove(product._id)}>
												Remove Book
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				);
			})}
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
		query: getProductsQuery,
		variables: { id: ctx.params.id },
	});
	return {
		props: {
			initializeApolloState: apolloClient.cache.extract(),
			products: data.products,
		},
	};
};

export default bookDetails;
