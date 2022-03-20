import React from 'react';
import './Doctor.css'

const Doctor = ({doctor}) => {
    const {id, name, Degree, Department,visitAmount, img} = doctor
    return (
        <div className="doctor pb-3">
        <img width='250px' src={img} alt="" />
        <h3>{name}</h3>
        <h2>Visit Amount:{visitAmount}$</h2>
        <h4>{Degree}</h4>
        <h4>{Department}</h4>
    </div>
    );
};

export default Doctor;