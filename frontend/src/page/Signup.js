import React, { useState } from 'react'
import Usesignup from '../hook/Usesignup';




const Signup = () => {
  
  const [email, setemail] = useState('');
      const [password, setpassword] = useState('');
      const {signup,loding,error}=Usesignup();
      const handlesubmit=async(e)=>{
        e.preventDefault();
      await signup(email,password);
      }
    return (
      <form className="signup" onSubmit={handlesubmit}>
      <h3>Signup</h3>
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
      <button disabled={loding}>Signup</button>
       {error && <div className="error">{error}</div>}
      </form>
    )
}

export default Signup