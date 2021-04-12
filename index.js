
import Layout from "../components/Layout";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Product from "../components/products";
import client from "./../components/Apolloclient";
import gql from "graphql-tag";
import PRODUCT_QUERY from "../query/productquery";
import { MDBContainer} from 'mdb-react-ui-kit';
import { ApolloProvider } from '@apollo/client';
import Home from "../components/home";
//import POST from "../component/post";


const Index = ( props ) => {
   //console.warn( client );
   const { product } = props;
   //console.log( product );

   return(
    <ApolloProvider client={client}>
       
       <Layout >
        
       <Home />   
         <div style={container} >           
         <MDBContainer>
         <div className="row row-cols-1 row-cols-md-3 g-4">
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
     
     return {
         product:res.data.products.nodes
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