import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/gqlApolloClient";
import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
