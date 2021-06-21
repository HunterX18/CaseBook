import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../components/utils/apollo";
import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
	const client = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={client}>
			<Navbar />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
