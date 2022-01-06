import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { Ballot } from "@material-ui/icons";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
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
      borderBottom: "2px solid white",
    },
  },
}));

function Headerfile() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className="app">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Movie Booking

        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
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

            <Link to="/login" className={classes.link}>
              Login
            </Link>
            <Link to="/register" className={classes.link}>
              Signup
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Headerfile;
