import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UncontrolledTooltip } from "reactstrap";
import { Fade } from "react-reveal";

import TechData from "../assets/TechData";

const useStyles = makeStyles((theme) => ({
  returnedTech: {
    position: "relative",
    top: "-280px",

    [theme.breakpoints.down("md")]: {
      top: "-170px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-80px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-130px",
    },
  },
}));
function Skills() {
  const classes = useStyles();
  let allTech = TechData.map((tech) => {
    return (
      <Grid
        key={tech.skillName}
        item
        lg={1}
        md={1}
        sm={2}
        xs={2}
        style={{ marginRight: "32px" }}
      >
        <div
          className="icon icon-xl icon-shape shadow rounded-circle mb-4 "
          style={{
            color: "#e8e3e3",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
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
    );
  });

  return (
    <div className={classes.returnedTech}>
      <Container>
        <Fade duration={1000} distance="40px" bottom>
          <Grid container>
            <Grid item>
              <h2 style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
                I work with
              </h2>
              <Grid container>{allTech}</Grid>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </div>
  );
}

export default Skills;