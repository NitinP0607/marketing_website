import "./Hero.css";
import { assets } from "../../assets/assets";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">LATEST COLLECTION</span>

        <h1>
          Save Up To <span>80% OFF</span> On Top Brands
        </h1>

        <p>
          Discover the latest deals on Electronics, Fashion, Beauty, and Home
          essentials, where unbeatable discounts meet top-quality products.From
          stylish clothing and innovative gadgets to skincare must-haves and
          everyday household items, explore a wide range of offers designed to
          help you save more while enjoying the best brands you love.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Deals</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={assets.hero_img} alt="" />
      </div>
    </section>
  );
}

export default Hero;
