import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SpecificProduct from "../../components/SpecificProduct/SpecificProduct";
import "./ProductDetails.css"

const ProductDetails = (props) => {
  return (
    <div>
      <Navbar />
      <SpecificProduct
        productImg="https://rukminim1.flixcart.com/image/416/416/l0tweq80/mobile/d/d/s/-original-imagcgtgyqebxqhx.jpeg?q=70"
        productTitle="REDMI 10 (Caribbean Green, 128 GB)  (6 GB RAM)#JustHere"
        productMRP="16,999"
        productAmt="₹12,499"
        productDiscount=" 26% off"
        productCharges="+ ₹29 Secured Packaging Fee"
        bankOffers={[
          "Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C",
          "Special Price Get extra ₹4500 off (price inclusive of cashback/coupon) T&C",
          "Partner Offer Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹1000*Know More",
          "No cost EMI ₹4,167/month. Standard EMI also availableView Plans",
        ]}

        mobileImage={[
              "https://rukminim1.flixcart.com/image/144/144/l0tweq80/mobile/d/d/s/-original-imagcgtgyqebxqhx.jpeg?q=50",
              "https://rukminim1.flixcart.com/image/144/144/l0tweq80/mobile/x/f/u/-original-imagcgtghym8theg.jpeg?q=50",
              "https://rukminim1.flixcart.com/image/144/144/l0tweq80/mobile/w/r/t/-original-imagcgtgwg5taegn.jpeg?q=50",
            ]}
            mobileStorage={["64 GB", "128 GB"]}
            mobileRam={["4 GB", "6 GB"]}
            mobileSpecHL={[
              "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
              "17.02 cm (6.7 inch) HD+ Display",
              "50MP + 2MP | 5MP Front Camera",
              "6000 mAh Lithium Polymer Battery",
              "Qualcomm Snapdragon 680 Processor",
            ]}
            mobilePaymentOptions={[
              "No cost EMI starting from ₹4,167/month",
              "Cash on Delivery",
              "Net banking & Credit/ Debit/ ATM card",
            ]}

        productSeller="MYTHANGLORYRetail"
        productSellerInfo={[
        "7 day seller replacement policy/brand assistance for device issues*",
        "GST invoice available"
        ]}
      />
      <div className="product-space"></div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
