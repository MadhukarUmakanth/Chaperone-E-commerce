import React from 'react';
import './index.css'; // Import your CSS for modal styling

const Modal = ({ product, onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Product Added to Cart</h2>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ₹{product.discountPrice}</p>
        <button className="modal-close-button" onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Modal;
