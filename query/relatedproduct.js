import {gql} from "@apollo/client";

 const RELATED_PRODUCT_QUERY = gql`
 query($exclude: [Int!]){
  products(first:4 , where: {exclude: $exclude}) {
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
}`;

export default RELATED_PRODUCT_QUERY;