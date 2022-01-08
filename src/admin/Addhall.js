import { Component, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./admin.css";
import AdminNav from "./AdminNav";

class Addhall extends Component {
    constructor() {
        super()
        this.state = {
            hallId: '',
            hallDesc: '',
            hallCap: '',


        }

    }




    render() {
        return (
            <>
                <AdminNav />
                <div className="admin">

                    <form>
                        <h1>Add Hall</h1>
                        <div className="formInput">
                            <label>Add Hall ID</label>
                            <input type="text" required />

                            <select className="mt-2" name="hall" id="hall">
                                <option value="volvo">Normal</option>
                                <option value="saab">Delex</option>
                                <option value="opel">Primim</option>

                            </select>

                            <label>Total capacity</label>
                            <input type="text" required />

                            <button type="submit">Add </button>
                        </div>
                    </form>
                </div>
            </>

        );
    }
}
export default Addhall;
