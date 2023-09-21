import React from 'react'
import '../assets/css/home.css'
import Jumbotron from '../features/home/jumbotron';
import BrandVideo from '../features/home/brandvideo';
import About from '../features/home/about';
import BrandImage from '../features/home/brandimage';
import Book from '../features/home/book';
import CoffeePreview from '../features/home/coffeePreview';
import MyCarousel from '../features/home/carousel';



const Home = () => {
    return (
        <div>
            <Jumbotron />
            <MyCarousel />
            <CoffeePreview />
            <Book />
            <BrandVideo />
            <BrandImage />
            <About />
        </div>
    );
}
      
      
      

export default Home