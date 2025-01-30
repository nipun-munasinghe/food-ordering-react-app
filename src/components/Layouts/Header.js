import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import "../../styles/Header.css";
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Food_Assets/assets/logo/logo.png';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link>
              <img src={Logo} alt='Logo' className='img-fluid'/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;