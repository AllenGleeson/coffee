import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import logo from '../assets/images/logo.PNG';
import '../assets/css/nav.css';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Add the white-background class when scrolling
        setScrolling(true);
      } else {
        // Remove the white-background class when at the top
        setScrolling(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define a CSS class based on the scrolling state
  const headerClass = scrolling ? 'bg-nav white-background' : 'scale-bg bg-nav';

  return (
    <header className='fixed-top'>
      <Navbar className={headerClass} id="nav">
        <Nav className="left">
          <NavItem>
            <NavLink className='nav-button slideRightSmall' href="/menu">MENU</NavLink>
          </NavItem>
        </Nav>
        <Navbar.Brand href="/">
          <img id="logo" className='spin-once-fuzzy' src={logo} alt="logo" />
        </Navbar.Brand>
        <Nav className="right">
          <NavItem>
            <NavLink className='nav-button slideLeftSmall' href="/contact">CONTACT</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;