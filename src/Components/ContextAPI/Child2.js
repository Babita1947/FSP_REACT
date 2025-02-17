import React, { useContext } from 'react'
import mycontext from './context'
import Child3 from './Child3';


const Child2 = () => {
  let data = useContext(mycontext);
  return (
    <div>
        <h2>CHILD2 COMPONENT</h2>
        <Child3/>
    </div>
  )
}

export default Child2