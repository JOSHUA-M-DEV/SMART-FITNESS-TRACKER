import React, { useEffect} from "react";
import Workoutdetails from "../components/Workoutdetails";
import Workoutform from "../components/Workoutform";
import Usecontextworkout from "../hook/Usecontextworkout";

const Home = () => {
  const {workout,dispatch}=Usecontextworkout(null);
  //const [workout, setworkout] = useState(null);
  useEffect(() => {
    const fetchworkout = async () => {
      const responce = await fetch("/api/workout");
      const json = await responce.json();
      if (responce.ok) {
        dispatch({
          type:'Set_Workout',
          payload:json
        });
      }
    };
    fetchworkout();
  }, [dispatch]);
  return (
    <div className="home">
    <div className="workouts">
    {workout &&
      workout.map((workout) => (
        <Workoutdetails key={workout._id} workout={workout} />
        ))}
        </div>
        <Workoutform/>
        
    </div>
  );
};

export default Home;
