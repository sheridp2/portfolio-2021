import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import ResponsiveDrawer from "./ResponsiveDrawer";

// reactstrap components
import { Collapse, Navbar, Nav, NavItem, Button } from "reactstrap";

function VerticalNav() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const styles = {
    underline: {
      borderBottomWidth: "2px",
    },
  };

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
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
            width: 200,
            position: "fixed",
            zIndex: 11,
            // backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <Navbar color="faded" light>
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    activeClassName={styles.underline}
                    style={{ color: "rgba(255,255,255, 0.9)", fontSize: 26 }}
                    to="/"
                  >
                    <Button color="primary" size="lg">
                      Home
                    </Button>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ color: "rgba(255,255,255, 0.9)", fontSize: 26 }}
                    to="/projects"
                  >
                    <Button color="primary" size="lg">
                      Projects
                    </Button>
                  </NavLink>
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
          {/* <Navbar color="faded" light>
            <Nav>
              <NavItem style={{ paddingRight: 20 }}>
                <NavLink style={{ color: "rgba(255,255,255, 0.9)" }} to="/">
                  <Button variant="contained" color="primary" size="large">
                    Home
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "rgba(255,255,255, 0.9)" }}
                  to="/projects"
                >
                  <Button variant="contained" color="primary" size="large">
                    Projects
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar> */}
        </div>
      )}
    </>
  );
}

export default VerticalNav;
