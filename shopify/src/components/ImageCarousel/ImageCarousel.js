import React from "react";
import Card from "../CardCarousel/CardCaoursel";
import dussheraSale from "../../images/dussherasale.PNG"
import shirtCaoursel from "../../images/shirtsCaoursel.PNG"
import amazonCaoursel from "../../images/amazonCaoursel.PNG"
import homeDecorCaoursel from "../../images/homedecor.PNG"
import technoSparkCaoursel from "../../images/TechnoSpark.PNG"
import oneplusCaoursel from "../../images/oneplus.PNG"
import 'react-multi-carousel/lib/styles.css';

const ImageCarousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <Card cardImg={amazonCaoursel}/>
        <Card cardImg={technoSparkCaoursel}/>
        <Card cardImg={shirtCaoursel}/>
        <Card cardImg={homeDecorCaoursel}/>
        <Card cardImg={oneplusCaoursel}/>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon carouselprev-btn" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon carousel-next-btn" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ImageCarousel;
