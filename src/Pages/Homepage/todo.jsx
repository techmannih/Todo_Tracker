import React, { useState } from "react";
import Card from "./card";
import "../Home.css";

function TodoList({ titleId, todoList, deleteTodoList }) {
  const [cardArray, setCardArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  // console.log(todoList);
  // console.log(titleId)
  const addToDo = async (titleId) => {
    try {
      if (!inputValue.trim()) {
        setInputError("Task name cannot be empty");
        setTimeout(() => {
          setInputError(null);
        }, 1000);
        console.error("Task name cannot be empty");
        return;
      }
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}com/todolist/${titleId}/task`,
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

      console.log(inputValue);
      console.log(setInputValue);
      if (response.ok) {
        const newTask = await response.json();

        console.log("tasks:", newTask.todo.tasks);
        setCardArray([...cardArray, newTask.todo.tasks]);
        setInputValue("");
      } else {
        // Handle non-successful response 
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
      // Handle any other errors during the fetch or processing
      console.error("An error occurred:", error);
      console.log("An error occurred:", error);
    }
  };
  const deleteCard = async (id) => {
    try {
      console.log("Deleting card with ID:", id);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/todolist/task/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Card deleted successfully");
        let updatedCardArray = [...todoList.tasks];
        const deletedTaskIndex = updatedCardArray.findIndex(
          (task) => task._id === id
        );

        if (deletedTaskIndex !== -1) {
          updatedCardArray.splice(deletedTaskIndex, 1);
          setCardArray(updatedCardArray);
          console.log("Updated card array:", updatedCardArray);
        } else {
          console.error(
            "Error updating card array: Task not found in the array"
          );
        }
      } else {
        console.error(
          "Error deleting card. Status:",
          response.status,
          "Message:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleDeleteTodoList = () => {
    deleteTodoList();
  };

  return (
    <div className="todoList bg-black flex-wrap flex-col">
      {inputError && (
        <div className="text-red-500 text-center">{inputError}</div>
      )}
      <div className=" flex justify-between p-1 title flex-wrap">
        <span className="m-0 align-items-center whitespace-nowrap max-w-[200px]">
          {todoList.title}
        </span>
        <button
          className="btnXX m-0  p-1 text-xl"
          onClick={handleDeleteTodoList}
        >
          x
        </button>
      </div>

      <div className="">
        {todoList.tasks.map((task) => (
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
