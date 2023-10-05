import React, { useEffect, useState } from 'react';
import MenuTable from '../features/menu/menutable'
import axios from 'axios';
import '../assets/css/menu.css';

const Menu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the Django backend when the component mounts
    axios.get('http://localhost:8000/menu/') // Replace with the correct API endpoint
      .then((response) => {
        console.log('Fetched Data:', response.data); // Log the fetched data
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <MenuTable data={data} />
  );
}

export default Menu;
