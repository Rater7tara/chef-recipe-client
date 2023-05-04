import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
  return (
    <div className='container mb-4'>
      <div className='banner-div'>
        <img className='banner
          ' src={'https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?size=626&ext=jpg&uid=R101399449&ga=GA1.1.205563488.1680186315&semt=robertav1_2_sidr'} alt="" />
      </div>
      <div>
        <Accordion defaultActiveKey="0" className='text-start mb-4'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. What is the differences between uncontrolled and controlled components?</Accordion.Header>
            <Accordion.Body>
              In controlled components, the parent component is responsible for managing the state and passing it down as props to the controlled component. This makes it easy to track the state of the component,this can make the code more complex and harder to manage.

              On the other hand, uncontrolled components manage their own state using a ref to access the DOM element's current value and update the state accordingly. This makes them simpler to implement, but they can be more difficult to track and manage in larger projects.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. How to validate React props using PropTypes?</Accordion.Header>
            <Accordion.Body>
            App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3.Tell us the difference between nodejs and express js?</Accordion.Header>
            <Accordion.Body>
            NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications..
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>4. What is a custom hook, and why will you create a custom hook?</Accordion.Header>
            <Accordion.Body>
            Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. How does a custom Hook get isolated state? Each call to a Hook gets isolated state.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;