import React from "react";
import "./MobileSpec.css";

const MobileSpec = (props) => {
  return (
    <div>
      <div className="row">
        <div class="mobile-spec">
          <div className="mobile-storage-main">
            <span
              style={{ color: "grey", fontSize: "16px", fontWeight: "500" }}
            >
              Color
            </span>
            {props.mobileImage != null
              ? props.mobileImage.map((data) => (
                  <div className="mobile-storage">
                    <img src={data} alt="Mobile"/>
                  </div>
                ))
              : ""}
          </div>
        </div>

        <div class="mobile-spec" style={{ marginTop: "20px" }}>
          <div className="mobile-storage-main">
            <span
              style={{ color: "grey", fontSize: "16px", fontWeight: "500" }}
            >
              Storage
            </span>
            {props.mobileStorage != null
              ? props.mobileStorage.map((data) => (
                  <div className="mobile-storage">{data}</div>
                ))
              : ""}
          </div>

          <div className="mobile-ram-main">
            <span
              style={{ color: "grey", fontSize: "16px", fontWeight: "500" }}
            >
              Ram
            </span>
            {props.mobileRam != null
              ? props.mobileRam.map((data) => (
                  <p className="mobile-ram">{data}</p>
                ))
              : ""}
          </div>
        </div>

        <div className="row mobile-spec-highlights">
          <div className="col-md-6" style={{ display: "flex" }}>
            <div className="col-md-2">Highlights</div>
            <div className="col-md-10" style={{ marginLeft: "10px" }}>
              <ul style={{ listStyle: "initial" }}>
                {props.mobileSpecHL != null
                  ? props.mobileSpecHL.map((data) => <li>{data}</li>)
                  : ""}
              </ul>
            </div>
          </div>

          <div className="col-md-6" style={{ display: "flex" }}>
            <div className="col-md-2">Easy Payment Options</div>
            <div className="col-md-10" style={{ marginLeft: "10px" }}>
              <ul style={{ listStyle: "initial" }}>
                {props.mobilePaymentOptions != null
                  ? props.mobilePaymentOptions.map((data) => <li>{data}</li>)
                  : ""}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="" style={{ marginTop: "20px" }}>
        <div className="" style={{ display: "flex" }}>
          <span style={{ color: "grey", fontSize: "16px", fontWeight: "500" }}>
            Seller
          </span>
          <h6 style={{ marginLeft: "55px" }}>{props.productSeller}</h6>
        </div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            listStyle: "initial",
          }}
        >
          {props.productSellerInfo != null
            ? props.productSellerInfo.map((data) => (
                <li style={{ marginLeft: "80px" }} className="">
                  {data}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default MobileSpec;
