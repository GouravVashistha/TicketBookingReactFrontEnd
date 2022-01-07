import React, { Component } from 'react'
import GetAllShows from '../Componenets/MovieShow/GetAllShows'
import Headerfile from '../Componenets/Header/Navbar'
export default class Shows extends Component {
    render() {
        return (
            <div>
                <Headerfile />
                <GetAllShows />
            </div>
        )
    }
}
