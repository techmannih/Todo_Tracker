import React, { useState } from "react";
import Card from "./card";
import "../Home.css";

function TodoList({ titleId, todolist, deleteTodoList }) {
  const [cardArray, setCardArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  // console.log(todolist);
  // console.log(titleId)
  const addToDo = async (titleId) => {
    try {
      if (!inputValue.trim()) {
        setInputError("Task name cannot be empty");
        setTimeout(() => {
          setInputError(null);
          // navigate("/");
        }, 1000);
        console.error("Task name cannot be empty");
        // Add code to display an error message to the user, e.g., setErrorMessage("Task name cannot be empty");
        return;
      }
      const response = await fetch(
        `http://localhost:8888/todolist/${titleId}/task`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titleId: titleId,
            todo: {
              tasks: [{ taskName: inputValue }],
            },
          }),
        }
      );

      // console.log(titleId);
      console.log(inputValue);
      console.log(setInputValue);
      if (response.ok) {
        // const { todo, message } = await response.json();
        const newTask = await response.json();
        console.log("newTask:", newTask);
        console.log("tasks:", newTask.todo.tasks[0]);
        setCardArray([...cardArray, newTask.todo.tasks[0]]);
        setInputValue("");
        // console.log("Todo:", todo);
        // console.log("Message:", message);
      } else {
        // Handle non-successful response here, e.g., log an error message
        const errorResponse = await response.json();
        console.error(
          "Error:",
          response.status,
          response.statusText,
          errorResponse
        );
        console.log(
          "Error:",
          response.status,
          response.statusText,
          errorResponse
        );
      }
    } catch (error) {
      // Handle any other errors that might occur during the fetch or processing
      console.error("An error occurred:", error);
      console.log("An error occurred:", error);
    }
  };

  const deleteCard = async (index) => {
    try {
      const response = await fetch(
        `http://localhost:8888/todolist/${titleId}/task/${index}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const updatedCardArray = [...cardArray];
        updatedCardArray.splice(index, 1);
        setCardArray(updatedCardArray);
      } else {
        console.error("Error deleting card:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleDeleteTodoList = () => {
    deleteTodoList();
  };

  return (
    <div className="todoList bg-black">
      {inputError && (
        <div className="text-red-500 text-center">{inputError}</div>
      )}
      <div className=" flex justify-between p-1 title">
        <h2 className="m-0 align-items-center whitespace-nowrap max-w-[200px]">
          {todolist}
        </h2>
        <button
          className="btnXX m-0  p-1 text-xl"
          onClick={handleDeleteTodoList}
        >
          x
        </button>
      </div>

      <div className="">
        {cardArray &&
          cardArray.map((task) => (
            <Card
              key={task._id}
              task={task}
              deleteCard={() => deleteCard(task._id)}
            />
          ))}
      </div>
      <div className="py-1 taskInput">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn-save"
          id="to-do-list-button"
          onClick={() => addToDo(titleId)} // Pass titleId as an argument
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoList;
