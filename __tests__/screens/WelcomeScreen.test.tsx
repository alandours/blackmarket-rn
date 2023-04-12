import React from 'react';
import 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, screen } from '@testing-library/react-native';

import WelcomeScreen from 'features/auth/welcome/screen';
import { WelcomePropTypes } from 'features/auth/welcome/screen/types';

const mockNavigate = jest.fn();

const mockProps = {
  navigation: {
    navigate: mockNavigate,
  },
} as unknown as WelcomePropTypes;

describe('SignUp', () => {
  beforeEach(() => {
    render(
      <NavigationContainer>
        <WelcomeScreen {...mockProps} />
      </NavigationContainer>,
    );
  });

  it('renders the Log in section', () => {
    expect(screen.getByLabelText('Black Market logo')).toBeTruthy();
    expect(screen.getByLabelText('Email')).toBeTruthy();
    expect(screen.getByLabelText('Password')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Log in' })).toBeTruthy();
  });

  it('renders the Sign up section', () => {
    expect(screen.getByText('Don’t have an account?')).toBeTruthy();

    const signUpButton = screen.getByRole('button', { name: 'Sign up' });
    expect(signUpButton).toBeTruthy();
    fireEvent.press(signUpButton);
    expect(mockNavigate).toHaveBeenCalledWith('SignUp');
  });
});
