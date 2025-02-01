import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Section7() {
  return (
    <section className='contact_section'>
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                    <h4>We Guarantee</h4>
                    <h2>20 Minutes Delivery!</h2>
                    <p>
                        We ensure your order reaches you within 20 
                        minutes, delivering fresh and hot meals straight 
                        to your doorstep. Our efficient team works 
                        tirelessly to provide the fastest service, 
                        maintaining quality and taste. With a seamless 
                        ordering process and quick dispatch, we prioritize 
                        your satisfaction. Enjoy every bite without the wait!
                    </p>
                    <Link to="/" className='btn btn_green px-4 py-2 rounded-0'>
                        Call: +94 11-222-33-44
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section7;