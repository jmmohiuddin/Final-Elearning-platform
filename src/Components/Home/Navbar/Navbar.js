import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto pe-5 me-5">
            <li className="nav-item pe-3">
              <Link
                className="nav-link active text-black"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link className="nav-link text-black" to="#">
                Contact
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link className="nav-link text-black" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link className="nav-link text-black" to="addService">
                Sell
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link className="nav-link text-black" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
