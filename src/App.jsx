import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ProductGrid from './components/ProductGrid';
import Categories from "./components/Categories";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<ProductGrid />} />
  <Route path="/categories" element={<Categories />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;