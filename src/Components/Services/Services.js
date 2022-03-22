import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://secure-temple-05589.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='row'>
            <h2 style={{
                marginTop:'50px',
                textAlign:'center',
                color:'Highlight'
                
            }}>Our Service</h2>
            <div className='service-con'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }

            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Services;