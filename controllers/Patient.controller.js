const Patient = require("../models/Patient.model");

//add new patient
const registerNewPatient = (req, res) => {
  const { firstName, lastName, mobileNumber, email, picture, password } =
    req.body;

  const patient = new Patient({
    firstName,
    lastName,
    mobileNumber,
    email,
    picture,
    password,
  });

  patient
    .save()
    .then((createdPatient) => {
      res.json(createdPatient);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//get all patients details
const getAllPatientsDetails = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(400).json(error);
  }
};

//get specific patient details
const getPatientDetailsById = async (req, res) => {
  const patientId = req.params.id;

  try {
    const patient = await Patient.findById(patientId);
    res.json(patient);
  } catch (error) {
    res.status(400).json(error);
  }
};

//update patient details
const updatePatientDetails = async (req, res) => {
  const patientId = req.params.id;

  try {
    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).json("There is no patient to update");
    }

    const { firstName, lastName, mobileNumber, email, picture, password } =
      req.body;

    const updatedPatient = await Patient.findByIdAndUpdate(patientId, {
      firstName,
      lastName,
      mobileNumber,
      email,
      picture,
      password,
    });

    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//delete patient details
const removePatientDetails = async (req, res) => {
  const patientId = req.params.id;

  try {
    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).json("There is no patient to remove");
    }

    const removedPatient = await Patient.findByIdAndDelete(patientId);
    res.status(200).json(removedPatient);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//login function for validate patients
const validatePatient = async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;

  try {
    const foundPatient = await Patient.findOne({ email: email });

    if (!foundPatient) {
      return res.status(404).json("invalid patient");
    } else if (foundPatient.password === pass) {
      return res.json(foundPatient);
    } else {
      return res.status(404).json("incorrect password");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  registerNewPatient,
  getAllPatientsDetails,
  getPatientDetailsById,
  updatePatientDetails,
  removePatientDetails,
  validatePatient,
};
