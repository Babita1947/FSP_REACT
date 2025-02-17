import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Main = () => {
    let [state, setState] = useState(true);
    
  return (
    <div>
        <h2>MAIN COMPONENT</h2>
       {
          state ? <Register setData={setState}/> : <Login />
       }
    </div>
  )
}

export default Main