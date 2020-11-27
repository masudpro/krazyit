import React from 'react';
import aboutUsImage from '../../Images/about.jpg';

const AboutUs = () => {
    return (
        <section id="aboutUs" className="about-us-section pt-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                    <div className="about-us-img">
                        <img className="w-100" src={aboutUsImage} alt="" />
                        <i className="fas fa-play video-button" data-toggle="modal" data-target=".bd-example-modal-lg"></i>
                    </div>
                </div>
                <div className="col-md-6" data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                   <div className="about-us-content ">
                    <div className="custom-heading " >
                        <h1  >About us</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores incidunt quibusdam nam omnis sed vel facilis explicabo amet commodi, ex culpa asperiores nihil delectus temporibus itaque similique! Dicta, aut et.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores incidunt quibusdam nam omnis sed Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores incidunt quibusdam nam omnis sed vel facilis explicabo amet commodi, ex culpa asperiores nihil delectus temporibus itaque similique! Dicta, aut et.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores incidunt quibusdam nam omnis sed .</p>
                   </div>
                </div>

             </div>

             <div className="modal fade bd-example-modal-lg"  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">About Us</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                          <iframe className="embed-responsive-item " src="https://www.youtube.com/embed/x-U8eb_vuS0"
                            ></iframe>


                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                  </div>
                </div>
              </div>
        </div>
    </section>
    );
};

export default AboutUs;