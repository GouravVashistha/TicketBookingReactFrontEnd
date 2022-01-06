import React, { Component } from 'react'
import BootstrapMultiCarousal from '../Componenets/BootstrapCarousal/BootstrapCarousal'

import Carousal from '../Componenets/Carousal/Carousal'
import RowAndColumnSpacing from '../Componenets/MoviesCard/avengers'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousal />

                <RowAndColumnSpacing />
            </div>
        )
    }
}
