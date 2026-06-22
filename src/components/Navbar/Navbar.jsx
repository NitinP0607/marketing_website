import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

   const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <h2 onClick={()=>navigate("/")}>ShopEase</h2>
        </div>

        {/* Desktop Links */}
        <ul className="desktop-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="hamburger">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={menuOpen ? "overlay active" : "overlay"}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
