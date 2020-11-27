import React, { useEffect, useState } from 'react';
import serviceData from '../../fakeData/ServiceData';
const Services = () => {
    const [service, setService] = useState(serviceData);
    return (
        <section id="service" className="service-section">
        <div className="container-fluid">
            <div className="custom-heading"  >
                <h1>Our Services</h1>
            </div>

            <div className="row justify-content-center pt-5 mt-5">
            {
                    service.map ( service => 
                        <div key ={ service.Coursename} className="col-sm-6 col-lg-4 mb-5 pb-4">
                        
                            <div className="service-item">
                            <i className={service.courseIcon}></i>
                        <h3>{service.Coursename}</h3>
                        <p> {service.description}</p>
                    </div>
                        
                    </div>
                    )
                } 
                
               
               
            </div>
        </div>
    </section>
    );
};

export default Services;