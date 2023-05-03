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
                            <Link className='nv-a' to="/Professional"><FaGraduationCap /> Professionals</Link>
                            <Link className='nv-a' to="/Blog"><FaBlogger /> Blog</Link>
                            <Link className='nv-a' to="/Recipes"><FaBlogger /> Recipes</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='nv-a' href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="success">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;