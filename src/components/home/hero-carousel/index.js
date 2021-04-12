import React from "react";
import { isEmpty, isArray } from 'lodash';
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const MultiCarouselHome = ({gallery}) => {

    //console.log(gallery);

  if ( isEmpty(gallery) || ! isArray( gallery ) ) {
      return null;
  }
  return (
    <div className="banner flex flex-col sm:flex-row justify-between overflow-hidden md:mr-4">
      <div className="banner-img w-full">
      <Carousel stopOnHover={false} showArrows={true} infiniteLoop={true} interval={4000} autoPlay={true} showThumbs={false} >
          {
              gallery.map( ( item, index ) => {
                  
                  return (
                      <div key={item?.id} style={{ height: "100vh", color: "#fff" , backgroundImage:"url("+item?.featuredImage.node.sourceUrl+")" , backgroundSize:"cover" }}>
                          {/* <img
                              src={item?.featuredImage.node.sourceUrl} loading="lazy" alt={ item?.featuredImage.node.altText ? item?.featuredImage.node.altText : item?.featuredImage.node.title }
                          /> */}
                          <div style={{height: "100%" , display:"flex",alignItems:"center",justifyContent:"center" , flexDirection:"column"}}>
                                <h1>{item.title}</h1>
                                <p dangerouslySetInnerHTML={{__html:item.content.replace( /(<([^>]+)>)/ig, '').substring(0,100)+"..."}} ></p>
                          </div>
                      </div>
                  )
              })
          }
         </Carousel>
      </div>
  </div>
  );
}

export default MultiCarouselHome;