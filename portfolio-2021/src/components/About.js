import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UncontrolledTooltip } from "reactstrap";

import TechData from "../assets/TechData";

const useStyles = makeStyles((theme) => ({
  returnedTech: {
    position: "relative",
    top: "-220px",

    [theme.breakpoints.down("md")]: {
      top: "-200px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-120px",
    },
  },
}));
function AboutSkills() {
  const classes = useStyles();
  let allTech = TechData.map((tech) => {
    return (
      <>
        <Grid key={tech.skillName} item sm={1} style={{ margin: "0px 14px" }}>
          <div
            className="icon icon-xl icon-shape shadow rounded-circle mb-4 "
            style={{
              color: "#e8e3e3",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
            id={tech.skillName}
          >
            <span
              className="iconify"
              data-icon={tech.fontAwesomeClassname}
              data-inline="false"
              style={{ height: 45, width: 45 }}
            ></span>
          </div>
          <UncontrolledTooltip
            delay={0}
            placement="bottom"
            target={tech.skillName}
            style={{ fontSize: 20 }}
          >
            {tech.skillName}
          </UncontrolledTooltip>
        </Grid>
      </>
    );
  });

  return (
    <div className={classes.returnedTech}>
      <Container>
        <Grid container>
          <Grid item>
            <h1>Main Tech Stacks</h1>
            <Grid container spacing={2}>
              {allTech}
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <h1>About me</h1>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutSkills;
