import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";

import PatientLogin from "./components/patients/PatientLogin";
import RegisterNewPatient from "./components/patients/RegisterNewPatient";
import PatientProfile from "./components/patients/PatientProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<PatientLogin />} />
          <Route path="/registerPatient" element={<RegisterNewPatient />} />
          <Route path="/patientProfile/:id" element={<PatientProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
