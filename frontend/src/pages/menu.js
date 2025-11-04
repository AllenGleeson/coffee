import React, { useEffect, useState } from 'react';
import PDFViewer from '../features/menu/pdfViewer';
import axios from 'axios';
import '../assets/css/menu.css';
import ParallaxHeader from '../features/menu/parallaxHeader';

function Menu() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Default API URL if not set in environment
    const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api/';
    console.log('Fetching menu data from:', `${apiUrl}menu/`);
    
    // Fetch data from the Django backend when the component mounts
    axios.get(`${apiUrl}menu/`)
      .then((response) => {
        console.log('Menu data received:', response.data);
        console.log('PDF URL:', response.data?.pdfviewer?.pdf_url);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching menu data:', error);
        console.error('Error details:', error.response?.data || error.message);
        // Set empty data structure to prevent crashes
        setData({});
      });
  }, []);

  return (
    <section>
      <ParallaxHeader />
      <div className="align-items-center d-flex justify-content-center menu pdf-container">
        <PDFViewer pdf={data.pdfviewer && data.pdfviewer.pdf_url} />
      </div>
    </section>
  );
}

export default Menu;