import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img1 from "../../img/loginIcon.png"
import img2 from "../../img/Login-illustration.svg"
import './Login.css'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import React from 'react';
import Headerfile from '../Header/Navbar';

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    return (
        <div>
            <Headerfile />
            <Container className='mt-5'>
                <Row>
                    <Col lg={5} md={6} sm={12} className=' firstcont text-center'>
                        <img className='icon-img' src={img1} alt='loginImg' />
                        <Form>

                            <Form.Control className="mb-3" type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />

                            <Form.Control className="mb-3" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

                            <Button className='newbtn' variant="btn btn-primary btn-block" color="primary" size="sm" onClick={() => {
                                var user = {
                                    emailId: email,
                                    password: password
                                }
                                var options = {
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }
                                axios.post("http://localhost:8080/Userlogin", user, options).then((res) => {

                                    localStorage.setItem('email', email)
                                    navigate("/home")

                                }).catch((err) => {
                                    alert("WrongCredentials")
                                })


                            }}>Login</Button>
                        </Form>
                    </Col>

                    <Col lg={7} md={6} sm={12} className='back-img-login'>
                        <img className='img-back' src={img2} alt='backgroung' />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Login