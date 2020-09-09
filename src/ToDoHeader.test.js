import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoHeader from './ToDoHeader'

test('user sees a header', () => {
  render(<ToDoHeader />);
  const element = screen.getByText("Yet Another To Do List");

  expect(element).toBeInTheDocument();
})
