import React, { useContext } from 'react'
import { Workoutcontext } from '../context/Workcontext'

const Usecontextworkout = () => {
    const context=useContext(Workoutcontext);
    if(!context){
        throw Error("usecontext must be used inside the contextprovider")
    }
    return context;
   
}

export default Usecontextworkout