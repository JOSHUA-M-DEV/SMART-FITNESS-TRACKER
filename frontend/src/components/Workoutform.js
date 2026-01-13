import React, { useState } from "react";
import Usecontextworkout from "../hook/Usecontextworkout";

const Workoutform = () => {
const [emptyfield, setemptyfield] = useState([]);
  const {dispatch}=Usecontextworkout();
  const [title, settitle] = useState("");
  const [load, setload] = useState("");
  const [rep, setrep] = useState("");
  const [error, seterror] = useState(null);
  const handlesubmit = async(e) => {
    e.preventDefault();
    const workout={title,load,rep};
    const responce=await fetch('/api/workout',{
      method:'POST',
      body:JSON.stringify(workout),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const json=await responce.json();
    if(!responce.ok){
     
      seterror(json.error);
      setemptyfield(json.emptyfield)
    }
    console.log(responce);
    if(responce.ok){
      settitle('');
      setload('');
      setrep('');
      setemptyfield([]);
      console.log(json);
      
      seterror(null);
      dispatch({type:'Create_Workout',payload:json});
    }
    


    
  };
  return (
    <form className="create" onSubmit={handlesubmit}>
      <h1>Add the items</h1>
      <label>Excersize title</label>
      <input
        type="text"
        onChange={(e) => {
          settitle(e.target.value);
        }}
        value={title}
        className={emptyfield.includes('title')?'error':''}
      ></input>
      <br />
      <label>Load (Kg) :</label>
      <input
        type="number"
        onChange={(e) => {
          setload(e.target.value);
        }}
        value={load}
         className={emptyfield.includes('load')?'error':''}
      ></input><br />
      <label>Rep :</label>
      <input
        type="number"
        onChange={(e) => {
          setrep(e.target.value);
        }}
        value={rep}
         className={emptyfield.includes('rep')?'error':''}
      ></input><br></br>
      <button type="submit">Add workouts</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Workoutform;
