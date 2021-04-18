import React from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, errors, handleSubmit } = useForm();
  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };
  const onSubmit = (data) => {
    const eventData = {
      AddEvents: data,
    };
    const url = `http://localhost:5055/contact`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input
          type="text"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <label>Last name</label>
        <input
          type="text"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <label>Email</label>
        <input
          type="text"
          {...register("Email", {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <label>Message</label>
        <textarea
          type="text"
          rows="6"
          name="message"
          {...register("message")}
        />
        <label>Mobile number</label>
        <input
          type="tel"
          {...register("Mobile number", {
            required: true,
            maxLength: 11,
            minLength: 8,
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
