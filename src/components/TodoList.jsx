import React from 'react';
import './Todo.css';

function ToDoList({ todos, toggleComplete, deleteTodo }) {
    return (
    <div>
        <h1>MyTask</h1>
        <p className="subtitle">Stay organized and productive</p>

        <div className="todo-items">
        {todos.map((todo) => (
            <div className="todo-card" key={todo.id}>
            <div className="todo-left">
                <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleComplete(todo.id)} 
                />
                <span className={todo.completed ? 'completed-text' : ''}>
                {todo.text}
                </span>
            </div>
            <div className="todo-meta">
                <span className="todo-date">
                {new Date().toLocaleDateString('en-GB')}
                </span>
                <button 
                className="delete-btn" 
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete task"
                >
                ✖
                </button>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}

export default ToDoList;
