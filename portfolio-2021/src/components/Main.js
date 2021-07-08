import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import ProjectsList from "./ProjectsList";
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
    backgroundColor: "#ecf4f8",
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
      <Container>
        <Fade top duration={1000} distance="40px">
          <div>
            <Grid container>
              <Grid item sm={6} className={classes.meText}>
                <h1 className={classes.mainText}>Patrick Sheridan</h1>
                <p className={classes.secondaryText}>Frontend Developer</p>
                <p className={classes.secondaryText}>
                  Short blurb about me and some skills
                </p>
                <p className={classes.socialMedias}>Social media Icons</p>
              </Grid>
              <Grid item sm={6}>
                <LottieAnimate animationData={worker} />
              </Grid>
            </Grid>
          </div>
        </Fade>

        {/* <ProjectsList /> */}
      </Container>
    </div>
  );
}

export default Main;
