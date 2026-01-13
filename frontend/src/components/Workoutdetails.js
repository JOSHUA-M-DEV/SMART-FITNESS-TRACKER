import React from 'react'
import Usecontextworkout from '../hook/Usecontextworkout'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const Workoutdetails = ({workout}) => {
  const {dispatch}=Usecontextworkout();
  const handleclick=async()=>{
    const responce=await fetch('/api/workout/'+workout._id,{
      method:'DELETE'

    })
    const json=await responce.json();
    
    if(responce.ok){
dispatch({
  type:'Delete_workout',
  payload:json
});
    }
  }
  return (
    <div className="workout-details">
    <h4>{workout.title}</h4>
    <p><strong>Load (Kg): </strong>{workout.load}</p>
    <p><strong>Reps : </strong>{workout.rep}</p>
    <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
    <span className="material-symbols-outlined" onClick={handleclick}>delete</span>

    </div>
  )
}

export default Workoutdetails