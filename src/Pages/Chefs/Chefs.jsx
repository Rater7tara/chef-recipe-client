import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chef from '../Chef/Chef';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/chefs/0')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    // const {id} = useParams();
    // const selectedChefs = useLoaderData();


    return (
        <Container className='mt-4 text-center'>
            <h1>MEET PROFESSIONALS</h1>
            <Row xs={1} md={3} className="g-3 mt-4 shadow p-3 mb-5 bg-body-tertiary rounded">

                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </Row>
        </Container>

    );
};

export default Chefs;

