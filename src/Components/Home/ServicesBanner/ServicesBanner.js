import React from "react";
import "./ServicesBanner.css";
import banner from "../../../images/Lcourse1.png";
const ServicesBanner = () => {
  return (
    <>
      <section className="mt-5 bannerContainer">
        <div className="container-md">
          <div className="row mt-5">
            <div className="col-md-6 ">
              <img src={banner} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-5 ">
              <h5 className=" mt-5  ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, facilis.
              </h5>
              <p className="mt-5 ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                laboriosam minima tempore hic commodi, aspernatur iure ab.
                Blanditiis ut distinctio ipsa veniam culpa tenetur odit?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesBanner;
