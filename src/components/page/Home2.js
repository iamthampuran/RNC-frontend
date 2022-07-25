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
  
return (
 
  <div>
    {/* {
     console.log("oooo"+localStorage.token)

    } */}
    <div className='logout'>
      <h4>Welcome {localStorage.name}</h4> 
    <button style={{background:"#3399aa"}} onClick={slogout}>LOG OUT</button>
    </div>
  <Row>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <Col>
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://www.usnews.com/dims4/USNEWS/dadfebd/2147483647/crop/2000x1334%2B0%2B0/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F33%2Fcd%2F58cf2eda41f7900bc231e5874612%2F200212-collegecosts-stock.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Fee Reimbursement</MDBCardTitle>
        <MDBCardText>
          Reimburesement of fees based on Organizational structure and criterias.
        </MDBCardText>
        <MDBBtn href='/form-3'>add new  </MDBBtn><br/><br/>
        <MDBBtn href='/ShowFee'>Show list</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
    <Col>
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://thumbs.dreamstime.com/b/event-planning-concept-events-word-notebook-clock-notepad-computer-desk-98974101.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Event Details</MDBCardTitle>
        <MDBCardText>
          Details of every events under R and C Cell MITS 
        </MDBCardText>
        <MDBBtn href='/form-4'>add new</MDBBtn>
        <br/><br/>
        <MDBBtn href='/ShowEvents'>Show list</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
  <Col>
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://s3.amazonaws.com/aws.upl/nwica.org/webinar3.jpeg' fluid alt='...' />
       
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Funded Projects</MDBCardTitle>
        <MDBCardText>
          Immediate reciept generation of funded projects based on certain criterias
        </MDBCardText>
        <MDBBtn href='form-1'>add new</MDBBtn>
        <br/><br/>
        <MDBBtn href='/ListFP'>Show list</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
  </Row>
  <div><br/></div>
  <Row>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     <Col>
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://www.agastiyarzones.com/image/Journal_Publication.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>

            
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Publication Details</MDBCardTitle>
        <MDBCardText>
      retrieve, filter, sort and export as excel and pdf formats.
        </MDBCardText>
        
        <MDBBtn href='/search'>Show list</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col> 

  <Col>
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://www.ohiodcca.org/wp-content/uploads/2015/12/Members-Only-License-Plate-Blue.jpg' width="70%" fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>

          
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Member</MDBCardTitle>
        <MDBCardText>
         Assign or remove member
        </MDBCardText>
        <MDBBtn href='/AssignMember'>Assign  </MDBBtn>&nbsp;&nbsp;&nbsp;&nbsp;
         <MDBBtn href='/RemoveMember'>Remove </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
  <Col>
    <MDBCard style={{ maxWidth: '24rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://images.static-collegedunia.com/public/college_data/images/campusimage/15873159111.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>official website</MDBCardTitle>
        <MDBCardText>
         Visit the official website of R and C Cell MITS.
         for further details 
        </MDBCardText>
        <MDBBtn href='https://mgmits.ac.in/research/research-and-consultancy-cell/'>click here</MDBBtn>
       
      </MDBCardBody>
    </MDBCard>
  </Col>
  </Row>
  
  </div>
);
}