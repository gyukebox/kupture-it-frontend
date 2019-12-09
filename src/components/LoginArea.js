import React from 'react';
import LoginRegisterForm from './LoginRegisterForm';
import SocialLogin from './SocialLogin';

const LoginArea = () => (
  <React.Fragment>
    <LoginRegisterForm />
    <SocialLogin />
  </React.Fragment>
);

export default LoginArea;
