import React, { useState, useMemo } from "react";
import UseMemoComponent from "./components/UseMemoComponent";
import ReactMemoComponent from "./components/ReactMemoComponent";
import "./styles.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [newTodo, setNewTodo] = useState("");

  // Function to add a default "New todo"
  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  // Function to add a validated custom todo
  const addCustomTodo = () => {
    if (newTodo.length > 5) {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Clear input after adding
    } else {
      alert("Todo must be more than 5 characters!");
    }
  };

  // Memoized count operation
  const computedValue = useMemo(() => {
    console.log("Computing expensive operation...");
    return counter * 10;
  }, [counter]);

  return (
    <div className="app-container">
      <h1>React Memo & useMemo Example</h1>

      {/* Counter Section */}
      <div>
        <h2>Counter: {counter}</h2>
        <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
          Increment Counter
        </button>
      </div>

      {/* Computed Value */}
      <h3>Computed Value: {computedValue}</h3>

      {/* Todo List Section */}
      <div>
        <h2>Todo List</h2>
        <button id="add-todo-btn" onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      {/* Add Custom Todo */}
      <div>
        <input
          id="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a todo (min 6 chars)"
        />
        <button id="submit-btn" onClick={addCustomTodo}>Submit</button>
      </div>

      {/* Memo Components */}
      <UseMemoComponent counter={counter} />
      <ReactMemoComponent todos={todos} />
    </div>
  );
};

export default App;
