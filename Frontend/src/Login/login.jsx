import React from "react";
import "../Login/login.css";
import bg from "../Login/bg.png";
import arrow from "../Login/arrow.png";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="login-container">
      <img src={bg} alt="bg" className="overlay-bg" />
      <div className="login-form-cover">
        <div className="arrow">
          <img src={arrow} alt="arrow" />
        </div>
        <div className="login-form-container">
          <h1>
            Empowering Your Trades: Where <br /> Opportunities Meet Expertise
          </h1>
          <h2>Login</h2>
          <form>
            <div className="email">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="check-link-container">
              <div className="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" required />
                <label htmlFor="checkbox">Keep me logged in</label>
              </div>
              <div>
                <Link to="/forgetPassword" className="link">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="submit">
              <button type="submit">Login</button>
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

export default login;
