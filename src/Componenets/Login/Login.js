import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img1 from "../../img/loginIcon.png"
import img2 from "../../img/Login-illustration.svg"
import './Login.css'
import axios from 'axios';
import { Component } from 'react';
import Headerfile from '../Header/Navbar';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            emailId: "",
            password: "",
            error: ""
        }
    }


    render() {
        return (
            <>
                <Headerfile />
                <Container className='mt-5'>
                    <Row>
                        <Col lg={5} md={6} sm={12} className=' firstcont text-center'>
                            <img className='icon-img' src={img1} alt='loginImg' />
                            <Form>

                                <Form.Control className="mb-3" type="email" placeholder="Enter email" onChange={(e) => {
                                    this.setState({ emailId: e.target.value })
                                }} />

                                <Form.Control className="mb-3" type="password" placeholder="Password" onChange={(e) => {
                                    this.setState({ password: e.target.value })
                                }} />

                                <Button className='newbtn' variant="btn btn-primary btn-block" color="primary" size="sm" onClick={() => {
                                    var user = {
                                        emailId: this.state.emailId,
                                        password: this.state.password
                                    }
                                    var options = {
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }
                                    axios.post("http://localhost:8080/Userlogin", user, options).then((res) => {

                                        localStorage.getItem(user)

                                        console.log(res.data)
                                    }).catch((err) => {
                                        console.log("error has occured")
                                    })

                                    console.log(user)
                                }}>Login</Button>
                            </Form>
                        </Col>

                        <Col lg={7} md={6} sm={12} className='back-img-login'>
                            <img className='img-back' src={img2} alt='backgroung' />
                        </Col>
                    </Row>
                </Container>

            </>
        )
    }
}

export default Login;