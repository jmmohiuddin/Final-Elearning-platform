import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";

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
      <div className="justify-content-center align-items-center d-flex">
        <div
          className="text-center"
          style={{ borderBottom: "5px solid #f29702" }}
        >
          <h1>Services</h1>
          <h4>We Try to Give Our Best Services To Our Customer</h4>
        </div>
      </div>
      <div className="container">
        <div className="row ms-5">
          {serviceFakeData.map((service) => (
            <Service service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
