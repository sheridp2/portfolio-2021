import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import ResponsiveDrawer from "./ResponsiveDrawer";
import { Grid } from "@material-ui/core";
import resume from "../assets/images/Patrick-Sheridan-Resume-2024.pdf";

// reactstrap components
import {
  UncontrolledTooltip,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "yellow",
    // background: "white",

    display: "inline-block",
    fontSize: "1.5em",
    marginLeft: 15,
    marginBottom: 10,
    width: 220,
    padding: ".5em 2em",
    textDecoration: "none",
    boxShadow: "4px 4px 0 rgba(0,0,0,.5)",
    transform: "skew(-16deg)",
    "&:hover": {
      transform: "skew(-18deg)",
      boxShadow: "10px 10px 0 rgba(0,0,0,.5)",
    },
  },

  skewFix: {
    display: "inline-block",
  },
}));

function VerticalNav() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1499);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1499);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isDesktop ? (
        <div
          style={{
            position: "fixed",
            zIndex: 11,
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            top: 10,
          }}
        >
          <Navbar
            color="faded"
            light
            navbar
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem style={{ marginRight: 0 }}>
                  <NavLink to="/">
                    <Button className={classes.button}>Home</Button>
                  </NavLink>
                </NavItem>

                <NavItem style={{ marginRight: 0 }}>
                  <NavLink to="/projects">
                    <Button className={classes.button}>Projects</Button>
                  </NavLink>
                </NavItem>
                <NavItem style={{ marginRight: 0 }}>
                  <a target="_blank" rel="noreferrer" href={resume}>
                    <Button className={classes.button}>Resume</Button>
                  </a>
                </NavItem>

                <NavItem>
                  <hr />
                </NavItem>
                <div
                  style={{
                    backgroundColor: "white",
                    paddingBottom: 20,
                    boxShadow: "4px 4px 0 rgba(0,0,0,.5)",
                    marginLeft: 10,

                    borderRadius: 8,
                  }}
                >
                  <NavItem
                    style={{
                      color: "black",

                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: 10,
                      fontSize: 24,
                    }}
                  >
                    Contact Me
                  </NavItem>
                  <NavItem style={{ marginRight: 0 }}>
                    <div
                      size="lg"
                      style={{
                        width: "100%",
                        marginTop: 10,
                        fontSize: 22,
                        textAlign: "center",
                      }}
                    >
                      <Grid container>
                        <Grid item sm={4}>
                          <a
                            id="gmail"
                            href="mailto:sheridp2@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div
                              className="icon icon-sm"
                              style={{
                                color: "#e8e3e3",
                                display: "inline-block",
                                marginRight: 14,
                              }}
                            >
                              <span
                                className="iconify"
                                data-icon="logos:google-gmail"
                                data-inline="false"
                                style={{
                                  height: 40,
                                  width: 40,
                                }}
                              ></span>
                            </div>

                            <UncontrolledTooltip
                              delay={0}
                              placement="bottom"
                              target="gmail"
                              style={{ fontSize: 15, width: 300 }}
                            >
                              Gmail: sheridp2@gmail.com
                            </UncontrolledTooltip>
                          </a>
                        </Grid>
                        <Grid item sm={4}>
                          <a
                            href="https://github.com/sheridp2"
                            target="_blank"
                            rel="noreferrer"
                            id="github"
                          >
                            <div
                              className="icon icon-sm"
                              style={{
                                color: "#e8e3e3",
                                display: "inline-block",
                                marginRight: 14,
                              }}
                            >
                              <span
                                className="iconify"
                                data-icon="logos:github-icon"
                                data-inline="false"
                                style={{
                                  height: 40,
                                  width: 40,
                                }}
                              ></span>
                            </div>

                            <UncontrolledTooltip
                              delay={0}
                              placement="bottom"
                              target="github"
                              style={{ fontSize: 15, width: 300 }}
                            >
                              Github: https://github.com/sheridp2
                            </UncontrolledTooltip>
                          </a>
                        </Grid>
                        <Grid item sm={4}>
                          <a
                            href="https://www.linkedin.com/in/patrick-sheridan/"
                            target="_blank"
                            rel="noreferrer"
                            id="linkedin"
                          >
                            <div
                              className="icon icon-sm"
                              style={{
                                color: "#e8e3e3",
                                display: "inline-block",
                                marginRight: 14,
                              }}
                            >
                              <span
                                className="iconify"
                                data-icon="logos:linkedin-icon"
                                data-inline="false"
                                style={{
                                  height: 40,
                                  width: 40,
                                }}
                              ></span>
                            </div>

                            <UncontrolledTooltip
                              delay={0}
                              placement="bottom"
                              target="linkedin"
                              style={{ fontSize: 15, width: 300 }}
                            >
                              LinkedIn:
                              https://www.linkedin.com/in/patrick-sheridan/
                            </UncontrolledTooltip>
                          </a>
                        </Grid>
                      </Grid>
                    </div>
                  </NavItem>
                </div>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      ) : (
        <div
          style={{
            zIndex: 11,
            position: "fixed",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <ResponsiveDrawer />
        </div>
      )}
    </>
  );
}

export default VerticalNav;
