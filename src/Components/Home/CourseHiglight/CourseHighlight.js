import React from "react";
import Lcourse1 from "../../../images/Lcourse1.png";
import Lcourse2 from "../../../images/Lcourse2.png";
import Lcourse3 from "../../../images/Lcourse3.png";
import CourseHighlightDetail from "../CourseHighlightDetail/CourseHighlightDetail";
const CourseHighlightsData = [
  {
    name: "Fluoride Treatment",
    img: Lcourse1,
  },
  {
    name: "Cavity Filling",
    img: Lcourse2,
  },
  {
    name: "Teeth Whitening",
    img: Lcourse3,
  },
];
const CourseHighlight = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR COURSE</h5>
        <h2>Course We Provide</h2>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="w-75 row mt-5 pt-5 container-md">
          {CourseHighlightsData.map((course) => (
            <CourseHighlightDetail
              course={course}
              key={course.name}
            ></CourseHighlightDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlight;
