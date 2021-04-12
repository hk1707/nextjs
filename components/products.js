import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import AddToCartButton from "../src/components/cart/AddToCartButton";
import { useRouter } from 'next/router';

const Product = ( props ) => {

    const { product } = props;
    const router = useRouter(); 
    let pathname = (router.pathname === "/product/[slug]" )?"/product/":"product/";

    return (        
        <div key={product.id} className="col">
         <div  className="card text-center border  shadow-0 ">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={product.image.sourceUrl} className="img-fluid" />
                <Link href={ pathname+""+product.slug } >
                  <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </Link>
            </div>
          
            <div className="card-body">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                </div>
                <div className="card-text" dangerouslySetInnerHTML={{__html:product.short_description}}></div>
                <AddToCartButton product={product} />
            </div>
            
            <div className="card-footer">Price :  {product.price}</div>
          </div>
       </div>

    );

};

export default Product;

const cardstyle = {
    width: "31%",
    margin: "10px",
  };