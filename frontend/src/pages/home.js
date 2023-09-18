import React from 'react'
import Jumbotron from '../features/home/jumbotron';
import BrandVideo from '../features/home/brandvideo';
import About from '../features/home/about';
import '../assets/css/home.css'
import BrandImage from '../features/home/brandimage';


const Home = () => {
    return (
        <div>
            <Jumbotron />
            <BrandVideo />
            <BrandImage />
            <About />
        </div>
    );
}
      
      
      

export default Home