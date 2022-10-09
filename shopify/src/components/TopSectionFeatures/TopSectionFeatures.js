import React from 'react'

const TopSectionFeatures = (props) => {
  return (
    <div>
        <img src={props.featureImg} style={{width:"64px"}}/>
        <a style={{textAlign:"center",display:"flex",flexDirection:"column",fontWeight:500}}>{props.featureText}</a>
    </div>
  )
}

export default TopSectionFeatures