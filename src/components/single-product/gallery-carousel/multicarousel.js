import React from "react";
import { isEmpty, isArray } from 'lodash';
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const MultiCarouselPage = ({gallery}) => {

  if ( isEmpty(gallery) || ! isArray( gallery ) ) {
      return null;
  }
  return (
    <div className="banner flex flex-col sm:flex-row justify-between overflow-hidden md:mr-4">
      <div className="banner-img w-full">
      <Carousel showArrows={false} >
          {
              gallery.map( ( item, index ) => {
                  
                  return (
                      <div key={item?.id} >
                          <img
                              src={item?.mediaItemUrl} loading="lazy" alt={ item?.altText ? item?.altText : item?.title }
                          />
                      </div>
                  )
              })
          }
         </Carousel>
      </div>
  </div>
  );
}

export default MultiCarouselPage;