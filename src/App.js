import './App.css';
import Form from './Form';
import TodoList from './TodoList';
import { useState, useEffect } from 'react';

function App() {

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    console.log(...todos);
  },[todos])

  return (
    <div className="App">
      <header><h1>Todo List</h1></header>
      <Form 
        todoInput={todoInput} 
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
        />
      <TodoList 
        todos={todos}
        />
    </div>
  );
}

export default App;
