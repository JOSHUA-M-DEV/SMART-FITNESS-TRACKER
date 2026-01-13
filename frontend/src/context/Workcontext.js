import React, { createContext, useReducer } from 'react'

export const Workoutcontext=createContext();
export const Workoutreducer=(state,action)=>{
    switch(action.type){
        case 'Set_Workout':
            return{
                workout:action.payload
            }
        case 'Create_Workout':
            return{
                workout:[action.payload,...state.workout]
            }
        case 'Delete_workout':
            return{
                workout:state.workout.filter((w)=>w._id!==action.payload._id)
            }
            default:
                return state;
    }

}
export const Workcontextprovider = ({children}) => {
    const [state,dispatch]=useReducer(Workoutreducer,{
        workout:null
    })
  return (
   <Workoutcontext.Provider value={{...state,dispatch}}>
        {children}
   </Workoutcontext.Provider>
  )
}

