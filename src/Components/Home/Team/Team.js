import React, { useEffect, useState } from 'react';
import teamData from '../../fakeData/TeamData';
const Team = () => {
    const [team, setTeam] = useState(teamData);
    return (
        // <div>
        //     {
        //             team.map ( team => 
        //                 <div key ={team.name} className="col-sm-6 col-lg-4 mb-5 pb-4">
                        
        //                     <div className="service-item">
        //                 <h3>{team.name}</h3>
        //                 <p> {team.degination}</p>
        //                 <img src={team.image} alt=""/>
        //             </div>
                        
        //             </div>
        //             )
        //         } 
        // </div>

    <section id="team">
        <div className="container-fluid">
            <div className="custom-heading">
                <h1>Our Team</h1>
            </div>
            <div className="row justify-content-center text-center mt-5">
                {
                    team.map ( team => 
                        <div key ={team.name} className="col-sm-6 col-lg-3 mb-4">
                            <div className="team-part ">
                                <div className="team-photo d-flex justify-content-center">
                                <img src={team.image} alt=""/>
                                </div>
                                <div className="team-desc">
                                    <h4>{team.name}</h4>
                                    <h6>{team.degination}</h6>
                                    <h6>{team.education}</h6>
                                    <div className="team-social-media">
                                        <a href={team.facebook}><i className="fab fa-facebook-f"></i></a>
                                        <a href={team.twitter}><i className="fab fa-twitter"></i> </a>
                                        <a href={team.linkedin}> <i className="fab fa-linkedin-in"> </i></a>
                                    </div>
                                </div>
                            </div>
                         </div>
                    )
                } 
                    
                </div>
        </div>
    </section>
    );
};

export default Team;