import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    FormFeedback,
    Container,
    Row,
    Col
} from 'reactstrap';
import './Login.css';
// import uiImg from '../../Image/Login.png';

const LoginComponent = ({ authenticateLogin }) => {
    const [email, setEmail] = useState();
    const [validate, setValidate] = useState({ email: '', password: '' });
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const validString = 'has-success';
    const invalidString = 'has-danger';

    const validateEmail = (e) => {
        setEmail(e.target.value);
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        const validateObj = { email: '', password: validate.password };
        if (emailRegex.test(e.target.value)) {
            validateObj.email = validString;
        } else {
            validateObj.email = invalidString;
        }
        setValidate(validateObj);
    };

    const validatePassword = (e) => {
        setPassword(e.target.value);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const validateObj = { email: validate.email, password: '' };
        if (passwordRegex.test(e.target.value)) {
            validateObj.password = validString;
        } else {
            validateObj.password = invalidString;
        }
        setValidate(validateObj);
    };

    const validateLogin = (e) => {
        e.preventDefault();
        if (validate.email === validString && validate.password === validString) {
            authenticateLogin();
            navigate('../home');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.id === 'Email' && validateEmail(e);
            e.target.id === 'Password' && validatePassword(e);
            validateLogin(e);
        }
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col lg={4} md={6} sm={12} style={{ zIndex: 1 }}>
                    <div className="Login">
                        <h2>Sign In</h2>
                        <Form className="form">
                            <FormGroup>
                                <Label for="exampleEmail">Username</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="Email"
                                    placeholder="example@example.com"
                                    value={email}
                                    valid={validate.email === validString}
                                    invalid={validate.email === invalidString}
                                    onChange={validateEmail.bind(this)}
                                    onKeyDown={handleKeyDown}
                                />
                                <FormFeedback>
                                    Please input a correct email.
                                </FormFeedback>
                                <FormFeedback valid>
                                    Email looks cool.
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="Password"
                                    placeholder="********"
                                    value={password}
                                    valid={validate.password === validString}
                                    invalid={validate.password === invalidString}
                                    onChange={validatePassword.bind(this)}
                                    onKeyDown={handleKeyDown}
                                />
                                <FormFeedback>
                                    Invalid Password
                                </FormFeedback>
                            </FormGroup>
                            <Button onClick={validateLogin.bind(this)}>Submit</Button>
                        </Form>
                    </div>
                </Col>
                <Col lg={8} md={6} sm={12}>
                    <img className='w-125' src={process.env.PUBLIC_URL + '/Images/Login.png'} alt="" />
                </Col>
            </Row>
        </Container>
    );

}

export default LoginComponent;