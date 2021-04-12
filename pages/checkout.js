import Layout from "../components/Layout";
import CheckoutForm from "../src/components/checkout/CheckoutForm";


const Checkout = () => (
		<Layout>
			<div style={{marginTop:"82px", display:"flex",justifyContent:"center",alignItems:"center",height:"200px",background:"lightskyblue"}}>
                 <h1 style={{textAlign:"center", paddingBottom:"30px"}}>Checkout Page</h1>
            </div>
			<div className="checkout container mx-auto my-32 py-5 my-5 px-4 xl:px-0">
				<CheckoutForm/>
			</div>
		</Layout>
);

export default Checkout;