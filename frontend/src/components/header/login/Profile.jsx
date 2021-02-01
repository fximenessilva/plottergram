/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import sendUserToBack from '../../../redux/actions/loginAuth0Action';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function Profile({ dispatch }) {
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      dispatch(sendUserToBack(user));
    }
  }, [user]);

  return (
    <div>
      {user ? <LogoutButton /> : <LoginButton />}

    </div>

  );
}

export default connect()(Profile);
