import React, { useState } from 'react';
import './Input.css';

function InputText({ addTodo }) {
    const [text, setText] = useState('');
    
    const handleAdd = () => {
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };
    return (
    <div className="input-container">
        <input 
            type="text" 
            value={text} 
            onChange={e => setText(e.target.value)} 
            placeholder="Enter a todo"
            />
            <button onClick={handleAdd}>Add</button>
    </div>
);
}

export default InputText;
