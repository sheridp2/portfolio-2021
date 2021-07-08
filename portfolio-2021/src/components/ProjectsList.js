import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import ProjectsData from "../assets/ProjectsData";
import { Fade } from "react-reveal";

function ProjectList(props) {
  let mappedProjects = ProjectsData.map((project, index) => {
    return index % 2 === 0 ? (
      <Fade left duration={1000} distance="200px" key={project.name}>
        <div style={{ paddingTop: 20 }}>
          <Container>
            <Grid container spacing={2}>
              <Grid item sm={5}>
                <img src={project.image} style={{ width: "100%" }} />
              </Grid>
              <Grid item sm={7}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Fade>
    ) : (
      <Fade right duration={1000} distance="200px" key={project.name}>
        <div style={{ paddingTop: 20 }}>
          <Container>
            <Grid container spacing={2}>
              <Grid item sm={7}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </Grid>
              <Grid item sm={5}>
                <img src={project.image} style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Fade>
    );
  });

  return <div style={{ backgroundColor: "#ecf4f8" }}>{mappedProjects}</div>;
}

export default ProjectList;
