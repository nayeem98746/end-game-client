import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Service.css'

const Service = ({service}) => {
    const [cancel, setCancel] = useState(1);

    const {_id, name, amount, describtion, img} = service
    console.log(_id)
    
    const removeBookings = (id) => {
        const confirm = window.confirm("Are you sure? Want to cancel?");
        if (confirm) {
          fetch(`https://secure-temple-05589.herokuapp.com/delete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                alert("Successfully canceled !");
                setCancel(cancel + 1);
              }
            });
        }
      };
    return (
        <div className="service pb-3  ">
        <img width="300px" src={img} alt="" />
        <h3>{name}</h3>
        <p>{describtion}</p>
        <Link to={`/information/${_id}`} ><button className="btn-class">information{name.toLowerCase()} </button></Link>
        <button style={{marginLeft:'20px'}} className="btn-class" onClick={() => removeBookings(service._id)}>Delete</button>

    </div>
       
    );
};

export default Service;