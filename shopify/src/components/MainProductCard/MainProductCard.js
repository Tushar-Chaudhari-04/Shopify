import React from "react";
import "./MainProductCard.css"

const MainProductCard = (props) => {
  return (
    <div className="card" style={{width: "20rem"}}>
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <img src={props.cardImg} className="card-img-top" alt="ProductImg" />
        <p className="card-text">
         {props.cardText}
        </p>
        <a className="product-link" href="/" >
          {props.cardLink}
        </a>
      </div>
    </div>
  );
};

export default MainProductCard;
