import React from 'react'
import Jumbotron from '../features/home/jumbotron';
import BrandVideo from '../features/home/brandvideo';
import About from '../features/home/about';
import '../assests/css/home.css'


const Home = () => {
    return (
        <div>
            <Jumbotron />
            <BrandVideo />
            <About />
        </div>
    );
}
      
      
      

export default Home