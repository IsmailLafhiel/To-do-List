import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //saveLocal storage
  const saveLocalTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  // useStates
  const [InputText, setInputText] = useState("");
  const [todos, setTodos] = useState(saveLocalTodos);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //function filter
  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  //use only once
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    filterHandler();
  }, [todos, filter]);
  // // useEffect
  // useEffect(() => {
  //   filterHandler();
  // }, [filter]);

  return (
    <div className="App">
      <header>
        <h1>Liste Des Tâches</h1>
      </header>
      <Form
        setFilter={setFilter}
        InputText={InputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
