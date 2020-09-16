import React from 'react';

const ToDoListMock = props => props.todos.map((todo, index) => <div key={index}>{todo}</div>)

export default ToDoListMock;
