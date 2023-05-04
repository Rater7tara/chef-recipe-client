import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineLike } from "react-icons/ai";

const RecipeDetails = ({ recipe }) => {
    const { picture, name, cooking_method, ingredients, rating } = recipe;
    const notify = () => toast("ADD to FAVORITE RECIPE!");
    return (
        <div>

            <Col>
                <Card className='mx-auto pt-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                    <Card.Img className='w-75 h-50 mx-auto pt-4' variant="top" src={recipe.picture} />
                    <Card.Body>
                        <Card.Title><h2 ClassName='fw-bold'>{recipe.name}</h2></Card.Title>
                        <Card.Text>
                            <h5 className='text-muted'>(Ingredients: {recipe.ingredients})</h5>
                            <h4><span className='fw-bold'>Cooking-method:</span> {recipe.cooking_method}</h4>
                        </Card.Text>
                        <Card.Text>
                            <p>Ratings: {rating}</p>
                        </Card.Text>

                    </Card.Body>
                    <button onClick={notify} className="btn btn-success">
                       <AiOutlineLike /> LIKE IT?

                    </button>
                    <ToastContainer />
                </Card>
            </Col>
        </div>
    );
};

export default RecipeDetails;