import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img1 from "../../img/loginIcon.png"
import img2 from "../../img/Login-illustration.svg"
import './Login.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
class Registration extends Component {
    constructor() {
        super()
        this.state = {
            date: '',
            name: '',
            emailId: '',
            number: '',
            password: '',
            cpassword: ''
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

                                <Form.Control className="mb-3" type="Name" placeholder="Enter Name" onChange={(e) => {
                                    this.setState({ name: e.target.value })
                                }} />


                                <Form.Control className="mb-3" type="email" placeholder="Enter email" onChange={(e) => {
                                    this.setState({ emailId: e.target.value })
                                }} />


                                <Form.Control className="mb-3" type="tel" placeholder="Enter Mobile Number" onChange={(e) => {
                                    this.setState({ number: e.target.value })
                                }} />


                                <DatePicker className="form-control mb-3"
                                    selected={this.state.date} placeholderText="Date of Birth" dateFormat="d/M/yyyy" showPopperArrow={true}
                                    onChange={this.Changedate}
                                />


                                <Form.Control className="mb-3" type="password" placeholder="Password" onChange={(e) => {
                                    this.setState({ password: e.target.value })
                                }} />


                                <Form.Control className="mb-3" type="password" placeholder="Confirm Password" onChange={(e) => {
                                    this.setState({ cpassword: e.target.value })
                                }} />


                                <Button variant="btn btn-primary btn-block" type="submit" onClick={() => {
                                    var user = {
                                        name: this.state.name,
                                        emailId: this.state.emailId,
                                        mobileNumber: this.state.number,
                                        dateOfBirth: this.state.date,
                                        passward: this.state.password,
                                        cPassward: this.state.cpassword
                                    }
                                    var options = {
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }
                                    axios.post("http://localhost:8080/usersregistration", user, options).then((res) => {
                                        console.log(res.data)
                                    }).catch((err) => {
                                        console.log("error has occured")
                                    })
                                }}> Register </Button>


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