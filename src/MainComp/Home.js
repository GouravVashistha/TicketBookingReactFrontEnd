import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login </Link>
                <Link to='/register'>Registration</Link>
            </div>
        )
    }
}
