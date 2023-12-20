import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart, onBodyPartClick }) => {
  // Check if data is an array before mapping over it
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null; // or handle the error accordingly
  }

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
           {bodyParts ? (
             <BodyPart
               item={item}
               setBodyPart={setBodyPart}
               bodyPart={bodyPart}
               onBodyPartClick={onBodyPartClick} // Pass the callback function
             />
           ) : (
             <ExerciseCard exercise={item} />
           )}
        </Box>
      ))}
    </ScrollMenu>
  );
};
export default HorizontalScrollbar;
