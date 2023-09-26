import React, { useEffect, useState } from 'react';
import '../assets/css/home.css';
import Jumbotron from '../features/home/jumbotron';
import BrandVideo from '../features/home/brandvideo';
import About from '../features/home/about';
import BrandImage from '../features/home/brandimage';
import Book from '../features/home/book';
import CoffeePreview from '../features/home/coffeePreview';
import MyCarousel from '../features/home/carousel';
import MyComponent from '../features/home/testcomp';

const Home = () => {
  // State to hold the fetched data
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the Django backend when the component mounts
    fetch('http://localhost:8000/') // Replace with the correct API endpoint
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Jumbotron />
      <MyComponent data={data.key1} />
      <MyCarousel />
      <CoffeePreview />
      <Book />
      <BrandVideo />
      <BrandImage />
      <About />
    </div>
  );
};

export default Home;
