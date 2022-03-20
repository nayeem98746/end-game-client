import React from 'react';
import About from '../../About/About';
import Doctors from '../../Doctors/Doctors';
import Footer from '../../Footer/Footer';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <About></About>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;