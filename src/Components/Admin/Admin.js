import React from "react";
import Orders from "./Orders/Orders";
import Sidebar from "./Sidebar/Sidebar";

const Admin = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <Orders />
    </div>
  );
};

export default Admin;
