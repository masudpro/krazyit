import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-us py-5">
        <div className="container-fluid p-0 m-0">
             <div className=" text-center">
                <h1>Contact</h1>
            </div>
            <div className="row p-0 m-0 justify-content-center">
                <div className="col-md-10 col-lg-8 p-0" data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                              </div>
                            <div className="form-group">
                              <select className="form-control custom-select mr-sm-2" id="exampleFormControlSelect1">
                                  <option className="selected">Select Your Service</option>
                                <option>Web Design</option>
                                <option>Web Design</option>
                                <option>Web Development</option>
                                <option>Graphics Design</option>
                                <option>Video Editing</option>
                                <option>Digital marketing </option>
                                <option>Seo</option>
                                <option>Others</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <textarea className="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button className="contact-btn "> SEND </button>
                          </form>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
};

export default Contact;