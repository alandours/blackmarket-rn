import React from 'react';
import { Text } from 'react-native';

import { AuthLayout } from 'features/auth/components/AuthLayout';

import { SignUpPropTypes } from './types';

const SignUpScreen: React.FunctionComponent<SignUpPropTypes> = () => (
  <AuthLayout>
    <Text>Sign Up</Text>
  </AuthLayout>
);

export default SignUpScreen;
