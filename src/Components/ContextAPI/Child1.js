import React, { useContext } from 'react'
import Child2 from './Child2'
import mycontext from './context'

const Child1 = () => {
    let data = useContext(mycontext);
  return (
    <div>
        <h2>CHILD1 COMPONENT</h2>
        <Child2/>
    </div>
  )
}

export default Child1