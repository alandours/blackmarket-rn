import React from 'react';

import { AuthLayout } from 'features/auth/layout';

import Logo from '../components/Logo';
import { SignInPropTypes } from './types';

const SignInScreen: React.FunctionComponent<SignInPropTypes> = () => (
  <AuthLayout>
    <Logo />
  </AuthLayout>
);

export default SignInScreen;
