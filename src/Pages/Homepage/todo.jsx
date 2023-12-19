// todo.jsx
import React, { useState } from "react";
import Card from "./card";
import "../Home.css"

function TodoList({ title, deleteTodoList }) {
  const [cardArray, setCardArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addToDo = () => {
    if (inputValue !== "") {
      setCardArray([...cardArray, inputValue]);
      setInputValue("");
    }
  };

  const deleteCard = (index) => {
    const updatedCardArray = [...cardArray];
    updatedCardArray.splice(index, 1);
    setCardArray(updatedCardArray);
  };

  const handleDeleteTodoList = () => {
    deleteTodoList();
  };

  return (
    <div className="todoList bg-black">
      <div className=" flex justify-between p-1 title">
        <h2 className="m-0 align-items-center whitespace-nowrap max-w-[200px]">{title}</h2>
        <button
          className="btnXX m-0  p-1 text-xl"
          onClick={handleDeleteTodoList}
        >
          x
        </button>
      </div>

      <div className="">
        {cardArray.map((text, index) => (
          <Card key={index} text={text} deleteCard={() => deleteCard(index)} />
        ))}
      </div>
      <div className="py-1 taskInput">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn-save" id="to-do-list-button" onClick={addToDo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoList;
