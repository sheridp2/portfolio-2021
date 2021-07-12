import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

import About from "./About";
// import selfPic from "../assets/IMG_7976.jpg";
import worker from "../assets/lottie/64381-work.json";
import { Fade } from "react-reveal";

import LottieAnimate from "./LottieAnimate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainText: {
    paddingLeft: 20,
    fontSize: "44px",
  },
  secondaryText: {
    paddingLeft: 20,
    fontSize: "24px",
  },

  meText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "50px",
    },
  },
  lottieImage: {
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "-50px",
    },
  },
  socialMedias: {
    paddingLeft: 20,
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

          <Container>
            <Fade top duration={1000} distance="40px">
              <div>
                <Grid container>
                  <Grid item sm={6} className={classes.meText}>
                    <h1 className={classes.mainText}>Patrick Sheridan</h1>
                    <p className={classes.secondaryText}>Frontend Developer</p>

                    <p className={classes.socialMedias}>Social media Icons</p>
                  </Grid>
                  <Grid item sm={6} className={classes.lottieImage}>
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
        <Fade bottom duration={1000} distance="40px">
          <About />
        </Fade>
      </div>
    </div>
  );
}

export default Main;
