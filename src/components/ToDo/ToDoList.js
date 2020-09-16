import React from 'react';
import ToDo from './ToDo'

const ToDoList = (props) => {
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
