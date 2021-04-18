import React from 'react';
import AllHome from '../AllHome/AllHome';
import AllReview from '../AllReview/AllReview';
import AllService from '../AllService/AllService';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ImageGallery from '../ImageGallery/ImageGallery';

const Home = () => {
    return (
        <div>
            <AllHome></AllHome>
            <ImageGallery></ImageGallery>
            <AllService></AllService>
            <AllReview></AllReview>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;