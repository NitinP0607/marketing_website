import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>ShopEase</h3>
          <p>
            Discover the latest deals on fashion, electronics,
            beauty, and home essentials at unbeatable prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links" >
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul className="footer-policies" >
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopEase. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;