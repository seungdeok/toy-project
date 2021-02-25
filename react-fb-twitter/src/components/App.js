import React, { useEffect, useState } from 'react';
import RootRouter from 'components/Router';
import { firebaseAuth } from 'initFirebase';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserInfo({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
        setUserInfo(null);
      }
      setInit(true);
    })
  }, []);
  const refreshUser = () => {
    const user = firebaseAuth.currentUser;
    setUserInfo({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  }
  return (
    <>
    { init ? <RootRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userInfo={userInfo} /> : 'Initializing...' }
    <footer>
      &copy; {new Date().getFullYear()} twitter clone 
    </footer>
    </>
  );
}

export default App;
