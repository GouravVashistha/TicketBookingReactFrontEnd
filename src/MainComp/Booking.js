
import './booking.css'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import axios from 'axios'
import React, { Component } from 'react';
import Headerfile from '../Componenets/Header/Navbar';

class Booking extends Component {
  constructor() {
    super()
    this.state = {
      bookingId: 0,
      showId: 0,
      bookedDate: "",
      showDate: "",
      noOfSeats: "",
      seatTypeId: 0,
      data: {}
    }
  }
  componentDidMount() {
    var axiosinstance = axios.get(`http://localhost:8080/getByEmail/${localStorage.getItem('email')}`)

    axiosinstance.then((response) => {

      this.setState({ data: response.data })

      console.log(this.state.data)

    })
  }
  render() {
    return (
      <div>
        <Headerfile />
        <center>
          <div className="Booking">
            <Typography gutterBottom variant="h3" align="center" class="head">
              Booked
            </Typography>
            <Grid>
              <Card class="card" style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                <CardContent >

                  <Grid container spacing={1}>

                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Enter ShowId" label="Show Id" variant="outlined" fullWidth required
                        onChange={(e) => { this.setState({ showId: e.target.value }) }} />
                    </Grid>
                    <label>Booked Date</label>
                    <Grid item xs={12}>
                      <TextField type="date" variant="outlined" fullWidth required
                        onChange={(e) => { this.setState({ bookedDate: e.target.value }) }} />
                    </Grid>
                    <label>Show Date</label>
                    <Grid item xs={12}>
                      <TextField type="date" variant="outlined" fullWidth required
                        onChange={(e) => { this.setState({ showDate: e.target.value }) }} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Seat Type Id" label="seat type" variant="outlined" fullWidth required
                        onChange={(e) => { this.setState({ seatTypeId: e.target.value }) }} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Number of Seats" label="Number of Seats" variant="outlined" fullWidth required
                        onChange={(e) => { this.setState({ noOfSeats: e.target.value }) }} />
                    </Grid>

                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary" fullWidth onClick={() => {
                        var movie = {
                          movieId: 0,
                          movieName: ""
                        }
                        var hall = {
                          hallId: 0,
                          hallDesc: "",
                          totalCapacity: 0
                        }
                        var shows = {
                          showId: this.state.showId,
                          hall: hall,
                          movie: movie,
                          slotNo: 0,
                          fromDate: "",
                          toDate: ""
                        }
                        var seatTypeId = {
                          seatTypeId: this.state.seatTypeId,
                          seatTypeDesc: "",
                          seatFare: 0
                        }
                        var Booking = {
                          bookingId: null,
                          user: this.state.data,
                          shows: shows,
                          bookedDate: this.state.bookedDate,
                          showDate: this.state.showDate,
                          noOfSeats: this.state.noOfSeats,
                          seatTypeId: seatTypeId
                        }
                        console.log(Booking)
                        var options = {
                          headers: {
                            'Content-Type': 'application/json'
                          }
                        }
                        axios.post("http://localhost:8080/addbooking", Booking, options).then((res) => {

                          alert("Booking Successful")

                        }).catch((err) => {
                          alert("Booking Unsuccessfull")
                        })
                        console.log(Booking)
                      }}>Submit</Button>
                    </Grid>

                  </Grid>

                </CardContent>
              </Card>
            </Grid>
          </div>
        </center>
      </div>
    );
  }
}

export default Booking;