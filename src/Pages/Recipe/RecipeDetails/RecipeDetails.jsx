import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeDetails = ({recipe}) => {
    const { picture, name, cooking_method, ingredients, rating} = recipe;
    return (
        <div>
            <Col>
                <Card>
                <Card.Img className='w-75 h-50 mx-auto' variant="top" src={recipe.picture} />
                    <Card.Body>
                        <Card.Title><h2>{ recipe.name}</h2></Card.Title>
                        <Card.Text>
                            <h4>Ingredients: {recipe.ingredients}</h4>
                            <h6>Cooking-method: {recipe.cooking_method}</h6>
                        </Card.Text>
                        <Card.Text>
                            <p>Ratings: {rating}</p>
                        </Card.Text>
                        
                    </Card.Body>
                    <Link className='btn btn-success'>Add to Fav</Link>
                </Card>
            </Col>
        </div>
    );
};

export default RecipeDetails;