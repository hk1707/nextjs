import {  MDBCardTitle } from 'mdb-react-ui-kit';

export default function PostTitle({ children }) {
  
    return ( <MDBCardTitle  > <div dangerouslySetInnerHTML={{ __html: children }} ></div>  </MDBCardTitle> )

}