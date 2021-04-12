import { useState } from "react";
import Layout from "../components/Layout";
import PRODUCT_QUERY_NEW from "../query/productshop";
import { useQuery, ApolloProvider } from '@apollo/client';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Product from "../components/products";
import Loader from "../components/loader";



const Shop = () => {

    const [maxprice, setmMaxprice] = useState(1000);
    const [loader, setLoader] = useState(false);
    const [field, setField] = useState({ field: 'IN', order: 'ASC' });

    const handleChange = (event) => {

        let val, Intval, floatVal;
        val = event.target.value;
        floatVal = parseFloat(val);
        Intval = parseInt(floatVal);
        setLoader(true);
        fetchMore({
            variables: {
                first: 100,
                maxPrice: Intval,
            }
        }).then(fetchMoreResult => {
            setmMaxprice(Intval);
            setLoader(false);
        });
    }

    const orderhandleChange = (event) => {

        let val = event.target.value, orderstate = {};
        if (val == "IN") {
            orderstate = { field: 'IN', order: 'ASC' }
        }
        if (val == "DATE") {
            orderstate = { field: 'DATE', order: 'DESC' }
        }
        if (val == "price_asc") {
            orderstate = { field: 'PRICE', order: 'ASC' }
        }
        if (val == "price_desc") {
            orderstate = { field: 'PRICE', order: 'DESC' }
        }
        if (val == "RATING") {
            orderstate = { field: 'RATING', order: 'ASC' }
        }
        if (val == "REVIEW_COUNT") {
            orderstate = { field: 'REVIEW_COUNT', order: 'ASC' }
        }
        if (val == "REVIEW_COUNT") {
            orderstate = { field: 'REVIEW_COUNT', order: 'ASC' }
        }
        setLoader(true);
        fetchMore({
            variables: {
                first: 100,
                maxPrice: maxprice,
                field: orderstate.field,
                order: orderstate.order
            }
        }).then(fetchMoreResult => {
            setField(orderstate);
            setLoader(false);
        });

    }
  
    const { data, loading, error, fetchMore } = useQuery(PRODUCT_QUERY_NEW, {
        variables: { first: 100, maxPrice: maxprice, field: field.field, order: field.order }
    });
    if (loading) return '';
    if (error) return true;
    if (!data) return <p>Not found</p>;

    const shoplist = data.products.nodes;

    return (
        <Layout>
            <div style={{ marginTop: "82px", display: "flex", justifyContent: "center", alignItems: "center", height: "200px", background: "lightskyblue" }}>
                <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>shop</h1>
            </div>
            <MDBContainer className="py-5 my-5 position-relative" >
                { loader ?  <Loader /> : "" }
                {
                 shoplist?
                 (
                <MDBRow >
                    <MDBCol className="d-flex justify-content-between">
                        <div>
                            <select style={{ padding: " 10px 20px", marginBottom: "30px" }} onChange={handleChange} >
                                <option value="1000"> All </option>
                                <option value="5"> Maximum Price 5 </option>
                                <option value="20">Maximum Price 20 </option>
                                <option value="30">Maximum Price 30 </option>
                            </select>
                        </div>
                        <div>
                            <select style={{ padding: " 10px 20px", marginBottom: "30px" }} onChange={orderhandleChange} >
                                <option value="IN"> All </option>
                                <option value="DATE"> Sort by Newest </option>
                                <option value="price_asc"> Sort by Price low to high </option>
                                <option value="price_desc">Sort by Price high to low</option>
                                <option value="RATING">Sort by Rating</option>
                                <option value="REVIEW_COUNT"> Sort by Review Count </option>
                            </select>
                        </div>
                    </MDBCol>
                </MDBRow>

                ):("")
             
             }

                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        shoplist.length > 0 ? (
                            shoplist.map((items) =>
                                <Product key={items.id} product={items} />
                            )
                        ) : (
                            <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", height: "100px" }}>
                                <p>Not Found</p>
                            </div>
                        )
                    }
                </div>
            </MDBContainer>
        </Layout>

    )

}

export default Shop;