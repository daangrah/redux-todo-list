import './App.css';
import React from "react";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Tasks from "./components/Tasks";


function App() {
  return (
    <div className="App">
      <Header />
      <InputArea/>
      <Tasks/>
    </div>
  );
}

export default App;
