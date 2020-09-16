import React from 'react';
import './App.css';
import ToDoForm from './components/ToDo/ToDoForm'
import ToDoHeader from './components/ToDo/ToDoHeader'

function App() {
  return (
    <div className="App">
      <ToDoHeader />
      <ToDoForm />
    </div>
  );
}

export default App;
