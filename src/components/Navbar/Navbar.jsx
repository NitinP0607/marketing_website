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
          <h2 onClick={()=>navigate("/")}>DealHub</h2>
        </div>

        {/* Desktop Links */}
        <ul className="desktop-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
            <Link to="/categories" onClick={() => setMenuOpen(false)}>
              Categories
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
