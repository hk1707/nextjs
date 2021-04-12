import gql from "graphql-tag";
//import { gql} from '@apollo/client';


const ADD_TO_CART = gql`
  mutation ($input: AddToCartInput!) {
  addToCart(input: $input) {
    clientMutationId
    cartItem {
      key
      product {
        id
        productId
        name
        description
        type
        onSale
        slug
        averageRating
        reviewCount
        image {
          id
          sourceUrl
          altText
        }
        galleryImages {
          nodes {
            id
            sourceUrl
            altText
          }
        }
      }
      quantity
      subtotal
      subtotalTax
      tax
      total
      variation{
        id
        variationId
        name
        description
        type
        onSale
        price
        regularPrice
        salePrice
        image{
          id
          sourceUrl
          altText
        }
        attributes{
          nodes{
            id
            attributeId
            name
            value
          }
        }
      }
    }
  }
  }
`;

export default ADD_TO_CART;
