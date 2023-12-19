// card.jsx
import React from "react";
import "../Home.css"
function Card({ text, deleteCard }) {
  return (
    <div className="card">
      <p className="m-0">{text}</p>
      <button className="btnXX" onClick={deleteCard}>
        X
      </button>
    </div>
  );
}

export default Card;
