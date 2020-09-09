import React from 'react';

function ToDo(props) {
  return (
    <div className="todo-single">
      <span>{props.text}</span><input type="checkbox" />
    </div>
  );
}

export default ToDo
