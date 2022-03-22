import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://secure-temple-05589.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div style={{marginTop:'30px',marginBottom:'80px'}} className='row'>
            <h2 style={{color:"Highlight", textAlign:'center'}}>Our Doctors</h2>
            <div className='doctor-con'>
                {
                    doctors.map(doctor => <Doctor
                    key={doctor._id}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Doctors;