import React, { useContext, useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { WorkoutContext } from "../context/workout.context";
import { API_URL } from "../utils/API_URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Workout = () => {
  const [thisWorkout, setThisWorkout] = useState(null);
  const [exercisesForEditing, setExercisesForEditing] = useState([]);
  const { workout, setWorkout, getWorkout } = useContext(WorkoutContext);

  const navigate = useNavigate();

  const setIsEditing = (id) => {
    if (!exercisesForEditing.includes(id)) {
      setExercisesForEditing((prev) => [...prev, id]);
    }
  };

  const handleSetChange = (e, index) => {
    const { name, value } = e.target;
    setThisWorkout((prev) => ({
      ...prev,
      exercises: prev.exercises.map((exercise, i) =>
        i === index ? { ...exercise, [name]: Number(value) } : exercise
      ),
    }));
  };

  const handleWorkoutUpdate = (e, workoutId) => {
    e.preventDefault();

    axios
      .put(API_URL + `/workouts/${workoutId}`, thisWorkout)
      .then((response) => {
        console.log("Updated workout ===>", response.data);
        setExercisesForEditing([]);
        getWorkout(workoutId);
      })
      .catch((err) => {
        console.log("Workout update error");
        console.log("This is the error", err);
      });
  };

  useEffect(() => {
    if (!workout) {
      navigate("/start-workout");
    } else {
      setThisWorkout(workout);
    }
  }, [workout]);

  return (
    <Box>
      <Typography variant="h2">Workout</Typography>
      {thisWorkout && (
        <>
          <Typography variant="h3">{thisWorkout.name}</Typography>

          {thisWorkout.exercises.length > 0 && (
            <>
              {thisWorkout.exercises.map((element, index) => (
                <Box key={element.exerciseId} mb={2}>
                  <Typography variant="h4">{element.exercise.name}</Typography>
                  <Typography>lbs: {element.lbs}</Typography>
                  <Typography>sets: {element.sets}</Typography>
                  <Typography>reps: {element.reps}</Typography>

                  <Button
                    variant="outlined"
                    onClick={() => setIsEditing(element.exerciseId)}
                    disabled={exercisesForEditing.includes(element.exerciseId)}
                    sx={{
                      borderColor: "#39FF14", // Neon green color
                      color: "#39FF14", // Neon green color
                      "&:hover": {
                        borderColor: "#00CC00", // Darker green on hover
                        color: "#00CC00", // Darker green on hover
                      },
                    }}
                  >
                    Add Sets
                  </Button>

                  {exercisesForEditing.includes(element.exerciseId) && (
                    <form
                      onSubmit={(e) => handleWorkoutUpdate(e, thisWorkout.id)}
                    >
                      <TextField
                        label="lbs"
                        name="lbs"
                        type="number"
                        value={element.lbs}
                        onChange={(e) => handleSetChange(e, index)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2, borderRadius: "10px" }}
                      />

                      <TextField
                        label="reps"
                        name="reps"
                        type="number"
                        value={element.reps}
                        onChange={(e) => handleSetChange(e, index)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2, borderRadius: "10px" }}
                      />

                      <TextField
                        label="sets"
                        name="sets"
                        type="number"
                        value={element.sets}
                        onChange={(e) => handleSetChange(e, index)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2, borderRadius: "10px" }}
                      />

                      <Button
                        type="submit"
                        variant="outlined"
                        sx={{
                          borderColor: "#39FF14", // Neon green color
                          color: "#39FF14", // Neon green color
                          "&:hover": {
                            borderColor: "#00CC00", // Darker green on hover
                            color: "#00CC00", // Darker green on hover
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </form>
                  )}
                </Box>
              ))}
            </>
          )}
        </>
      )}
      <Button
        onClick={() => setWorkout(null)}
        sx={{
          borderColor: "#39FF14",
          color: "#39FF14",
          "&:hover": { borderColor: "#00CC00", color: "#00CC00" },
        }}
      >
        Leave Workout
      </Button>
    </Box>
  );
};

export default Workout;
