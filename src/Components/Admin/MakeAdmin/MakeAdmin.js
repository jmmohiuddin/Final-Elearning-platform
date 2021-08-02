import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import swal from "sweetalert";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const eventData = {
      email: data.email,
    };
    const url = `http://localhost:5000/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        swal({
          title: "AAdmin!",
          text: "Admin has been added successfully!",
          icon: "success",
          button: "Ok",
        });
        // alert('Your Admin has been added successfully');
      }
    });
  };

  return (
    <div>
      <Sidebar></Sidebar>
      <form
        className=" justify-content-center align-item-center d-flex mt-5 bg-primary rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-5">
          <div className="mb-3">
            <label for="email" className="form-label text-white">
              Email
            </label>
            <input
              name="email"
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </div>
          <div className="mb-3 justify-content-center align-item-center d-flex">
            <input className="btn btn-warning" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
