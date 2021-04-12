import cn from 'classnames'
import Link from 'next/link'
import { MDBCardImage } from 'mdb-react-ui-kit';

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <MDBCardImage src={coverImage?.sourceUrl} position='top' alt={slug} />
  )
  return (
   <>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}