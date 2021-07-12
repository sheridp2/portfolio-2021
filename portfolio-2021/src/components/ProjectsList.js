import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import projectsData from "../assets/ProjectsData";
import { Fade } from "react-reveal";
import { Badge } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  returnedProjects: {
    position: "relative",
    top: "-250px",
    [theme.breakpoints.down("md")]: {
      top: "-150px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-170px",
    },
  },
}));

function ProjectList(props) {
  const [diplayedProjects, setDisplayedProjects] = useState(projectsData);
  const tempArray = [];
  useEffect(() => {
    projectsData.map((project) => {
      if (props.filter === "Professional" && project.company !== "Personal") {
        tempArray.push(project);
      }
      if (props.filter === "Personal" && project.company === "Personal") {
        tempArray.push(project);
      }
      if (props.filter === "All Projects") {
        tempArray.push(project);
      }
    });
    setDisplayedProjects(tempArray);
  }, [props.filter]);

  const classes = useStyles();
  let mappedProjects = diplayedProjects.map((project, index) => {
    return (
      <Fade left duration={1000} distance="200px" key={project.name}>
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
                <img
                  src={project.image}
                  style={{
                    width: "100%",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid item sm={7}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <Grid container spacing={1}>
                  {project.technolgies.map((tech) => {
                    return (
                      <Grid item>
                        <Badge color="primary" pill>
                          {tech.skillName}
                        </Badge>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Fade>
    );
  });

  return <div className={classes.returnedProjects}>{mappedProjects}</div>;
}

export default ProjectList;
