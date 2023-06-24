import React from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./components/store";
import Navbar from "./components/todos/Navbar";
import Main from "./components/todos/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
