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
              Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3.Tell us the difference between nodejs and express js?</Accordion.Header>
            <Accordion.Body>
              useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>4. What is a custom hook, and why will you create a custom hook?</Accordion.Header>
            <Accordion.Body>
              React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;