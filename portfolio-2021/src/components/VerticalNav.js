import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import { Nav, NavItem } from "reactstrap";

function VerticalNav() {
  //   const pathname = window.location.pathname;

  //   let path = pathname === "/" ? "home" : pathname.split("/").pop();

  //   const [activeItem, setActiveItem] = useState(path);
  //   const handleItemClick = (e, { name }) => setActiveItem(name);
  //   useEffect(() => {
  //     console.log(pathname);
  //   }, [pathname]);

  return (
    <div>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/projects">Projects</NavLink>
    </div>
  );
}

export default VerticalNav;
