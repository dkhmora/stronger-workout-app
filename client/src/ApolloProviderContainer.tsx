import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import App from "./App";
import { useSelector } from "react-redux";

function ApolloProviderContainer() {
  const userToken = useSelector((state: any) => state.userToken);

  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_BASE_URL,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: userToken ? `Bearer ${userToken}` : "",
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  );
}

export default ApolloProviderContainer;
