import "./Products.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://marketingserver-jsev.onrender.com";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/products/allproducts`);

        if (response.data.success) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="products">
        <div className="products-title">
          <h2>ALL PRODUCTS</h2>
        </div>

        <h3 style={{ textAlign: "center", marginTop: "40px" }}>
          Loading Products...
        </h3>
      </section>
    );
  }

  return (
    <section className="products">
      <div className="products-title">
        <h2>ALL PRODUCTS</h2>
      </div>

      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.image} alt={product.title} />

              <div className="product-details">
                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <div className="rating">
                  <FaStar color="gold" />
                  <span>{product.rating || "4.5"}</span>
                </div>

                <div className="price-section">
                  <span className="price">₹{product.price}</span>

                  <span className="original-price">
                    ₹{product.originalPrice}
                  </span>

                  <span className="discount">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100,
                    )}
                    % OFF
                  </span>
                </div>

                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view-btn">View Deal</button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <h3 style={{ textAlign: "center", width: "100%" }}>
            No Products Found
          </h3>
        )}
      </div>
    </section>
  );
};

export default Products;
