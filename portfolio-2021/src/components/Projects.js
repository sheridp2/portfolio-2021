import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import ProjectsList from "./ProjectsList";
import developement from "../assets/lottie/28391-web-development.json";
import { Fade } from "react-reveal";

import LottieAnimate from "./LottieAnimate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainText: {
    fontSize: "50px",
  },
  meText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "#ecf4f8",
  },
}));
function Projects() {
  const classes = useStyles();
  const [projectFeatured, setProjectFeatured] = useState(true);
  const [projectFilter, setProjectFilter] = useState("All");

  return (
    <div className={classes.root}>
      <Container>
        <Fade top duration={1000} distance="40px">
          <div>
            <Grid container>
              <Grid item sm={6}>
                <LottieAnimate animationData={developement} />
              </Grid>
              <Grid item sm={6} className={classes.meText}>
                <h1 className={classes.mainText}>Porftolio</h1>
              </Grid>
            </Grid>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <ProjectsList featured={projectFeatured} filter={projectFilter} />
        </Fade>
      </Container>
    </div>
  );
}

export default Projects;
