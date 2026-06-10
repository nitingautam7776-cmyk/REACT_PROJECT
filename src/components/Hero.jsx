import React from "react";

 function Hero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        background:
          "linear-gradient(to right, #4facfe, #00f2fe)",
        color: "white",
      }}
    >
      <h1>Welcome to ShopEase</h1>
      <p>Your One-Stop Online Shopping Destination</p>

      <button
        style={{
          padding: "12px 25px",
          border: "none",
          background: "#fff",
          color: "#333",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Hero;