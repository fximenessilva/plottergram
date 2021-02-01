import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Button.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button
        type="button"
        onClick={() => loginWithRedirect()}
        className="header-log-btn"
      >
        Log in
      </button>
    </>
  );
};

export default LoginButton;
