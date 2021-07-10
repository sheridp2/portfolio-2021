import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import ProjectsData from "../assets/ProjectsData";
import { Fade } from "react-reveal";
import { Badge } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  returnedProjects: {
    position: "relative",
    top: "-200px",
    [theme.breakpoints.down("xs")]: {
      top: "0px",
    },
  },
}));

function ProjectList(props) {
  const classes = useStyles();
  let mappedProjects = ProjectsData.map((project, index) => {
    console.log(project);
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
