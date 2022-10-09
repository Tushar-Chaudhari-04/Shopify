import React from 'react'
import Footer from '../../components/Footer/Footer'
import ItemsCart from '../../components/ItemsCart/ItemsCart'
import Navbar from '../../components/Navbar/Navbar'
import "./ProductCart.css"
import Button from '@material-ui/core/Button';

const ProductCart = () => {
  return (
    <div>
        <Navbar/>
        <ItemsCart
            productImg="https://rukminim1.flixcart.com/image/416/416/l0tweq80/mobile/d/d/s/-original-imagcgtgyqebxqhx.jpeg?q=70"
            productTitle="REDMI 10 (Caribbean Green, 128 GB)#JustHere"
            productRam="6 GB"
            productSeller="MYTHANGLORYRetail"
            productMRP="16,999"
            productAmt="₹12,499"
            productCharges="+ ₹29 Secured Packaging Fee"

            itemsAmt={16999}
            itemsDiscount={4500}
            itemsCharges={0}
            packFee={29}
            cartTotalAmt={0}
        />
        <Footer/>
    </div>
  )
}

export default ProductCart