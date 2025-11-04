import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Left side image */}
      <div className="left-side">
        <img src="/image/coffee.jpg" alt="Cafe background" />
      </div>

      {/* Right side login form */}
      <form className="login-form">
        {/* Replace title with logo */}
        <img
          src="/image/logo.png"
          alt="Cafe Logo"
          className="logo"
        />

        <p className="subtitle">Please login to your account</p>

        <input type="text" placeholder="Username" className="glass-input" />
        <input type="password" placeholder="Password" className="glass-input" />

        <button type="submit" className="login-btn">Login</button>

        <a href="#" className="forgot">Forgot Password?</a>

        <p className="signup-text">
          Don’t have an account?{" "}
          <a href="/signup" className="signup-link">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
