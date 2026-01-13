import React, { useContext } from 'react'
import { Autcontext } from '../context/Autcontext';

const Useauthcontext = () => {
   const context=useContext(Autcontext);
      if(!context){
          throw Error("useAuth must be used inside the contextprovider")
      }
      return context;
}

export default Useauthcontext