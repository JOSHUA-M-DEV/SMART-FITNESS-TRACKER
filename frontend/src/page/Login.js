import React, { useState } from 'react'
import { Uselogin } from '../hook/Uselogin';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const {login,loding,error}=Uselogin();
     const handlesubmit=async(e)=>{
        e.preventDefault();
        await login(email,password);
      }
  return (
    <form className="login" onSubmit={handlesubmit}>
    <h3>Login</h3>
    <label>Email</label>
    <input type='text'
    onChange={(e)=>{setemail(e.target.value)}}
    value={email}
    >
    </input>
    <label>Password</label>
    <input type='text'
    onChange={(e)=>{setpassword(e.target.value)}}
    value={password}
    >
    </input>
     <button disabled={loding}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login