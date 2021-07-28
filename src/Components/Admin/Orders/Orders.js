// import "./Order.css";
// import { useFormContext } from "react-hook-form";
//   const [orderInfo, setOrderInfo] = useState([]);
//   console.log(orderInfo);
//   const { log } = useContext(useFormContext);

// import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../../App";
// const OrderList = () => {
//   const { log } = useContext(UserContext);

//   const Orders = () => {
//      const [loggedIn, setLoggedIn] = log;
//     const [events, setEvents] = useState([]);
//     useEffect(() => {
//       fetch(
//         "https://evening-basin-34226.herokuapp.com/orderDetails?email=" +
//         loggedIn.email
//       )
//         .then((res) => res.json())
//         .then((data) => setEvents(data));
//     }, []);
//     return (
//       <>

//         <div className="container-md">
//           <div className="text-center orders">Orders</div>
//           <section className=" MainContainer">
//             <div className="row mt-3 mb-5 childContainer ">
//               <div className=" col-4">
//                 <b>
//                   <h3 className="text-center">Book Name</h3>
//                 </b>
//               </div>
//               <div className="col-4 text-center">
//                 <b>
//                   <h3> Author Name</h3>
//                 </b>
//               </div>
//               <div className="col-4 text-center">
//                 <b>
//                   <h3>Price</h3>
//                 </b>
//               </div>
//             </div>
//             {events.map((order) => (
//               <div className="row text-justify pb-3 pt-3">
//                 <p className="col-4 table-primary pb-3 pt-3 text-center ">
//                   {order.status}
//                 </p>
//                 <p className="col-4 table-secondary pb-3 pt-3 text-center">
//                   {order.service?.name}
//                 </p>
//                 <p className="col-4 table-info pb-3 pt-3 text-center">
//                   {order.service?.price}
//                 </p>
//               </div>
//             ))}
//           </section>
//         </div>
//       </>
//     );
//   };
// export default Orders;

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

import "./Order.css";
const Orders = () => {
  // const [orderInfo, setOrderInfo] = useState([]);
  // console.log(orderInfo);
  const { log } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = log;

  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [events, setEvents] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);
  useEffect(() => {
    fetch(
      "https://evening-basin-34226.herokuapp.com/orderDetails?email=" +
        loggedIn.email
    )
      .then((res) => res.json())
      .then((data) => setOrderInfo(data));
  }, []);
  return (
    <>
      <div className="container-md">
        <div className="text-center orders">Orders</div>
        <section className=" MainContainer">
          <div className="row mt-3 mb-5 childContainer ">
            <div className=" col-4">
              <b>
                <h3 className="text-center">Book Name</h3>
              </b>
            </div>
            <div className="col-4 text-center">
              <b>
                <h3> Author Name</h3>
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
