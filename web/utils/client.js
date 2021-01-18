import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getSession } from "./auth";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/v1/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = getSession();

  const authHeaders = token
    ? {
        authorization: `Bearer ${token}`,
      }
    : {};

  return {
    headers: {
      ...headers,
      ...authHeaders,
    },
  };
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
