import React from 'react';
import './UserOutput.css';

const OutputPara = (props) => {
  return(
    <div className='test'>
      <p>This is the first paragraph! - Username: {props.username}</p>
      <p>This is the second paragraph! - NewName: {props.newName}</p>
    </div>
  );
};

export default OutputPara;
