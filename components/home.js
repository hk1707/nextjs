
import {MDBContainer, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import PostList from "./postlist";
import HeroCarousel  from "../src/components/home/hero-carousel";

const Home = ( props ) => {

  const { slide } = props;

    return(
        <>
          <HeroCarousel gallery={slide} />
          < PostList />
        
        </> );

};
export default Home;