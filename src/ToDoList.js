import React from 'react';
import ToDo from './ToDo'

function ToDoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map((todo, index) => {
        return (
          <ToDo text={todo} key={index} />
        )
      })}
    </div>
  )
}

export default ToDoList
