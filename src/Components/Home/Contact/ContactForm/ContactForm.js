import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
const AddReview = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const eventData = {
      name: data.name,
      description: data.message,
      company: data.company,
    };
    const url = `http://localhost:5000/feedback`;
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
      }
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12" style={{ backgroundColor: "black" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true, maxLength: 80 })}
            />
            <label>Problem Name</label>
            <input
              type="text"
              name="problem"
              {...register("problem", { required: true, maxLength: 120 })}
            />

            <label>Description of Problem</label>
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
