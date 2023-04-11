import React from 'react';
import 'react-native';

import { render, screen } from '@testing-library/react-native';

import App from '../App';

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.runAllTimers();
  });

  it('renders correctly', () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });

  it('elements should be accessible', () => {
    render(<App />);
    const authScreenButtons = screen.getAllByRole('button');

    authScreenButtons.forEach(button => {
      expect(button).toBeAccessible();
    });
  });
});
