import React, { Component } from 'react'
import GetAllShows from '../Componenets/MovieShow/GetAllShows'
import AdminNav from './AdminNav'

export default class AdminHome extends Component {
    render() {
        return (
            <div>
                <AdminNav />
                <GetAllShows />
            </div>
        )
    }
}
