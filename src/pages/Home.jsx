import React, { useRef } from 'react';
import StarBackground from '../components/StarBackground';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Navbar from '../components/Navbar';
import MapSection from '../components/MapSection';
import WelcomeAvatar from '../components/WelcomeAvatar';
import SkillBoxes from '../components/SkillBoxes';
import IntoText from '../components/IntoText';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import ExperienceEducation from '../components/EducationExperience';
import BeyondWork from '../components/BeyondWork';
import {GitHubCalendar} from 'react-github-calendar';
const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
   const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
           overflowX: 'hidden',
        }}
      >
      
  <Navbar scrollToSection={scrollToSection} refs={{ skillsRef, projectsRef, blogsRef }} />


        {/* <MapSection /> */}

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
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          <ExperienceEducation />
        </Box>
          <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 2,
            marginBottom: 2,
          }}
          ref={projectsRef}
        >
          <Typography sx={{fontSize:"33px",  fontFamily: "'Roboto Slab', serif", fontWeight:700}}>
            my github contributions
          </Typography>
          </Box>
        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center',
            marginRight:10,
            marginLeft:10,
            marginTop: 2,
            marginBottom: 4,
            overflowX:'auto',
            background: 'rgba(0,0,0,0.55)',
        borderRadius: 2,
        paddingTop:2,
        paddingBottom:2,
        // p: 2,
        border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
            
          {/* <ExperienceEducation /> */}
          <Box
            component="img"
            src="/github_contri.png"
            // alt={name}
            sx={{
              height: '100%',
              width: '90%',
              objectFit: 'contain',
              display: 'block',
              backgroundColor: 'transparent',
              borderRadius: '7px',
              transition: 'transform 0.6s ease',
              transformOrigin: 'center center',
                // transform: hovered ? 'scale(1.08) rotateX(5deg) rotateY(-5deg)' : 'none',
            }}
          />

          
        </Box>
       
        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 2,
            marginBottom: 4,
          }}
          ref={projectsRef}
        >
          <Typography sx={{fontSize:"33px",  fontFamily: "'Roboto Slab', serif", fontWeight:700}}>
            my side quests
          </Typography>
          </Box>
         <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            //justifyContent: 'flex-start',
           // marginTop: 2,
            marginBottom: 4,
          }}
        >
          
          <Projects/>
        </Box>

         <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 3,
          //  marginBottom: 4,
          }}
          ref={skillsRef}
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
            //marginBottom: 4,
          }}
          ref={blogsRef}
        >
          <Typography sx={{fontSize:"33px",  fontFamily: "'Roboto Slab', serif", fontWeight:700}}>
            my blogs
          </Typography>
          </Box>
        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            //justifyContent: 'flex-start',
           // marginTop: 2,
            marginBottom: 4,
          }}
        >
          
          <Blogs/>
        </Box>
         <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 2,
            //marginBottom: 4,
          }}
          // ref={blogsRef}
        >
          <Typography sx={{fontSize:"33px",  fontFamily: "'Roboto Slab', serif", fontWeight:700}}>
            beyond work
          </Typography>
          </Box>
          <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            //justifyContent: 'flex-start',
           // marginTop: 2,
            marginBottom: 4,
          }}
        >
          
          <BeyondWork/>
        </Box>
      

      </Box>
    </Box>
  );
};

export default Home;
