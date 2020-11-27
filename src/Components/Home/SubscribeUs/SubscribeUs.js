import React from 'react';

const SubscribeUs = () => {
    return (
        <section className="subscribe-form py-0 mt-5">
        <div className="container-fluid">
            <div className=" ">
                <form action="" >
                    <div className="row ">
                    <div className="form-group col-6 col-sm-5">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                    </div>
                    <div className="form-group  col-6 col-sm-5">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="col-12 col-sm-2 text-center">
                       <button className="subscribe-btn "> <i className="fas fa-paper-plane"></i></button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default SubscribeUs;