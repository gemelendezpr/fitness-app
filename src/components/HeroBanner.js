import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#39FF14" fontWeight="600" fontSize="26px">Workout Tracker</Typography>
    <Typography color="#FFFFFF" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      No Shorcuts, <br />
      Just <span style={{ fontSize: '100px', color: '#39FF14', fontWeight: 900 }}>R</span><span style={{ fontSize: '70px', fontWeight: 900 }}>EPS</span>
    </Typography>
    <Typography color="#39FF14" fontSize="22px" fontFamily="roboto" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '250px', textAlign: 'center', background: '#39FF14', padding: '15px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '100px' }}>Explore Exercises</a>
      <Box
        position="absolute"
        top={{ xs: '65%', sm: '55%' }}
        left={{ xs: '0', sm: '300px' }}
        transform="translateY(-50%)"
        display="flex"
        gap="15px"
      >
        {/* GitHub */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#000000', opacity: '0.1', cursor: 'pointer' }}></div>
        </a>
        {/* LinkedIn */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#000000', opacity: '0.1', cursor: 'pointer' }}></div>
        </a>
        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#000000', opacity: '0.1', cursor: 'pointer' }}></div>
        </a>
      </Box>
    </Stack>
    <Typography fontWeight={600} color="#39FF14" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;