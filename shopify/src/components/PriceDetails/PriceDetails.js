import React from "react";

const PriceDetaiils = (props) => {
  const items = props.itemCount;
  const totalAmount =
    ((props.itemsAmt + props.itemsCharges + props.packFee) - props.itemsDiscount)*items;
  const finalDiscount = props.itemsAmt*items - totalAmount;

  return (
    <div>
      <div
        className="card col-md-4"
        style={{
          marginTop: "15px",
          width: "24rem",
          height: "22rem",
          padding: "5px",
        }}
      >
        <h6
          className="card-title"
          style={{ paddingTop: "8px", paddingLeft: "8px", color: "#878787" }}
        >
          {props.orderSumary!=null?props.orderSumary:"PRICE DETAILS"}
          <hr />
        </h6>
        <div className="card-body">
          <div className="cart-pricing">
            <h6>Price ( {items} item)</h6>
            <h6>₹{props.itemsAmt*items}</h6>
          </div>

          <div className="cart-pricing">
            <h6>Discount</h6>
            <h6>-₹{props.itemsDiscount*items}</h6>
          </div>

          <div className="cart-pricing">
            <h6>Delivery Charges</h6>
            <h6 style={{ color: "#388e3c" }}>
              {props.itemsCharges === 0 ? "FREE" : props.itemsCharges}
            </h6>
          </div>

          <div className="cart-pricing">
            <h6>Secured Packaging Fee</h6>
            <h6>₹{props.packFee*items}</h6>
          </div>

          <hr />
          <div className="cart-pricing" style={{ marginTop: "15px" }}>
            <h4>Total Amount</h4>
            <h4>₹{totalAmount}</h4>
          </div>

          <h6 style={{ color: "#388e3c" }}>
            You will save on this order {finalDiscount}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PriceDetaiils;
