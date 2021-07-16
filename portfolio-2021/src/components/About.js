import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  mainText: {
    fontWeight: "bold",
  },
  aboutContainer: {
    position: "relative",
    top: "-180px",
    [theme.breakpoints.down("md")]: {
      top: "-150px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-90px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-140px",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
      <Fade duration={1000} distance="40px" bottom>
        <Container>
          <Grid item>
            <h1 className={classes.mainText}>A little about me</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetuer.</li>
              <li>Aenean commodo ligula eget dolor.</li>
              <li>Aenean massa cum sociis natoque penatibus.</li>
            </ul>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}
