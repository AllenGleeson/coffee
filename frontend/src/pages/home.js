import React from 'react'
import '../assets/css/home.css'
import Jumbotron from '../features/home/jumbotron';
import BrandVideo from '../features/home/brandvideo';
import About from '../features/home/about';
import BrandImage from '../features/home/brandimage';
import Book from '../features/home/book';
import CoffeePreview from '../features/home/coffeePreview';



const Home = () => {
    return (
        <div>
            <Jumbotron />
            <CoffeePreview />
            <Book />
            <BrandVideo />
            <BrandImage />
            <About />
        </div>
    );
}
      
      
      

export default Home