import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';

export default function App() {

  const [userName, setUserName] = useState("Jesus");
  const [todoItems, setTodoItems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Get Shoes", done: false },
    { action: "Collect Tickets", done: false },
    { action: "Call Joe", done: false }
  ]);
  const [newItemText, setNewItemText] = useState("");

  const updateNewTextValue = (e) => {
    setNewItemText(e.target.value);
  }

  const createNewTodo = () => {

    let data = {};

    if (!todoItems.find(item => item.action === newItemText)) {
      data = { action: newItemText, done: false };

      const array_new = [...todoItems, data];

      setTodoItems(array_new);
      setNewItemText("");

    };
  }

  const toggleTodo = (todo) => { 
    setTodoItems(todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done } : item));
  
  }; 
  
  const todoTableRows = () => {

    return (todoItems.map(item =>
      
      <tr key={item.action}>
        <td> {item.action} </td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleTodo(item)}
          />
        </td>
      </tr>
    ));
  }
  
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {userName} To Do List
          ({todoItems.filter(t => !t.done).length} items to do)
        </h4>
      <div className="container-fluid">
        <div className="my-1">
          <input className="form-control"
            value={newItemText}
            onChange={updateNewTextValue}
          />
          <button className="btn btn-primary m-2"
            onClick={createNewTodo}>
            Add
              </button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr><th>Description</th><th>Done</th></tr>
          </thead>
          <tbody>{todoTableRows()}</tbody>
        </table>
      </div>
    </div>
  )
};