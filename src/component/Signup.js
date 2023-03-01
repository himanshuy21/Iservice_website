import React from "react";
import { Link } from "react-router-dom";
import "../style/login.css";
function SignUp() {
  return (
    <>
      <div className="mainContainer mt-10">
        <div className="firstContainer">
          <noscript>maintain the media query css for image </noscript>
        </div>
        <div className="secondContainer">
          <div className="loginContainer">
            <h5 className="Login">Sign Up</h5>
            <div className="mb-3 customForm">
              <label for="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputtext1"
                aria-describedby="textHelp"
              />
            </div>
            <div className="inputContainer">
              <form>
                <div className="mb-3 customForm">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className=" customForm">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    I agree to I service’s terms of use and privacy policy
                  </label>
                </div>
                <button type="submit" className=" customButton">
                  <Link to="/" className="Linkbtn">
                    Get Started
                  </Link>
                </button>
                <div className="mt-3 account">
                  Already have an account?
                  <Link to="/" className="Link">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
