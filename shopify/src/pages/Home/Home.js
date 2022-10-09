import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import Product from "../Product/Product"
import TopSection from "../../components/TopSection/TopSection"
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <TopSection/>
        <ImageCarousel/>
        <CountDownTimer/> 
        <Product/>
        <Footer/>
    </div>
  )
}

export default Home