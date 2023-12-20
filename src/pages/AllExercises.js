import { useState, useContext, useEffect } from "react";
import { WorkoutContext } from "../context/workout.context";
import { Box, Typography } from "@mui/material";

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';


const AllExercises = () => {
  const [theseExercises, setTheseExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  const { exercises, setExercises, getExercises, workout } = useContext(WorkoutContext)

  useEffect(() => {
    if(!exercises.length) {
      getExercises()
    } else {
      setTheseExercises(exercises)
    }
  }, [exercises])

  return (
    <Box>

      {workout && 
        <Typography>{workout.name}</Typography>
      }

      <SearchExercises setExercises={setTheseExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises} />
      <Exercises setExercises={setTheseExercises} exercises={theseExercises} bodyPart={bodyPart} />

    </Box>
  )
}

export default AllExercises