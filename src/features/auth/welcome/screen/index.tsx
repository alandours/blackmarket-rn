import React from 'react';

import { AuthLayout } from 'features/auth/layout';

import { LogIn } from '../components/LogIn';
import { SignUp } from '../components/SignUp';

const WelcomeScreen: React.FunctionComponent = () => {
  return (
    <AuthLayout>
      <LogIn />
      <SignUp />
    </AuthLayout>
  );
};

export default WelcomeScreen;
