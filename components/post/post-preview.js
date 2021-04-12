import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { MDBCard, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <MDBCol>
    <MDBCard>
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      <MDBCardBody>
      <MDBCardTitle>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
            ></a>
            </Link>
        </MDBCardTitle>
        <MDBCardText>        
            <Date dateString={date} />
        </MDBCardText>
            <div
                className="text-lg leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: excerpt }}
            />
        <Avatar author={author} />
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
  )
}