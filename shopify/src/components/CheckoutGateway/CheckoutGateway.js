import React from 'react'
import "./CheckoutGateway.css"

const CheckoutGateway = () => {
  return (
    <div>
        <div className="card col-md-8 checkout-gateway-main" style={{}}>
        <div className="card-title"><h5 className="checkout-title">Payment Options</h5></div>
        <div className="card-body">
        <div>
        <input type="radio" /><span style={{padding:"10px"}}>UPI</span>
            <hr/>
        </div>

        <div>
        <input type="radio" /><span style={{padding:"10px"}}>Credit/Debit Card/ATM Card</span>
            <hr/>
        </div>

        <div>
        <input type="radio" /><span style={{padding:"10px"}}>Net Banking</span>
            <hr/>
        </div>

        <div>
        <input type="radio" /><span style={{padding:"10px"}}>Wallets</span>
            <hr/>
        </div>

        <div>
        <input type="radio" /><span style={{padding:"10px"}}>EMI(Easy Installments)</span>
            <hr/>
        </div>

        </div>
        </div>
    </div>
  )
}

export default CheckoutGateway