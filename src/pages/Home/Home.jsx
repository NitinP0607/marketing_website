import React from 'react'
import "./Home.css"
import Hero from '../../components/Hero/Hero'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories'

const Home = () => {
  return (
    <div>
    <Hero />
    <FeaturedCategories />
    <FeaturedProducts />
    </div>
  )
}

export default Home
