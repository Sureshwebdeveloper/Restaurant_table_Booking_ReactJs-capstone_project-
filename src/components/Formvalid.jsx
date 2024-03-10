import React from "react";
import "../stylesheets/reserve.css";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Flag from "./PhonenumberValidation";

const schema = yup
  .object({
    fullname: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Name Must only Text Number Not valid")
      .required("Name is required")
      .typeError("Name Contain only text"),
    phoneNumber: yup.number().min(8, "phoneNumber required"),
    emailAddress: yup
      .string()
      .email("Not a Valid Email")
      .required("Email Is Required"),
    date: yup
      .string()
      .required("Date is required")
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    time: yup.string().required(),
    guests: yup
      .number()
      .positive("Must be a Positive")
      .integer()
      .min(2, " At least 2 people are needed for reservation")
      .max(200000, "Too many Guests!")
      .typeError("Please Enter Only Number")
      .required("We Need To Know How Many Guests Are Coming"),
  })
  .required();

const Formvalid = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });


  let onSubmit = (data) => {
    swal({
      title: "Are you sure?",
      text: "Do, you want to be Book A Table!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Successfully Table Booked!", {
          icon: "success",
        });
      } else {
        swal("You Canceled A Booking!");
      }
    });
    reset();
  };
  
  return (
    <div className="form-container">
      <div className="content_form">
        <h1>Experience the perfect balance of tradition and luxury.</h1>
        <h3>Book a table with us to share in this experience.</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Reserve a Table</h1>
        <p>
          Please fill and submit form to book your reservation,<span id="mandatory">*</span> Fields Mandatory
        </p>
        <div>
          <div className="name-email">
            <label htmlFor="fullname">
              EnterFullName <span id="mandatory">*</span>
              <br />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Name"
                {...register("fullname")}
                // onChange={handleData}
              />
              {errors?.fullname && (
                <div id="error">{errors.fullname.message}</div>
              )}
            </label>

            <div>
              <label htmlFor="email">
                EnterEmail <span id="mandatory">*</span>
                <br />
                <input
                  type="email"
                  id="email"
                  name="emailAddress"
                  placeholder="developersuresh07@gmail.com"
                  {...register("emailAddress")}
                  // onChange={handleData}
                />
                {errors.emailAddress && (
                  <div id="error">{errors.emailAddress.message}</div>
                )}
              </label>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="tel">
            Enter Mobile Number <span id="mandatory">*</span>
            <br />
            <Flag className="flag" />
          </label>
        </div>

        <div>
          <label htmlFor="date">
            Enter Date  <span id="mandatory">*</span>
            <br />
            <input
              type="date"
              name="date"
              {...register("date")}
              // onChange={handleData}
            />
            {errors.date && <div id="error">{errors.date.message}</div>}
          </label>
        </div>

        <div>
          <label htmlFor="time">
            Enter Time <span id="mandatory">*</span>
            <br />
            <input
              type="time"
              name="time"
              {...register("time")}
              // onChange={handleData}
            />
            {errors.time && <div id="error">{errors.time.message}</div>}
          </label>
        </div>
        <div className="guestsdate">
          <div className="field occasion">
            <label htmlFor="occasion" name="occasion">
              Occasion (optional)
              <br />
              <div className="options">
                <select name="occasion" >
                  <option value="select">Select occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>
            </label>
          </div>
        </div>

        <div className="field guest">
          <label htmlFor="guests">
            Number Of Guests <span id="mandatory">*</span>
            <br />
            <input
              type="text"
              placeholder="2"
              name="guests"
              {...register("guests")}
              // onChange={handleData}
            />
            {errors.guests && <div id="error">{errors.guests.message}</div>}
          </label>
        </div>

        {
          <button
            type="submit"
            className="reserve-button"
            disabled={isDirty && !isValid}
          >
            Reserve
          </button>
        }
      </form>
    </div>
  );
};

export default Formvalid;
