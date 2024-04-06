import React from 'react'
import Contact from '../features/contact/contact';
import ParallaxHeader from '../features/menu/parallaxHeader';

const Home = () => {
    return (
        <div className='contact-page'>
            <Contact />
            <ParallaxHeader />
        </div>
    );
}

export default Home