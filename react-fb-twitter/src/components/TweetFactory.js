import React, { useState } from 'react';
import { firebaseDatabase, firebaseStorage } from 'initFirebase';
import { v4 as uuidv4 } from 'uuid';

const TweetFactory = ({ userInfo }) => {
  const [tweet, setTweet] = useState("");
  const [file, setFile] = useState();

  const onChange = (event) => {
    const { target: { value }  } = event;

    setTweet(value);
  }
  
  const onSubmit = async (event) => {
    event.preventDefault();
    let fileUrl = "";
    if (file) {
      const fileRef = await firebaseStorage.ref().child(`${userInfo.uid}/${uuidv4()}`);
      const response = await fileRef.putString(file, 'data_url');
      fileUrl = await response.ref.getDownloadURL();
    }

    const tweetObj = {
      text: tweet,
      createdAt: Date.now(),
      creatorId: userInfo.uid,
      fileUrl,
    }
    await firebaseDatabase.collection('tweets').add(tweetObj);

    setTweet("");
    setFile(null);
  }

  const onChangeFile = (event) => {
    const { target: { files } } = event;

    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result }
      } = finishedEvent;

      setFile(result);
    };
    reader.readAsDataURL(theFile);
  }

  const onClearFile = () => setFile(null);
  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text' 
        placeholder='What`s on your mind?' 
        maxLength={120}
        value={tweet}
        onChange={onChange} />
      <input type='file' accept='image/*' onChange={onChangeFile} />
      <input type='submit' value='Tweet' />
      { file && (
        <div>
          <img src={file} width='50px' height='50px' />
          <button onClick={onClearFile}>CLEAR</button>
        </div>
      ) }
    </form>
  )
}

export default TweetFactory;