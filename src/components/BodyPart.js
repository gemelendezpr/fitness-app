import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? {border: '3px solid #00FF00', background: '#fff', borderRadius: '20px', width: '150px', height: '100px', cursor: 'pointer', gap: '10px' } : { background: '#fff', borderRadius: '20px', width: '150px', height: '100px', cursor: 'pointer', gap: '10px' }}
    onClick={() => {
      console.log("Selecting ==>", item)
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="16px" fontWeight="bold" fontFamily="Alegreya" color="#000000" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;