import React, { useEffect, useState } from 'react';
import '../assets/css/home.css';
import Jumbotron from '../features/home/jumbotron';
import BrandVideo from '../features/home/brandvideo';
import About from '../features/home/about';
import ParallaxHeader from '../features/home/parallaxheader';
import Book from '../features/home/book';
import CoffeePreview from '../features/home/coffeepreview';
import MyCarousel from '../features/home/carousel';
import axios from 'axios';

const Home = () => {
  // State to hold the fetched data
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the Django backend when the component mounts
    axios.get('http://localhost:8000/') // Replace with the correct API endpoint
      .then((response) => {
        console.log('Fetched Data:', response.data); // Log the fetched data
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <Jumbotron heading={data.jumbotron && data.jumbotron.heading} subheading={data.jumbotron && data.jumbotron.subheading} />
      {/* <MyCarousel
        heading={data.coffeeinfo && data.coffeeinfo.heading}
        subheading={data.coffeeinfo && data.coffeeinfo.subheading}
        img={data.coffeeinfo && data.coffeeinfo.img}
        description={data.coffeeinfo && data.coffeeinfo.description}
      /> */}
      <CoffeePreview
        heading={data.coffeeinfo && data.coffeeinfo.heading}
        description={data.coffeeinfo && data.coffeeinfo.description}
        nodes={data.coffeeinfonode && data.coffeeinfonode} />
      <Book />
      <BrandVideo
        heading={data.brandvideo && data.brandvideo.heading}
        description={data.brandvideo && data.brandvideo.description}
        url={data.brandvideo && data.brandvideo.url}
      />
      <ParallaxHeader heading={data.parallaxheader && data.parallaxheader.heading} subheading={data.parallaxheader && data.parallaxheader.subheading} />
      <About description={data.about && data.about.description} lat={data.about && data.about.lat} lng={data.about && data.about.lng} />
    </div>
  );
};

export default Home;