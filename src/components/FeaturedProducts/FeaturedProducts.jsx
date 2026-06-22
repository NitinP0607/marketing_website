import React from 'react'
import "./FeaturedProducts.css"
import { assets } from '../../assets/assets'

const FeaturedProducts = () => {
  return (
    <div className='featured-collection'>
      <div className="collection-container">
        <div className="collection-box">
            <img src={assets.hero_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
