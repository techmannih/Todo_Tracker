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
    <div className="todoList bg-black">
      <div className=" flex   justify-between p-1 title">
        
        
      <h2 className='m-0  align-items-center '>{title}</h2>
    
      
      {/* <button className="btnXX" onClick={newAddcard}>
        +
      </button> */}
      <button className="btnXX m-0  p-1 text-xl" onClick={handleDeleteTodoList}>
        x
      </button>
     
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

    <div className='justify-center flex-wrap'>

<h1 className='justify-center items-center text-white'>Hello and Welcome to the home</h1>
        <div className=" justify-content-center">
                <input
                className='border-white bg-black p-2   border-2  text-white rounded-xl '
        type="text"
        id="addTodoListInput"
        value={addTodoListInputValue}
        onChange={(e) => setAddTodoListInputValue(e.target.value)}
      />
      <button id="addTodoListButton" onClick={addTodoList} className='bg-black text-white'>
        Add Todo
      </button>
      </div>

      <div id="root">
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

export default Sign;
