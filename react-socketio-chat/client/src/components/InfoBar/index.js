import React from 'react';

const InfoBar = ({ room }) => {
  return (
    <div>
      <div>{room}</div>
      <a href='/'>
        <div>CLOSE</div>
      </a>
    </div>
  )
}

export default InfoBar;