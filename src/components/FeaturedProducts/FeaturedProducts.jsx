import React from 'react'
import "./FeaturedProducts.css"
import { products } from '../../assets/assets'
import { FaStar } from 'react-icons/fa';

const FeaturedProducts = () => {
  return (
    <div className='featured-collection'>
      <div className="featuredocllection-tittle">
        <h2>COLLECTION OF FEATURED PRODUCTS</h2>
      </div>
      <div className="collections">
        <div className="collection-container">
            {products.map((product) => (
          <div className="featured-collection-box" key={product.id}>
            <img src={product.image} alt={product.title} />

            <div className="featuredcollection-boxdetails">
              <div className="featured-ratings-details">
                <h3>{product.title}</h3>
                <div>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
              </div>
              <p>{product.desc}</p>
            </div>
          </div>
        ))}
          </div>
      </div>
    </div>
  )
}

export default FeaturedProducts