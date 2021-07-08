import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navigation">
        <div className="navigation-sub">
          <Link to="/" className="item">
            Main
          </Link>
          <br />
          <Link to="/projects" className="item">
            Projects
          </Link>
          <br />
          <Link to="/resume" className="item">
            Resume
          </Link>
          <br />
          <Link to="/trivia" className="item">
            Trivia and
            <br /> Special Skills
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
