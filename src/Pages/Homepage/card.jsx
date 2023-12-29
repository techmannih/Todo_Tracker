import React from "react";
import "../Home.css";

function Card({ task, deleteCard }) {
  console.log(task);

  const handleDeleteCard = async () => {
    deleteCard();
  };

  // Check if 'task' and 'task.tasks' are defined before accessing them
  const tasksToShow = task && task.tasks ? (
    task.tasks.map((taskItem, index) => (
      <p key={index} className="m-0">
        {taskItem}
      </p>
    ))
  ) : (
    <p className="m-0">Default Task Name</p>
  );
  
  // <p className="m-0">Default Task Name</p>;

  return (
    <div className="card">
      {tasksToShow}
      <button className="btnXX" onClick={handleDeleteCard}>
        X
      </button>
    </div>
  );
}

export default Card;
