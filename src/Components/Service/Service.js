import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, amount, describtion, img} = service
    return (
        <div className="service pb-3  ">
        <img width="300px" src={img} alt="" />
        <h3>{name}</h3>
        <p>{describtion}</p>
        <Link to={`/information/${id}`} ><button className="btn-class">information{name.toLowerCase()} </button></Link>
    </div>
       
    );
};

export default Service;