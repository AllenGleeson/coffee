import React from 'react'
import '../assets/css/home.css'
import Jumbotron from '../features/home/jumbotron';
import BrandVideo from '../features/home/brandvideo';
import About from '../features/home/about';
import BrandImage from '../features/home/brandimage';
import Book from '../features/home/book'
import Coffees from '../features/home/coffees'



const Home = () => {
    return (
        <div>
            <Jumbotron />
            <Coffees />
            <Book />
            <BrandVideo />
            <BrandImage />
            <About />
        </div>
    );
}
      
      
      

export default Home