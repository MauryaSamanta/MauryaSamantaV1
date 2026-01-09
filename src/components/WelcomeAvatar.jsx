import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, CircularProgress, Button, useMediaQuery } from '@mui/material';
import myImage from '../assets/me.jpg'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
const WelcomeAvatar = () => {
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    myImage,   // default image
    'https://i.imgur.com/your-hover-image.jpg',     // image on hover / after progress
  ];

  useEffect(() => {
    let timer;
    if (hovered && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setImageIndex((i) => (i + 1) % images.length);
            return 100;
          }
          return prev + 2;
        });
      }, 40);
    } else {
      setProgress(0);
    }

    return () => clearInterval(timer);
  }, [hovered]);
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // 🔑 forces left / right columns
    width: '100%',                   // 🔑 prevents squeezing
    gap: 2,
   minHeight: !isMobile ? 220 : 120,
    // zIndex: 999,
  }}
>
      
      <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'flex-start',mt:1}}>
      <Typography
        sx={{
          fontFamily: "'Roboto Slab', serif",
          fontWeight: 600,
          color: 'white',
          fontSize: !isMobile?'50px':'29px',
        }}
      >
        Maurya Samanta
      </Typography>
      <Box sx={{ display: 'flex', gap: !isMobile?2:1, mt: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Button
  variant="outlined"
  target="_blank"
  rel="noopener"
  endIcon={<InsertDriveFileOutlinedIcon/>}
  sx={{
    fontFamily: "'Roboto Slab', serif",
    borderWidth:"1px",
    borderRadius: '8px',
    color: 'white',
    border:'1px solid rgba(217, 217, 218, 0.15)',
    //borderColor: 'white',
    textTransform: 'none',
    fontWeight: 300,
    fontSize: '14px',
    backgroundColor: 'rgba(103, 142, 227, 0.15)',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(91, 112, 156, 0.15)', // subtle dim blue-grey mix
       border:'1px solid rgba(91, 112, 156, 0.15)',
    },
  }}
   onClick={() => window.open('/resume.pdf', '_blank')}
>
  Resume
</Button>
<LinkedInIcon sx={{cursor:'pointer', '&:hover':{color:'#0077B5'}}} onClick={()=>{window.open('https://www.linkedin.com/in/maurya-samanta-262329287', '_blank');}}/>
<GitHubIcon sx={{cursor:'pointer'}} onClick={()=>{window.open('https://github.com/MauryaSamanta', '_blank');}}/>
<EmailIcon
  sx={{ cursor: 'pointer', '&:hover': { color: '#EA4335' } }}
  onClick={() => {
    window.open('mailto:mauryasamanta1508@gmail.com', '_blank');
  }}
/>
        </Box>
      </Box>
      <Box
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        sx={{
          position: 'relative',
          width: !isMobile?70:100,
          height: !isMobile?70:100,
          //  borderRadius: '50%',
    // border: '3px solid grey',
    padding: '4px',  // space between avatar and border
    boxSizing: 'border-box',
      display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
        }}
      >
        <Avatar
          src={images[imageIndex]}
          alt="profile"
          variant="square"
          sx={{
            width: !isMobile?200:100,
            height: !isMobile?200:100,
             display: 'block',
             borderRadius:!isMobile?10:5,
           // border: '3px solid grey',
            transition: '0.3s ease-in-out',
             transform: 'rotate(8deg)',
          }}
        />
       
      </Box>
      {/* Add keyframes for waving hand */}
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate( 0.0deg) }
           10% { transform: rotate(14.0deg) }
           20% { transform: rotate(-8.0deg) }
           30% { transform: rotate(14.0deg) }
           40% { transform: rotate(-4.0deg) }
           50% { transform: rotate(10.0deg) }
           60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        `}
      </style>
    </Box>
  );
};

export default WelcomeAvatar;
