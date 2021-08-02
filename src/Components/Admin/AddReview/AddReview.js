import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./AddReview.css";
import swal from "sweetalert";
const AddReview = () => {
  const { register, errors, handleSubmit } = useForm();
  const { log } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = log;

  const onSubmit = (data) => {
    console.log(data);
    const eventData = {
      name: data.name,
      description: data.message,
      company: data.company,
      ...loggedIn,
    };

    const url = `http://localhost:5000/addReview`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        swal({
          title: "Your review has been added!",
          text: "Thanks for given this review!",
          icon: "success",
          button: "Ok",
        });
        // alert('Your review has been added successfully');
      }
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div
          className="col-md-10  bgContainer"
          style={{ backgroundColor: "#58dd75d3" }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true, maxLength: 80 })}
            />
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              {...register("company", { required: true, maxLength: 120 })}
            />
            <label>Description</label>
            <textarea
              type="text"
              rows="6"
              name="message"
              {...register("message")}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
