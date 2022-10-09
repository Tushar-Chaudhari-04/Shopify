import React from 'react'

const ProductSubCard = (props) => {
  return (
    <div>
      <div className="card" style={{width: "10rem"}}>
        <img src={props.cardImg} className="card-img-top" alt="ProductImg" />
        <p className="card-text">
         {props.cardText}
        </p>
    </div>
    </div>
  )
}

export default ProductSubCard