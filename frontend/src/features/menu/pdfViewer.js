import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Specify the URL to the worker script
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
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

  return (
    <>
      {pdf ? (
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {numPages && renderPages()}
        </Document>      
      ) : (
        <div>No PDF file specified.</div>
      )}
    </>
  );
};

export default PDFViewer;