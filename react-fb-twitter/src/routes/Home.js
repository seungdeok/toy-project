import React, { useEffect, useState } from 'react';

import { firebaseDatabase } from 'initFirebase';

import Tweet from 'components/Tweet';
import TweetFactory from 'components/TweetFactory';

const Home = ({ userInfo }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    firebaseDatabase.collection('tweets').onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTweets(tweetArray);
    });
  }, []);
  return (
    <div>
      <TweetFactory userInfo={userInfo} />
      { tweets.map((tweet) => (
        <Tweet key={tweet.id} tweetInfo={tweet} isOwner={tweet.creatorId === userInfo.uid} />
      )) }
    </div>
  )
};
export default Home;