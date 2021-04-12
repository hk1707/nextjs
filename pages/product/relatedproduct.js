import { useState } from "react";
import RELATED_PRODUCT_QUERY from "../../query/relatedproduct";
import { useQuery } from '@apollo/client';
import { MDBContainer } from 'mdb-react-ui-kit';
import Product from "../../components/products";

const Related = ( props ) => {

    const { id } = props;

    let idparse = parseInt(id);

    //console.log(typeof idparse);

    const { data, loading, error } = useQuery(RELATED_PRODUCT_QUERY, {
        variables:{
            exclude:idparse
        }
    });

    console.log(data);
    
    if (loading) return '';
    if (error) return true;
    if (!data) return <p>Not found</p>;

    console.log(data);

    const shoplist = data.products.nodes;

    return (
            <MDBContainer className="py-5 my-5">

                <h2 style={{marginBottom:"30px"}}>Related Product</h2>

                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        shoplist.map((items) =>
                            <Product key={items.id} product={items} />
                        )
                    }
                </div>
            </MDBContainer>
       
    )

}

export default Related;