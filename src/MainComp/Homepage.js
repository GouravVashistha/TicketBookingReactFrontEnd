import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'
class Homepage extends Component {
    render() {
        return (
            <div className='app'>
                <center>
                    <h1 class='header'>Book Your Tickets</h1>
                    <br /><br />


                    <Link to="/home" className='btn btnclick'>User Home</Link>
                    <Link to="/admin" onClick className='btn btnclick'>Admin Home</Link>
                </center>
            </div>
        );
    }
}

export default Homepage;