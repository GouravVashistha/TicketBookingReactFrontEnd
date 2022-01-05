import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img1 from "../../img/loginIcon.png"
import img2 from "../../img/Login-illustration.svg"
import './Login.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Registration extends Component {
    constructor() {
        super()
        this.state = {
            date: ''
        }

    }
    Changedate = (e) => {
        this.setState({
            date: e
        });
    };


    render() {
        return (
            <div>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={5} md={6} sm={12} className=' firstcont text-center'>
                            <img className='icon-img' src={img1} alt='loginImg' />
                            <Form>

                                <Form.Control className="mb-3" type="Name" placeholder="Enter Name" />


                                <Form.Control className="mb-3" type="email" placeholder="Enter email" />


                                <Form.Control className="mb-3" type="tel" placeholder="Enter Mobile Number" />


                                <DatePicker className="form-control mb-3"
                                    selected={this.state.date} placeholderText="Date of Birth" dateFormat="d/M/yyyy" showPopperArrow={true}
                                    onChange={this.Changedate}
                                />


                                <Form.Control className="mb-3" type="password" placeholder="Password" />


                                <Form.Control className="mb-3" type="password" placeholder="Confirm Password" />


                                <Button variant="btn btn-primary btn-block" type="submit"> Register </Button>


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
}
export default Registration;