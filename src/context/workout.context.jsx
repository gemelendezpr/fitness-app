import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../utils/API_URL'

const WorkoutContext = createContext()

const WorkoutProvider = ({ children }) => {

    const [workouts, setWorkouts] = useState([])

    const [workout, setWorkout] = useState(null)

    const [exercises, setExercises] = useState([])

    const navigate = useNavigate()

    
    const getAllWorkouts = () => {
        axios.get("http://localhost:4000/workouts")
        .then((response) => {
            console.log("line 22 context", response)
            if (response.data.length) {             
                setWorkouts(response.data)
            } else {
                setWorkouts([])
                setWorkout(null)
                navigate('/')
            }
        })
        .catch((err) => {
            setWorkouts([])
            setWorkout(null)
            console.log("get error", err)
            console.log(err)
            setTimeout(() => {
                
                navigate('/')
            }, 100)
        })
    }
    
    const getExercises = () => {
        axios.get(API_URL + '/exercises')
            .then((response) => {
                setExercises(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getWorkout = async (id) => {

        try {

            let result = await axios.get(`http://localhost:4000/workouts/${id}`)

            let thisWorkout = result.data
            setWorkout(thisWorkout)
    
        } catch(err) {
            console.log(err)
        }


    }

    const deleteWorkout = (id) => {
        axios.delete(`http://localhost:4000/workouts/${id}`)
            .then((response) => {
                console.log("Deleted workout", response.data)
                getAllWorkouts()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const createWorkout = (name) => {

        console.log("Creating workout, name:", name)
        let newWorkout = {
            name: name,
            exercises: []
        }

        axios.post("http://localhost:4000/workouts", newWorkout)
            .then((response) => {
                console.log("New Workout", response.data)
                setWorkout(response.data)
                getAllWorkouts()
                // navigate('/all-exercises')
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                // setTimeout(() => {
                    navigate('/all-exercises')
                // }, 150)
            })

    }

    const addToWorkout = (exercise) => {

        if (!workout) {
            navigate('/start-workout')
        } else {

            let thisExercise = {
                exerciseId: exercise.id,
                exercise: {...exercise},
                sets: 0,
                reps: 0,
                lbs: 0,
                isEditing: false
            }
            console.log("Workout exercises", workout.exercises)
            let newExercises = [...workout.exercises, thisExercise]
            // setWorkout((prev) => ({...prev, ['exercises']: newExercises}))

            axios.put(`http://localhost:4000/workouts/${workout.id}`, {...workout, ["exercises"]: newExercises})
                .then((response) => {
                    console.log("Updated workout", response.data)
                    // setWorkout(response.data)
                    getWorkout(response.data.id)
                    navigate('/workout')
                })
                .catch((err) => {
                    console.log(err)
                })

            // console.log("Adding exercise Id", exerciseId)
            console.log("This is the workout:", workout)
        }
        
      }

    useEffect(() => {



        axios.get('http://localhost:4000/workouts')
            .then((response) => {
                console.log("Workouts ===>", response.data)
                setWorkouts(response.data)

            })
            .catch((err) => {
                console.log(err)
            })

            if (!exercises.length) {
                getExercises()
            }

    }, [])

    return (
        <WorkoutContext.Provider value={{ createWorkout, workout, addToWorkout, workouts, getAllWorkouts, deleteWorkout, setWorkout, getWorkout, exercises, setExercises, getExercises }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export { WorkoutContext, WorkoutProvider }