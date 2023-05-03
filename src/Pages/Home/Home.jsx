import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import car5 from '../../assets/car5.jpg'
import car4 from '../../assets/car4.jpg'
import car2 from '../../assets/car2.jpg'
import { Button } from 'react-bootstrap';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <div className='banner-sec'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="car-img d-block"
                            src={car5}
                            alt="First slide"
                        />
                        <Carousel.Caption className='m-auto p-auto text-center'>
                            <h2>FAST-TRACK YOUR</h2>
                            <h1 className='fs-1'>CAREER FROM HOME COOK</h1>
                            <Button className='mb-4 mt-4 fs-3' variant="success">Reservation</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="car-img d-block "
                            src={car2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='m-auto p-auto text-center'>
                            <h2>FAST-TRACK YOUR</h2>
                            <h1>CAREER FROM HOME COOK</h1>
                            <Button className='mb-4 mt-4 fs-3' variant="success">Reservation</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="car-img d-block"
                            src={car4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>FAST-TRACK YOUR</h2>
                            <h1>CAREER FROM HOME COOK</h1>
                            <Button className='mb-4 mt-4 fs-3' variant="success">Reservation</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Chefs></Chefs>
            </div>
        </div>
    );
};

export default Home;