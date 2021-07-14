import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { UncontrolledTooltip } from "reactstrap";

import About from "./About";
// import selfPic from "../assets/IMG_7976.jpg";
import worker from "../assets/lottie/patrick-dev.json";
import { Fade } from "react-reveal";

import LottieAnimate from "./LottieAnimate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainText: {
    fontSize: "55px",
  },
  secondaryText: {
    fontSize: "30px",
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

          <Container>
            <Fade top duration={1000} distance="40px">
              <div>
                <Grid container>
                  <Grid
                    item
                    md={5}
                    sm={12}
                    className={classes.meText}
                    style={{ zIndex: 10 }}
                  >
                    <h1 className={classes.mainText}>Patrick Sheridan</h1>
                    <p className={classes.secondaryText}>Frontend Developer</p>
                    <Grid container spacing={4}>
                      <Grid item>
                        <a
                          href="https://github.com/sheridp2"
                          target="_blank"
                          rel="noopener"
                        >
                          <div
                            className="icon icon-sm"
                            style={{
                              color: "#e8e3e3",
                            }}
                            id="github"
                          >
                            <span
                              className="iconify"
                              data-icon="logos:github-icon"
                              data-inline="false"
                              style={{ height: 35, width: 35 }}
                            ></span>
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target="github"
                            style={{ fontSize: 15 }}
                          >
                            Github: https://github.com/sheridp2
                          </UncontrolledTooltip>
                        </a>
                      </Grid>
                      <Grid item>
                        <a
                          href="https://www.linkedin.com/in/patrick-sheridan/"
                          target="_blank"
                          rel="noopener"
                        >
                          <div
                            className="icon icon-sm"
                            style={{
                              color: "#e8e3e3",
                            }}
                            id="linkedin"
                          >
                            <span
                              className="iconify"
                              data-icon="logos:linkedin-icon"
                              data-inline="false"
                              style={{ height: 35, width: 35 }}
                            ></span>
                            <UncontrolledTooltip
                              delay={0}
                              placement="bottom"
                              target="linkedin"
                              style={{ fontSize: 15 }}
                            >
                              Linkedin:
                              https://www.linkedin.com/in/patrick-sheridan/
                            </UncontrolledTooltip>
                          </div>
                        </a>
                      </Grid>
                      <Grid item>
                        <a
                          href="mailto:sheridp2@gmail.com"
                          target="_blank"
                          rel="noopener"
                        >
                          <div
                            className="icon icon-sm"
                            style={{
                              color: "#e8e3e3",
                            }}
                            id="gmail"
                          >
                            <span
                              className="iconify"
                              data-icon="logos:google-gmail"
                              data-inline="false"
                              style={{ height: 35, width: 35 }}
                            ></span>
                            <UncontrolledTooltip
                              delay={0}
                              placement="bottom"
                              target="gmail"
                              style={{ fontSize: 15 }}
                            >
                              Gmail: sheridp2@gmail.com
                            </UncontrolledTooltip>
                          </div>
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={7} sm={12} className={classes.lottieImage}>
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
        <Fade>
          <About />
        </Fade>
      </div>
    </div>
  );
}

export default Main;
