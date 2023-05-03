import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/shared/Footer/Footer';
import Header from '../Pages/shared/Header/Header';

const RecipeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={12}>
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;