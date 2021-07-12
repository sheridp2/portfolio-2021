import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavRoute,
} from "reactstrap";

function VerticalNav() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

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
        <div style={{ width: 200, position: "fixed", zIndex: 11 }}>
          <Navbar color="faded" light>
            {/* <NavbarToggler
              onClick={toggle}
              className="mr-2"
              style={{ paddingLeft: 0 }}
            /> */}
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/projects">Projects</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      ) : (
        <div style={{ zIndex: 11, position: "fixed" }}>
          <Navbar color="faded" light>
            <Nav>
              <NavItem style={{ paddingRight: 20 }}>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/projects">Projects</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      )}
    </>
  );
}

export default VerticalNav;
