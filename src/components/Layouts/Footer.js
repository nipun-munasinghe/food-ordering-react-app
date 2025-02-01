import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Location</h5>
              <p>No 320/A, Business Rd</p>
              <p>Colombo 8</p>
              <p>Sri Lanka</p>
            </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Working Hours</h5>
              <p>Mon-Fri: 9:00AM - 10:00PM</p>
              <p>Saturday: 10:00AM - 10:30PM</p>
              <p>Sunday: 12:00PM - 9:00PM</p>
            </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Order Now</h5>
              <p>Get your delicious meal fast!</p>
              <p>
                <Link to='tel:+94112223344' className='calling'>
                  +94 11-222-33-44
                </Link>
              </p>
            </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Follow Us</h5>
              <p>Stay connected with us!</p>
              <ul className='list-unstyled text-center mt-2'>
                <li>
                  <Link to='/'>
                    <i className='bi bi-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='bi bi-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='bi bi-youtube'></i>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='bi bi-tiktok'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className='copy_right'>
          <Col>
            <div>
              <ul className='list-unstyled text-center mb-0'>
              <li>
                  <Link to='/'>
                    © 2023 <span>Burger Bun</span> | All Rights Reserved.
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;