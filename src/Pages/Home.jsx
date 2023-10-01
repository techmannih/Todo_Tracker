import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
// import Navbar from './Navbar';

function TodoList({ title, deleteTodoList }) {
  const [cardArray, setCardArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addToDo = () => {
    if (inputValue !== '') {
      setCardArray([...cardArray, inputValue]);
      setInputValue('');
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
    <div className="todoList d-flex">
      <div className=" d-flex  p-1 title">
        
        <div className="">
      <h2 className='m-0  align-items-center p-1'>{title}</h2>
      </div>
      <div className="btn-title">
      {/* <button className="btnXX" onClick={newAddcard}>
        +
      </button> */}
      <button className="btnXX" onClick={handleDeleteTodoList}>
        x
      </button>
      </div>
      </div>

      <div className=''>
        {cardArray.map((text, index) => (
          <Card
            key={index}
            text={text}
            deleteCard={() => deleteCard(index)}
          />
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

function Card({ text, deleteCard }) {
  return (
    <div className="card">
      <p className='m-0'>{text}</p>
      <button className='btnXX'onClick={deleteCard}>X</button>
    </div>
  );
}


function Sign() {
  const [todoLists, setTodoLists] = useState([]);
  const [addTodoListInputValue, setAddTodoListInputValue] = useState('');

  const location=useLocation()

  const addTodoList = () => {
    if (addTodoListInputValue.trim() !== '') {
      setTodoLists([...todoLists, addTodoListInputValue]);
      setAddTodoListInputValue('');
    }
  };

  const deleteTodoList = (index) => {
    const updatedTodoLists = [...todoLists];
    updatedTodoLists.splice(index,1);
    // updatedTodoLists.splice(title,all)
    setTodoLists(updatedTodoLists);
  };

  return (

    <div >

<h1 className='justify-content-center items-center '>Hello and Welcome to the home</h1>
        {/* <Navbar/> */}
        {/* <h1 className='justify-content-center'>Hello{location.state.id} and welcome to the home</h1> */}
        <div className="d-flex justify-content-center">
                <input
        type="text"
        id="addTodoListInput"
        value={addTodoListInputValue}
        onChange={(e) => setAddTodoListInputValue(e.target.value)}
      />
      <button id="addTodoListButton" onClick={addTodoList}>
        Add Todo
      </button>
      </div>

      <div id="root">
        {todoLists.map((title, index) => (
          <TodoList
            key={index}
            title={title}
            deleteTodoList={() => deleteTodoList(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Sign;
