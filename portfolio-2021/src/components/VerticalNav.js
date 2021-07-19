import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import ResponsiveDrawer from "./ResponsiveDrawer";
import { Container, Grid } from "@material-ui/core";

// reactstrap components
import {
  UncontrolledTooltip,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

function VerticalNav() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1500);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isDesktop ? (
        <div
          style={{
            width: 165,
            position: "fixed",
            zIndex: 11,
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            height: "100%",
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
                    <Button
                      color="success"
                      size="lg"
                      style={{ width: "100%", marginBottom: 20, fontSize: 22 }}
                    >
                      Home
                    </Button>
                  </NavLink>
                </NavItem>

                <NavItem style={{ marginRight: 0 }}>
                  <NavLink to="/projects">
                    <Button
                      color="info"
                      size="lg"
                      style={{ width: "100%", marginBottom: 20, fontSize: 22 }}
                    >
                      Projects
                    </Button>
                  </NavLink>
                </NavItem>
                <NavItem style={{ marginRight: 0 }}>
                  <NavLink to="/resume">
                    <Button
                      color="primary"
                      size="lg"
                      style={{ width: "100%", marginBottom: 20, fontSize: 22 }}
                    >
                      Resume
                    </Button>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <hr className="my-2" />
                </NavItem>
                <NavItem
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: 10,
                    fontSize: 24,
                    textShadow:
                      "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
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
                          rel="noopener"
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
                                height: 35,
                                width: 35,
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
                          rel="noopener"
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
                                height: 35,
                                width: 35,
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
                          rel="noopener"
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
                                height: 35,
                                width: 35,
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

                <NavItem style={{ marginRight: 0 }}>
                  <div
                    size="lg"
                    style={{ width: "100%", marginBottom: 20, fontSize: 22 }}
                  ></div>
                </NavItem>
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
