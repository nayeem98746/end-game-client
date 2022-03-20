import React from 'react';
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
            <Footer></Footer>
            
        </div>
    );
};

export default Home;