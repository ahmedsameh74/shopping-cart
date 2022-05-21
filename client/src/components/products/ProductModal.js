import React from "react";
import Modal from "react-modal";

export default function ProductModal({ product, openModal, closeModal }) {
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
      <span onClick={closeModal} className="close">
        &times;
      </span>
      <div className="product-info">
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
      </div>
    </Modal>
  );
}
