import React from "react";
import ProductSubCard from "../ProductSubCard/ProductSubCard";
import clothImg from "../../images/clothing.jpg";
import footwearImg from "../../images/footwear.jpg";
import watchImg from "../../images/watches.jpg";
import bagImg from "../../images/bags.jpg";

import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div
      className="card product-card-main"
      style={{ width: "28rem", height: "28rem" }}
    >
      <h5 class="card-title">{props.cardTitle}</h5>
      <div className="row">
        {props.cardImg.map((productImage, index, key) => (
          <div className="col-md-6">
            <ProductSubCard
              key={key}
              cardImg={productImage}
              cardText={
                props.cardText != null
                  ? props.cardText.filter((data, indCheck) => {
                      return index === indCheck;
                    })
                  : " "
              }
            />
          </div>
        ))}
      </div>
      <a style={{ textDecoration: "none", marginLeft: "10px;" }} href="/">
        {props.cardLink}
      </a>
    </div>
  );
};

export default ProductCard;
