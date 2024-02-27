import React, { useState, useEffect } from "react";
import TodoList from "../Homepage/todo";
import "../Home.css";

function todoList() {
  const [todoLists, setTodoLists] = useState([]);
  const [addTodoListInputValue, setAddTodoListInputValue] = useState("");
  console.log(todoLists);

  const fetchTodoLists = async () => {
    const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8888/todolists/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const todoListsData = await response.json();
        setTodoLists(todoListsData.todo);
        console.log("Fetch all todo lists:", todoListsData.todo);
      } else {
        console.error("Error fetching todo lists:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching todo lists:", error);
    }
  };
  
  useEffect(() => {
    fetchTodoLists();
  }, []);
  const addTodoListHandler = async () => {
    const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }
  
    if (addTodoListInputValue.trim() !== "") {
      try {
        const response = await fetch("http://localhost:8888/todolists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, title: addTodoListInputValue }), // Include userId in the request body
        });
  
        if (response.ok) {
          const newTodoList = await response.json();
          console.log(newTodoList.title);
          console.log(todoLists);
          setTodoLists([...todoLists, newTodoList]);
          setAddTodoListInputValue("");
        } else {
          const errorMessage = await response.text(); // Get error message from response body
          console.error("Error adding todo list:", errorMessage);
        }
      } catch (error) {
        console.error("Error adding todo list:", error);
      }
    }
  };
  
  
  const deleteTodoList = async (id) => {
    try {
      const response = await fetch(`http://localhost:8888/todolist/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedTodoLists = todoLists.filter((todo) => todo._id !== id);
        setTodoLists(updatedTodoLists);
      } else {
        console.error("Error deleting todo list:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting todo list:", error);
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem("userId"); // or any other session storage
    
    window.location.href = "/";
  };
  return (
    <div className="justify-center flex-wrap m-4">
      <div className=" flex justify-end mt-4">
        {" "}
        <button
          id="logoutButton"
          onClick={logoutHandler}
          className="ml-4 hover:bg-black hover:text-white hover:border-white border-2 bg-white text-black rounded p-2 font-bold"
        >
          Logout
        </button>
      </div>

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
          onClick={addTodoListHandler}
          className="hover:bg-black hover:text-white bg-white text-black rounded-r p-2 font-bold hover:border-white border-2"
        >
          Add Todo
        </button>
      </div>

      <div id="" className="flex justify-center flex-wrap">
        {todoLists.map((todoList) => (
          <TodoList
            key={todoList._id}
            titleId={todoList._id}
            todoList={todoList}
            deleteTodoList={() => deleteTodoList(todoList._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default todoList;
