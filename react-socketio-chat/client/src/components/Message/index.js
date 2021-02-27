import React from 'react';

const MessageComponent = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return (
    isSentByCurrentUser ? (
      <div>
        <p>{trimmedName}</p>
        <p>{text}</p>
      </div>
    ) : (
      <div>
        <p>{text}</p>
        <p>{user}</p>
      </div>
    )
  )
};

export default MessageComponent;