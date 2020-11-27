import React from 'react';
import logo from '../Images/logo.png'
const FooterSce = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-md-3 mb-4 footerLogo">
                        <img src={logo} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste cum tenetur! Eum, ea commodi soluta minus dolores totam ?</p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h4>Head Quarter -</h4>
                        <h6>Gregory Hills</h6>
                        <h6>New South Wales</h6>
                        <h6>Australia</h6>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h4>Development Centre </h4>
                        <h6>Bhuiyan Mansion</h6>
                        <h6>Motijheel, Dhaka</h6>
                        <h6>Bangladesh</h6>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h4>Contact Us</h4>
                        <h6>+880111111111</h6>
                        <h6>yourmail@gmail.com</h6>

                        <div className="footerSocial mt-3">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i> </a>
                            <a href="#"> <i className="fab fa-linkedin-in"> </i></a>
                            <a href="#"> <i className="fab fa-youtube"> </i></a>
                        </div>    
                    </div>
                        
                </div>
            </div>
        </footer>
    );
};

export default FooterSce;