import React from 'react';
import './Doctor.css'

const Doctor = ({doctor}) => {
    const {_id, name, Degree, Department,price,text,department, img} = doctor
    return (
        <div className="doctor pb-3">
        <img width='250px' src={img} alt="" />
        <h3>{name}</h3>
        <h2>Visit Amount:{price}$</h2>
        <h4>{text}</h4>
        <h4>{department}</h4>
    </div>
    );
};

export default Doctor;