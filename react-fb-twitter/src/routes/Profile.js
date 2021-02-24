import { firebaseAuth } from 'initFirebase';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();

  const onLogOutClick = async () => {
    await firebaseAuth.signOut();
    history.push('/');
  }

  return (
    <>
    <button onClick={onLogOutClick}>LOGOUT</button>
    </>
  )
};
export default Profile;