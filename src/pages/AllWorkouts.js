import React, { useContext, useEffect, useState } from "react";
import { WorkoutContext } from "../context/workout.context";
import { Button, Typography, Box, Paper } from "@mui/material";

const AllWorkouts = () => {
  const [theseWorkouts, setTheseWorkouts] = useState([]);
  const { workouts, getAllWorkouts, deleteWorkout } = useContext(
    WorkoutContext
  );

  useEffect(() => {
    if (!workouts.length) {
      getAllWorkouts();
    } else {
      setTheseWorkouts(workouts);
    }
  }, [workouts]);

  return (
    <Box>
      <Typography variant="h2" sx={{ color: "#FFFFFF", mb: 4 }}>
        All Workouts
      </Typography>

      {theseWorkouts.length > 0 && (
        <Box>
          {theseWorkouts.map((element) => (
            <Paper
              key={element.id}
              sx={{
                p: 3,
                mb: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#28282B", // Dark background color
                borderRadius: "10px",
              }}
            >
              <Typography variant="h3" sx={{ color: "#FFFFFF", mb: 2 }}>
                {element.name}
              </Typography>
              <Button
                variant="outlined"
                onClick={() => deleteWorkout(element.id)}
                sx={{
                  borderColor: "#39FF14", // Neon green color
                  color: "#39FF14", // Neon green color
                  "&:hover": {
                    borderColor: "#00CC00", // Darker green on hover
                    color: "#00CC00", // Darker green on hover
                  },
                }}
              >
                Delete Workout
              </Button>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AllWorkouts;
