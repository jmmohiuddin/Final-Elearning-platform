import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div classNameName="container-fluid contents pb-0 mb-0 justify-content-center text-light ">
      <footer>
        <div className="row my-5 justify-content-center py-5">
          <div className="col-11">
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h3 className="text-muted mb-md-0 mb-5 bold-text company-text">
                  LOREM.
                </h3>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text ">
                  <b>MENU</b>
                </h6>
                <ul className="list-unstyled">
                  <li>LOREM</li>
                  <li>LOREM</li>
                  <li>LOREM</li>
                  <li>LOREM</li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                  <b>LOREM</b>
                </h6>
                <p className="mb-1">LOREM, LOREM LOREM LOREM</p>
                <p>LOREM LOREM</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p className="social socials text-muted mb-0 pb-0 bold-text">
                  {" "}
                  <span className="mx-2">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </span>{" "}
                  <span className="mx-2">
                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                  </span>{" "}
                  <span className="mx-2">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </span>{" "}
                  <span className="mx-2">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </span>{" "}
                </p>
                <small className="rights">
                  <span>&#174;</span> LOREM LOREM LOREM LOREM.
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
