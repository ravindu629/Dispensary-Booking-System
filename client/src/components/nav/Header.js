import React from "react";
import "./nav.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        Dispensary Booking System
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Patient Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/registerPatient">
              Register New Patient{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
