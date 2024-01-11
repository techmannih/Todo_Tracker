import React from "react";
import "../Home.css";

function Card({ task, deleteCard }) {
  const handleDeleteCard = async () => {
    deleteCard();
  };
  return (
    <div className="card">
      <p>{task.taskName}</p>
      <button className="btnXX" onClick={handleDeleteCard}>
        X
      </button>
    </div>
  );
}

export default Card;
