import { useContext } from 'react'
import { WorkoutContext } from '../context/workout.context'
import { Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';


import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const NeonGreenOutlinedButton = styled(Button)({
  borderColor: '#00FF00', // Neon green outlined border color
  color: '#00FF00', // Neon green text color
  '&:hover': {
    backgroundColor: '#00FF00', // Neon green background color on hover
    color: '#FFFFFF', // White text color on hover
  },
});

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, id } = exerciseDetail;

  const { addToWorkout } = useContext(WorkoutContext)

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  // const addToWorkout = (exerciseId) => {
  //   console.log("Adding exercise Id", exerciseId)
  // }

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Stack direction='row'>
          <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
            {name}
          </Typography>
          <NeonGreenOutlinedButton variant="outlined" onClick={() => addToWorkout(exerciseDetail)}>
            Add to Workout
          </NeonGreenOutlinedButton>        </Stack>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#FFF">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#00FF00', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;