import { ApolloClient, InMemoryCache } from "@apollo/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useMemo } from "react";

let apolloClient;

const createIsomorphicLink = () => {
	if (typeof window === "undefined") {
		// server
		const { SchemaLink } = require("@apollo/client/link/schema");
		const typeDefs = require("../typeDefs");
		const resolvers = require("../resolvers");
		const schema = makeExecutableSchema({ typeDefs, resolvers });
		return new SchemaLink({ schema });
	} else {
		// client
		const { HttpLink } = require("@apollo/client/link/http");
		return new HttpLink({ uri: "/api/graphql" });
	}
};

export const createApolloClient = () => {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: createIsomorphicLink(),
		cache: new InMemoryCache(),
	});
};

export const initializeApollo = (initialState = null) => {
	const _apolloClient = apolloClient ?? createApolloClient();
	if (initialState) {
		_apolloClient.client.restore(initialState);
	}

	if (typeof window === "undefined") return _apolloClient;

	apolloClient = apolloClient ?? _apolloClient;
	return apolloClient;
};

export const useApollo = (initialState) => {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
};
