import styles from "../components/loader.module.css";
import { ApolloProvider } from '@apollo/client';
import client from "../components/Apolloclient";
import { AppProvider } from "../src/components/context/AppContext";

const MyApp = ({ Component, pageProps }) => {

 
  return  (
        <AppProvider>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
        </AppProvider>
  )

}

export default MyApp;