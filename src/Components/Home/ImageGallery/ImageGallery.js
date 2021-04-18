import React from "react";
import image1 from "../../../images/c1.jfif";
import image2 from "../../../images/c2.jpg";
import image3 from "../../../images/c3.jfif";
import image4 from "../../../images/c5.jfif";
import image5 from "../../../images/c6.jfif";
import image6 from "../../../images/c7.jfif";
import "./ImageGallery.css";
const ImageGallery = () => {
  return (
    <div className="mt-5">
      <div className="justify-content-center align-items-center d-flex">
        <div
          className="text-center"
          style={{ borderBottom: "5px solid #f29702" }}
        >
          <h1>Discover The Latest Project</h1>
          <h1 className="mb-3">Working Start </h1>
        </div>
      </div>
      <div className="justify-content-center align-items-center d-flex mt-5 m-5">
        <div className="row rows">
          <div className="column">
            <img className="img-fluid" src={image1} alt="" />
            <img className="img-fluid" src={image2} alt="" />
          </div>
          <div className="column">
            <img className="img-fluid" src={image3} alt="" />
            <img className="img-fluid" src={image4} alt="" />
          </div>
          <div className="column">
            <img className="img-fluid" src={image5} alt="" />
            <img className="img-fluid" src={image6} alt="" />
          </div>
          <div className="column">
            <img className="img-fluid" src={image6} alt="" />
            <img className="img-fluid" src={image5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
