import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button, Icon } from "@material-ui/core";
import { Fade } from "react-reveal";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import forestServiceImage from "../assets/images/forestservice.JPG";
import AboutDetails from "./AboutDetails";

const useStyles = makeStyles((theme) => ({
  mainText: {
    fontWeight: "bold",
    fontSize: 35,
  },
  mainContainer: {
    [theme.breakpoints.down(1700)]: {
      marginRight: 100,
    },
    [theme.breakpoints.down(1600)]: {
      marginRight: 0,
    },
  },

  aboutContainer: {
    position: "relative",
    top: "-150px",

    [theme.breakpoints.down("md")]: {
      top: "-150px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-80px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-130px",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
      <Fade duration={1000} distance="40px" bottom>
        <Container className={classes.mainContainer}>
          <Grid container>
            <Grid item md={4} sm={6}>
              <h2 className={classes.mainText}>
                A little about <span style={{ color: "#CC5500" }}>me</span>
              </h2>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <AboutDetails />
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}
