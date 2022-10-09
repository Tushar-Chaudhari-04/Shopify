import React, { useState } from "react";
import "../SignUp/SignUp.css";
import signupImg from "../../images/signup.jpg";
import { authenticateSignUp } from "../../service/SignUpService";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    pincode: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    //const [name, value] = event.target;

    setSignUp({
      ...signUp,
      [event.target.name]: event.target.value,
    });
    console.log(signUp);
  };

  const onSubmit=async()=>{
    const response=await authenticateSignUp(signUp);
    console.log(response);
  }

  return (
    <>
      <div className="signup-page">
        <h2 className="signup-heading">Create Shopify Account</h2>
        <div className="signup">
          <div className="signup-img">
            <img className="signup-image" src={signupImg} />
          </div>
          <div className="signup-main">
            <form>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={signUp.firstName}
                      placeholder="Enter First Name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={signUp.lastName}
                      placeholder="Enter Last Name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-label col-md-6">
                    <label className="form-label" htmlFor="mobileNo">
                      Mobile Number
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      id="mobileNo"
                      name="mobileNo"
                      value={signUp.mobileNo}
                      placeholder="Enter Mobile Number"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-label col-md-6">
                    <label className="form-label" htmlFor="pincode">
                      PinCode
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      id="pincode"
                      name="pincode"
                      value={signUp.pincode}
                      placeholder="Enter PinCode"
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="my-4 form-label col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="male"
                        id="male1"
                        value="male"
                      />
                      <label className="form-check-label" htmlFor="male1">
                        Male
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="female"
                        id="female1"
                        value="female"
                      />
                      <label className="form-check-label" htmlFor="female1">
                        Female
                      </label>
                    </div>
                  </div> */}

                  <div className="form-label col-md-12">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      value={signUp.email}
                      placeholder="Enter Email"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-label col-md-12">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      value={signUp.password}
                      placeholder="Enter Password"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-label col-md-12">
                    <label className="form-label" htmlFor="confirmPass">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={signUp.confirmPass}
                      placeholder="Confirm Password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary signup-btn" type="button"
              onClick={onSubmit}>
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
