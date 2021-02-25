import { firebaseDatabase, firebaseStorage } from 'initFirebase';
import React, { useState } from 'react';

const Tweet = ({ tweetInfo, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetInfo.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this tweet?");

    if(ok) {
      await firebaseDatabase.collection('tweets').doc(`${tweetInfo.id}`).delete();
      await firebaseStorage.refFromURL(tweetInfo.fileUrl).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const onChange = (event) => {
    const { target: { value } } = event;

    setNewTweet(value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    await firebaseDatabase.collection('tweets').doc(`${tweetInfo.id}`).update({
      text: newTweet,
    });

    setEditing(false);
  }
  return (
    <div>
    {
      editing ? (
        <>
        <form onSubmit={onSubmit}>
          <input 
            type='text' 
            placeholder='Edit your tweet' 
            value={newTweet} 
            required
            onChange={onChange} />
          <input type='submit' value='Update tweet' />
        </form>
        <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
        <h4>{tweetInfo.text}</h4>
        { tweetInfo.fileUrl && <img src={tweetInfo.fileUrl} width='50px' height='50px' /> }
        {
          isOwner && (
            <>
            <button onClick={onDeleteClick}>Delete Tweet</button>
            <button onClick={toggleEditing}>Edit Tweet</button>
            </>
          )
        }
        </>
      )
    }
    </div>
  )
};

export default Tweet;