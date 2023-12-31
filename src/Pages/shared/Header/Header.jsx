import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../../../assets/logo3.png';
import './Header.css';
import { FaHome, FaBlogger, FaGraduationCap, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../../providers/AuthProvider";



const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">

                <Container>
                    <Navbar.Brand href="#home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav mx-auto">
                            <Link className='nv-a' to='/home'><FaHome /> Home</Link>
                            <Link className='nv-a' to="/Professional"><FaGraduationCap /> Professionals</Link>
                            <Link className='nv-a' to="/Blog"><FaBlogger /> Blog</Link>
                        </Nav>
                        <Nav>
                            {
            
                             user?.photoURL ?<img src={user.photoURL} className="rounded-circle w-25 me-2 " alt=""  data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} />:<FaUser className='rounded-circle fs-4 mt-2 me-3'></FaUser>
                            }

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;