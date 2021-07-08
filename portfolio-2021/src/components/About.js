import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import ProjectsData from "../assets/ProjectsData";

function AboutSkills(props) {
  return (
    <div style={{ backgroundColor: "#ecf4f8" }}>
      <Container>
        <Grid container>
          <Grid item sm={8}>
            <h1>About Me</h1>
          </Grid>

          <Grid item sm={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutSkills;
