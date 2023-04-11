import React from 'react';

import { AuthLayout } from 'features/auth/layout';

import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';

const WelcomeScreen: React.FunctionComponent = () => {
  return (
    <AuthLayout>
      <SignIn />
      <SignUp />
    </AuthLayout>
  );
};

export default WelcomeScreen;
