import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import swal from "sweetalert";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    const eventData = {
      name: data.name,
      description: data.message,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://evening-basin-34226.herokuapp.com/addService`;
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
    imageData.set("key", "03b008c33977f6a3ea82d4ba47c18173");
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
    <div>
      <Sidebar></Sidebar>
      <form
        className=" justify-content-center align-item-center d-flex mt-5 bg-primary rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-5">
          <div className="mb-3">
            <label for="name" className="form-label text-white">
              Service Title
            </label>
            <input
              name="name"
              className="form-control"
              placeholder="service Name"
              {...register("name")}
            />
          </div>
          <div className="mb-3">
            <label for="price" className="form-label text-white">
              Add Price
            </label>
            <input
              name="cost"
              type="number"
              className="form-control"
              placeholder="cost"
              {...register("cost")}
            />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label text-white">
              Add Service Description
            </label>
            <textarea
              type="text"
              rows="6"
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
              className="form-control"
              type="file"
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

export default AddService;
