import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "../utils/auth";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ApolloProvider client={client}>
        <Head>
          <link
            rel="icon"
            href="data:image/png;base64,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"
          ></link>
          <script src="//localhost:8090/auth/js/keycloak.js"></script>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
