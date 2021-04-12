import React from 'react';
import {
    MDBNavbarToggler,MDBBtn,MDBNavbar,MDBNavbarNav,
    MDBNavbarItem,MDBNavbarLink, MDBContainer,
    MDBIcon } from 'mdb-react-ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CartIcon from "../src/components/cart/CartIcon";  


    const Nav = ( props ) => {

    const { menuitems } = props;
    const [open, setOpen] = React.useState(false);
    const router = useRouter(); 
 
    return (
        <header>
       
        <MDBNavbar className="p-3"  expand='lg' light bgColor='white' fixed>
          <MDBContainer>
            <MDBNavbarToggler 
              aria-controls='navbarExample01'
              aria-expanded='true'
              aria-label='Toggle navigation'
              onClick={() => {
                setOpen(!open);
              }}
            >
              <MDBIcon fas icon='bars' />
            </MDBNavbarToggler>
            <div className= {`collapse navbar-collapse ${open == true ? 'show' : ' '}`} id='navbarExample01'>
              <MDBNavbarNav right className='mb-2 mb-lg-0'>
               
                  {
                    menuitems.map( item => 
                      <MDBNavbarItem key={item.node.id}>
                         <Link href={item.node.path} ><MDBBtn color='link'>{item.node.label}</MDBBtn></Link> 
                      </MDBNavbarItem>

                      )
                  }
                  <MDBNavbarItem >
                       <MDBBtn color='link'><Link href= '/posts' >post</Link></MDBBtn> 
                  </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
            {/* <form className='d-flex input-group w-auto m-2'  >
              <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form> */}
            <div>
              <CartIcon />
            </div>
          </MDBContainer>
        </MDBNavbar>

        

      </header>
    )

};



export default Nav;