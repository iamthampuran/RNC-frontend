import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/Row';
import imh1 from "../../images/logomits.png"
import './Home2.css'


export default function Home2() {
  const slogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("name")
    localStorage.removeItem("branch")
    window.location="/sign-in"
  }
  console.log("Branch = ",localStorage.branch,"Name = ",localStorage.name)
return (
 
  <div>
    {/* {
     console.log("oooo"+localStorage.token)

    } */}
    <div className='logout'><h4>Welcome {localStorage.name}, of {localStorage.branch}</h4> <button style={{background:"#3399aa"}} onClick={slogout}>LOG OUT</button></div>
  <Row>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
    <Col>
    <MDBCard style={{ maxWidth: '33rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://cdn.vox-cdn.com/thumbor/4bIDn1aNxrUWu7sUbCcPGojI6gM=/0x10:1000x760/1200x800/filters:focal(0x10:1000x760)/cdn.vox-cdn.com/uploads/chorus_image/image/48996123/shutterstock_212822350.0.0.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>

            
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Publication Details</MDBCardTitle>
        {/* <MDBCardText>
          Add details of new Publications  through a form 
        </MDBCardText>
        <MDBBtn href='/add-details'>add new</MDBBtn>
        <br/><br/> */}
        <MDBBtn href='/add-details'>add new</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
   
    <Col>
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>View profile</MDBCardTitle>
        <MDBCardText>
        
        </MDBCardText>
        <MDBBtn href='/ViewProfile'>view</MDBBtn>
        
      </MDBCardBody>
    </MDBCard>
  </Col>
 </Row>

  
  </div>
);
}