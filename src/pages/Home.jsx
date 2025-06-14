import React from 'react';
import StarBackground from '../components/StarBackground';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Navbar from '../components/Navbar';
import MapSection from '../components/MapSection';
import WelcomeAvatar from '../components/WelcomeAvatar';
import SkillBoxes from '../components/SkillBoxes';
import IntoText from '../components/IntoText';
import Projects from '../components/Projects';

const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#000', overflowX:'hidden',pr:isMobile&&4}}>
      
      {/* Background layer (absolute, behind everything) */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <StarBackground />
      </Box>

      {/* Foreground content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'center',
          width: '100%',
          padding: 2,
        }}
      >
      
  <Navbar />


        <MapSection />

        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 0,
          }}
        >
          <WelcomeAvatar />
        </Box>

        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'flex-start',
           // marginTop: 1,
          }}
        >
          <IntoText />
        </Box>

        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 3,
          //  marginBottom: 4,
          }}
        >
          <Typography sx={{fontSize:"33px",  fontFamily: "'Roboto Slab', serif", fontWeight:700}}>
            my skills
          </Typography>
        </Box>

        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          <SkillBoxes />
        </Box>
        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          <Typography sx={{fontSize:"33px",  fontFamily: "'Roboto Slab', serif", fontWeight:700}}>
            featured projects
          </Typography>
          </Box>
         <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            //justifyContent: 'flex-start',
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          
          <Projects/>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
