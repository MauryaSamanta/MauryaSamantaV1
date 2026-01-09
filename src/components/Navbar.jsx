import React from 'react'
import { Box, Typography, IconButton, useTheme, Button } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useMediaQuery } from '@mui/material';
import PixelRunner from './KnightRunner';


const Navbar = ({ scrollToSection, refs,mode, toggleMode }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box
      sx={{
        width: !isMobile?'45%':'100%',
        height: 64,
        // backdropFilter: 'blur(10px)',  
        px:4,
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
        bgcolor: 'transparent',
        color: 'white',
        
        zIndex: 10,
        boxShadow: theme.palette.mode === 'dark' ? '0 2px 8px rgba(0,0,0,0.8)' : '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {/* Left - Your Name */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: "'Roboto Slab', serif", cursor:"pointer", fontSize:"26px", color:'#ffffff89' }}>
        {isMobile?"MS":"MS"}
      </Typography>
        <PixelRunner />
{/*  
<Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
  <Button
    onClick={() => scrollToSection(refs.skillsRef)}
    sx={{
      fontFamily: "'Roboto Slab', serif",
      fontSize: '20px',
      color: 'rgba(255, 255, 255, 0.75)',
      background: 'none',
      padding: 0,
      minWidth: 'unset',
      textTransform: 'none',
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: '#ffffff',
        background: 'none',
        border: 'none',
        boxShadow: 'none'
      },
      '&:focus': {
        outline: 'none',
        boxShadow: 'none'
      },
      '&:active': {
        outline: 'none',
        boxShadow: 'none',
        border: 'none',
        background: 'none'
      },
      '&:focus-visible': {
        outline: 'none'
      }
    }}
  >
    skills
  </Button>

  <Button
    onClick={() => scrollToSection(refs.projectsRef)}
    sx={{
      fontFamily: "'Roboto Slab', serif",
      fontSize: '20px',
      color: 'rgba(255, 255, 255, 0.75)',
      background: 'none',
      padding: 0,
      minWidth: 'unset',
      textTransform: 'none',
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: '#ffffff',
        background: 'none',
        border: 'none',
        boxShadow: 'none'
      },
      '&:focus': {
        outline: 'none',
        boxShadow: 'none'
      },
      '&:active': {
        outline: 'none',
        boxShadow: 'none',
        border: 'none',
        background: 'none'
      },
      '&:focus-visible': {
        outline: 'none'
      }
    }}
  >
    projects
  </Button>

  <Button
    onClick={() => scrollToSection(refs.blogsRef)}
    sx={{
      fontFamily: "'Roboto Slab', serif",
      fontSize: '20px',
      color: 'rgba(255, 255, 255, 0.75)',
      background: 'none',
      padding: 0,
      minWidth: 'unset',
      textTransform: 'none',
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: '#ffffff',
        background: 'none',
        border: 'none',
        boxShadow: 'none'
      },
      '&:focus': {
        outline: 'none',
        boxShadow: 'none'
      },
      '&:active': {
        outline: 'none',
        boxShadow: 'none',
        border: 'none',
        background: 'none'
      },
      '&:focus-visible': {
        outline: 'none'
      }
    }}
  >
    blogs
  </Button>
</Box>

      */}
    </Box>
  )
}

export default Navbar
