import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import img1 from "../../../images/image1.jpg";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <>
      <section className="container-md">
        <div className="row mt-5">
          <div className="col-md-8">
            <img
              src={logo}
              style={{ height: "70px" }}
              className="mb-5"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-danger mb-5">Are you ready to learn ?</h5>
            <h1 className="mb-5">Learn with fun on any schedule</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi
              nemo amet aliquid quo dolorum.
            </p>
            <Link to="/home" className="landingStarted ">
              Get started
            </Link>
          </div>
          <div className="col-md-6">
            <img src={img1} alt="" className="img-fluid" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
