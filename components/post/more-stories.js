import PostPreview from './post-preview'
import { MDBRow } from 'mdb-react-ui-kit'

export default function MoreStories({ posts }) {
  return (
    <>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            More Stories
        </h2>
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
            {posts.map(({ node }) => (
            <PostPreview
                key={node.slug}
                title={node.title}
                coverImage={node.featuredImage?.node}
                date={node.date}
                author={node.author?.node}
                slug={node.slug}
                excerpt={node.excerpt}
            />
            ))}            
        </MDBRow>
      </>
  )
}