import React from 'react';
import MessageComponent from '../Message';

const MessageList = ({ messages, name }) => {
  return (
    <div>
    {
      messages.map((message, i) => <div key={String(i)}><MessageComponent message={message} name={name} /></div>)
    }
    </div>
  )
};

export default MessageList;