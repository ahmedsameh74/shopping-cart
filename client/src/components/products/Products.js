import React, { useState } from "react";
import "../../css/products/Products.css";
// import Modal from "react-modal";
import ProductModal from "./ProductModal";

export default function Products({ products }) {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div className="products-item" key={product.id}>
          <a href="#" onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      ))}

      <ProductModal
        product={product}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
}
