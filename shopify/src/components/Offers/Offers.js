import React from 'react'

const Offers = (props) => {
  return (
    <div>
        <h5>Available Offers</h5>
        <div style={{listStyle:"none"}}>
        {props.bankOffers.map(offer=>(
            <p><span>
            <img style={{height:"20px",marginRight:"5px"}} src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>
            </span>{offer}</p>
        ))}
        </div>
        
    </div>
  )
}

export default Offers