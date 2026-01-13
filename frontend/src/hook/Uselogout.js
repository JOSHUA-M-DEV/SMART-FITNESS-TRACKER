import React from 'react'
import Useauthcontext from './Useauthcontext'

const Uselogout = () => {

 const {dispatch}=Useauthcontext();
 const logout=()=>{
    localStorage.removeItem('user');
    dispatch({type:'logout'});
 }
 return {logout};
}

export default Uselogout