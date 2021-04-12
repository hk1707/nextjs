import Layout from "../../components/Layout";
import PRODUCT_QUERY from "../../query/productquery";
import { MDBContainer} from 'mdb-react-ui-kit';
import client from "../../components/Apolloclient";
import Product from "../../components/products";

const ProductPage = ( props ) => {
  
  const { product } = props;
  
  const client = new ApolloClient({ uri, cache });

  return (
      <Layout>
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
      </Layout>    
  )

}

ProductPage.getInitialProps = async() => {

  const res = await client.query({query:PRODUCT_QUERY});
   
  return {
       product:res.data.products.nodes,
   }

};

export default ProductPage;