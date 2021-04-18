import React from 'react';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import LaundryMain from './LaundryMain/LaundryMain';
import OurBlog from './OurBlog/OurBlog';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import WhyStarLaundry from './WhyStarLaundry/WhyStarLaundry';

const Home = () => {
    return (
        <div>
            <Header />
            <LaundryMain />
            <Services />
            <WhyStarLaundry />
            <Testimonials />
            <OurBlog />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;