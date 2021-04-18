import React from "react";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="mt-5" style={{ backgroundColor: "#0e101c" }}>
      <div className="justify-content-center align-items-center d-flex">
        <div
          className="text-center text-white mt-5"
          style={{ borderBottom: "5px solid #f29702" }}
        >
          <h3>Contact Us</h3>
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
