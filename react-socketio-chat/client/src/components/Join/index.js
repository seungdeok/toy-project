import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const onChange = (event) => {
    const { target: { name, value } } = event;

    if(name === 'name') {
      setName(value);
    } else if(name === 'room') {
      setRoom(value);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const onClickLink = (event) => {
    if(!name || !room) {
      event.preventDefault();
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Join</h1>
        <div>
          <input
            name='name'
            placeholder=''
            type='text'
            value={name}
            onChange={onChange} />
        </div>
        <div>
          <input
            name='room'
            placeholder=''
            type='text'
            value={room}
            onChange={onChange} />
        </div>
        <Link onClick={onClickLink} to={`/chat?name=${name}&room=${room}`}>
          <button type='submit'>SIGN IN</button>
        </Link>
      </form>
    </div>
  )
}

export default Join;