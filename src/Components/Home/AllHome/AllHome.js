import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import BookHiglight from "../BookHiglight/BookHiglight";
import CourseHighlight from "../CourseHiglight/CourseHighlight";
const AllHome = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Navbar></Navbar>
      <Header></Header>
      <BookHiglight></BookHiglight>
      <CourseHighlight />
    </div>
  );
};

export default AllHome;
