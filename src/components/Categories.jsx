import React from "react";
import { Link } from "react-router-dom";

 function Categories() {
  const categories = [
    "Electronics",
    "Fashion",
    "Shoes",
    "Accessories",
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Categories</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              background: "#f4f4f4",
              padding: "20px",
              borderRadius: "10px",
              width: "150px",
              textAlign: "center",
              boxShadow: "0 2px 5px gray",
            }}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}


export default Categories;