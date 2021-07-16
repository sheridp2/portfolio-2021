import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import projectsData from "../assets/ProjectsData";
import { Fade } from "react-reveal";
import { Badge, Button } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  returnedProjects: {
    position: "relative",
    top: "-230px",
    [theme.breakpoints.down("md")]: {
      top: "-200px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-80px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-160px",
    },
  },
  projectCard: {
    "&:hover": {
      backgroundColor: "black",
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

  return <div className={classes.returnedProjects}>{mappedProjects}</div>;
}

export default ProjectList;
