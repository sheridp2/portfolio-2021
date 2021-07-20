import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { Fade } from "react-reveal";
import { Badge, Button } from "reactstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import projectsData from "../assets/ProjectsData";

const useStyles = makeStyles((theme) => ({
  returnedProjects: {
    position: "relative",
    top: "-230px",
    [theme.breakpoints.down("md")]: {
      top: "-200px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-40px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-100px",
    },
  },
  projectCard: {
    "&:hover": {
      backgroundColor: "black",
    },
  },
  cards: {
    width: "100%",
    height: 240,
    borderRadius: "2px",
    [theme.breakpoints.down("md")]: {
      height: 220,
    },
    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
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
      <Grid item lg={4} md={4} sm={6} xs={12}>
        <Flippy
          key={project.name}
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
        >
          <FrontSide style={{ backgroundColor: "white", padding: 0 }}>
            <img className={classes.cards} src={project.image} style={{}} />
          </FrontSide>
          <BackSide>
            <h2 style={{ fontWeight: "bold" }}>{project.name}</h2>

            <h4>
              <Badge color="success">{project.company}</Badge>
            </h4>
          </BackSide>
        </Flippy>
      </Grid>
    );
  });

  let mappedProjects = diplayedProjects.map((project) => {
    return (
      <div key={project.name}>
        <Fade left duration={1000} distance="200px">
          <div
            style={{
              paddingTop: 20,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Container className="card shadow" style={{ padding: 15 }}>
              <Grid container spacing={2}>
                <Grid item sm={5}>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      style={{
                        width: "100%",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                </Grid>
                <Grid item sm={7}>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <h2 style={{ fontWeight: "bold" }}>{project.name}</h2>
                  </a>
                  <h4>
                    <Badge color="success">{project.company}</Badge>
                  </h4>

                  <p>{project.description}</p>
                  <Grid container spacing={1}>
                    {project.technolgies.map((tech) => {
                      return (
                        <Grid item key={tech.skillName}>
                          <h5>
                            <Badge color="primary" pill>
                              {tech.skillName}
                            </Badge>
                          </h5>
                        </Grid>
                      );
                    })}
                  </Grid>

                  <Grid container style={{ paddingTop: 15 }} spacing={2}>
                    <Grid item>
                      {project.frontendRepo !== "N/A" ? (
                        <Button
                          color="primary"
                          href={project.frontendRepo}
                          target="_blank"
                          rel="noreferrer"
                          outline
                        >
                          Frontend Repo
                        </Button>
                      ) : (
                        <div></div>
                      )}
                    </Grid>
                    <Grid item>
                      {project.backendRepo !== "N/A" ? (
                        <Button
                          color="primary"
                          href={project.backendRepo}
                          target="_blank"
                          rel="noreferrer"
                          outline
                        >
                          Backend Repo
                        </Button>
                      ) : (
                        <div></div>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Fade>
      </div>
    );
  });
  return (
    <Container>
      <Grid container spacing={2} className={classes.returnedProjects}>
        {projectTiles}
      </Grid>
    </Container>
  );

  // return <div className={classes.returnedProjects}>{mappedProjects}</div>;
}

export default ProjectList;
