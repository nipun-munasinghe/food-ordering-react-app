import React from 'react';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AppStore from '../../Assets/Food_Assets/assets/shop/appstore.png';
import PlayStore from '../../Assets/Food_Assets/assets/shop/googleplay.png';
import DownloadImg from '../../Assets/Food_Assets/assets/shop/e-shop.png';
import Brand1 from '../../Assets/Food_Assets/assets/brands/brand-11.png';
import Brand2 from '../../Assets/Food_Assets/assets/brands/brand-12.png';
import Brand3 from '../../Assets/Food_Assets/assets/brands/brand-13.png';
import Brand4 from '../../Assets/Food_Assets/assets/brands/brand-14.png';
import Brand5 from '../../Assets/Food_Assets/assets/brands/brand-15.png';
import Brand6 from '../../Assets/Food_Assets/assets/brands/brand-16.png';
import Brand7 from '../../Assets/Food_Assets/assets/brands/brand-17.png';
import Brand8 from '../../Assets/Food_Assets/assets/brands/brand-18.png';

function Section5() {
  return (
    <>
        <section className='shop_section'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className='text-center text-lg-start mb-5 lg-0'>
                        <h4>Download mobile App and</h4>
                        <h2>save up to 25%</h2>
                        <p>
                            Get our app now and enjoy exclusive savings of up to 
                            25% on your favorite meals, anytime, anywhere.
                        </p>

                        <Link to="/">
                            <img src={AppStore} alt='IOS' className='img-fluid me-3 store' />
                            <img src={PlayStore} alt='Android' className='img-fluid me-3 store' />
                        </Link>
                    </Col>

                    <Col lg={6}>
                        <img src={DownloadImg} alt='e-shop' className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='brand_section'>
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex 
                                                align-items-center 
                                                justify-content-between'
                                >
                                    <div className='brand_img'>
                                        <img 
                                            src={Brand1} className='img-fluid' 
                                            alt='brand-1' 
                                        />
                                    </div>
                                    <div className='brand_img'>
                                        <img 
                                            src={Brand2} className='img-fluid' 
                                            alt='brand-2' 
                                        />
                                    </div>
                                    <div className='brand_img'>
                                        <img 
                                            src={Brand3} className='img-fluid' 
                                            alt='brand-3' 
                                        />
                                    </div>
                                    <div className='brand_img'>
                                        <img 
                                            src={Brand4} className='img-fluid' 
                                            alt='brand-4' 
                                        />
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='d-flex 
                                                align-items-center 
                                                justify-content-between'
                                >
                                    <div className='brand_img'>
                                        <img 
                                            src={Brand5} className='img-fluid' 
                                            alt='brand-5' 
                                        />
                                    </div>
                                    <div className='brand_img'>
                                        <img 
                                            src={Brand6} className='img-fluid' 
                                            alt='brand-6' 
                                        />
                                    </div>
                                    <div className='brand_img'>
                                        <img 
                                            src={Brand7} className='img-fluid' 
                                            alt='brand-7' 
                                        />
                                    </div>
                                    <div className='brand_img'>
                                        <img 
                                            src={Brand8} className='img-fluid' 
                                            alt='brand-8' 
                                        />
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section5;