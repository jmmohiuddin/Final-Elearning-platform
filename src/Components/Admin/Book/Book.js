import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";
import "./Book.css";
const Book = () => {
  const { _id } = useParams();
  console.log(_id);

  const { log } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = log;

  const [shippingData, setShippingData] = useState(null);

  const [specificService, setSpecificService] = useState([]);
  useEffect(() => {
    fetch("https://evening-basin-34226.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setSpecificService(data));
  }, []);

  const servicesFind = specificService.find((service) => service?._id === _id);
  console.log(servicesFind);

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setShippingData(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    const eventData = {
      firstName: shippingData.first,
      lastName: shippingData.last,
      email: shippingData.email,
      phone: shippingData.mobile,
      ...loggedIn,
      service: servicesFind,
      orderTime: new Date(),
      paymentId,
    };
    const url = `https://evening-basin-34226.herokuapp.com/addOrder`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        alert("Your event has been added successfully");
      }
    });
  };
  //style={{ boxShadow: "0 0 10px grey" }}

  return (
    <div className="row">
      <div
        className="col-md-6 mt-5 rounded-3"
        style={{ display: shippingData ? "none" : "block" }}
      >
        <div>
          <div className="d-flex">
            <div className="mt-3 mb-3">
              <img
                className="img-fluid"
                style={{ width: "100px", borderRadius: "50%" }}
                src={servicesFind?.imageURL}
                alt=""
              />
            </div>
            <div className="mt-3 mb-3 ms-3">
              <h3>{servicesFind?.name}</h3>
              <h5 className="text-center">$ {servicesFind?.price}</h5>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "blue" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>First name</label>
            <input
              type="text"
              name="first"
              {...register("first", { required: true, maxLength: 80 })}
            />
            <label>Last name</label>
            <input
              type="text"
              name="last"
              {...register("last", { required: true, maxLength: 100 })}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              {...register("email", {
                required: true,
              })}
            />
            <label>Mobile number</label>
            <input
              type="tel"
              name="mobile"
              {...register("mobile", {
                required: true,
                maxLength: 11,
                minLength: 8,
              })}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
      <div
        className="col-md-6 mt-5"
        style={{ display: shippingData ? "block" : "none" }}
      >
        <h1>Please Pay</h1>
        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
      </div>
    </div>
  );
};

export default Book;
