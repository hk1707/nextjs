import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Meta from './post/meta';
import NextNprogress from 'nextjs-progressbar';
import { ApolloProvider } from '@apollo/client';
import client from "../components/Apolloclient";


const Layout = ( { preview, children } ) => {
    
    return (
        <ApolloProvider client={client}>
        <div>
             {/* <Alert preview={ preview } /> */}
             
             <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height="4"
                options={{ 
                    showSpinner: false
                }}
                />
            <Head>
                <title>PIe-React</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
                <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.css" />
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.js"></script>
            </Head>
            <Header/>
                { children }
            <Footer />
        </div>

        </ApolloProvider>
    );

};

export default Layout;