import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import Navbar from "../../Home/Navbar/Navbar";
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
    fetch("http://localhost:5000/services")
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
    const url = `http://localhost:5000/addOrder`;
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

  return (
    <main>
      <Navbar></Navbar>;
      <section className="container-md">
        <section className="row bg-secondary pb-5 pt-5 mt-5 rounded">
          <div className="col-7 ">
            <div
              className=" mt-5 rounded-3 "
              style={{ display: shippingData ? "none" : "block" }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                action="src\Components\Thankyou\Thank.html"
              >
                <label>First name</label>
                <input
                  type="text"
                  name="first"
                  {...register("first", { required: true })}
                />
                <label>Last name</label>
                <input
                  type="text"
                  name="last"
                  {...register("last", { required: true })}
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
                  })}
                />
                <input type="submit" />
              </form>
            </div>

            <div
              className=""
              style={{ display: shippingData ? "block" : "none" }}
            >
              <h1 className="pb-1" style={{ color: "white" }}>
                Please Pay
              </h1>
              <div className="processPayment bgStripe pt-5">
                <ProcessPayment
                  handlePayment={handlePaymentSuccess}
                ></ProcessPayment>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img
              className="img-fluid mt-5 pb-5"
              style={{ width: "400px" }}
              src={servicesFind?.imageURL}
              alt=""
            />
            <h3 className="mt-1">{servicesFind?.name}</h3>
            <h5 className="Productprice">$ {servicesFind?.price}</h5>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Book;
