import React from 'react';
import Navbar from '../Navbar/Navbar';
import FooterScc from '../FooterSec/FooterSce';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Satisfaction from './Satisfaction/Satisfaction';
import Services from './Services/Services';
import SubscribeUs from './SubscribeUs/SubscribeUs';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Services></Services>
           <SubscribeUs></SubscribeUs>
           <Team></Team>
           <Satisfaction></Satisfaction>
           <Blog></Blog>
           <Contact></Contact>
           <FooterScc></FooterScc>
        </div>
    );
};

export default Home;