import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Burger from "../../Assets/Food_Assets/assets/hero/heroImg.png";
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <section className='hero_section'>
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0'>
                    <div className='position-relative'>
                        <img src={Burger} className='img-fluid' alt="Hero" />
                        <div className='price_badge'>
                            <div className='badge_text'>
                                <h4 className='h4_xs'>Only</h4>
                                <h4 className='h3_lg'>Rs.560/=</h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='hero_text text_center'>
                        <h1 className='text_white'>New Burger</h1>
                        <h2 className='text_white'>With Chips</h2>
                        <p className='text_white pt-2 pb-4'>
                            Juicy grilled burger served with crispy golden potato chips, 
                            delivering a perfect blend of savory flavors and a satisfying 
                            crunch, making every bite a delightful treat for your taste 
                            buds.
                        </p>
                        <Link to="/" className='btn order_now'>
                            Order Now
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1;