import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from '../../Assets/Food_Assets/assets/promotion/pro.png';

function Section4() {
  return (
    <>
        <section className='promotion_section'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className='text-center mb-5 mb-lg-0'>
                        <img src={PromotionImage} className='img-fluid' alt="Promotion" />
                    </Col>

                    <Col lg={6} className='px-5'>
                        <h2>Good times are better with great burgers</h2>
                        <p>
                            Juicy, flavorful burgers bring people closer, 
                            creating moments filled with laughter, joy, and 
                            deliciousness. Share the taste, share the love.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Savor the joy of perfectly crafted burgers, 
                                    where every ingredient is blended to deliver 
                                    unmatched taste and satisfaction.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Experience the richness of flavors in every bite, 
                                    as our burgers are made to please every craving 
                                    with perfection.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Indulge in a symphony of flavors, where every 
                                    burger tells a story of quality, taste, and 
                                    culinary expertise.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Background Parallax Scroll */}
        <section className='bg_parallax_scroll'></section>
    </>
  )
}

export default Section4;