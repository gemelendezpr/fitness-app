import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StartWorkout from './components/StartWorkout'
import AllExercises from "./pages/AllExercises";
import Workout from "./pages/Workout";
import AllWorkouts from "./pages/AllWorkouts";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path='/start-workout' element={<StartWorkout />} />
        <Route path='/all-exercises' element={<AllExercises />} />
        <Route path='/workout' element={<Workout />} />
        <Route path='/history'  element={<AllWorkouts />} />
      </Routes>
      <Footer/>
    </Box>
  );
};

export default App;
