
import { ApolloProvider } from "@apollo/client";
import Layout from "../components/Layout";
import client from "../components/Apolloclient";
import ReactDOM from 'react-dom';

export default function Custom404() {
    return (
        <ApolloProvider client={client}>
        
            <Layout >
                    
                <h1 style={{paddingTop:"100px",textAlign:"center"}}>404 - Page Not Found</h1>
                    
            </Layout> 

        </ApolloProvider>
    )
}