import {gql} from "@apollo/client";

const POST_GET_BY_SLUG_QUERY =gql`query{
    posts(first: 10) {
        nodes {
          authorId
          id
          postId
          slug
          title
          content
          featuredImage {
            node {
              altText
              sourceUrl
              srcSet
              uri
            }
          }
          featuredImageId
          status
          }
        }
}`;
export default POST_GET_BY_SLUG_QUERY;