import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Pizza from '../../Assets/Food_Assets/assets/about/pizza.png';
import Salad from '../../Assets/Food_Assets/assets/about/salad.png';
import Delivery from '../../Assets/Food_Assets/assets/about/delivery-bike.png';

//Mock Data Cards
const mockData = [
    {
      image: Salad,
      title: "Quality Foods",
      paragraph: `We believe in serving only the finest quality food, made 
        from farm-fresh ingredients and expertly crafted recipes. Our 
        commitment to excellence ensures a delicious and wholesome dining 
        experience in every meal.`,
    },
    {
      image: Pizza,
      title: "Original",
      paragraph: `Experience the authentic taste of our handcrafted 
        burgers made with fresh ingredients and a perfect blend of flavors.
        Every bite delivers a rich, juicy, and satisfying taste that keeps 
        you coming back for more.`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Enjoy your favorite burgers and meals delivered hot and 
        fresh straight to your doorstep. With our efficient delivery service, 
        you can satisfy your cravings in no time, anytime and anywhere.`,
    }
];

export const Section2 = () => {
  return (
    <>
        <section className='about_section'>
            <Container>
                <Row>
                    <Col lg={{span:8, offset:2}} className='text-center'>
                        <h2>Burgers taste best when shared with loved ones!</h2>
                        <p>
                            Nothing brings people together like a delicious burger 
                            shared with loved ones. The perfect blend of juicy 
                            flavors and crispy sides creates moments of joy, laughter, 
                            and unforgettable memories at every bite.
                        </p>
                        <Link to='/' className='btn order_now btn_green'>
                            Explore The Full Menu
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='about_wrapper'>
            <Container>
                <Row className='justify-content-md-center'>
                    {mockData.map((cardData, index)=> (
                        <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                            <div className='about_box text-center'>
                                <div className='about_icon'>
                                    <img src={cardData.image} classname="img-fluid" 
                                         alt={`Icon of ${cardData.title}`}
                                    />
                                </div>
                                <h4>{cardData.title}</h4>
                                <p>{cardData.paragraph}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    </>
  )
}