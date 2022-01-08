import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { Ballot } from "@material-ui/icons";
import { Home } from "@material-ui/icons";
import { Nav, NavDropdown } from "react-bootstrap";
import './nav.css'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  linknav: {
    fontSize: "20px",
    fontfamily: "arial",
    textcolor: "white"
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    fontfamily: "arial",
    listStyle: "none",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Headerfile() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  let user = localStorage.getItem('email')
  function logout() {
    localStorage.clear();
    navigate("/login")


  }
  return (
    <AppBar position="static" >
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Movie Booking

        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/Home" className={classes.link}>
              <Home />
              Home
            </Link>

            <Link to="/shows" className={classes.link}>
              Movies
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>

            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            {localStorage.getItem('email') ?
              null
              : <Link to="/login" className={classes.link}>
                Login
              </Link>
            }

            <Link to="/registration" className={classes.link}>
              Signup
            </Link>

            <Nav>
              <NavDropdown className={classes.linknav} style={{ fontSize: '130%', background: '#fff', marginLeft: '20px', 'borderRadius': '40%' }} title={user}>
                < NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>


          </div>
        )
        }
      </Toolbar >
    </AppBar >
  );
}
export default Headerfile;
