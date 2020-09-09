import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const element = screen.getByText(/Yet Another To Do List/);
  const textBox = screen.getByRole("textbox");
  expect(element).toBeInTheDocument();
  expect(textBox).toBeInTheDocument();
});
