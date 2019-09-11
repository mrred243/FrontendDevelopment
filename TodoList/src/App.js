import React, {useState} from 'react';
import './App.css';
import TodoList from './Todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">Todo list</header>
      <TodoList />
    </div>
  );
}

export default App;
