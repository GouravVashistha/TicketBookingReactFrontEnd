import { Component, useState } from "react";
import "./admin.css";
import AdminNav from "./AdminNav";

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
                            <input type="text" required />

                            <label>Movies Name</label>
                            <input type="text" required />

                            <button type="submit">Add </button>
                        </div>
                    </form>
                </div>
            </>

        );
    }
}
export default AddMovies;
