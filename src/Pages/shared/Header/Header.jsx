import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../../../assets/logo3.png';
import './Header.css';
import { FaHome, FaBlogger, FaGraduationCap } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import car5 from '../../../assets/car5.jpg';
import car2 from '../../../assets/car2.jpg';
import car4 from '../../../assets/car4.jpg';


const Header = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">

                <Container>
                    <Navbar.Brand href="#home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav mx-auto">
                            <Link className='nv-a' to='/'><FaHome /> Home</Link>
                            <Link className='nv-a' to="/Professional"><FaGraduationCap /> Professional</Link>
                            <Link className='nv-a' to="/Blog"><FaBlogger /> Blog</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='banner-sec'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="car-img d-block"
                            src={car5}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="car-img d-block "
                            src={car2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="car-img d-block"
                            src={car4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Header;