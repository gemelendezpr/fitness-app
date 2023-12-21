import { useContext } from "react";
import { WorkoutContext } from "../context/workout.context";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

import "../style/Navbar.css";

const Navbar = () => {

  const { workout, workouts } = useContext(WorkoutContext)

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        justifyContent: "none",
        backgroundColor: "#000000",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0px 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="roboto"
        fontSize="20px"
        alignItems="flex-end"
        align-items="center"
      >
        <Link
          to="/"
          className="nav-link"
          sx={{ textDecoration: "none", color: "#39FF14" }}
        >
          Home
        </Link>
        <Link to='/all-exercises' className="nav-link">Exercises</Link>

        <Link to="/start-workout" className="nav-link">
          Start Workout
        </Link>
        {
          workout &&
          <Link to='/workout' className="nav-link">Ongoing Workout</Link>
        }
        {
          workouts.length > 0 &&
            <Link to="/history" className="nav-link">
              History
            </Link>
        }
      </Stack>
    </Stack>
  );
};

export default Navbar;
