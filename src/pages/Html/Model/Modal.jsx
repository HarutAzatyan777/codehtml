import React from 'react';
import './Modal.css';

const Modal = ({ imageUrl, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <img src={imageUrl} alt="Img" />
      </div>
    </div>
  );
};

export default Modal;
