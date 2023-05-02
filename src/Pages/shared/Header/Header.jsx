import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../../../assets/logo3.png';
import './Header.css';
import { FaHome, FaBlogger, FaGraduationCap } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
                <div className='banner-div'>
                <img className='banner' src={'https://img.freepik.com/premium-photo/join-our-team-text-lightbox-composition-white-table-background-business-concept_34933-305.jpg?size=626&ext=jpg&ga=GA1.1.205563488.1680186315&semt=ais'} alt="" />
                </div>
                <div className='banner-text'>
                    <h1>Bon appetit</h1>
                </div>
            </div>
            </>
    );
};

export default Header;