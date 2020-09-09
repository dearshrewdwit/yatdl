import React from 'react';
import './App.css';
import ToDoForm from './ToDoForm'
import ToDoHeader from './ToDoHeader'

function App() {
  return (
    <div className="App">
      <ToDoHeader />
      <ToDoForm />
    </div>
  );
}

export default App;
