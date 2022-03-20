import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/doctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className='row'>
            <h2>Our Doctors</h2>
            <div className='doctor-con'>
                {
                    doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;