import React, { Component } from 'react'
import axios from 'axios'
import './GetAllShows.css'
import CancelMovies from '../../MainComp/Cancel'

class GetAllShows extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        var axiosinstance = axios.get("http://localhost:8080/getAllShows")

        axiosinstance.then((response) => {

            this.setState({ data: response.data })

            console.log(this.state.data)

        })
    }
    render() {

        return <div>
            <center>
                <table class="content-table" style={{ textAlign: 'center' }}>
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <th>Movie</th>
                            <th>Hall</th>
                            <th>Slot</th>
                            <th>fromDate</th>
                            <th>ToDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((e) => {
                                return (<tr>
                                    <td>{e.movie.movieName}</td>
                                    <td>{e.hall.hallDesc}</td>
                                    <td>{e.slotNo}</td>
                                    <td>{e.fromDate.split('T')[0]}</td>
                                    <td>{e.toDate.split('T')[0]}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                <CancelMovies />
            </center>
        </div>
    }
}
export default GetAllShows;