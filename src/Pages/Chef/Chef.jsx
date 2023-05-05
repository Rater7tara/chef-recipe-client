import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { FcLike, FcGraduationCap, FcReading } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Chef = ({ chef }) => {
  const { picture, name, likes, years_of_experience, num_recipes, id } = chef;

  return (
      <Card style={{ width: '22rem', height: '32rem' }} className='mx-auto pt-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
      <Card.Img className='w-100 h-50 mx-auto' variant="top" src={chef.picture} />
      <Card.Header as="h5">{chef.name}</Card.Header>
      <Card.Body>
        <div className=''>
          <Card.Title><FcGraduationCap /> {chef.years_of_experience} + Years of Experience </Card.Title>

          <Card.Title><FcReading /> {chef.num_recipes} + Recipes</Card.Title>
        </div>

        <Card.Text>

          <FcLike/> {chef.likes} Likes
        </Card.Text>
        <Link  className='btn btn-success' to={`/chefs/${chef.id}`}>View Recipes</Link>
      </Card.Body>
    </Card>
  );
};

export default Chef;