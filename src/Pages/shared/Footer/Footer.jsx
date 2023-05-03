import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo3.png'
import { FaTelegramPlane, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-4 bg-light">
            <div className='text-center'>
                <img className='logo' src={logo} alt="" />
            </div>
            <div class="container">
                <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 border-top">
                    <div class="col mb-3">
                        <h2>Bon Appetit</h2>
                        <ul class="nav flex-column">
                            <Link className='nv-a mt-2' to='/'>Home</Link>
                            <Link className='nv-a mt-4' to="/Professional">Professionals</Link>
                            <Link className='nv-a mt-4' to="/Blog">Blog</Link>
                            <Link className='nv-a mt-4' to="/Recipes">Recipes</Link>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h2>About</h2>
                        <p className='fs-5'>“Food brings people together on many different levels. It's nourishment of the soul and body; it's truly love.”

                            - Giada De Laurentiis</p>
                    </div>

                    <div class="col mb-3">
                        <h2>Category</h2>
                        <ButtonGroup vertical >
                            <Button variant="outline-success" className='fs-5 fw-bold'>Fresh fish</Button>
                            <Button variant="outline-success" className='fs-5 fw-bold'>Large Pizza</Button>
                            <Button variant="outline-success" className='fs-5 fw-bold'>Chicken</Button>
                            <Button variant="outline-success" className='fs-5 fw-bold'>Ice-cream</Button>
                            <Button variant="outline-success" className='fs-5 fw-bold'>Fresh Drinks</Button>
                        </ButtonGroup>
                    </div>

                    <div class="col mb-3">
                        <h2>Contact Us</h2>
                        <div className='d-flex'>
                            <input type="email" name="Email" id="" placeholder='Email' className='' />
                            <Button variant="success">
                                <FaTelegramPlane />
                            </Button>
                        </div>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Office #3 First Floor Dogar Arcade, DHA Main Boulevard,uk.</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">nowshinkhan@gmail.com</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+91 (42)3 123 4567</a></li>
                        </ul>
                        <div className=''>
                            <Link className='ms-4 fs-2 text-dark'>
                                <FaFacebook />
                            </Link>
                            <Link className='ms-4 fs-2 text-dark'>
                                <FaGoogle />
                            </Link>
                            <Link className='ms-4 fs-2 text-dark'>
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;