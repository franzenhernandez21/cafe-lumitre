import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import the navigation hook
import "./Welcomepage.css";

const BakeryCafe = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleLogin = () => {
    navigate("/login"); // ✅ Redirect to /login page
  };

  const handleSignUp = () => {
    navigate("/signup"); // optional kung may sign-up page ka
  };

  return (
    <div className="bakery-container">
      <header className="bakery-header">
        <div className="logo">CAFE LUMIÈTRE</div>
        <nav>
          <ul className="nav-links">
            <li>About Us</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main className="bakery-main">
        <div className="text-section">
          <h1>
            Fresh{" "}
            <span className="highlight-lightbrown">Coffee & Pastries</span>, Every Day
          </h1>
          <p>
            A cozy neighborhood spot where specialty espresso meets warm, flaky
            croissants. Order ahead, skip the line, and savor the moment.
          </p>

          <div className="buttons-container">
            {/* ✅ Buttons now navigate to other pages */}
            <button className="btn order-btn" onClick={handleLogin}>
              Login
            </button>
            <button className="btn browse-btn" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>

        <div className="image-section">
          <img
            src="/image/lumietrebg.jpg"
            alt="Cafe Lumiétre pastries and coffee on display"
          />
        </div>
      </main>
    </div>
  );
};

export default BakeryCafe;
