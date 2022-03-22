import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DoctorInformation = () => {
    const {doctor} = useParams()
    const [details, setDetails] = useState([])
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        fetch(`https://secure-temple-05589.herokuapp.com/doctors`)
        .then(res=>res.json()) 
        .then(data => setDetails(data))
        .then(data => console.log(data))
    },[])
    const product=details.find(pd => pd._id == doctor)
    console.log(product)

    useEffect(() => {
        fetch(`https://secure-temple-05589.herokuapp.com/review/${id}`)
          .then((res) => res.json())
          .then((data) => setReviews(data));
      }, [id]);


    return (
        <div >
             <img src={product?.img} alt="" />
            <h2>this is all informatioin:{doctor}</h2>
            <h3>Name : {product?.name}</h3>
            <h3>Amount : {product?.price}$</h3>
            <h3>Description : {product?.describtion}</h3>
            <Link as={Link} to='/appointment' ><button>Get Appointment</button> </Link>
            <div>
            <h2>Reviews:</h2>
      <Row className="g-3 my-3">
        {reviews.map((r) => {
          if (r.status === "approved") {
            return (
              <div className="col-md-6 col-lg-4 shadow p-3">
                <h5>{r.name}</h5>
                <p>{r.comments}</p>
              </div>
            );
          }
        })}
      </Row>
            </div>
        </div>
    );
};

export default DoctorInformation;