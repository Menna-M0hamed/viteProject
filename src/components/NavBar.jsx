import React from 'react';
import {navbarLinks} from '../data';
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar className='p-0'>
        <img src={logo} style={{height: '45px', width: '80px'}}/>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
          <Nav className="d-flex justify-content-center">
          {navbarLinks.map((link) => {
              const {id, url, text} =link;
              return(
                <div key={id}>
                  <Nav.Link to='#footer'>{text}</Nav.Link>
                </div>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar