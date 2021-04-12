import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import { PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS } from '../../lib/pageapi'
import Related from "./relatedproduct";
import { isEmpty } from 'lodash';
import MultiCarousel from "../../src/components/single-product/gallery-carousel/multicarousel";
import Price from "../../src/components/single-product/price";
import ErrorPage from 'next/error';
import Loader from "../../components/loader";

export default function Product(props) {
	const { product } = props;
    
    //console.log(product)
    //console.log(isEmpty(product))

    const router = useRouter()

    if (router.isFallback && isEmpty(product)) {
      return <ErrorPage statusCode={404} />
    }

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <Loader />
    }

	return (
      <Layout>
          { product ? (
            <div className="single-product container mx-auto py-5 my-5 my-32 px-4 xl:px-0">
              <div className="container" >
                <div className="row">
                      {/* <div className="col"> */}
                        <div className="product-images col-sm-12 col-lg-6">
                          
                          { !isEmpty( product?.galleryImages?.nodes ) ? (
                              <MultiCarousel gallery={product?.galleryImages?.nodes} />
                                            // <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
                          ) : !isEmpty( product.image ) ? (
                                            <img
                                                src={ product?.image?.sourceUrl }
                                                alt="Product Image"
                                                width="100%"
                                                height="auto"
                                                srcSet={ product?.image?.srcSet }
                                            />
                          ) : null }
                        </div>
                        <div className="product-info py-5 col-sm-12 col-lg-6">
                          <h4 className="products-main-title text-2xl uppercase">{ product.name }</h4>
                          <div

                            dangerouslySetInnerHTML={ {
                              __html: product.description,
                            } }
                            className="product-description mb-5"
                          />
                          <Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
                          <AddToCartButton product={ product }/>
                        </div>
                      {/* </div> */}
                  </div>
              </div>
            </div>
          ) : (
            ''
          ) }
          <Related id={product.productId}/>
      </Layout>
	);
};


export async function getStaticProps({ params, preview = false, previewData }) {

    const data = await PRODUCT_SLUGS(params.slug)
   
    return {
      props: {
        preview,
        product: data.product,
      },
    }
  }
  
  export async function getStaticPaths() {
    const allPosts = await PRODUCT_BY_SLUG_QUERY()
  
    return {
      paths: allPosts.nodes.map(({ slug }) => `/product/${slug}`) || [],
      fallback: true,
    }
  }

  

