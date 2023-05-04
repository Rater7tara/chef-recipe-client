import React from 'react';
import './Food.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Food = () => {
    return (
        <div>
            <h1 className='mt-4 mb-4'>Some Indian Dishes</h1>
           <CardGroup>
           <Card className='container-food'>
            <Card.Img className='image' variant="top" src={"https://img.freepik.com/premium-photo/chicken-biriyani-using-jeera-rice-arranged-earthenware-with-raitha-grey-background_527904-8.jpg?size=626&ext=jpg&uid=R101399449&ga=GA1.2.205563488.1680186315&semt=robertav1_2_sidr"}  />
            <Card.Body>
              <Card.Text  className='middle'>
              <h6 className="text">CHICKEN CURRY</h6>
              </Card.Text>
            </Card.Body>
          </Card>
           <Card className='container-food'>
            <Card.Img className='image' variant="top" src={"https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?size=626&ext=jpg&uid=R101399449&ga=GA1.2.205563488.1680186315&semt=robertav1_2_sidr"}  />
            <Card.Body>
              <Card.Text  className='middle'>
              <h6 className="text">Chicken Tikka Masala</h6>
              </Card.Text>
            </Card.Body>
          </Card>

      <Card className='container-food'>
        <Card.Img className='image' variant="top" src={"https://img.freepik.com/free-photo/side-view-rice-garnish-with-grilled-chicken-cucumber-carrot-bell-pepper-spring-onion_141793-5070.jpg?size=626&ext=jpg&uid=R101399449&ga=GA1.2.205563488.1680186315&semt=robertav1_2_sidr"} />

        <Card.Text className='middle'>
          <h6 className="text">Vegetable Biryani</h6>
        </Card.Text>
      </Card>
    </CardGroup> 
        </div>
    );
};

export default Food;