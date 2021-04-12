import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/post/container'
import PostBody from '../../components/post/post-body'
import MoreStories from '../../components/post/more-stories'
import PostHeader from '../../components/post/post-header'
import SectionSeparator from '../../components/post/section-separator'
import Layout from '../../components/Layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Tags from '../../components/post/tags'
import { ApolloProvider } from '@apollo/client';
import client from "../../components/Apolloclient";
import {MDBContainer, MDBCard,MDBCardBody } from 'mdb-react-ui-kit';

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges
  //console.log(params.slug)
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    
    <ApolloProvider client={client}>

    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <MDBContainer>
              <Head>
                <title>
                  {post.title} | Next.js {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <MDBCard >
                <MDBCardBody>
                  <PostHeader
                    title={post.title}
                    coverImage={post.featuredImage?.node}
                    date={post.date}
                    author={post.author?.node}
                    categories={post.categories}
                  />
                <PostBody content={post.content} />
                <footer>
                    {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                </footer>
              </MDBCardBody>
            </MDBCard>
            </MDBContainer>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
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
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}