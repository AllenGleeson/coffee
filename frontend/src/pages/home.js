import React, { useEffect, useState } from 'react';
import '../assets/css/home.css';
import Jumbotron from '../features/home/jumbotron';
import BrandVideo from '../features/home/brandvideo';
import About from '../features/home/about';
import CoffeePreview from '../features/home/coffeePreview';
import InstagramFeed from '../features/home/instagram'
import axios from 'axios';

const Home = () => {
  // State to hold the fetched data
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the Django backend when the component mounts
    axios.get('http://localhost:8000/') // Replace with the correct API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
      });
  }, []);
  return (
    <div className="react-components">
      <Jumbotron heading={data.jumbotron && data.jumbotron.heading} subheading={data.jumbotron && data.jumbotron.subheading} />
      <CoffeePreview
        heading={data.coffeeinfo && data.coffeeinfo.heading}
        description={data.coffeeinfo && data.coffeeinfo.description}
        nodes={data.coffeeinfonode && data.coffeeinfonode} />
      <BrandVideo
        heading={data.brandvideo && data.brandvideo.heading}
        description={data.brandvideo && data.brandvideo.description}
        url={data.brandvideo && data.brandvideo.url}
      />
      <InstagramFeed />
      <About description={data.about && data.about.description} lat={data.about && data.about.lat} lng={data.about && data.about.lng} />
    </div>
  );
};

export default Home;