import React from 'react';
import { Col, Row } from 'react-bootstrap';
import second from '../../Images/carosul img/firstimg.jpg'
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
          
  <Row style={{
      border:'2px solid black',
      margin:'20px',
      display:'flex',
      alignItems:'center'


  }}>
       <Col>
    <img width='1000px' src={second} alt="" />
    </Col>
    <Col>
        <h2>About Us</h2>
        <p>A hospital is a health care institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.[2] The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care. Specialized hospitals include trauma centers, rehabilitation hospitals, children's hospitals, seniors' (geriatric) hospitals, and hospitals for dealing with specific medical needs such as psychiatric treatment (see psychiatric hospital) and certain disease categories. Specialized hospitals can help reduce health care costs compared to general hospitals.[3] Hospitals are classified as general, specialty, or government depending on the sources of income received.

A teaching hospital combines assistance to people with teaching to health science students and auxiliary healthcare students. A health science facility smaller than a hospital is generally called a clinic. Hospitals have a range of departments (e.g. surgery and urgent care) and specialist units such as cardiology. Some hospitals have outpatient departments and some have chronic treatment units. Common support units include a pharmacy, pathology, and radiology.</p>
    </Col>
   
  </Row>
  {/* <Footer></Footer> */}
        </div>
    );
};

export default About;