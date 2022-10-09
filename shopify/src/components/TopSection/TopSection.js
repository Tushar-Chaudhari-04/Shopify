import React from 'react'
import TopSectionFeatures from '../TopSectionFeatures/TopSectionFeatures'
import "./TopSection.css"
import {TopFeatureData} from "./TopSectionsData"

const TopSection = () => {
  return (
    <div className="top-section-main">
    {TopFeatureData.map((data)=>(
      <TopSectionFeatures featureImg={data.featureImg} featureText={data.featureText}/>
    ))}
    </div>
  )
}

export default TopSection