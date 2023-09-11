import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function RootLayout(props) {
  return (
    <div className='root-layout'>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};