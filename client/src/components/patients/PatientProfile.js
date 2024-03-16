import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../forms.css";

function PatientProfile() {
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    picture: "male",
    password: "",
  });

  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    function getPatient() {
      axios
        .get(`http://localhost:5000/api/patients/${id}`)
        .then((res) => {
          setPatient(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getPatient();
  }, []);

  const profileImageStyle = {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
  };

  return (
    <div className="">
      <h4 className="registerTitle">Patient Details </h4>

      <div className="" style={{ margin: "20px 300px 20px" }}>
        <img className="" src={patient.picture} style={profileImageStyle} />
        <br /> <br />
        <table className="table table-bordered table-hover">
          <tbody className="table-light" style={{ fontWeight: "bold" }}>
            <tr>
              <td>First Name</td>
              <td>{patient.firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{patient.lastName}</td>
            </tr>
            <tr>
              <td>Mobile Number</td>
              <td>{patient.mobileNumber}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{patient.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientProfile;
