import Layout from "../components/Layout";
import CartItemsContainer from "../src/components/cart/cart-page/CartItemsContainer";
import { ApolloProvider } from '@apollo/client';
import client from "../components/Apolloclient";
import { AppProvider } from "../src/components/context/AppContext";

const Cart = () => {
	return (
        <AppProvider>
        
            <Layout>
                <div style={{marginTop:"82px", display:"flex",justifyContent:"center",alignItems:"center",height:"200px",background:"lightskyblue"}}>
                    <h1 style={{textAlign:"center", paddingBottom:"30px"}}>Cart</h1>
                </div>
                <CartItemsContainer/>
            </Layout>
       
        </AppProvider>
	)
};

export default Cart;