import React, { Component } from 'react';
import ToDo from './ToDo'

class ToDoList extends Component{
  constructor(props) {
    super(props);
    this.state = {value: '', todos: []};

    this.handleReset = this.handleReset.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReset(event) {
    this.setState({todos: []})
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.state.todos.push(this.state.value)
    this.setState({todos: this.state.todos});
    event.preventDefault();
  }

  render(){
    return (
      <div className="todo-list">
        <h1 className="todo-header">Yet Another To Do List</h1>
        <button className="todo-reset-button" onClick={this.handleReset}>reset</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Todo: <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.todos.map((todo, index) => {
          return (
            <ToDo text={todo} key={index} />
          )
        })}
      </div>
    )
  }
}

export default ToDoList
