import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FcLike, FcGraduationCap, FcReading } from "react-icons/fc";
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { AiOutlineLike } from "react-icons/ai";

const Recipes = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    const { picture, name, likes, years_of_experience, num_recipes, bio } = chefs;
    const recipe = chefs.recipes;
    console.log(recipe);
    return (
        <div>
            <h1 className='mt-4 mb-4 text-center text-success  fs-1'>Famous Chef {chefs.name}</h1>
            <div className='container mt-4 mb-4'>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={chefs.picture} />
                    <Card.Body>
                        <Card.Title>{chefs.name} <p className='text-muted'>(<FcLike />{chefs.likes})</p></Card.Title>
                        <Card.Text>
                            {chefs.bio}
                        </Card.Text>
                        <Card.Text>
                            <h5>Experience: {chefs.years_of_experience} Years</h5>
                        </Card.Text>
                        <Card.Text>
                            <h5>Recipes: {chefs.num_recipes}</h5>
                        </Card.Text>
                        <Button variant="success"><AiOutlineLike /> Like</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='container mt-4'>
            <h1 className='mt-4 mb-4 text-center text-success  fs-1'>Some Famous Recipes</h1>
                <Row xs={1} md={3} className="g-4">
                

                {
                    recipe.map(recipe => <RecipeDetails
                        key={recipe.recipe_id}
                        recipe={recipe}
                    ></RecipeDetails>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Recipes;