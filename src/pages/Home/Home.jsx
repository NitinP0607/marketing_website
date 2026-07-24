import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import FeaturedCategories from "../../components/FeaturedCategories/FeaturedCategories";
import Reveal from "../../components/Reveal";

const Home = () => {
  return (
    <div>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <FeaturedProducts />
      </Reveal>
      <Reveal>
        <FeaturedCategories />
      </Reveal>
    </div>
  );
};

export default Home;
