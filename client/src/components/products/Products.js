import React from "react";
import "../../css/products/Products.css";

export default function Products({ products }) {
  return (
    <div className="products">
      {products.map((product) => (
        <div className="products-item" key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
