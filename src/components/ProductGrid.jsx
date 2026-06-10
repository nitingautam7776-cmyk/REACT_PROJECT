import React from "react";
import { Link } from "react-router-dom";

 function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "₹1,29,900",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: "₹7,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: "₹89,999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 5,
      name: "Running Shoes",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 6,
      name: "DSLR Camera",
      price: "₹59,999",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
  ];

  return (
    <section style={{ padding: "60px 50px", backgroundColor: "#f8f9fa" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "40px",
        }}
      >
        Featured Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{product.name}</h3>

              <p
                style={{
                  color: "#ff6b00",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {product.price}
              </p>

              <button
                style={{
                  backgroundColor: "#ff6b00",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;