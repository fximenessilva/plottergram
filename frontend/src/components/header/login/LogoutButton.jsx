import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Button.css';

const LoginButton = () => {
  const { logout } = useAuth0();

  return (
    <>
      <button
        type="button"
        onClick={() => logout()}
        className="header-log-btn"
      >
        Log out
      </button>
    </>
  );
};

export default LoginButton;
