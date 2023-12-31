import { useState, useContext, useEffect } from 'react';
import { Box } from '@mui/material';

import { WorkoutContext } from '../context/workout.context';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [theseExercises, setTheseExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  const { exercises, setExercises, getExercises } = useContext(WorkoutContext)

  useEffect(() => {
    if(!exercises.length) {
      getExercises()
    } else {
      setTheseExercises(exercises)
    }
  }, [exercises])


  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setTheseExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises} />
      <Exercises setExercises={setTheseExercises} exercises={theseExercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;