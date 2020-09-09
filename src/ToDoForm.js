import React, { Component } from 'react';
import ToDoList from './ToDoList'

class ToDoForm extends Component{
  constructor(props) {
    super(props);
    this.state = {value: '', todos: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({todos: []})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.todos.push(this.state.value)
    this.setState({todos: this.state.todos});
  }

  render(){
    return (
      <div className="todo-form-container">
        <button className="todo-reset-button" onClick={this.handleReset}>reset</button>

        <form className="todo-form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label>
            Add Todo: <input type="text" />
          </label>
          <input type="submit" name="submit" value="Submit" />
        </form>

        <ToDoList todos={this.state.todos} />
      </div>
    )
  }
}

export default ToDoForm
