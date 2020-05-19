import React from 'react';

const Validations = (props) => {
  const output1 = 'Text too short!';
  const output2 = 'Text too long!';
  let disply = null;

  if(props.textLength <= 5){
    disply = (
      <div>
        {output1}
      </div>
    );
  }
  else {
    disply = (
      <div>{output2}</div>
    );
  }

  return (
    <div>
      <p>Text Length: {props.textLength} </p>
      {disply}
    </div>
  );
}

export default Validations;
