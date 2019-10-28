import React from 'react';
import './changecounter.css';


const ChangeCounter = (props) => {
  return(
    <div  className="changecounter" onClick={props.click}>
    {props.label}
    </div>
  )
}

export default ChangeCounter;
