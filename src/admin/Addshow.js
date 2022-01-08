import "./admin.css";
import AdminNav from "./AdminNav";
import DatePicker from "react-datepicker";
import { Component } from "react";
import axios from 'axios'
class Addshows extends Component {
    constructor() {
        super()
        this.state = {
            showId: 0,

            movieId: '',

            hallId: '',
            slotNo: 0,
            start: '',
            end: ''
        }

    }
    Startdate = (e) => {
        this.setState({
            start: e,

        });
    };
    Enddate = (z) => {
        this.setState({
            end: z,

        });
    };


    render() {
        return (
            <>
                <AdminNav />
                <div className="admin">

                    <form>
                        <h1>Add shows</h1>
                        <div className="formInput">
                            <label>MoviesId</label>
                            <input className="form-control " type="text" required onChange={(e) => {
                                this.setState({ movieId: e.target.value })
                            }} />

                            <label>Hall ID</label>
                            <input className="form-control " type="text" required onChange={(e) => {
                                this.setState({ hallId: e.target.value })
                            }} />

                            <label>slot No</label>
                            <input className="form-control " type="number" required onChange={(e) => {
                                this.setState({ slotNo: e.target.value })
                            }} />
                            <label>Start from</label>
                            <DatePicker className="form-control mb-3"
                                selected={this.state.start} placeholderText="Start from" dateFormat="d/M/yyyy" showPopperArrow={true}
                                onChange={this.Startdate}
                            />
                            <label>End</label>
                            <DatePicker className="form-control mb-3"
                                selected={this.state.end} onChange={this.Enddate} placeholderText="end" dateFormat="d/M/yyyy" showPopperArrow={true}

                            />
                            <button onClick={() => {
                                var hall = {
                                    hallId: this.state.hallId,
                                    hallDesc: "",
                                    totalCapacity: 0
                                }
                                var movie = {
                                    movieId: this.state.movieId,
                                    movieName: ""
                                }
                                var Show = {
                                    showId: this.state.showId,
                                    hall: hall,
                                    movie: movie,
                                    slotNo: this.state.slotNo,
                                    fromDate: this.state.start,
                                    toDate: this.state.end
                                }
                                var options = {
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }
                                axios.post("http://localhost:8080/addshow", Show, options).then((res) => {
                                    console.log(res.data)
                                }).catch((err) => {
                                    console.log("error has occured")
                                })
                            }}>Add </button>
                        </div>
                    </form>
                </div>
            </>

        );
    }
}
export default Addshows;
