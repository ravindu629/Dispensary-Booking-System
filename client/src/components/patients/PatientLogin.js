import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../forms.css";

function PatientLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/patients/validate", user)
      .then((res) => {
        if (res) {
          alert("Patient validated");

          const patient = res.data;
          navigate(`/patientProfile/${patient._id}`);
        }
      })
      .catch((err) => {
        alert("Login details are invalid, Please try again!!!");
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h4 className="registerTitle">Patient Login</h4>
      <form onSubmit={sendData} className="loginForm">
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Email Address"
            name="email"
            value={user.email}
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
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark btn-lg">
          Login
        </button>
        <br />
        <br />
        <h4>
          click here to <a href="/registerPatient">Register</a>
        </h4>
      </form>
    </div>
  );
}

export default PatientLogin;
