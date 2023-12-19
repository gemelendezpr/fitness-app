import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const baseUrl = 'http://localhost:4000';
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        // Fetch all exercises
        const exercisesData = await fetchData(`${baseUrl}/exercises`);
        setBodyParts(['all', ...new Set(exercisesData.map(exercise => exercise.bodyPart))]);
      } catch (error) {
        console.error('Error fetching exercises data:', error);
        // Handle the error
      }
    };

    // Call the fetchExercisesData function
    fetchExercisesData();
  }, [bodyPart]);

  const handleSearch = async () => {
    if (search) {

      const exercisesData = await fetchData(`${baseUrl}/exercises`);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        color="#FFFFFF"
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#39FF14",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
