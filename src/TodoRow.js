import React from 'react';

export default function TodoRow(props) {

    const {item, toggleTodo} = props;

    return (
        <tr>
            <td>{item.action}</td>
            <td>
                <input 
                type="checkbox" 
                checked={item.done}
                onChange={() => toggleTodo(item)}
                />
            </td>
        </tr>
    );
}