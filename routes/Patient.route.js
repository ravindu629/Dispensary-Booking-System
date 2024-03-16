const express = require("express");
const router = express.Router();

const {
  registerNewPatient,
  getAllPatientsDetails,
  getPatientDetailsById,
  updatePatientDetails,
  removePatientDetails,
  validatePatient,
} = require("../controllers/Patient.controller");

router.post("/", registerNewPatient);

router.get("/", getAllPatientsDetails);

router.get("/:id", getPatientDetailsById);

router.put("/:id", updatePatientDetails);

router.delete("/:id", removePatientDetails);

router.post("/validate", validatePatient);

module.exports = router;
