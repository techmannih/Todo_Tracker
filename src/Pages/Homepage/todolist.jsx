import React, { useState } from "react";
import TodoList from "../Homepage/todo";
import "../Home.css";

function todoList() {
  const [todoLists, setTodoLists] = useState([]);
  const [addTodoListInputValue, setAddTodoListInputValue] = useState("");

  const addTodoList = () => {
    if (addTodoListInputValue.trim() !== "") {
      setTodoLists([...todoLists, addTodoListInputValue]);
      setAddTodoListInputValue("");
    }
  };
  const deleteTodoList = (index) => {
    const updatedTodoLists = [...todoLists];
    updatedTodoLists.splice(index, 1);
    setTodoLists(updatedTodoLists);
  };

  return (
    <div className="justify-center flex-wrap">
      <h1 className=" flex justify-center items-center text-white text-2xl p-8">
        Hello User!
      </h1>
      <div className=" flex justify-center p-2">
        <input
          className="border-white bg-black p-2   border-2  text-white rounded-l-lg  "
          type="text"
          id="addTodoListInput"
          value={addTodoListInputValue}
          onChange={(e) => setAddTodoListInputValue(e.target.value)}
        />
        <button
          id="addTodoListButton"
          onClick={addTodoList}
          className="hover:bg-black hover:text-white bg-white text-black rounded-r p-2 font-bold"
        >
          Add Todo
        </button>
      </div>

      <div id="" className="flex justify-center flex-wrap">
        {todoLists.map((title, index) => (
          <TodoList
            className="whitespace-pre-line"
            key={index}
            title={title}
            deleteTodoList={() => deleteTodoList(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default todoList;
