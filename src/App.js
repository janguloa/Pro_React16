import React, { useState } from 'react';
import TodoBanner from "./TodoBanner";
import TodoCreator from "./TodoCreator";
import TodoRow from "./TodoRow";

export default function App() {

  const [userName, setUserName] = useState("Jesus");
  const [todoItems, setTodoItems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Get Shoes", done: false },
    { action: "Collect Tickets", done: false },
    { action: "Call Joe", done: false }
  ]);
  const [newItemText, setNewItemText] = useState("");

  const createNewTodo = (task) => {

    console.log(task);

    let data = {};

    if (!todoItems.find(item => item.action === task)) {
      data = { action: task, done: false };

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
     <TodoRow key={item.action} item={item} toggleTodo={toggleTodo} />
    ));
  }
  
  return (
    <div>
      <TodoBanner userName={userName} todoItems={todoItems} />
      <div className="container-fluid">
      <TodoCreator createNewTodo={createNewTodo} />
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