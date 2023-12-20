import { useContext, useEffect, useState} from 'react'
import { WorkoutContext } from '../context/workout.context'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../utils/API_URL'
import axios from 'axios'

const Workout = () => {
    const [thisWorkout, setThisWorkout] = useState(null)
    const [exerciseToUpdate, setExerciseToUpdate] = useState(null)
    const { workout, setWorkout, getWorkout } = useContext(WorkoutContext)

    const navigate = useNavigate()

    const setIsEditing = (id) => {
        console.log("this is our id", id)
        let theseExercises = [...thisWorkout.exercises]
        let thisIndex
        let thisExercise = theseExercises.find((exercise, index) => {
            thisIndex = index
            return exercise.exerciseId == id
        })
        console.log("Exercise id to edit", thisExercise, thisIndex)
        thisExercise = {...thisExercise, isEditing: true}
        console.log("line 22", thisExercise)
        theseExercises[thisIndex] = thisExercise
        console.log("exercises after click", theseExercises)
        setExerciseToUpdate(thisExercise)
        setThisWorkout((prev) => ({...prev, ["exercises"]: theseExercises}))
      }

      const handleSetChange = (e) => {
        setExerciseToUpdate((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
      }

      const handleWorkoutUpdate = (e, index, workout) => {
        e.preventDefault()
        console.log("Updating Review")
        let theseExercises = [...thisWorkout.exercises]
        theseExercises[index] = exerciseToUpdate

        axios.put(API_URL + `/workouts/${workout}`, {...thisWorkout, ["exercises"]: theseExercises})
        .then((response) => {
            console.log("Updated workout ===>", response.data);
            setExerciseToUpdate(null);
            getWorkout(workout);
          })
          .catch((err) => {
            console.log("Review update error");
            console.log("This is the error", err);
          });
      }

    useEffect(() => {
        if (!workout) {
            navigate('/start-workout')
        } else {
            console.log("this is workout page workout", workout)
            setThisWorkout(workout)
        }
    }, [workout])

  return (
    <div>
        <h1>Your Workout</h1>
        {thisWorkout &&
            <>
                <h1>{thisWorkout.name}</h1>

                {/* {console.log("Workout from body", thisWorkout)} */}

                {thisWorkout.exercises.length > 0 && 
                    <>
                        {thisWorkout.exercises.map((element, index) => {
                            return (
                                <div>
                                    <h3>{element.exercise.name}</h3>
                                    <p>lbs: {element.lbs}</p>
                                    <p>sets: {element.sets}</p>
                                    <p>reps: {element.reps}</p>
                                    <button onClick={() => setIsEditing(element.exerciseId)}>Add Sets</button>

                                    {
                                        element.isEditing && exerciseToUpdate &&
                                                                     
                                    <form onSubmit={(e) => handleWorkoutUpdate(e, index, thisWorkout.id)}>
                                        <label>
                                            lbs
                                            <input name='lbs' type='number' value={exerciseToUpdate.lbs} onChange={(e) => handleSetChange(e)} />
                                        </label>
                                        <label>
                                            reps
                                            <input name='reps' type='number' value={exerciseToUpdate.reps} onChange={(e) => handleSetChange(e)}/>
                                        </label>
                                        <label>
                                            sets
                                            <input name='sets' type='number' value={exerciseToUpdate.sets} onChange={(e) => handleSetChange(e)}/>
                                        </label>
                                        <button type='click'>submit</button>
                                    </form>
                                    }
                                </div>
                            )
                        })}
                    </>
                }
                
            </>
        }
        <button onClick={() => setWorkout(null)}>Leave Workout</button>
    </div>
  )
}

export default Workout