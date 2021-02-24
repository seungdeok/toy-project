import React, { useEffect, useState } from 'react';
import RootRouter from 'components/Router';
import { firebaseAuth } from 'initFirebase';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);
  return (
    <>
    { init ? <RootRouter isLoggedIn={isLoggedIn} /> : 'Initializing...' }
    <footer>
      &copy; {new Date().getFullYear()} twitter clone 
    </footer>
    </>
  );
}

export default App;
