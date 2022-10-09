import React from "react";
import MobileSpec from "../MobileSpec/MobileSpec";
import Offers from "../Offers/Offers";
import "./SpecificProduct.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";

const SpecificProduct = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img
            className="product-img"
            src={props.productImg}
            alt="productImg"
          />
          <div className="product-btn-main">
            <Link to="/product-cart"><button
              className="btn btn-primary btn-lg product-btn1 "
              style={{ backgroundColor: "rgb(255,159,0)" }}
            >
              <svg
                style={{ margin: "10px" }}
                width="16"
                height="16"
                viewBox="0 0 16 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class=""
                  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                  fill="#fff"
                ></path>
              </svg>
              GO TO CART
            </button></Link>
            <button
              className="btn btn-primary btn-lg product-btn2 "
              style={{ backgroundColor: "rgb(251,100,27)" }}
            >
              <span className="buynow-btn"></span>
              BUY NOW
            </button>
          </div>
        </div>
        <div className="col-md-8 product-desc">
          <h3>{props.productTitle}</h3>
          <h3 style={{ fontWeight: "650" }}>
            {props.productAmt}{" "}
            <span
              style={{
                fontWeight: "350",
                fontSize: "20px",
                textDecoration: "line-through",
                color: "grey",
              }}
            >
              {props.productMRP}
            </span>{" "}
            <span style={{ fontWeight: "450", color: "green" }}>
              {props.productDiscount}
            </span>
          </h3>
          <p>{props.productCharges}</p>
          <Offers bankOffers={props.bankOffers} />
          <MobileSpec
            mobileImage={props.mobileImage}
            mobileStorage={props.mobileStorage}
            mobileRam={props.mobileRam}
            mobileSpecHL={props.mobileSpecHL}
            mobilePaymentOptions={props.mobilePaymentOptions}
            productSeller={props.productSeller}
            productSellerInfo={props.productSellerInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecificProduct;
