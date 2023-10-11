import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import BoxList from "./BoxList";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <BoxList />
      <TodoList />
    </div>
  );
}

export default App;
