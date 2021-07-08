import React from "react";
import { Container, Grid } from "@material-ui/core";
import { UncontrolledTooltip, Button } from "reactstrap";

import TechData from "../assets/TechData";

function AboutSkills() {
  let allTech = TechData.map((tech) => {
    return (
      <>
        <Grid key={tech.skillName} item sm={1} style={{ margin: "0px 14px" }}>
          <div
            className="icon icon-xl icon-shape shadow rounded-circle mb-4"
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
    <div>
      <Container>
        <Grid container xs={12}>
          <Grid item>
            <h1>Main Tech Stacks</h1>
            <Grid container spacing={2}>
              {allTech}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutSkills;
