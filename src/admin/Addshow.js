import "./admin.css";
import AdminNav from "./AdminNav";
import DatePicker from "react-datepicker";
import { Component } from "react";
class Addshows extends Component {
    constructor() {
        super()
        this.state = {
            start: '',
            end: '',
            movieId: '',
            hallId: '',
            slotNo: '',

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
                            <input className="form-control " type="text" required />

                            <label>Hall ID</label>
                            <input className="form-control " type="text" required />

                            <label>slot No</label>
                            <input className="form-control " type="text" required />
                            <label>Start from</label>
                            <DatePicker className="form-control mb-3"
                                selected={this.state.start} placeholderText="Start from" dateFormat="d/M/yyyy" showPopperArrow={true}
                                onChange={this.Startdate}
                            />
                            <label>End</label>
                            <DatePicker className="form-control mb-3"
                                selected={this.state.end} onChange={this.Enddate} placeholderText="end" dateFormat="d/M/yyyy" showPopperArrow={true}

                            />
                            <button type="submit">Add </button>
                        </div>
                    </form>
                </div>
            </>

        );
    }
}
export default Addshows;
