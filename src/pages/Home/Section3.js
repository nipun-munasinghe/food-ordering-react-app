import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import menu from '../../data/menu.json';
import Cards from '../../components/Layouts/Cards';

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
        </Container>
    </section>
  )
}

export default Section3;