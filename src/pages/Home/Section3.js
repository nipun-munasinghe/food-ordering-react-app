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
                <Col lg={{span:8, offset:2}} className='text-center mb-5'>
                    <h2>Our Delicious Burgers</h2>
                    <p className='para'>
                        Savor the taste of our burgers, expertly crafted 
                        with rich, bold flavors to delight your palate 
                        in every bite.
                    </p>
                </Col>
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
                        <h5>Chocolate Fries</h5>
                        <Link to='/' className='btn btn_green px-4 rounded-0'>
                            Learn More
                        </Link>
                    </div>
                </Col>

                <Col sm={6} lg={7}>
                    <div className='ads_box ads_img2'>
                        <h4 className='mb-0'>Get Your Free</h4>
                        <h5>Cheese Burger</h5>
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