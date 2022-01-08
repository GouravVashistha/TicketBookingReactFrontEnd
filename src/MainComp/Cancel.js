import { Component } from "react";
import axios from 'axios';

class CancelMovies extends Component {
    constructor() {
        super()
        this.state = {
            BookingID: 0,
        }
    }
    render() {
        return (
            <div>
                <center>

                    <h1>CancelMovie</h1>
                    <div className="formInput">
                        <label>BookingID</label>
                        <input type="number" required onChange={(e) => {
                            this.setState({ BookingID: e.target.value })
                            console.log(this.state.BookingID)
                        }} />
                        <button onClick={() => {
                            axios.post(`http://localhost:8080/cancelbooking/${this.state.BookingID}`).then((res) => {
                                console.log(res.data)
                                alert("successfull cancled")
                            }).catch((err) => {
                                console.log("error has occured")
                                alert("Id requird")
                            })
                        }} type="submit" >Cancel</button>

                    </div>

                </center>
            </div>
        );
    }
}
export default CancelMovies;
