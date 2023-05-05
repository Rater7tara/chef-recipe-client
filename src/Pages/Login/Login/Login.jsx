import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);

    const navigate = useNavigate();
    // const location = useLocation();
    // console.log('login page location', location)

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;         
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/home');
        })
        .catch(error =>{
            console.log(error);
        })

}

        const google=()=> {
            signInWithGoogle()
            .then(result =>{
                const googleUser = result.user;
                console.log(googleUser);
                navigate('/home');
            })
            .catch(error =>{
                console.log(error.massage)
            })
        }
        const handleGithubSignIn= () =>{
            signInWithGithub()
            .then(result =>{
                const githubUser = result.user;
                console.log(githubUser);
                navigate('/home');
            })
            .catch(error =>{
                console.log(error.massage)
            })
        }

    
    return (
        <Container className='w-25 mx-auto'>
            <h3 className='text-success'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
            <div ClassName='d-flex'>
                <Button onClick={google}>Google SignIn</Button>
                <Button onClick={handleGithubSignIn}>Github SignIn</Button>
            </div>
        </Container>
    );
};

export default Login;