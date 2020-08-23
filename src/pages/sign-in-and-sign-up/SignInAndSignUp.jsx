import React from 'react';
import SignUp from '../../components/sign-up/SignUp';
import SignIn from '../../components/sign-in/SignIn';

import { SignInAndSignUpContainer } from './SignInAndSignUpStyles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
