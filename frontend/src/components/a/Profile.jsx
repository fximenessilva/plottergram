/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { connect } from 'react-redux';
import sendUserToBack from '../../redux/actions/loginAuth0Action';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function Profile({ dispatch }) {
  const { user } = useAuth0();

  function handleSendUserToBack(userToSend) {
    debugger;
    dispatch(sendUserToBack(userToSend));
  }
  return (
    <div>
      {user ? <LogoutButton /> : <LoginButton />}

      {user?.name}
      {user && (
      <button
        type="button"
        onClick={handleSendUserToBack(user)}
      >
        send to back
      </button>
      )}

    </div>

  );
}

export default connect()(Profile);
