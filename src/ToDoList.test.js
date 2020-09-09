import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import ToDoList from './ToDoList';

test('renders a to do list', () => {
  render(<ToDoList />);
  const element = screen.getByText(/Yet Another To Do List/);
  const textBox = screen.getByRole("textbox");
  expect(element).toBeInTheDocument();
  expect(textBox).toBeInTheDocument();
});

test('user can add a todo', () => {
  render(<ToDoList />);
  const textBox = screen.getByRole("textbox");
  userEvent.type(textBox, "A test todo!")
  userEvent.click(screen.getByText('Submit'))
  const todo = screen.getByText("A test todo!");
  expect(todo).toBeInTheDocument();
})

test('user can reset the list and remove the current todos', () => {
  render(<ToDoList />);
  const textBox = screen.getByRole("textbox");
  userEvent.type(textBox, "A test todo!")
  userEvent.click(screen.getByText('Submit'))
  const resetLink = screen.getByText("reset");
  userEvent.click(resetLink)
  const todo = screen.queryByText("A test todo!");
  expect(todo).not.toBeInTheDocument()
})
