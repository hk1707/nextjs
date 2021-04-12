import { ApolloProvider } from "@apollo/client";
import Layout from "../../components/Layout";
import client from "../../components/Apolloclient";
import PostList from "../../components/postlist";

const PostIndex = () => {

    return ( 
    
        <ApolloProvider client={client}>
       
            <Layout >
                    
                <PostList />
                    
            </Layout> 

        </ApolloProvider>
    )

};

export default PostIndex;