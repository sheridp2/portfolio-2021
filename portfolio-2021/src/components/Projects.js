import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import ProjectsList from "./ProjectsList";
import developement from "../assets/lottie/64110-web-development.json";
import { Fade } from "react-reveal";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

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
    paddingLeft: 12,
    paddingRight: 12,
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "-50px",
    },
  },
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      position: "relative",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "-30px",
    },
  },
}));
function Projects() {
  const classes = useStyles();
  const [projectFeatured, setProjectFeatured] = useState(true);
  const [projectFilter, setProjectFilter] = useState("All Projects");

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function workPersonalFilter(e) {
    setProjectFilter(e.target.value);
  }

  return (
    <div>
      <div className="position-relative">
        <section
          className="section section-lg section-shaped pb-250"
          style={{ paddingTop: 40 }}
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
          <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Fade top duration={1000} distance="40px">
              <Grid container className={classes.mainContainer}>
                <Grid item md={7} sm={12}>
                  <LottieAnimate
                    animationData={developement}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={5} sm={12} className={classes.meText}>
                  <h1 className={classes.mainText}>Projects</h1>
                  <br />
                  <Dropdown
                    direction="down"
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    style={{ maxWidth: 100, zIndex: 11 }}
                  >
                    <DropdownToggle caret color="secondary">
                      Project Filter
                    </DropdownToggle>

                    <DropdownMenu aria-labelledby="dropdownMenuButton">
                      <DropdownItem
                        onClick={(e) => workPersonalFilter(e)}
                        value="All Projects"
                      >
                        All Projects
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => workPersonalFilter(e)}
                        value="Professional"
                      >
                        Professional
                      </DropdownItem>

                      <DropdownItem
                        onClick={(e) => workPersonalFilter(e)}
                        value="Personal"
                      >
                        Personal
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Grid>
              </Grid>
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
          <ProjectsList featured={projectFeatured} filter={projectFilter} />
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
