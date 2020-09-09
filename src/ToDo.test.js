import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import ToDo from './ToDo';

test('user can check a todo', () => {
  render(<ToDo text="I need to buy some oranges" />);
  const element = screen.getByText("I need to buy some oranges");
  const checkbox = screen.getByRole("checkbox");
  userEvent.click(checkbox)

  expect(element).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
})
