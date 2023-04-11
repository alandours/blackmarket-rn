import React from 'react';
import 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, screen } from '@testing-library/react-native';

import WelcomeScreen from 'features/auth/welcome/screen';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('SignUp', () => {
  beforeEach(() => {
    render(
      <NavigationContainer>
        <WelcomeScreen />
      </NavigationContainer>,
    );
  });

  it('renders the Log in section', () => {
    // expect(screen.getByLabelText('Black Market logo')).toBeTruthy();
    expect(screen.getByLabelText('Email')).toBeTruthy();
    expect(screen.getByLabelText('Password')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Log in' })).toBeTruthy();

    const x = screen.getByTestId('asdf');
    expect(x).toBeAccessible();
  });

  it('renders the Sign up section', () => {
    expect(screen.getByText('Don’t have an account?')).toBeTruthy();

    const signUpButton = screen.getByRole('button', { name: 'Sign up' });
    expect(signUpButton).toBeTruthy();
    fireEvent.press(signUpButton);
    expect(mockNavigate).toHaveBeenCalledWith('SignUp');
  });
});
