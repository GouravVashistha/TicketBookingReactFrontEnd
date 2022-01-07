import React, { Component } from 'react'
import { Routes } from 'react-router-dom'

import BootstrapMultiCarousal from '../Componenets/BootstrapCarousal/BootstrapCarousal'
import Carousal from '../Componenets/Carousal/Carousal'
import Headerfile from '../Componenets/Header/Navbar'
import RowAndColumnSpacing from '../Componenets/MoviesCard/avengers'

export default class Home extends Component {
    render() {
        return (
            <div>

                <Headerfile />
                <Carousal />
                <RowAndColumnSpacing />
            </div>
        )
    }
}
