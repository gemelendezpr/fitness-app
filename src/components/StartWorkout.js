import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WorkoutContext } from "../context/workout.context";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";

const ExtendedFab = styled(Fab)({
  width: "100%",
  borderRadius: "30px",
  backgroundColor: "#00FF00", // Green neon color
  color: "#FFFFFF", // White text color
  "&:hover": {
    backgroundColor: "#00CC00", // Darker green on hover
  },
});

const WhiteOutlinedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFFFFF", // White outlined border color
    },
    "&:hover fieldset": {
      borderColor: "#FFFFFF", // White outlined border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00FF00", // Neon green outlined border color when focused
    },
  },
  "& .MuiInputLabel-root": {
    color: "#FFFFFF", // White label color
    "&:hover": {
      color: "#00FF00", // Neon grenn label color on hover
    },
  },
  "& .MuiInputBase-input": {
    color: "#FFFFFF", // White text color
  },
});

const StartWorkout = () => {
  const [workoutName, setworkoutName] = useState("");
  const { createWorkout } = useContext(WorkoutContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      createWorkout(workoutName);
      setworkoutName("");
    }, 50);
    // navigate('/all-exercises')
  };

  return (
    <Container>
        <Box mt={5}>
      <Typography variant="h4" gutterBottom sx={{ color: "#FFFFFF" }}>
        Start Workout
      </Typography>

      <form onSubmit={(e) => handleSubmit(e)}>
        <WhiteOutlinedTextField
          label="Name Workout"
          variant="outlined"
          fullWidth
          value={workoutName}
          onChange={(e) => setworkoutName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <ExtendedFab variant="extended" type="submit">
          <AddIcon sx={{ marginRight: 1 }} />
          Create Workout
        </ExtendedFab>
      </form>
      </Box>
    </Container>
  );
};

export default StartWorkout;
