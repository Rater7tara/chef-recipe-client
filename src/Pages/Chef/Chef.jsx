import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { FcLike, FcGraduationCap, FcReading } from "react-icons/fc";

const Chef = ({ chef }) => {
  const { picture, name, likes, years_of_experience, num_recipes } = chef;

  return (
      <Card style={{ width: '22rem', height: '30rem' }} className='mx-auto pt-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
      <Card.Img className='w-75 h-50 mx-auto' variant="top" src={chef.picture} />
      <Card.Header as="h5">{chef.name}</Card.Header>
      <Card.Body>
        <div className=''>
          <Card.Title><FcGraduationCap /> Years of experience: {chef.years_of_experience} Years</Card.Title>
          <Card.Title><FcReading /> Numbers of recipes: {chef.num_recipes}</Card.Title>
        </div>

        <Card.Text>

          <p><FcLike/> {chef.likes} Likes</p>
        </Card.Text>
        <Button variant="success">View Recipes</Button>
      </Card.Body>
    </Card>
  );
};

export default Chef;