import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/service.json')
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
                    key={service.id}
                    service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;