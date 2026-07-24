import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "./About.css";


function About() {
  const navigate = useNavigate();

  return (
    <section className="about">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>ABOUT US</h1>
        <p>
          Helping you discover the best deals and top-rated products across
          Electronics, Fashion, Beauty, Home & Kitchen, and more.
        </p>
      </div>

      {/* Who We Are */}
      <div className="about-section">
        <h2>Who We Are .?</h2>
        <p>
          Welcome to <strong>ShopEase!</strong> We are dedicated to helping
          shoppers find the best products at the best prices. Our platform
          carefully curates deals and recommendations across multiple
          categories, making online shopping easier and smarter.
        </p>
      </div>

      {/* What We Offer */}
      <div className="about-section">
        <h2>What We Offer</h2>
        <div className="offer-cards">
          <div className="card">
            <h3>Electronics</h3>
            <p>
              Latest gadgets, smartphones, headphones, laptops, and accessories.
            </p>
          </div>
          <div className="card">
            <h3>Fashion</h3>
            <p>Trending clothing, footwear, bags, and stylish outfits.</p>
          </div>
          <div className="card">
            <h3>Beauty</h3>
            <p>Skincare, makeup, and personal care products.</p>
          </div>
          <div className="card">
            <h3>Home & Kitchen</h3>
            <p>Essential appliances and home products.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <div className="choose-us-container">
          <div className="choose-us-right">
            <ul className="checklist">
              <li>✔ Curated Product Recommendations</li>
              <li>✔ Best Deals and Discounts</li>
              <li>✔ Trusted Brands</li>
              <li>✔ Updated Product Collections</li>
              <li>✔ Easy Shopping Experience</li>
              <li>✔ Honest Pros & Cons</li>
              <li>✔ Hands-On Product Testing</li>
              <li>✔ Independent Research & Analysis</li>
              <li>✔ Fact-Checked Specifications</li>
              <li>✔ Exclusive Partner Discounts</li>
              <li>✔ Daily Flash Sale Highlights</li>
              <li>✔ Top Value-for-Money Picks</li>
              <li>✔ Budget vs. Premium Comparisons</li>
              <li>✔ Time-Saving Summaries</li>
              <li>✔ Curated Alternative Options</li>
              <li>✔ "Best Overall" Quick Picks</li>
              <li>✔ Sourced from Verified Retailers</li>
            </ul>
          </div>
          <div className="choose-us-left">
            <img src={assets.whyChooseUs} alt="" />
          </div>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      <div className="about-section disclosure">
        <h2>Affiliate Disclosure</h2>
        <p>
          Our core mission is to simplify your shopping experience by guiding
          you toward the highest-quality products on the market. With thousands
          of options available online, finding items that deliver true
          reliability and real value can be overwhelming and time-consuming.
          That is why we dedicate countless hours to researching, analyzing, and
          curating recommendations exclusively from trusted brands and verified
          sellers. The links featured throughout our platform connect you
          directly to these top-rated picks, ensuring you always get exceptional
          quality, peak performance, and the best overall value without the
          stress of endless searching. We remain committed to helping you make
          informed decisions so you can shop with complete confidence every
          time.
        </p>
      </div>

      {/* Mission Section */}
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify online shopping by connecting users with
          quality products, genuine reviews, and the best available deals.
        </p>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <h2>Ready to discover amazing products?</h2>
        <button className="primary-btn" onClick={() => navigate('/products')}>Explore Products</button>
      </div>
    </section>
  );
}

export default About;
