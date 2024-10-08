import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

import ProjectsList from "./ProjectsList";
import developement from "../assets/lottie/64110-web-development.json";
import LottieAnimate from "./LottieAnimate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    [theme.breakpoints.down(1700)]: {
      marginRight: 100,
    },
    [theme.breakpoints.down(1600)]: {
      marginRight: 0,
    },
  },

  mainText: {
    fontSize: "65px",
    color: "white",
    fontWeight: "bold",
    textShadow: " 2px 2px black",
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
  mainInnerContainer: {
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "10px",
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
    <div className={classes.root}>
      <div className="position-relative">
        <section
          className="section section-lg section-shaped pb-250"
          style={{ paddingTop: 0 }}
        >
          <div className="shape shape-style-1 bg-gradient-teal">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container
            style={{ paddingLeft: 0, paddingRight: 0 }}
            className={classes.mainContainer}
          >
            <Grid container className={classes.mainInnerContainer}>
              <Grid item md={7} sm={12}>
                <LottieAnimate
                  animationData={developement}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={5} sm={12} className={classes.meText}>
                <h1 className={classes.mainText}>Projects</h1>

                <Dropdown
                  direction="down"
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  style={{
                    maxWidth: 100,
                    zIndex: 11,
                    paddingTop: 8,
                  }}
                >
                  <DropdownToggle
                    caret
                    color="secondary"
                    style={{ boxShadow: "4px 4px 0 rgba(0,0,0,.5)" }}
                  >
                    Project Filter
                  </DropdownToggle>

                  <DropdownMenu
                    aria-labelledby="dropdownMenuButton"
                    style={{ zIndex: 11 }}
                  >
                    <DropdownItem
                      style={{ zIndex: 11 }}
                      onClick={(e) => workPersonalFilter(e)}
                      value="All Projects"
                    >
                      All Projects
                    </DropdownItem>
                    <DropdownItem
                      style={{ zIndex: 11 }}
                      onClick={(e) => workPersonalFilter(e)}
                      value="Professional"
                    >
                      Professional
                    </DropdownItem>

                    <DropdownItem
                      style={{ zIndex: 12 }}
                      onClick={(e) => workPersonalFilter(e)}
                      value="Personal"
                    >
                      Personal
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Grid>
            </Grid>
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
        <ProjectsList featured={projectFeatured} filter={projectFilter} />
      </div>
    </div>
  );
}

export default Projects;
