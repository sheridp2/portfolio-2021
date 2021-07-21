import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Card, CardMedia } from "@material-ui/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Fade } from "react-reveal";
import { Badge, Button } from "reactstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import projectsData from "../assets/ProjectsData";

const useStyles = makeStyles((theme) => ({
  returnedProjects: {
    position: "relative",
    top: "-180px",
    [theme.breakpoints.down("md")]: {
      top: "-140px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-40px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-100px",
    },
  },
  mainContainer: {
    [theme.breakpoints.down(1700)]: {
      marginRight: 100,
    },
    [theme.breakpoints.down(1600)]: {
      marginRight: 0,
    },
  },

  cards: {
    width: "100%",
    transition: "all .4s ease",
    boxShadow: "8px 8px rgba(0,0,0,.15)",
    position: "relative",
    "&:hover": {
      boxShadow: "12px 12px rgba(0,0,0,.15)",
      "& $image": {
        opacity: 0.1,
      },
      "& $middle": {
        opacity: 1,
      },
    },
  },

  image: {
    opacity: 1,
    display: "block",
    width: "100%",
    height: "auto",
    transition: ".5s ease",
    backfaceVisibility: "hidden",
  },

  middle: {
    transition: ".5s ease",
    opacity: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    textAlign: "",
    width: 320,
    [theme.breakpoints.down("xs")]: {
      width: 280,
    },
  },

  text: {
    fontSize: "16px",
    padding: "0px 0px",
  },
}));

function ProjectList(props) {
  const [diplayedProjects, setDisplayedProjects] = useState(projectsData);
  useEffect(() => {
    const tempArray = [];
    const nonFeatured = [];
    projectsData.forEach((project) => {
      if (props.filter === "Professional" && project.company !== "Personal") {
        if (project.featured === false) {
          nonFeatured.push(project);
        } else {
          tempArray.push(project);
        }
      }
      if (props.filter === "Personal" && project.company === "Personal") {
        if (project.featured === false) {
          nonFeatured.push(project);
        } else {
          tempArray.push(project);
        }
      }
      if (props.filter === "All Projects") {
        if (project.featured === false) {
          nonFeatured.push(project);
        } else {
          tempArray.push(project);
        }
      }
    });
    setDisplayedProjects(tempArray.concat(nonFeatured));
  }, [props.filter]);

  const classes = useStyles();

  let projectTiles = diplayedProjects.map((project) => {
    return (
      <Grid item lg={4} md={4} sm={6} xs={12} style={{ paddingBottom: 30 }}>
        <Flippy
          key={project.name}
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
        >
          <FrontSide style={{ backgroundColor: "white", padding: 0 }}>
            <Card className={classes.cards} style={{ padding: 0 }}>
              <CardMedia
                className={classes.image}
                image={`${project.image}`}
                style={{ height: 275, padding: 10 }}
              />
              <div className={classes.middle}>
                <div className={classes.text}>
                  <h3
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {project.name}
                  </h3>
                  <Grid container spacing={1}>
                    {project.technolgies.map((tech) => {
                      return (
                        <Grid item key={tech.skillName}>
                          <h6>
                            <Badge color="primary" pill>
                              {tech.skillName}
                            </Badge>
                          </h6>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Grid container>
                    <Grid item xs={8} style={{ paddingTop: 10 }}>
                      <h4>
                        <Button color="success" outline>
                          <span className="btn-inner--text">Learn More</span>
                          <span
                            className="btn-inner--icon"
                            style={{ paddingLeft: 5 }}
                          >
                            <i className="ni ni-bold-right"></i>
                          </span>
                        </Button>
                      </h4>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Card>
          </FrontSide>
          <BackSide style={{ backgroundColor: "white" }}>
            <h3
              style={{
                fontWeight: "bold",
              }}
            >
              {project.name}
            </h3>
            <h4>
              <Badge color="success">{project.company}</Badge>
            </h4>

            <p>{project.description}</p>
            <Grid container>
              <Grid item sm={6}>
                <a rel="noreferrer" target="_blank" href={project.url}>
                  Visit Website
                </a>
              </Grid>
              <Grid item sm={6}>
                <a rel="noreferrer" target="_blank" href={project.frontendRepo}>
                  Github
                </a>
              </Grid>
            </Grid>
          </BackSide>
        </Flippy>
      </Grid>
    );
  });

  return (
    <Container className={classes.mainContainer}>
      <Grid container spacing={2} className={classes.returnedProjects}>
        {projectTiles}
      </Grid>
    </Container>
  );
}

export default ProjectList;
