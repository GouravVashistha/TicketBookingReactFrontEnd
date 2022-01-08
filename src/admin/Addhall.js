import { Component, useState } from "react";

import "./admin.css";
import AdminNav from "./AdminNav";
import axios from "axios";
class Addhall extends Component {
    constructor() {
        super()
        this.state = {
            hallId: 0,
            hallDesc: "",
            hallCap: 0,


        }
        this.change = this.change.bind(this);
    }

    change(event) {
        this.setState({ hallDesc: event.target.value })
    }

    render() {
        return (
            <>
                <AdminNav />
                <div className="admin">


                    <h1>Add Hall</h1>
                    <div className="formInput">
                        <label>Add Hall ID</label>
                        <input type="number" required onChange={(e) => {
                            this.setState({ hallId: e.target.value })
                        }} />

                        {/* <select className="mt-2" name="hall" id="hall">
                                <option value="volvo" onChange={()=>{
                                  
                                   this.state.hallDesc="Normal"
                                   this.setState({hallDesc:"Normal"})
                                }}>Normal</option>
                                <option value="saab"onChange={()=>{
                                  // this.setState({hallDesc:e.target.value})
                                  this.state.hallDesc="Delux"
                                  this.setState({hallDesc:"Delux"})
                                }}>Delex</option>
                                <option value="opel" onChange={()=>{
                              
                                   this.state.hallDesc="Premium"
                                   this.setState({hallDesc:"Premium"})
                                }}>Primim</option>

                            </select> */}

                        <label>Hall Description</label>
                        <select id="lang" onChange={this.change} value={this.state.value}>,
                            <option value="select" selected >select</option>
                            <option value="Normal" >Normal</option>
                            <option value="deluxe">deluxe</option>
                            <option value="primium">Primium</option>
                        </select>

                        <label>Total capacity</label>
                        <input type="number" required onChange={(e) => {
                            this.setState({ hallCap: e.target.value })
                        }} />

                        <button type="submit" onClick={() => {
                            var addHall = {
                                hallId: this.state.hallId,
                                hallDesc: this.state.hallDesc,
                                totalCapacity: this.state.hallCap
                            }
                            console.log(addHall);
                            var option = {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                            axios.post("http://localhost:8080/addhall", addHall, option).then((res) => {
                                console.log(res.data)
                            }).catch((err) => {
                                console.log("error has occured")
                            })
                        }}>Add </button>
                    </div>

                </div>
            </>

        );
    }
}

export default Addhall;
