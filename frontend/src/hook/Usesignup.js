import React, { useState } from 'react'
import Useauthcontext from './Useauthcontext';

const Usesignup = () => {
    const [error, seterror] = useState(null);
    const [loding, setloding] = useState(null);
    const {dispatch}=Useauthcontext();
 const signup=async(email,password)=>{
setloding(true);
seterror(null);
const responce=await fetch('/api/user/signup',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({email,password})
})
const json=await responce.json();
if(!responce.ok){
    setloding(false);
    seterror(json.error);
}
if(responce.ok){
    localStorage.setItem('user',JSON.stringify(json));
    dispatch({type:'login',payload:json});
    setloding(false);
}
 }
 return {signup,loding,error};
}

export default Usesignup