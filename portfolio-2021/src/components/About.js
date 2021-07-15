import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UncontrolledTooltip } from "reactstrap";
import { Fade } from "react-reveal";

import TechData from "../assets/TechData";

const useStyles = makeStyles((theme) => ({
  returnedTech: {
    position: "relative",
    top: "-220px",

    [theme.breakpoints.down("md")]: {
      top: "-170px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-110px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-160px",
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
        <Fade duration={1000} distance="40px" bottom>
          <Grid container>
            <Grid item>
              <h1>Tech Stacks</h1>
              <Grid container spacing={2}>
                {allTech}
              </Grid>
            </Grid>
          </Grid>
        </Fade>
        <br />
        <Fade duration={1000} distance="40px" bottom>
          <Grid container>
            <h1>About me</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
              <li>Nunc dignissim risus id metus.</li>
              <li>Cras ornare tristique elit.</li>
            </ul>
          </Grid>
        </Fade>
      </Container>
    </div>
  );
}

export default AboutSkills;
