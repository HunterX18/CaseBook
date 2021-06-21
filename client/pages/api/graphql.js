import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../../components/typeDefs";
import resolvers from "../../components/resolvers";

const server = new ApolloServer({ typeDefs, resolvers, uploads: false });

const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
	api: {
		bodyParser: false,
	},
};

export default handler;
