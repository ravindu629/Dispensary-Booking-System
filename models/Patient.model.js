const mongoose = require("mongoose");
const { Schema } = mongoose;

const patientSchema = new Schema({
  firstName: String,
  lastName: String,
  mobileNumber: String,
  email: String,
  picture: String,
  password: String,
});

module.exports = Patient = mongoose.model("Patient", patientSchema);
