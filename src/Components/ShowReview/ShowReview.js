import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowReview = () => {
    const [reviews , setReviews] = useState([])
    useEffect( () => {
        fetch('https://secure-temple-05589.herokuapp.com/addReview')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])
    return (
        <div>
          
          <h1>Review</h1>
      <div className="services">
        <div className="row container">
          {reviews?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                 
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.email}</p>
                <p>{pd.comments}</p>
                <p>{pd.rating}</p>
                {/* <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default ShowReview;