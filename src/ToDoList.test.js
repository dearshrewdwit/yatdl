import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import ToDoList from './ToDoList';
jest.mock('./ToDo');

test('renders items', () => {
  render(<ToDoList todos={["one"]}/>);
  const element = screen.getByText("one");

  expect(element).toBeInTheDocument();
});

test('user can see multiple items', () => {
  render(<ToDoList todos={["one", "two"]}/>);
  const todo = screen.getByText("one");
  const todo2 = screen.getByText("two");

  expect(todo).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();
})
