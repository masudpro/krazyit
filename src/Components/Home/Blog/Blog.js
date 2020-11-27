import React from 'react';
import blogOne from '../../Images/blog (1).jpg'
import blogTwo from '../../Images/blog (2).jpg'
import blogThree from '../../Images/blog (3).jpg'
import blogFour from '../../Images/blog (4).jpg'

const Blog = () => {
    return (
        <section id="blog">
        <div className="container-fluid">
            <div className="custom-heading">
                <h1>Recent Blog</h1>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 mb-4" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-sm-6 ">
                           <div className="blog-image">
                             <img className="img-fluid" src={blogOne} alt="" />
                             <span> 12/05/2020 </span> 
                             
                           </div>
                        </div>
                        <div className="col-sm-6 pt-4 pt-sm-0   ">
                            <h5>Lorem ipsum dolor sit amet </h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.<a href="#" className="text-primary"> More</a> </p>
                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-sm-6 ">
                           <div className="blog-image">
                           <img className="img-fluid" src={blogTwo} alt="" />
                             <span> 12/05/2020 </span> 
                             
                           </div>
                        </div>
                        <div className="col-sm-6 pt-4 pt-sm-0   ">
                            <h5>Lorem ipsum dolor sit amet </h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.<a href="#" className="text-primary"> More</a> </p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-sm-6 ">
                           <div className="blog-image">
                           <img className="img-fluid" src={blogThree} alt="" />
                             <span> 12/05/2020 </span> 
                             
                           </div>
                        </div>
                        <div className="col-sm-6 pt-4 pt-sm-0   ">
                            <h5>Lorem ipsum dolor sit amet </h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.<a href="#" className="text-primary"> More</a> </p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-sm-6 ">
                           <div className="blog-image">
                           <img className="img-fluid" src={blogFour} alt="" />
                             <span> 12/05/2020 </span> 
                             
                           </div>
                        </div>
                        <div className="col-sm-6 pt-4 pt-sm-0   ">
                            <h5>Lorem ipsum dolor sit amet </h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.<a href="#" className="text-primary"> More</a> </p>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>   
    );
};

export default Blog;