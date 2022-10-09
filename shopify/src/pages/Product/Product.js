import React from "react";
import MainProduct from "../../components/MainProductCard/MainProductCard";
import mobileImg from "../../images/mobileImg.jpg";
import tvImg from "../../images/tvImg.jpg";
import interantionalImg from "../../images/InterNatImg.jpg";
import "./Product.css";
import watch from "../../images/watchImg.jpg";
import emiImg from "../../images/EMIImg.jpg";
import ProductCard from "../../components/ProductCard/ProductCard";

import clothImg from "../../images/clothing.jpg";
import footwearImg from "../../images/footwear.jpg";
import watchImg from "../../images/watches.jpg";
import bagImg from "../../images/bags.jpg";

import refrigImg from "../../images/refrigerator.jpg";
import mixerImg from "../../images/mixer.jpg";
import diapperImg from "../../images/diapper.jpg";
import shoppingImg from "../../images/shopping.jpg";

import monkImg from "../../images/monkBook.jpg";
import deepImg from "../../images/deepBook.jpg";
import fireImg from "../../images/firebook.jpg";
import martinImg from "../../images/martinBook.jpg";

import refregertorImg from "../../images/refregerator.jpg";
import samsungImg from "../../images/samsung.jpg";
import iqooImg from "../../images/iqoo.jpg";
import xiaomiImg from "../../images/xiaomi.jpg";
import lorealImg from "../../images/loreal.jpg";

import clockImg from "../../images/clock.jpg";
import gasImg from "../../images/gas.jpg";
import sofaImg from "../../images/sofa.jpg";
import cleanerImg from "../../images/cleaner.jpg";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";

const Product = () => {
  const linkText = "see all offers";

  return (
    <div>
      <div className="product-card-main">
        <Link to="/product-detail"><MainProduct
          cardImg={mobileImg}
          cardTitle="Up to 40% off | Mobiles and accessories"
          cardLink={linkText}
        /></Link>
        <MainProduct
          cardImg={tvImg}
          cardTitle="Up to 60% off | Upgrade to Smart TVs"
          cardLink={linkText}
        />
        <MainProduct
          cardImg={interantionalImg}
          cardTitle="Up to 70% off | International brands"
          cardLink={linkText}
        />
      </div>
      <img className="watchImg" src={watch} alt="watchImage" />
      <div className="product-card-handel">
        <ProductCard
          cardTitle="50% - 80% off | Men's fashion"
          cardLink={linkText}
          cardText={["Clothing", "Footwear", "Watches", "Bags"]}
          cardImg={[clothImg, footwearImg, watchImg, bagImg]}
        />
        <ProductCard
          cardTitle="Up to 70% off | Amazon Brands & more"
          cardLink={linkText}
          cardText={[
            "Up to 55% off | TVs, Refrigerators & more",
            "Up to 60% off | Home & kitchen",
            "Up to 60% off | Daily essentials",
            "Under ₹599 | Clothing, shoes & more",
          ]}
          cardImg={[refrigImg, mixerImg, diapperImg, shoppingImg]}
        />
        <ProductCard
          cardTitle="Up to 80% off | Bestsellers in Kindle eBooks"
          cardLink={linkText}
          cardText={["under ₹50", "₹50-₹100", "₹100-₹300", "₹300-₹500"]}
          cardImg={[monkImg, deepImg, fireImg, martinImg]}
        />
      </div>
      <img className="emiImg" src={emiImg} alt="watchImage" />

      <div className="product-bottom-card">
        <ProductCard
          cardTitle="Great Indian Festival | Brands in Focus"
          cardLink={linkText}
          cardText={["Samsung mobile starting at ₹9,499", "IQOO mobile starting at ₹12,499", "Xiaomi mobile starting at ₹9,499", "L'Orel Upto 50% off"]}
          cardImg={[samsungImg, iqooImg, xiaomiImg, lorealImg]}
        />

        <MainProduct
          cardImg={refregertorImg}
          cardTitle="Up to 55% off | Lowest prices of the year |"
          cardLink={linkText}
        />

        <ProductCard
          cardTitle="Up to 70% off | Home, Kitchen & More"
          cardLink={linkText}
          cardText={["Upto 70% off | Home & Decor", "Upto 80% off | Cooking & Dinning", "Upto 85% off | Furniture", "Upto 60% off | Home Improvment"]}
          cardImg={[clockImg, gasImg, sofaImg, cleanerImg]}
        />
      </div>
     
    </div>
  );
};

export default Product;
