import React,{useState,useEffect} from "react";
import PriceDetails from "../PriceDetails/PriceDetails";
import "./ItemsCart.css";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";


const ItemsCart = (props) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const futureDate = new Date(year, month, day + 4);
  const deliveryDate = futureDate.toString().split(year)[0];

  const [counter,setCounter]=useState(1);  
   useEffect(()=>{
    const cartbutton = document.querySelector('#decBtn');
        if(counter<=1 && cartbutton!=null){
            cartbutton.disabled=true;
        }else{
          if(cartbutton!=null){
            cartbutton.disabled=false;
          }
        }
  },[counter])

  const handleIncCount=()=>{
        setCounter(counter+1);
}

  const handleDecCount=()=>{
        setCounter(counter-1)
}

  return (
    <div>
      <div className="cart-main">
        <div className="card col-md-8" style={{ margin: "15px" }}>
          <div
            className="cart-rightside"
            style={{ width: "60rem", padding: "35px" }}
          >
            <div className="col-md-2">
              <img
                src={props.productImg}
                alt="cartImg"
                height="200px"
                style={{ margin: "5px 10px 0px 10px" }}
              />
            </div>
            <div className="col-md-7">
              <h5>{props.productTitle.split("#")[0]}</h5>
              <p>{props.productRam}</p>
              <p>{props.productSeller}</p>
              <p style={{ fontWeight: "650" }}>{props.productAmt}</p>
              <p>{props.productCharges}</p>
            </div>
            <div className="col-md-3">
              <p>Delivery by {deliveryDate}</p>
            </div>
          </div>

          <div className="cart-btn-main">
            <button id="decBtn" className="cart-btn" onClick={handleDecCount}>-</button>
            <span className="cart-count-btn" >{counter}</span>
            <button className="cart-btn" onClick={handleIncCount}>+</button>
            <button className="add-remove-btn">SAVE FOR LATER</button>
            <button className="add-remove-btn">REMOVE</button>
          </div>

          <Link to="/product-checkout">
          <Tooltip title="Place Order">
          <button className="order-btn">
            PLACE ORDER
          </button>
          </Tooltip>
          </Link>
        </div>

        <PriceDetails 
         itemsAmt={props.itemsAmt}
         itemsDiscount={props.itemsDiscount}
         itemsCharges={props.itemsCharges}
         packFee={props.packFee}
         cartTotalAmt={props.cartTotalAmt}
         itemCount={counter}
        />
       
      </div>
    </div>
  );
};

export default ItemsCart;
