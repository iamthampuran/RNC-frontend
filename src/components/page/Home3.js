import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/Row';
import imh1 from "../../images/logomits.png"
import './Home2.css';



export default function Home2() {
  const slogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("name")
    localStorage.removeItem("branch")
    window.location="/sign-in"
  }

return (
 
  <div>
    {/* {
     console.log("oooo"+localStorage.token)

    } */}
    <div className='logout'><h4>Welcome {localStorage.name}</h4> <button style={{background:"#3399aa"}} onClick={slogout}>LOG OUT</button></div>
  <Row>
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <Col>
    <MDBCard style={{ maxWidth: '30rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://www.usnews.com/dims4/USNEWS/dadfebd/2147483647/crop/2000x1334%2B0%2B0/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F33%2Fcd%2F58cf2eda41f7900bc231e5874612%2F200212-collegecosts-stock.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Verify Publication</MDBCardTitle>
        <MDBCardText>
        Verify Publication details
        </MDBCardText>
        <MDBBtn href='/ApprovePublication'>verify  </MDBBtn><br/><br/>
        {/* <MDBBtn href='/form-3'>Show list</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
  </Col>
  
   
  </Row>

  
  </div>
);
}