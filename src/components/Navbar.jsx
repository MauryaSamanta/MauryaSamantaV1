import React from 'react'
import { Box, Typography, IconButton, useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useMediaQuery } from '@mui/material';


const Navbar = ({ mode, toggleMode }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box
      sx={{
        width: !isMobile?'45%':'100%',
        height: 64,
        backdropFilter: 'blur(10px)',  
        px:4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'transparent',
        color: 'white',
        
        zIndex: 10,
        boxShadow: theme.palette.mode === 'dark' ? '0 2px 8px rgba(0,0,0,0.8)' : '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {/* Left - Your Name */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily:'Mulish', cursor:"pointer" }}>
        {isMobile?"MS":"Maurya Samanta"}
      </Typography>

      {/* Right - Dark / Light mode toggle */}
      <IconButton
        onClick={toggleMode}
        color="inherit"
        aria-label="toggle dark mode"
        size="large"
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

export default Navbar
