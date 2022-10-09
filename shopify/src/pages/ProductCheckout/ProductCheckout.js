import React from "react";
import CheckoutGateway from "../../components/CheckoutGateway/CheckoutGateway";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PriceDetaiils from "../../components/PriceDetails/PriceDetails";
import "./ProductCheckout.css";

const ProductCheckout = (props) => {
  return (
    <div>
      <Navbar />
      <div style={{display:"flex"}}>
      <CheckoutGateway/>
      <PriceDetaiils
        itemCount={1}
        itemsAmt={16999}
        itemsDiscount={4500}
        itemsCharges={0}
        packFee={29}
        cartTotalAmt={0}
        orderSumary="Order Sumary"
      />
      </div>
      <Footer />
    </div>
  );
};

export default ProductCheckout;
