import React from "react";
import Navebar from "./components/Neavbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
function App() {
  return (
    <div>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
