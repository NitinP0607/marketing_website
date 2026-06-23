import "./About.css";

function About() {
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
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>ShopEase!</strong> We are dedicated to helping
          shoppers find the best products at the best prices. Our platform
          carefully curates deals and recommendations across multiple categories,
          making online shopping easier and smarter.
        </p>
      </div>

      {/* What We Offer */}
      <div className="about-section">
        <h2>What We Offer</h2>
        <div className="offer-cards">
          <div className="card">
            <h3>Electronics</h3>
            <p>Latest gadgets, smartphones, headphones, laptops, and accessories.</p>
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
        <ul className="checklist">
          <li>✔ Curated Product Recommendations</li>
          <li>✔ Best Deals and Discounts</li>
          <li>✔ Trusted Brands</li>
          <li>✔ Updated Product Collections</li>
          <li>✔ Easy Shopping Experience</li>
        </ul>
      </div>

      {/* Affiliate Disclosure */}
      <div className="about-section disclosure">
        <h2>Affiliate Disclosure</h2>
        <p>
          Some links on this website are affiliate links. This means we may earn
          a small commission when you purchase through these links, at no
          additional cost to you. These commissions help us maintain and improve
          our platform.
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
        <button className="primary-btn">Explore Products</button>
      </div>

    </section>
  );
}

export default About;
