import "./Products.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search State
  const [search, setSearch] = useState("");

  // Category State
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  // Dynamic Categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Search + Category Filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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

      {/* Search */}
      <div className="top-view">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="category-box">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active-category"
                  : "category-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          <h3
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            No Products Found
          </h3>
        )}
      </div>
    </section>
  );
};

export default Products;
