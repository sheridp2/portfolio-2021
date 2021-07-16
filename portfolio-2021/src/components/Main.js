import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

import { Fade } from "react-reveal";

import Skills from "./Skills";
import About from "./About";
import worker from "../assets/lottie/patrick-dev.json";

import LottieAnimate from "./LottieAnimate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Open Sans, sans-serif",
    color: "#525f7f",
  },
  mainText: {
    fontSize: 65,
    color: "white",
    fontWeight: "bold",
    marginBottom: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 60,
    },
  },
  secondaryText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  missionText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  meText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "50px",
    },
  },
  lottieImage: {
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "-40px",
    },
  },
  socialMedias: {
    fontSize: "20px",
  },
}));

function Main(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="position-relative">
        <section
          className="section section-lg section-shaped pb-250"
          style={{ paddingTop: 0 }}
        >
          <div className="shape shape-style-1 bg-gradient-green">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <Container maxWidth="lg" className={classes.mainContainer}>
            <Fade top duration={1000} distance="40px">
              <div>
                <Grid container>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    className={classes.meText}
                    style={{ zIndex: 10 }}
                  >
                    <h1 className={classes.mainText}>Patrick Sheridan</h1>
                    <p className={classes.secondaryText}>Front End Developer</p>
                    <p className={classes.missionText}>
                      Let's change the world, one line of code at a time
                    </p>
                  </Grid>

                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    className={classes.lottieImage}
                  >
                    <LottieAnimate animationData={worker} />
                  </Grid>
                </Grid>
              </div>
            </Fade>
          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <About />
        </section>
      </div>
    </div>
  );
}

export default Main;
