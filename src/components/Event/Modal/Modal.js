import React from "react";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="background">
      <div className="container">
        <div className="close-btn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>FOSS TRACK</h1>
        </div>
        <div className="body">
          <p>stuff desc content</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
