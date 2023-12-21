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
  backgroundColor: "#00FF00", 
  color: "#FFFFFF", 
  "&:hover": {
    backgroundColor: "#00CC00", 
  },
});

const WhiteOutlinedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFFFFF", 
    },
    "&:hover fieldset": {
      borderColor: "#FFFFFF", 
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00FF00", 
    },
  },
  "& .MuiInputLabel-root": {
    color: "#FFFFFF", 
    "&:hover": {
      color: "#00FF00", 
    },
  },
  "& .MuiInputBase-input": {
    color: "#FFFFFF", 
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
