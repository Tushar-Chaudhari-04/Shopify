import React from "react";
import "./CardCaoursel.css";

const Card = (props) => {
  return (
    <div className="carousel-item active" data-bs-interval="2500">
      <img className="card-img" src={props.cardImg}
      />
    </div>
  );
};

export default Card;

//Comented Code

// "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/4a9de41c77100a51.jpg?q=50" 

{
  /* <svg
      className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
      width="600"
      height="280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: First slide"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#777"></rect>
      {/* <text x="50%" y="50%" fill="#555" dy=".3em">
        {props.title}
      </text> }
      
    </svg> */
}
