import { useContext, useEffect, useState } from "react"
import { WorkoutContext } from "../context/workout.context"

const AllWorkouts = () => {

    const [theseWorkouts, setTheseWorkouts] = useState([])

    const { workouts, getAllWorkouts, deleteWorkout } = useContext(WorkoutContext)

    useEffect(() => {

        if (!workouts.length) {
            getAllWorkouts()
        } else {
            setTheseWorkouts(workouts)
        }

    }, [workouts])

  return (
    <div>
        <h1>All Workouts</h1>

        {theseWorkouts.length > 0 && 
            <>
                {theseWorkouts.map((element) => {
                    return (
                        <div>
                            <h2>{element.name}</h2>
                            <button onClick={() => deleteWorkout(element.id)}>Delete Workout</button>
                        </div>
                    )
                })}
            </>
        }
    </div>
  )
}

export default AllWorkouts