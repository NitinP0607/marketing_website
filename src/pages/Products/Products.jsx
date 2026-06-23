import "./Products.css";
import { sellproducts } from "../../assets/assets";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <section className="products">
      <div className="products-title">
        <h2>ALL PRODUCTS</h2>
      </div>

      <div className="products-container">
        {sellproducts.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.title} />

            <div className="product-details">
              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <div className="rating">
                <FaStar color="gold" />
                <span>{product.rating}</span>
              </div>

              <div className="price-section">
                <span className="price">₹{product.price}</span>

                <span className="original-price">
                  ₹{product.originalPrice}
                </span>

                <span className="discount">
                  {product.discount}% OFF
                </span>
              </div>

              <button className="view-btn">
                View Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;