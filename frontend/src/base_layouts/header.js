import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import logo from '../assests/logo.PNG'
import '../assests/css/nav.css'

const Header = () => {

  return (
    <header>
        <Navbar className='bg-nav flex-nowrap justify-content-between' id='nav'>
            <Navbar.Brand href="/">
                <img id="logo" src={logo} alt="logo" />
            </Navbar.Brand>
            <Nav>
                <NavItem>
                    <NavLink href="/">
                        HOME
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/menu">
                        MENU
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contact">
                        CONTACT
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </header>
  );
};

export default Header;