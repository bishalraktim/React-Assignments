import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  return (
    <div className='tests'>
      <input
        type='text' onClick={props.click}
        onChange={props.change} value={props.newName}>
      </input>
    </div>
  );
}

export default UserInput;
