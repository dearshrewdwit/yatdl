import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import ToDoList from './ToDoList';

test('renders a to do list', () => {
  render(<ToDoList todos={["one"]}/>);
  const element = screen.getByText("one");
  const checkbox = screen.getByRole("checkbox");

  expect(element).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
});

test('user can see multiple todos', () => {
  render(<ToDoList todos={["one", "two"]}/>);
  const todo = screen.getByText("one");
  const todo2 = screen.getByText("two");

  expect(todo).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();
})
