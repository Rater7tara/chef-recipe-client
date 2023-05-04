import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row, Col, CardGroup} from 'react-bootstrap';
import './Dish.css'

const Dish = () => {
    return (
        <div  className='container mt-4'>
            <h1 className=' mt-4 mb-4 text-success'>Our Recipe</h1>
        <CardGroup className='mx-auto'>
          <Card className='container-dish me-4'>
            <Card.Img className='image-dish' variant="top" src={"https://img.freepik.com/free-photo/samsa-samosas-with-meat_658428-358.jpg?size=626&ext=jpg&uid=R101399449&ga=GA1.2.205563488.1680186315&semt=robertav1_2_sidr"} />
              <h1>Samosas <small className='text-muted'>with Tea</small></h1>
              <Card.Text  className='overlay'>
              Make a dough with flour and water, fill it with a mixture of mashed potatoes, peas, and spices, and deep-fry until crispy.
              </Card.Text>
          </Card>
          <Card className='container-dish me-4'>
            <Card.Img className='image-dish' variant="top" src={"https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?size=626&ext=jpg&uid=R101399449&ga=GA1.2.205563488.1680186315&semt=robertav1_2_sidr"} />
              <h1>Paneer Tikka <small className='text-muted'>with Tea</small></h1>
              <Card.Text  className='overlay'>
              Marinate paneer, bell peppers, and onions in yogurt and spicesand grill until cooked through.
              </Card.Text>
          </Card>
          <Card className='container-dish me-4'>
            <Card.Img className='image-dish' variant="top" src={"https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?size=626&ext=jpg&uid=R101399449&ga=GA1.1.205563488.1680186315&semt=robertav1_2_sidr"} />
              <h1>Palak Paneer <small className='text-muted'>with Tea</small></h1>
              <Card.Text  className='overlay'>
              Blanch spinach, puree it with onion and tomato, and cook it with paneer and spices.
              </Card.Text>
          </Card>
        </CardGroup>
        </div>
    );
};

export default Dish;