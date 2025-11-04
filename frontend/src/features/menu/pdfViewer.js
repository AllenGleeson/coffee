import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Specify the URL to the worker script
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log('PDF loaded successfully, pages:', numPages);
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error('Error loading PDF:', error);
    console.error('PDF URL:', pdf);
    setError('Failed to load PDF file. Please check the console for details.');
    setLoading(false);
  };

  const renderPages = () => {
    const pages = [];
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      pages.push(
        <Page 
          key={pageNumber} 
          pageNumber={pageNumber} 
          renderTextLayer={false} 
          renderAnnotationLayer={false} 
        />
      );
    }
    return pages;
  };

  if (!pdf) {
    return <div>No PDF file specified.</div>;
  }

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p style={{ color: 'red' }}>{error}</p>
        <p>PDF URL: {pdf}</p>
        <p>Try accessing the PDF directly: <a href={pdf} target="_blank" rel="noopener noreferrer">Open PDF</a></p>
      </div>
    );
  }

  return (
    <div>
      {loading && <div style={{ textAlign: 'center', padding: '20px' }}>Loading PDF...</div>}
      <Document 
        file={pdf} 
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<div style={{ textAlign: 'center', padding: '20px' }}>Loading PDF...</div>}
      >
        {numPages && renderPages()}
      </Document>
    </div>
  );
};

export default PDFViewer;