import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { logout } = useAuth0();

  return (
    <>
      <button
        type="button"
        onClick={() => logout()}
      >
        Log out
      </button>
    </>
  );
};

export default LoginButton;
