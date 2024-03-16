import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterNewPatient() {
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    picture: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/patients", patient)
      .then(() => {
        alert("New Patient Registered");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setPatient((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="container">
        <h4 className="registerTitle">New Patient Registration Form</h4>
        <form onSubmit={sendData} className="registerForm">
          <div className="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter First Name"
              name="firstName"
              value={patient.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Last Name"
              name="lastName"
              value={patient.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Picture URL</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Add Picture URL"
              name="picture"
              value={patient.picture}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Phone number"
              name="mobileNumber"
              value={patient.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Email Address"
              name="email"
              value={patient.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
              name="password"
              value={patient.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterNewPatient;
