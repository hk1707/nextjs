import { useState } from "react";
import postQuety from "../query/postQuety";
import { useQuery } from '@apollo/client';
import {MDBContainer, MDBCard,MDBBtn, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Loader from "./loader";



const PostList = ( ) => {

  const [count, setCount] = useState(6);
  
  const onLoadMore = () => { 
    
    setCount(count+2);
    
    fetchMore({
      
      variables: {
        first: count,
        //after: data.posts.pageInfo.endCursor
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // fetchMoreResult.posts.pageInfo.endCursor = [
        //   ...prev.posts.pageInfo.endCursor,
        //   ...fetchMoreResult.posts.pageInfo.endCursor
        // ]
       // console.log(fetchMoreResult)
        return fetchMoreResult;
      }

      })     
    };
  

    const router = useRouter(); 

    const { data, error, loading, fetchMore } = useQuery(postQuety, {
        variables: {first: 4 , after: null }
      });
     
      if (loading) return <Loader />;
      if (error) return true;
      if (!data) return <p>Not found</p>;
      //console.log(data.posts);
      const postItems = data.posts.nodes;
      const hasNextPage = data.posts.pageInfo.hasNextPage;
    return( 
               
        <MDBContainer style={{marginTop:"100px"}}> 
            <h1 style={{textAlign:"center", paddingBottom:"30px"}}>Our Blog</h1>
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                {
                    postItems.map( item => 
                        <MDBCol key={item.id} >                        
                        <MDBCard style={{ maxWidth: '100%' }} className='shadow-5'>
                        <MDBRow className='g-0'>
                            <MDBCol md='4'>
                            {
                              item.featuredImage != null ?(
                                    <MDBCardImage src={item.featuredImage.node.sourceUrl} alt='...' fluid />
                              ):('') 
                            }
                            
                            </MDBCol>
                            <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>{item.title}</MDBCardTitle>
                                <MDBCardText dangerouslySetInnerHTML={{__html:item.content.replace( /(<([^>]+)>)/ig, '').substring(0,100)+"..."}} >
                                    
                                </MDBCardText>
                                <MDBCardText>
                                   <Link href={ "posts/"+item.slug } ><MDBBtn outline className='mx-2' color='dark' >View</MDBBtn></Link>
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                        </MDBCard>
                      </MDBCol>     
                    )
                    
                     
                }
                <MDBRow>
                  { hasNextPage ? (
                    
                    <MDBCol><MDBBtn onClick={() => { onLoadMore() }}>Load More</MDBBtn></MDBCol>

                  ) : ('') }
                   
                </MDBRow>
            </MDBRow>
        </MDBContainer>
    )

}


export default PostList;

// const  endCursor  = data.posts.pageInfo.endCursor;
// console.log(endCursor)
// fetchMore({
//     variables: {
//         after: endCursor,
//     },
//   }).then(fetchMoreResult => {
//     // Update variables.limit for the original query to include
//     // the newly added feed items.
//     //setLimit(fetchMoreResult.data.posts.pageInfo.endCursor);
//     console.log(fetchMoreResult.data.posts.pageInfo.endCursor)
//   });
// }}