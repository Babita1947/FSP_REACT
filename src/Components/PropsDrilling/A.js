import React, { useState } from 'react'
import D from './D';
import B from './B';
import C from './C';

const A = () => {
    let [state, setState] = useState("");
    const populateData = (event) => {
        setState(event.target.value);
    }
  return (
    <div>
        <h2>A COMPONENT</h2>
        <input type="text" placeholder='ENTER THE TEXT' onChange={populateData}/>
        <B/>
        <C/>
        <D data={state}/>
    </div>
  )
}

export default A