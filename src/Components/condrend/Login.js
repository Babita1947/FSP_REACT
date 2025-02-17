import React from 'react'

const Login = () => {
  return (
    <div style={{ width: "30%", margin: "50px auto" }}>
        <h2>LOGIN FORM </h2>
        <input className='form-control' type="text" placeholder='ENTER THE USERNAME'/>
        <input className='form-control' type="password" placeholder='ENTER THE PASSWORD'/>
        <br/>
        <button className='btn btn-outline-primary'>LOGIN</button>
    </div>
  )
}

export default Login