import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  const fetchExercisesData = async () => {
    try {
  
      console.log("Trying to fetch")
  
      let exercisesData = [];
  
      const baseUrl = 'http://localhost:4000';
  
      if (bodyPart === 'all') {
        exercisesData = await fetchData(`${baseUrl}/exercises`);
      } else {
        exercisesData = await fetchData(`${baseUrl}/exercises/?bodyPart=${bodyPart}`);
      }
  
      console.log("Exercise array in try", exercisesData)
  
      setExercises(Array.isArray(exercisesData) ? exercisesData : []);
    } catch(err) {
      console.log("Exercise fetch error", err)
      // setExercises([])
    }
  };
//    console.log(exercises)
  useEffect(() => {


      fetchExercisesData();
  

  }, [bodyPart]);

  Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };



  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography color="#FFFFFF" variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            sx={{
              '& .MuiPaginationItem-page': { color: '#FFFFFF' },
              '& .MuiPaginationItem-ellipsis': { color: '#FFFFFF' },
              '& .MuiPaginationItem-icon': { color: '#FFFFFF' },
            }}
          
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;