import { Component, useState } from "react";
import "./admin.css";
import AdminNav from "./AdminNav";
import Axios from 'axios'
class AddMovies extends Component {
    constructor() {
        super()
        this.state = {
            movieId: '',
            moviename: '',
        }

    }
    render() {
        return (
            <>
                <AdminNav />
                <div className="admin">

                    <form>

                        <h1>Add Movies</h1>
                        <div className="formInput">
                            <label>MoviesId</label>
                            <input type="text" required onChange={(e) => {
                                this.setState({ movieId: e.target.value })
                            }} />

                            <label>Movies Name</label>
                            <input type="text" required onChange={(e) => {
                                this.setState({ moviename: e.target.value })
                            }} />

                            <button type="submit" onClick={() => {
                                var movie = {
                                    movieId: this.state.movieId,
                                    movieName: this.state.moviename

                                }
                                var option = {
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }
                                Axios.post("http://localhost:8080/addmovie", movie, option).then((res) => {
                                    console.log(res.data)
                                }).catch((err) => {
                                    console.log("error has occured")
                                })

                            }}>Add Movie</button>
                        </div>
                    </form>
                </div>
            </>

        );
    }
}
export default AddMovies;
