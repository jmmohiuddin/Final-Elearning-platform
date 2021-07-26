import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import "./Services.css";
import Service from "../Service/Service";

const Services = () => {
  const { serviceOption } = useContext(UserContext);
  const [serviceFakeData, setServiceFakeData] = serviceOption;
  useEffect(() => {
    fetch("https://evening-basin-34226.herokuapp.com/services")
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
