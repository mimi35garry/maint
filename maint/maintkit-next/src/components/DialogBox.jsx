import React from 'react';
import './DialogBox.css';

function DialogBox({ title, message, onClose }) {
  return (
    <div className="dialog-backdrop">
      <div className="dialog-box">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default DialogBox;
