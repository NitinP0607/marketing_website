import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<CategoryProducts />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
