import React from "react";
import AllHome from "../AllHome/AllHome";
import AllReview from "../AllReview/AllReview";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <AllHome></AllHome>
      <ServicesBanner />
      <AllReview></AllReview>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
