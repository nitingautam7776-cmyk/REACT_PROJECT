import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        background: "#222",
        color: "#fff",
      }}
    >
      <h2>ShopEase</h2>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "25px",
          margin: 0,
        }}
      >
        <Link to="/">Home</Link> |
      <Link to="/products">Products</Link> |
      <Link to="/categories">Categories</Link> |
      <Link to="/contact">Contact</Link>
      </ul>

      <button
        style={{
          padding: "8px 15px",
          border: "none",
          background: "#ff6600",
          color: "#fff",
          borderRadius: "5px",
        }}
      >
        Cart {2}
      </button>
    </nav>
  );
}

export default Navbar;