import React from "react";
import service from "../../../images/c2.jpg";
import Typical from "react-typical";
const Header = () => {
  return (
    <div className="container mt-3 text-black">
      <div className="row">
        <div className="col-md-6 justify-content-center align-items-center d-flex MS-3">
          <div style={{ borderLeft: "10px solid #41A4DF" }}>
            <h1 className="ms-3">
              The Best Services
              <br /> For Your Computer
            </h1>
            <Typical
              style={{ color: "#41A4DF" }}
              className="ms-3"
              steps={[
                "Quality services",
                2000,
                "Wall clean!",
                2000,
                "Wall behave!",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <img
            className="img-fluid mb-3"
            src={service}
            alt="imag"
            style={{ width: "800px", backgroundSize: "cover", height: "600px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
