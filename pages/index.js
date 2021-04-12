import Layout from "../components/Layout";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Product from "../components/products";
import client from "./../components/Apolloclient";
import gql from "graphql-tag";
import PRODUCT_QUERY from "../query/productquery";
import POST_QUERY_ALL from "../query/postQuety";
import { MDBContainer} from 'mdb-react-ui-kit';
import { ApolloProvider } from '@apollo/client';
import GET_CART from "../src/queries/get-cart";
import Home from "../components/home";
import { getPreviewPost,getAllPostsWithSlug,PRODUCT_SLUGS,PRODUCT_BY_SLUG_QUERY, getPostAndMorePosts } from '../lib/pageapi'
import ReactDOM from 'react-dom';

const Index = ( props ) => {
   
   const { product , post , test} = props;
   const posts = post.data.posts.nodes;

   return(
    <ApolloProvider client={client}>
       
       <Layout >
      
       <Home slide={posts} /> 
       
       {/* {  page.nodes.map(({ slug }) =>  <h1>{slug}</h1> ) } */}

         <div style={container} >           
         <MDBContainer>
         <h1 style={{textAlign:"center", paddingBottom:"30px"}}>Our Product</h1>
         <div className="row row-cols-1 row-cols-md-4 g-4">
            { 
                product.map((items) => 
                    <Product key={items.id} product={items} />  
                )
            }
            </div>
            </MDBContainer>
        </div>

       </Layout>
       </ApolloProvider>
   );
};

Index.getInitialProps = async() => {

    // const res = await fatch( `${clientConfig.graphurl}/?${PRODUCT_QUERY}` );
     const res = await client.query({query:PRODUCT_QUERY});
    // const productdata = await res.json();
    const cart = await client.query({query:GET_CART});
    const test = await getPostAndMorePosts('new')
    const allPosts = await client.query({query:POST_QUERY_ALL});

     return {
         product:res.data.products.nodes,
         post:allPosts,
         test:cart
     }
 
 };

export default Index;

const mystyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const container = {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    marginTop: "120px",
    marginBottom: "60px",
  };