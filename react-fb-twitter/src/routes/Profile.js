import { firebaseAuth, firebaseDatabase } from 'initFirebase';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = ({ refreshUser, userInfo }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userInfo.displayName);

  const onLogOutClick = async () => {
    await firebaseAuth.signOut();
    history.push('/');
    refreshUser();
  }

  const onChange = (event) => {
    const { target: { value } } = event;

    setNewDisplayName(value);
  } 

  const onSubmit =  async (event) => {
    event.preventDefault();

    if(userInfo.displayName !== newDisplayName) {
      await userInfo.updateProfile({
        displayName: newDisplayName,
      });

      refreshUser();
    }
  }

  const getTweets = async () => {
    const tweets = await firebaseDatabase
      .collection('tweets')
      .where('creatorId', '==', userInfo.uid)
      .orderBy('createdAt', 'desc')
      .get();

    const data = tweets.docs.map((doc) => doc.data());
    console.log(data);
  }

  useEffect(() => {
    getTweets();
  }, []);
  return (
    <>
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='DisplayName' value={newDisplayName} onChange={onChange} />
      <input type='submit' value='Update Profile' />
    </form>
    <button onClick={onLogOutClick}>LOGOUT</button>
    </>
  )
};
export default Profile;