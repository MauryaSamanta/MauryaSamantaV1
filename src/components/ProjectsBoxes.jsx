import React, { useState } from 'react'
import { Box, Typography, Chip, Button, Stack, useMediaQuery } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

const ProjectsBoxes = ({ name, description, image, skills, githubLink, webLink }) => {
   const [hovered, setHovered] = useState(false);
     const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        width: 320,
        height: 450,
        p:"2px",
        borderRadius: '10px',
        
         border:  '0.2px solid rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
        bgcolor: 'transparent',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Image Section */}
 <Box
  component="img"
  src={image}
  alt={name}
  sx={{
    height: '45%',
    width: '100%',
    objectFit: 'contain',
    display: 'block',
    backgroundColor: 'transparent',
    borderRadius: '7px',
    transition: 'transform 0.6s ease',
    transformOrigin: 'center center',
      transform: hovered ? 'scale(1.08) rotateX(5deg) rotateY(-5deg)' : 'none',
  }}
/>



      {/* Content Section */}
      <Box sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Name */}
        <Typography variant="h6" fontWeight={600} mb={0.5} sx={{fontFamily: "'Roboto Slab', serif",}}>
          {name}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="grey.400"
          mb={1}
          sx={{ flexGrow: 1, lineHeight: 1.4,fontFamily: "'Roboto Slab', serif", }}
        >
          {description}
        </Typography>

        {/* Skills */}
        <Stack
  direction="row"
  flexWrap="wrap"
  mt={1}
  mb={2}
  gap={1} // use only gap, not spacing
  sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
>
  {skills.map((skill, index) => (
    <Chip
      key={index}
      label={skill}
      sx={{
        backgroundColor: '#f2f2f2',
        color: '#000',
        borderRadius:'7px',
        fontWeight: 500,
        fontSize: '10px',
        height: '24px',
         fontFamily: "'Roboto Slab', serif",
      }}
      size="small"
    />
  ))}
</Stack>

        {/* Buttons */}
        <Stack direction="row" spacing={1} mt="auto">
  {webLink && (<Button
    variant="outlined"
    href={webLink}
    target="_blank"
    startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
    sx={{
      color: '#000',
      backgroundColor: '#fff',
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '11px',
       fontFamily:'monospace',
      borderRadius: '6px',
      px: 1.5,
      py: 0.5,
      minHeight: '28px',
      '&:hover': {
        backgroundColor: '#f2f2f2',
      },
    }}
  >
    Website
  </Button>)}
  <Button
    variant="outlined"
    href={githubLink}
    target="_blank"
    startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
    sx={{
      color: '#000',
      backgroundColor: '#fff',
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '11px',
       fontFamily:'monospace',
      borderRadius: '6px',
      px: 1.5,
      py: 0.5,
      minHeight: '28px',
      '&:hover': {
        backgroundColor: '#f2f2f2',
      },
    }}
  >
    GitHub
  </Button>
</Stack>

      </Box>
    </Box>
  )
}

export default ProjectsBoxes
