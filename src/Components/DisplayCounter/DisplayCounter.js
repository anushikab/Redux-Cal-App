import React from 'react';
import './displaycounter.css';


const DisplayCounter = (props)=>{
  return (
    <div className="displaycounter">

       counter:{props.value}

    </div>
  )
}


export default DisplayCounter;
