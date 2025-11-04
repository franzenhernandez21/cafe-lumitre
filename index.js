import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcomepage from "./Welcomepage";
import LoginPage from "./Loginpage";
import SignupPage from "./SignUppage"; // ✅ Import SignupPage component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> {/* ✅ New Signup route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
