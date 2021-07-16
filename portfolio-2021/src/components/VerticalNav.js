import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UncontrolledTooltip } from "reactstrap";

import ResponsiveDrawer from "./ResponsiveDrawer";

// reactstrap components
import { Collapse, Navbar, Nav, NavItem, Button } from "reactstrap";

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
            backgroundColor: "rgba(0, 0, 0, 0.3)",
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
                      color="primary"
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
                      color="primary"
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
                <NavItem
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: 20,
                    fontSize: 20,
                  }}
                >
                  Contact Info
                </NavItem>
                <NavItem style={{ marginRight: 0 }}>
                  <Button
                    id="github"
                    size="lg"
                    style={{ width: "100%", marginBottom: 20, fontSize: 22 }}
                  >
                    <a
                      href="https://github.com/sheridp2"
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
                          data-icon="logos:github-icon"
                          data-inline="false"
                          style={{
                            height: 35,
                            width: 35,
                          }}
                        ></span>
                      </div>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                        }}
                      >
                        Github
                      </span>

                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="github"
                        style={{ fontSize: 15, width: 300 }}
                      >
                        Github: https://github.com/sheridp2
                      </UncontrolledTooltip>
                    </a>
                  </Button>
                </NavItem>
                <NavItem style={{ marginRight: 0 }}>
                  <Button
                    id="linkedin"
                    size="lg"
                    style={{ width: "100%", marginBottom: 20, fontSize: 22 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/patrick-sheridan/"
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
                          data-icon="logos:linkedin-icon"
                          data-inline="false"
                          style={{
                            height: 35,
                            width: 35,
                          }}
                        ></span>
                      </div>
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                        }}
                      >
                        Linkedin
                      </span>

                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="linkedin"
                        style={{ fontSize: 15, width: 300 }}
                      >
                        LinkedIn: https://www.linkedin.com/in/patrick-sheridan/
                      </UncontrolledTooltip>
                    </a>
                  </Button>
                </NavItem>
                <NavItem style={{ marginRight: 0 }}>
                  <Button
                    id="gmail"
                    size="lg"
                    style={{ width: "100%", marginBottom: 20, fontSize: 22 }}
                  >
                    <a
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
                      <span
                        style={{
                          color: "black",
                          fontSize: 15,
                        }}
                      >
                        Gmail
                      </span>

                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="gmail"
                        style={{ fontSize: 15, width: 300 }}
                      >
                        Gmail: sheridp2@gmail.com
                      </UncontrolledTooltip>
                    </a>
                  </Button>
                </NavItem>

                {/* <Grid container spacing={4}>
                  <Grid item>
                    <a
                      href="https://github.com/sheridp2"
                      target="_blank"
                      rel="noopener"
                    >
                      <div
                        className="icon icon-sm"
                        style={{
                          color: "#e8e3e3",
                        }}
                        id="github"
                      >
                        <span
                          className="iconify"
                          data-icon="logos:github-icon"
                          data-inline="false"
                          style={{ height: 35, width: 35 }}
                        ></span>
                      </div>
                      <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target="github"
                        style={{ fontSize: 15 }}
                      >
                        Github: https://github.com/sheridp2
                      </UncontrolledTooltip>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.linkedin.com/in/patrick-sheridan/"
                      target="_blank"
                      rel="noopener"
                    >
                      <div
                        className="icon icon-sm"
                        style={{
                          color: "#e8e3e3",
                        }}
                        id="linkedin"
                      >
                        <span
                          className="iconify"
                          data-icon="logos:linkedin-icon"
                          data-inline="false"
                          style={{ height: 35, width: 35 }}
                        ></span>
                        <UncontrolledTooltip
                          delay={0}
                          placement="bottom"
                          target="linkedin"
                          style={{ fontSize: 15 }}
                        >
                          Linkedin:
                          https://www.linkedin.com/in/patrick-sheridan/
                        </UncontrolledTooltip>
                      </div>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="mailto:sheridp2@gmail.com"
                      target="_blank"
                      rel="noopener"
                    >
                      <div
                        className="icon icon-sm"
                        style={{
                          color: "#e8e3e3",
                        }}
                        id="gmail"
                      >
                        <span
                          className="iconify"
                          data-icon="logos:google-gmail"
                          data-inline="false"
                          style={{ height: 35, width: 35 }}
                        ></span>
                        <UncontrolledTooltip
                          delay={0}
                          placement="bottom"
                          target="gmail"
                          style={{ fontSize: 15 }}
                        >
                          Gmail: sheridp2@gmail.com
                        </UncontrolledTooltip>
                      </div>
                    </a>
                  </Grid>
                </Grid> */}
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
