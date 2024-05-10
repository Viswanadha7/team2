import React, { useState } from "react";
import "./forgetPassword.css";
import bg from "../Login/bg.png";
import arrow from "../Login/arrow.png";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        setError("Please enter your email address.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/api/otpgenerate",
        { email : email }
      );
      /*const data=await response.json();*/
      console.log(response.data);
       
      return;
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container2">
      <img src={bg} alt="bg" className="overlay-bg2" />
      <div className="forgotpassword-form-cover">
      <div className="arrow">
          <img src={arrow} alt="arrow" />
        </div>
      <div className="forgotPassword-form-container">
          <h1>
            Empowering Your Trades: Where <br /> Opportunities Meet Expertise
          </h1>
          <h2>FORGET YOU PASSWORD ?</h2>
          <h2>PLEASE ENTER THE EMAIL YOU USED TO SIGN IN</h2>
          <form>
           <div className="email">
           <label htmlFor="email">Email</label>
           <br />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && <div className="error">{error}</div>}
            <div className="submit">
              <button
                type="button"
                onClick={handleForgotPassword}
              >
              <Link to="/getotp">Request OTP</Link>
              </button>
            </div>
          </form>
          <div className="signup-link-container">
            <span>
              Don’t have an account?
              <Link to="/signup" className="sign-link">
                Signup
              </Link>
            </span>
          </div>
      </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
