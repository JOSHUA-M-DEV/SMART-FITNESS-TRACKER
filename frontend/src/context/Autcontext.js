import { Children, createContext,useEffect,useReducer } from "react";
export const Autcontext=createContext();
const authreducer=(state,action)=>{
    switch(action.type){
        case "login":
            return {user:action.payload};
        case "logout":
            return {user:null};
        default:
            return state;
    }
}
export const Autcontextprovider=({children})=>{
    const [state,dispatch]=useReducer(authreducer,{
        user:null
    });
    useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'login', payload: user }) 
    }
  }, [])
    console.log("Authcontext state:",state);
    return(
        <Autcontext.Provider value={{...state,dispatch}}>
        {children}
        </Autcontext.Provider>
    )
}

