import { Component, useState } from "react";
import "./admin.css";
import AdminNav from "./AdminNav";

class Addhallcap extends Component {
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
                        <h1>Add Hall Capacity</h1>
                        <div className="formInput">
                            <label>hall ID</label>
                            <input type="text" required />


                            <label>Seat Type </label>
                            <select className="mt-2" name="hall" id="hall">
                                <option value="volvo">Normal</option>
                                <option value="saab">Delex</option>
                                <option value="opel">Primim</option>

                            </select>
                            <label>hall Cap</label>
                            <input type="text" required />

                            <label>Seat cout</label>
                            <input type="text" required />
                            <button type="submit">Add </button>
                        </div>
                    </form>
                </div>
            </>

        );
    }
}
export default Addhallcap;
