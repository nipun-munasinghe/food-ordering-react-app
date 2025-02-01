import React from 'react';
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from '../../Assets/Food_Assets/assets/blog/user1.jpg';
import User2 from '../../Assets/Food_Assets/assets/blog/user2.jpg';
import User3 from '../../Assets/Food_Assets/assets/blog/user3.jpg';
import User4 from '../../Assets/Food_Assets/assets/blog/user4.jpg';

function Section6() {
  return (
    <section className='blog_section'>
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user_img'>
                                <img 
                                    src={User1} className='img-fluid' 
                                    alt='user-1' 
                                />
                            </div>
                            <p>
                                "Absolutely delicious! The burgers are juicy, 
                                flavorful, and cooked to perfection. The fresh 
                                ingredients and soft buns make every bite 
                                amazing. The fries are crispy, and the dipping 
                                sauces add a great touch. Highly recommend for 
                                a satisfying meal!"
                            </p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>By Shehani Wedisinghe</h5>
                        </Carousel.Caption>
                     </Carousel.Item>

                     <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user_img'>
                                <img 
                                    src={User2} className='img-fluid' 
                                    alt='user-2' 
                                />
                            </div>
                            <p>
                                "Best burger spot in town! The flavors are 
                                well-balanced, and the patties are always fresh. 
                                The service is quick, and the atmosphere is great 
                                for dining in. The menu offers plenty of variety, 
                                ensuring there's something for everyone to enjoy!"
                            </p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>By Nurawi Marasinghe</h5>
                        </Carousel.Caption>
                     </Carousel.Item>

                     <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user_img'>
                                <img 
                                    src={User3} className='img-fluid' 
                                    alt='user-3' 
                                />
                            </div>
                            <p>
                                "Tried the signature burger, and it exceeded my 
                                expectations! The seasoning was perfect, and the 
                                toppings were fresh. The portion size is great for 
                                the price, and the quality is consistent. Will 
                                definitely be coming back for more!"
                            </p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>By Sumudi Perera</h5>
                        </Carousel.Caption>
                     </Carousel.Item>

                     <Carousel.Item>
                        <Carousel.Caption>
                            <div className='user_img'>
                                <img 
                                    src={User4} className='img-fluid' 
                                    alt='user-4' 
                                />
                            </div>
                            <p>
                                "The taste, texture, and overall experience were 
                                top-notch! The burger was cooked just right, and 
                                the cheese melted perfectly. The crispy fries and 
                                refreshing drinks made the meal even better. A 
                                must-try for burger lovers everywhere!"
                            </p>
                            <div className='item_rating mb-2'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>By Ashini Keshala</h5>
                        </Carousel.Caption>
                     </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    </section>
  )
}

export default Section6;