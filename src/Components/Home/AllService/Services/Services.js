import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import "./Services.css";
import Service from "../Service/Service";

const Services = () => {
  const { serviceOption } = useContext(UserContext);
  const [serviceFakeData, setServiceFakeData] = serviceOption;
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServiceFakeData(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="container allBook">
          {serviceFakeData.map((service) => (
            <Service service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
