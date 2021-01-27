/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import sendUserToBack from '../../redux/actions/loginAuth0Action';

function Profile(props) {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      {user?.name}
      {user && (
      <button
        type="button"
        onClick={sendUserToBack(user)}
      >
        send to back
      </button>
      )}

    </div>

  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch),
    dispatch,
  };
}

export default connect(mapDispatchToProps)(Profile);
