import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ToDoForm from './ToDoForm';

test('renders a to do form', () => {
  render(<ToDoForm />);
  const textBox = screen.getByRole("textbox");
  const submitButton = screen.getByRole('button', {name: /Submit/});
  expect(textBox).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('user can add a todo', () => {
  render(<ToDoForm />);
  const textBox = screen.getByRole("textbox");
  userEvent.type(textBox, "A test todo!")
  userEvent.click(screen.getByText('Submit'))
  const todo = screen.getByText("A test todo!");
  expect(todo).toBeInTheDocument();
})

test('user can reset the list and remove the current todos', () => {
  render(<ToDoForm />);
  const textBox = screen.getByRole("textbox");
  userEvent.type(textBox, "A test todo!")
  userEvent.click(screen.getByText('Submit'))
  const resetLink = screen.getByText("reset");
  userEvent.click(resetLink)
  const todo = screen.queryByText("A test todo!");
  expect(todo).not.toBeInTheDocument()
})
