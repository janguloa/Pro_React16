import React, {useState} from 'react';

export default function TodoCreator(props) {

    const { createNewTodo } = props;
    const [newItemText, setNewItemText] = useState("");

    const updateNewTextValue = (e) => {
        setNewItemText(e.target.value);
    }

    const createNewTodoCreator = () => {
        createNewTodo(newItemText);
        setNewItemText({ newItemText: ""});
    
    }

    return (
        <div className="my-1">
            <input 
                className="form-control" 
                value={newItemText}
                onChange={updateNewTextValue} />
            <button 
                className="btn btn-primary mt-1"
                onClick={createNewTodoCreator}>Add</button>
        </div>
    );
};