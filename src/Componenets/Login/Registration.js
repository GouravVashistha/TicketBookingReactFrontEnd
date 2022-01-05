import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img1 from "../../img/loginIcon.png"
import img2 from "../../img/Login-illustration.svg"
import './Login.css'
const Registration = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col lg={5} md={6} sm={12} className=' firstcont text-center'>
                        <img className='icon-img' src={img1} alt='loginImg' />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="Name" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="tel" placeholder="Enter Mobile Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="tel" placeholder="Enter Mobile Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="tel" placeholder="Enter Date Of Birth" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>

                            <Button variant="btn btn-primary btn-block px-5 mx-4" type="submit"> Register </Button>


                        </Form>
                    </Col>

                    <Col lg={7} md={6} sm={12} className='back-img-login'>
                        <img className='img-back' src={img2} alt='backgroung' />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Registration;