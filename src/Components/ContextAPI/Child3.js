import React from 'react'
import mycontext from './context'
import { useContext } from 'react'
import Child4 from './Child4';


const Child3 = () => {
    var data = useContext(mycontext);
  return (
    <div>
        <h2>CHILD3 COMPONENT</h2>
        <p>{data}</p>
        <Child4/>
    </div>
  )
}

export default Child3