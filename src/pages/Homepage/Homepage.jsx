import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home_container">
        <div className="home_page">
          <h1>WELCOME TO EVENT MANAGEMENT SYSTEM</h1>
          <p>Discover and Share your Ideas.</p>
          <h4>To create events,Please Login Or Register</h4>
          <div className="btn-container">
            <Link to='/login'>
              <button className="btn btn-warning">Login</button>
            </Link>
            <span className="btn-separator">OR</span>
            <Link to="/signup">
              <button className="btn btn-info">Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
