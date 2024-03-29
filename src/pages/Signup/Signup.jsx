import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { api_uri } from "../../../config";


const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !phone || !password) {
      alert("Fill in all the details");
    } else {
      try {
        const response = await fetch('http://localhost:3000/api/users/register',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body :JSON.stringify({
            name:username,
            email:email,
            phone:phone,
            password:password
          })
        })
          
        const data = await response.json();
        if (response.ok) {
          console.log("Registration successful:", data);
          navigate("/login");
          
          
          localStorage.setItem("username", username);
          console.log("The details are", username, email, phone, password);
          window.location.reload();
        } else {
          console.log("Registration failed:", data.message);
        }
      } catch (error) {
        console.log("Error during registration:", error);
      }
    }
  }
  return (
    <>
      <div className="Signuppp">
        <div className="signup_container">
          <div className="top_signup">
            <h1 className="card-title text-center mb-4">Signup For Event</h1>
            <p>
              Already a member? <Link to="/login">Login Here!</Link>
            </p>
          </div>
          <form>
            {/* username */}
            <div className="info_signup">
              <label htmlFor="name" className="form-label">
                Enter Name:{" "}
              </label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* email */}
            <div className="info_signup">
              <label htmlFor="email" className="form-label">
                Enter email:{" "}
              </label>
              <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* phone */}
            <div className="info_signup">
              <label htmlFor="phone" className="form-label">
                Enter phone:{" "}
              </label>
              <input
                type="number"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* password */}
            <div className="info_signup">
              <label htmlFor="password" className="form-label">
                Enter password:{" "}
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button id="signup_btn" onClick={(e)=>{handleRegister(e)}}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
