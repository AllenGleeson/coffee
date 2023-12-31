import React, { useEffect, useState } from 'react';
import MenuTable from '../features/menu/menutable';
import PDFViewer from '../features/menu/pdfViewer';
import axios from 'axios';
import '../assets/css/menu.css';

function Menu() {
  const [data, setData] = useState({ menuitems: [], pdfviewer: null });

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
    <section className="align-items-center d-flex justify-content-center menu">
      <MenuTable items={data.menuitems} />
      <PDFViewer pdf={data.pdfviewer && data.pdfviewer.pdf_url} />
    </section>
  );
}

export default Menu;