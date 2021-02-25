import React, { useState } from 'react';
import { firebaseAuth, firebaseInstance } from 'initFirebase';

import AuthForm from 'components/AuthForm';

const Auth = () => {
  const onSocialClick = async (event) => {
    const { target: { name }  } = event;
    let provider;

    if(name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if(name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    await firebaseAuth.signInWithPopup(provider);
  }

  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name='google'>Continue with Googld</button>
        <button onClick={onSocialClick} name='github'>Continue with Github</button>
      </div>
    </div>
  )
};
export default Auth;