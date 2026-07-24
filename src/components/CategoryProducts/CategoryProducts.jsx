import "./CategoryProducts.css";
import { products } from "../../assets/assets";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CategoryProducts = () => {

  const { category } = useParams();

  console.log(category)

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <section className="category-products">

      <div className="category-title">
        <h2>{category.toUpperCase()}</h2>
      </div>

      <div className="products-container">

        {filteredProducts.map((product) => (
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

                <span className="price">
                  ₹{product.price}
                </span>

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

export default CategoryProducts;