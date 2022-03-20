import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstimg from '../../../Images/carosul img/firstimg.jpg'
import secondimg from '../../../Images/carosul img/secundimg.jpg'
import thirdimg from '../../../Images/carosul img/thirdimg.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
           <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={firstimg}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className='title-color'>Wellcome to our Hospital</h3>
      <p className='des-color'>A hospital is a health care institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondimg}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='title-color'>Our treatment is extremely good</h3>
      <p className='des-color'>Hospitals are typically funded by public funding, health organisations (for-profit or nonprofit), health insurance companies, or charities, including direct charitable donations. Historically, hospitals were often founded and funded by religious orders, or by charitable individuals and leaders.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdimg}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='title-color'>Our hospital has many kind good Doctors</h3>
      <p className='des-color'>Multi Disciplinary Team approach for best clinical outcomes personalized for you. Most Technologically Advanced Hospitals With Highly Skilled Doctors. Best In-Class Services.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;