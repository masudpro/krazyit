import React, { useState } from 'react';
import logo from '../Images/logo.png'


const Navbar = () => {
 const [navbar, setNavbar] = useState(false);
 const navbarAddClass = () =>{
     if (window.scrollY >= 100 ){
         setNavbar(true);
     } else {
        setNavbar(false);
     }
 }   


 window.addEventListener('scroll', navbarAddClass)
    return (
        <div >
            {/* <a href="#bodyId">
            <div className="goTopNone">
                <i className="fas fa-arrow-up"></i>
              </div>
        </a>
        */}
       
            <div id="bodyId" className="topAddress"> 
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-4">
                        
                        +880111111111
                        </div>
                        <div className="col-6 col-md-4 text-right text-sm-center">
                            yourmail@gmail.com
                        </div>
                        <div className="d-none d-md-block col-md-4 topSocial text-right">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i> </a>
                            <a href="#"> <i className="fab fa-linkedin-in"> </i></a>
                            <a href="#"> <i className="fab fa-youtube"> </i></a>
                        </div>
                    </div>
                </div>
            </div>   
            <div className={navbar ? 'navBlock' : 'navBlock d-none'}>
                <nav className="navbar navbar-expand-lg fixed-top px-md-5" id="main-navigation" >
                    <a className="navbar-brand p-0" href="/"><img className="p-0" style={{width: '100px'}} src={logo} alt=""/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars text-white"></i>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto pb-0 text-center" id="nav">
                            <li className="nav-item ">
                            <a className="nav-link" href="#bodyId">Home </a>
                            </li>
                            <li className="nav-item"  >
                            <a className="nav-link" href="#aboutUs">ABOUT US</a>
                            </li>
                            <li className="nav-item" >
                            <a className="nav-link" href="#service">Services</a>
                            </li>
                            <li className="nav-item" >
                            <a className="nav-link" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            
                            <li className="nav-item tShirtPage">
                                <a href="designtshirt" >T-Shirt</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        
    );
};

export default Navbar;