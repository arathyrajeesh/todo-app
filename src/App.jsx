import React, { useState } from 'react';
import ToDoList from './components/TodoList';
import CountCard from './components/Count';
import InputText from './components/Input';
import Tab from './components/Tab'; 
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'all' ? true :
    filter === 'active' ? !todo.completed :
    todo.completed
  );

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="App">
      <div className="count-wrapper">
        <CountCard type="active" count={activeCount} />
        <CountCard type="completed" count={completedCount} />
      </div>
      <InputText addTodo={addTodo} />
      <Tab setFilter={setFilter} />
      <ToDoList todos={filteredTodos} toggleComplete={toggleComplete}deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
