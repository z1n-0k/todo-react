import Form from './Form';
import TodoList from './TodoList';
import { useState, useEffect, useCallback } from 'react';

function App() {

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [id, setId] = useState(1);


  // run each time the page refreshes
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      const parsedTodos = JSON.parse(localTodos);
      if (parsedTodos.length > 0) {
        setTodos(parsedTodos);
        setId(parsedTodos.at(-1).id + 1);
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }, []);

  const saveLocalTodos = useCallback(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // run each time the todo list is modified
  useEffect(() => {
    saveLocalTodos();
  }, [saveLocalTodos]);

  return (
    <div className="App">
      <header><h1>Todo List</h1></header>
      <Form 
        id={id}
        setId={setId}
        todoInput={todoInput} 
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
        setFilterStatus={setFilterStatus}
        />
      <TodoList 
        todos={
          filterStatus === "all"
            ? todos
            : todos.filter((todo) => todo.completed === (filterStatus === "completed"))
        }
        setTodos={setTodos}
        />
    </div>
  );
}

export default App;