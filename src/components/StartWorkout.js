import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { WorkoutContext } from '../context/workout.context'

const StartWorkout = () => {
    const [workoutName, setworkoutName] = useState('')
    const { createWorkout } = useContext(WorkoutContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(() => {

            createWorkout(workoutName)
            setworkoutName('')
        }, 50)
        // navigate('/all-exercises')
    }


  return (
    <div>
        <h1>StartWorkout</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Name Workout:
                <input type='text' name='name' value={workoutName} onChange={(e) => setworkoutName(e.target.value)} />
            </label>
            <button type='submit'>Create Workout</button>
        </form>
    </div>
  )
}

export default StartWorkout