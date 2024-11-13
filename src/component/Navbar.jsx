import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav">
          <ul className="nav-left">
            <li className="logo">ACMP Diagnostic Tool</li>
            <li>
              <a href="/" className="nav-btn">
                Logs
              </a>
            </li>
            <li>
              <a href="redis" className="nav-btn">
                Redis
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
