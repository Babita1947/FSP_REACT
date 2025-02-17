import React from 'react'

const Register = ({setData}) => {
    
    
  return (
    <div style={{width:"30%", margin:"50px auto"}}>
        <h2>REGISTER FORM </h2>
        <input className='form-control' type="text" placeholder='ENTER THE USERNAME'/>
        <input className='form-control' type="password" placeholder='ENTER THE PASSWORD'/>
        <input className='form-control' type="text" placeholder='ENTER THE NAME'/>
        <input className='form-control' type="text" placeholder='ENTER THE EMAIL'/>
        <button className='btn btn-outline-secondary' onClick={() => setData(false)}>REGISTER</button>
    </div>
  )
}

export default Register