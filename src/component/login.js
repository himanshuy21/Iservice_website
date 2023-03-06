import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "../style/login.css";
function Login() {
  const loginDone = () => {
    toast.success("Login SuccessFully", { autoClose: 1000 });
  };
  <ToastContainer />;
  return (
    <>
      <div className="mainContainer">
        <div className="firstContainer">
          <noscript>maintain the media query css for image </noscript>
        </div>
        <div className="secondContainer">
          <div className="loginContainer">
            <h5 className="Login">Log In</h5>
            <div className="inputContainer">
              <form>
                <div className="mb-3 customForm">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className=" customForm">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                </div>
                <div className=" Forget ">
                  {/* <Link className="form-check-label">Forgot Password?</Link> */}
                  <p className="form-check-label">Forget Password?</p>
                </div>
                <button
                  type="submit"
                  className=" customButton"
                  onClick={loginDone}
                >
                  <Link to="/case1" className="Linkbtn">
                    Login
                  </Link>
                </button>

                <div className="mt-3 account">
                  Don’t have an account?
                  <Link to="/signup" className="Link">
                    Sign Up
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

export default Login;
