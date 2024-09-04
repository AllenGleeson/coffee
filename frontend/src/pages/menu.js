import React, { useEffect, useState } from 'react';
import PDFViewer from '../features/menu/pdfViewer';
import axios from 'axios';
import '../assets/css/menu.css';
import ParallaxHeader from '../features/menu/parallaxHeader';

function Menu() {
  const [data, setData] = useState({});

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    // Fetch data from the Django backend when the component mounts
    axios.get(`${apiUrl}menu/`) // Replace with the correct API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <section>
      <ParallaxHeader />
      <div class="align-items-center d-flex justify-content-center menu pdf-container">
        <PDFViewer pdf={data.pdfviewer && data.pdfviewer.pdf_url} />
      </div>
    </section>
  );
}

export default Menu;