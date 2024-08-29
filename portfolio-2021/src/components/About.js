import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

import AboutDetails from "./AboutDetails";

const useStyles = makeStyles((theme) => ({
  mainText: {
    fontWeight: "bold",
    fontSize: 35,
  },
  mainContainer: {
    [theme.breakpoints.down(1800)]: {
      marginRight: 150,
    },
    [theme.breakpoints.down(1730)]: {
      marginRight: 75,
    },
    [theme.breakpoints.down(1625)]: {
      marginRight: 0,
    },
    [theme.breakpoints.down(1540)]: {
      marginLeft: 260,
    },
    [theme.breakpoints.down(1499)]: {
      marginLeft: 0,
      maxWidth: "100%",
    },
  },

  aboutContainer: {
    position: "relative",
    top: "-220px",

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
        <Container className={classes.mainContainer}>
          <Grid container style={{ paddingBottom: 20 }}>
            <Grid item md={4} sm={6}>
              <h2 className={classes.mainText}>
                A little about <span style={{ color: "#CC5500" }}>me</span>
              </h2>
            </Grid>
          </Grid>
          <Grid container>
            <AboutDetails />
          </Grid>
        </Container>
    </div>
  );
}
