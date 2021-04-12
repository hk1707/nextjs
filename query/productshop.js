import {gql} from "@apollo/client";

const PRODUCT_QUERY_NEW = gql`
query  
  Productsd( $first:Int ,  $maxPrice:Float , $field: ProductsOrderByEnum! , $order: OrderEnum) {
  products(first:$first , where: { maxPrice: $maxPrice , orderby: {field:$field , order:$order}}) {
      nodes {
        id
        productId
        averageRating
        slug
        description
        image {
          uri
          title
          srcSet
          sourceUrl
        }
        name
        ... on VariableProduct {
          id
          name
          price
          productId
          regularPrice
          image{
            id
            title
            altText
            uri
            sourceUrl
            srcSet
          }
        }
        ... on SimpleProduct {
          id
          name
          averageRating
          price
          productId
          image {
            id
            title
            altText
            uri
            sourceUrl
            srcSet          
          }
        }
      }
  }
  }
  `;


  export default PRODUCT_QUERY_NEW;
