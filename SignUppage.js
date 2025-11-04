import React from "react";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div className="signup-page">
      {/* Right side image */}
      <div className="right-side">
        <img src="/image/cake.jpg" alt="Cafe background" />
      </div>

      {/* Signup Form */}
      <form className="signup-form">
        <img src="/image/logo.png" alt="Cafe Logo" className="logo" />

        <p className="subtitle">Create your account ☕</p>

        <input type="text" placeholder="Full Name" className="glass-input" />
        <input type="text" placeholder="Username" className="glass-input" />
        <input type="email" placeholder="Email" className="glass-input" />
        <input type="password" placeholder="Password" className="glass-input" />

        <button type="submit" className="signup-btn">Sign Up</button>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login" className="login-link">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
