import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const chefs = useLoaderData();
    const {picture, name} = chefs;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chefs.picture} />
                <Card.Body>
                    <Card.Title>{chefs.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipes;