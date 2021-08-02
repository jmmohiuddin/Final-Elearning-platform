import axios from "axios";
import React, { useState } from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import laptop from "../../../images/Untitled-8.png";
import footer from "../../../images/Untitled-4.png";
import swal from "sweetalert";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    const eventData = {
      name: data.name,
      description: data.Description,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `http://localhost:5000/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        swal({
          title: "Service!",
          text: "Your Service has been added successfully!",
          icon: "success",
          button: "Ok",
        });
        // alert('Your event has been added successfully');
      }
    });
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "7684772cfe35d7b1d344467f4a18bdba");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <section className="row ">
        <div className="col-2">
          {" "}
          <Sidebar></Sidebar>
        </div>
        <div className="col-4 ">
          <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <div className="mb-3">
                <label for="name" className="form-label text-white">
                  Book Title
                </label>
                <input
                  name="name"
                  className="form-control textArea"
                  placeholder="service Name"
                  {...register("name")}
                />
              </div>
              <div className="mb-3">
                <label for="price" className="form-label text-white">
                  Add Price
                </label>
                <input
                  name="price"
                  type="number"
                  className="form-control textArea"
                  placeholder="price"
                  {...register("price")}
                />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label text-white">
                  Add Service Description
                </label>
                <textarea
                  type="text"
                  rows="6"
                  className="textArea"
                  name="Description"
                  placeholder="Description"
                  {...register("Description")}
                />
              </div>
              <div className="mb-3">
                <label for="exampleRequired" className="form-label text-white">
                  Choose a Picture
                </label>
                <input
                  name="exampleRequired"
                  onChange={handleImageUpload}
                  className="form-control textArea"
                  type="file"
                  id="upFile"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-6">
          <div className="containered">
            <img src={laptop} alt="" className="laptoImg" />
            <input className="button" type="submit" form="myForm" />
          </div>
        </div>
        <div className="row container">
          <div className="col-12">
            <img src={footer} alt="" className="fImg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AddService;
