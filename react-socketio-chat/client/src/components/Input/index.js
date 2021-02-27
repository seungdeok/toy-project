import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
  const onChange = (event) => {
    const { target: { value } } = event;

    setMessage(value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    sendMessage();
  }

  const onKeyPress = (event) => {
    event.preventDefault();
    if(event.key === 'Enter') {
      sendMessage();
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress} />
      <button type='submit'>Send</button>
    </form>
  )
}

export default Input;