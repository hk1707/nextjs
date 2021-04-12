import Error from 'next/error';

const API_URL = "http://hitesh.demoproject.info/graphql"

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  
  //console.log('res ', res);

  const json = await res.json()
  if (json.errors) {

   return false;
  
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.page
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      pages(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.pages
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      pages(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: preview,
        preview,
      },
    }
  )
  
  console.log(data);

  return data?.pages
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  // const postPreview = preview && previewData?.page

  // // The slug may be the id of an unpublished post
  // const isId = Number.isInteger(Number(slug))
  // const isSamePost = isId
  //   ? Number(slug) === postPreview.id
  //   : slug === postPreview.slug
  // const isDraft = isSamePost && postPreview?.status === 'draft'
  // const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `

     query PostBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        parentId
        slug
        title
        content
        uri
        isFrontPage
        isPreview
        authorId
      }
    }
      
  `,
    {
      variables: {
        id: `/${slug}`,
        idType: 'URI',
      },
    }
  )

  return data
}


export async function PRODUCT_BY_SLUG_QUERY() {
  const data = await fetchAPI(`
    {
      products(first: 5000) {
        nodes {
          id
          slug
        }
      }
    }
  `)
  return data?.products
}

export async function PRODUCT_SLUGS(slug) {
  
  const data = await fetchAPI(
    ` query singleProduct($id:ID!, $idType:ProductIdTypeEnum!) {
      product(id:$id, idType:$idType) {
        id
        productId
        averageRating
        slug
        description
        galleryImages {
          nodes {
            id
            title
            altText
            mediaItemUrl
          }
        }
        image {
          id
          uri
          title
          srcSet
          sourceUrl
        }
        name
        ... on SimpleProduct {
          price
          id
          regularPrice
        }
        ... on VariableProduct {
          price
          id
          regularPrice
        }
        ... on ExternalProduct {
          price
          id
          regularPrice
          externalUrl
        }
        ... on GroupProduct {
          products {
            nodes {
              ... on SimpleProduct {
                id
                price
                regularPrice
              }
            }
          }
          id
        }
      }
    }
    
  `,
  {
    variables: {
      id: slug,
      idType: 'SLUG',
    },
  }
  )

  return data
}