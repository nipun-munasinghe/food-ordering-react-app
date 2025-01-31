import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import menu from '../../data/menu.json';
import Cards from '../../components/Layouts/Cards';
import { Link } from 'react-router-dom';

function Section3() {
  return (
    <section className='menu_section'>
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}}></Col>
                <h2>Our Delicious Burgers</h2>
                <p>Savory burgers crafted with rich flavors</p>
            </Row>

            <Row>
                {menu.map((cardData, index) => (
                    <Cards
                        key={index}
                        image={cardData.image}
                        rating={cardData.rating}
                        title={cardData.title}
                        paragraph={cardData.paragraph}
                        price={cardData.price}
                        // renderRatingIcons={renderRatingIcons}
                    />
                ))}
            </Row>

            <Row className='pt-5'>
                <Col sm={6} lg={5}>
                    <div className='ads_box ads_img1 mb-5 mb-md-0'>
                        <h4 className='mb-0'>Get Your Free</h4>
                        <h5>Cheese Fries</h5>
                        <Link to='/' className='btn btn_green px-4 rounded-0'>
                            Learn More
                        </Link>
                    </div>
                </Col>

                <Col sm={6} lg={7}>
                    <div className='ads_box ads_img'>
                        <h4 className='mb-0'>Get Your Free</h4>
                        <h5>Cheese Fries</h5>
                        <Link to='/' className='btn btn_green px-4 rounded-0'>
                            Learn More
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section3;