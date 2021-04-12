import {gql} from "@apollo/client";

export const POST_QUERY_ALL =gql`query{
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
 



const POST_QUERY =gql`
  query  
    Posts($first:Int , $after:String) {
    __typename
    posts(first: $first, after: $after) {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  
`;
export default POST_QUERY;