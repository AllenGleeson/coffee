import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Specify the URL to the worker script
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ pdf }) => {
  return (
    <div>
      {pdf ? (
        <Document file={pdf}>
          <Page pageNumber={1} />
        </Document>
      ) : (
        <div>No PDF file specified.</div>
      )}
    </div>
  );
};

export default PDFViewer;