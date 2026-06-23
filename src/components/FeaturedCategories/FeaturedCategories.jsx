import React from 'react'
import "./FeaturedCategories.css"
import { categories } from '../../assets/assets'

const FeaturedCategories = () => {
  return (
    <div>
      <section className="featured-categories">
        <div className="featured-categories-title">
            <h2>FEATURED CATEGORIES OF OUR COLLECTION</h2>
        </div>
      <div className="category-container">

        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.id} />
            <div className="category-card-details">
                
            <span>{category.title}</span>
            <p>{category.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
    </div>
  )
}

export default FeaturedCategories
