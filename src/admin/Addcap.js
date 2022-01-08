import { Component, useState } from "react";
import "./admin.css";
import AdminNav from "./AdminNav";
import axios from "axios";
class Addhallcap extends Component {
    constructor() {
        super()
        this.state = {
            hallCapId: 0,
            seatType: '',
            hallCap: 0,
            seatCount: 0,
            hallId: 0,
            seatTypeId: 0


        }
        // this.change = this.change.bind(this);
    }

    // change (event) {
    //     this.setState({hallDesc:event.target.value})
    // }



    render() {
        return (
            <>
                <AdminNav />
                <div className="admin">


                    <h1>Add Hall Capacity</h1>
                    <div className="formInput">
                        <label>hall Capacity ID</label>
                        <input type="number" required onChange={(e) => {
                            this.setState({ hallCapId: e.target.value })
                        }} />

                        <label>hall ID</label>
                        <input type="number" required onChange={(e) => {
                            this.setState({ hallId: e.target.value })
                        }} />
                        <label>SeatTypeId</label>
                        <input type="number" required onChange={(e) => {
                            this.setState({ seatTypeId: e.target.value })
                        }} />



                        {/* <label>Seat Type</label>
                            <select id="lang" onChange={this.change} value={this.state.value}>,
                            <option value="select" selected >select</option>
                  <option value="Normal" >Normal</option>
                  <option value="deluxe">deluxe</option>
                  <option value="primium">Primium</option>
               </select> */}

                        {/* <label>hall Capacity</label>
                            <input type="number" required onChange={(e)=>{
                                this.setState({hallCap:e.target.value})
                            }}/> */}

                        <label>Seat count</label>
                        <input type="number" required onChange={(e) => {
                            this.setState({ seatCount: e.target.value })
                        }} />
                        <button type="submit" onClick={() => {
                            var hall = {
                                hallId: this.state.hallId,
                                hallDesc: "",
                                totalCapacity: 0
                            }
                            var seat = {
                                seatTypeId: this.state.seatTypeId,
                                seatTypeDesc: "",
                                seatFare: 0
                            }
                            var hallCap = {
                                hallCapacityId: this.state.hallCapId,
                                halls: hall,
                                seatType: seat,
                                seatCount: this.state.seatCount
                            }
                            console.log(hallCap)
                            var option = {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                            axios.post("http://localhost:8080/addCapacity", hallCap, option).then((res) => {

                                console.log(res.data)
                                alert("added Successfully");
                            }).catch((err) => {
                                alert("error has occured")
                            })
                        }}>Add </button>
                    </div>

                </div>
            </>

        );
    }
}
export default Addhallcap;
