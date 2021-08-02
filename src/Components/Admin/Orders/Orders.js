import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import { usePageVisibility } from "react-page-visibility";
import "./Order.css";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Orders = () => {
  const { log } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = log;

  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [events, setEvents] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orderDetails?email=" + loggedIn.email)
      .then((res) => res.json())
      .then((data) => setOrderInfo(data));
  }, []);

  let isVisible = usePageVisibility();
  if (!isVisible) {
    window.location.reload();
    console.log(!isVisible);
  }
  if (isVisible) {
    console.log(isVisible);

    var postInfoVisible = {
      id: 1,
      title: "visible",
      body: "bar",
      userId: 1,
    };
  }

  function visible() {
    fetch("http://localhost:5000/addReview", {
      method: "post",
      body: JSON.stringify(postInfoVisible),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  visible();
  // React.memo();
  return (
    <>
      <div className="container-md">
        <div className="text-center orders">Orders</div>
        <section className=" MainContainer">
          <div className="row mt-3 mb-5 childContainer ">
            <div className=" col-4">
              <b>
                <h1 className="text-center">Book Name</h1>
              </b>
            </div>
            <div className="col-4 text-center">
              <b>
                <h3>Order Status</h3>
              </b>
            </div>
            <div className="col-4 text-center">
              <b>
                <h3>Price</h3>
              </b>
            </div>
          </div>
          {orderInfo.map((order) => (
            <div className="row text-justify pb-3 pt-3">
              <p className="col-4 table-primary pb-3 pt-3 text-center ">
                {order.service?.name}
              </p>
              <p className="col-4 table-secondary pb-3 pt-3 text-center">
                {order.status}
              </p>
              <p className="col-4 table-info pb-3 pt-3 text-center">
                {order.service?.price}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Orders;
