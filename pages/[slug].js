import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/post/container'
import PostBody from '../components/post/post-body'
import Layout from '../components/Layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../lib/pageapi'
//import PostTitle from '../components/post-title'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client';
import client from "../components/Apolloclient";



export default function Page({ page , preview }) {
    const router = useRouter()

    //console.log(page)
    //console.log(!router.isFallback)
    //const morePosts = pages?.edges
    
    if (!router.isFallback && !page?.slug  || page == null) {
      return <ErrorPage statusCode={404} />
    }
  
    return (
      
      <ApolloProvider client={client}>
      
      <Layout>
      <Head>
         {
            // page.author.node.enqueuedStylesheets.edges.map( item => <>
            //   <link rel="stylesheet" href={item.node.src} /> </>   
            // )
            
         }
         {
            // page.author.node.enqueuedScripts.edges.map( item => <>
            //   <script type="text/javascript" src={item.node.src} ></script>
            //   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> </>   
            // )
         }
      </Head>
        <Container>
        <PostBody content={page.content} />
        </Container>
      </Layout>
      </ApolloProvider>
    )
  }
  
  export async function getStaticProps({ params, preview = false, previewData }) {
  
    const data = await getPostAndMorePosts(params.slug, preview, previewData)
    return {
      props: {
        preview,
        page: data.page,
      },
    }
 
  }
  
  export async function getStaticPaths() {

    const allPosts = await getAllPostsWithSlug()
    return {
      paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
      fallback: true,
    }
  
  }