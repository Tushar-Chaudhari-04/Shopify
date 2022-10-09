import React from 'react'
import  "../SignIn/SignIn.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";

import signinImg from "../../images/signin.jpg"
const Signin = () => {
  return (
    <div>
       <div className="signin-page">
        <h2 className="signin-heading">SignIn to Shopify</h2>
        <div className="signin">
        <div className="signin-img">
            <img className="signin-image" src={signinImg}/>
          </div>
          <div className="signin-main">
            <form>
              <div className="col-md-12">
                <div className="row">
                  <div className="form-label col-md-12">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      placeholder="Enter Email"
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
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary signin-btn"  type="button">SignIn</button>
            </form>
            <Link to="/register" style={{textDecoration:"none"}}><p className="signup-link">New to Shopify?Create an Account</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin