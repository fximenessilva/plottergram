/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default (props) => {
  const { user } = useAuth0();

  return (
    <div>
      {user?.name}
    </div>

  );
};
