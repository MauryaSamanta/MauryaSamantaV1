import React, { useState } from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const tabStyle = (active) => ({
  flex: 1,
  textAlign: 'center',
  py: 1,
  cursor: 'pointer',
  borderRadius: 1,
  fontWeight: 600,
  fontSize: 14,
  color: active ? '#fff' : 'rgba(255,255,255,0.5)',
  background: active
    ? 'linear-gradient(90deg, #111, #1a1a1a)'
    : 'transparent',
});

const Work = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box>
      <Typography sx={{ fontWeight: 600, fontFamily: "'Roboto Slab', serif", }}>Shazlo</Typography>
      <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
        Building · August 2025 – Present
      </Typography>

      <ul style={{ paddingLeft: 18, marginTop: 8, fontFamily: "'Roboto Slab', serif", color:'#ffffffc0' }}>
        

    <li>Built the entire tech stack <b>end-to-end</b> (architecture, backend, mobile app, deployment, analytics)</li>
        <li>App currently in <b>closed testing on Google Play Store</b>; handling real user feedback and iteration cycles
</li>
        <li>
Raised <b>non-dilutive funding from VentureStudio, Ahmedabad University</b>; part of a <b>team of 4</b> across product and engineering
    </li>
      </ul>
      <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'row', gap:2}}> 
        <Button
  startIcon={<OpenInNewIcon />}
  sx={{
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 600,
     fontFamily: "'Roboto Slab', serif",
    '&:hover': {
      backgroundColor: '#eaeaea',
    },
  }}
  href="https://www.shazlo.store/"
  target="_blank"
  rel="noopener noreferrer"
>
  Website
</Button>
 <Button
  startIcon={<OpenInNewIcon />}
  sx={{
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 600,
     fontFamily: "'Roboto Slab', serif",
    '&:hover': {
      backgroundColor: '#eaeaea',
    },
  }}
  href="https://play.google.com/store/apps/details?id=com.shazlo.mobile"
  target="_blank"
  rel="noopener noreferrer"
>
  Play Store
</Button>
 <Button
  startIcon={<OpenInNewIcon />}
  sx={{
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 600,
     fontFamily: "'Roboto Slab', serif",
    '&:hover': {
      backgroundColor: '#eaeaea',
    },
  }}
//   href="https://www.shazlo.store/"
//   target="_blank"
  rel="noopener noreferrer"
>
  App Store soon
</Button>
</Box>
    </Box>

    <Box>
      <Typography sx={{ fontWeight: 600, fontFamily: "'Roboto Slab', serif", }}>
        Dept. of CSE, University of Calcutta
      </Typography>
      <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
        Research Intern · June 2025 – August 2025
      </Typography>

      <ul style={{ paddingLeft: 18, marginTop: 8, color:'#ffffffc0', fontFamily: "'Roboto Slab', serif", }}>
        
       {/* <li>Explored workflow scheduling algorithms in cloud environments</li> */}
        <li>Developed a <b>deadline and reliability-aware workflow scheduling algorithm</b> using Java and tested on real scientific workflows on <b>Amazon Web Services VMs</b>
</li>
        <li>Utilized <b>Lagrange multiplier optimization</b> to analytically estimate replications required to achieve desired reliability <b>reducing average cost per workflow by 44%</b>
 </li>
      </ul>
    
<Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'row', gap:2}}> 
<Button
  startIcon={<GitHubIcon />}
  sx={{
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 600,
     fontFamily: "'Roboto Slab', serif",
    '&:hover': {
      backgroundColor: '#eaeaea',
    },
  }}
  href="https://github.com/MauryaSamanta/workflow-scheduler"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</Button>
<Button
  startIcon={<ArticleIcon />}
  sx={{
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 600,
     fontFamily: "'Roboto Slab', serif",
    '&:hover': {
      backgroundColor: '#eaeaea',
    },
  }}
  href="/Intern_report.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Report
</Button>
</Box>
    </Box>
  </Box>
);
const Education = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box>
      <Typography sx={{ fontWeight: 600, fontFamily: "'Roboto Slab', serif", }}>
        Jadavpur University
      </Typography>
      <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
        BE Production Engineering · 2022 – 2026
      </Typography>

      <ul style={{ paddingLeft: 18, marginTop: 8, fontFamily: "'Roboto Slab', serif",color:'#ffffffc0', }}>
        <li>2x Hackathon Finalist</li>
        <li>Represent department in cricket in inter-departmental sports</li>
        
      </ul>
         
<Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'row', gap:2}}> 
<Button
  startIcon={<GitHubIcon />}
  sx={{
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 600,
     fontFamily: "'Roboto Slab', serif",
    '&:hover': {
      backgroundColor: '#eaeaea',
    },
  }}
  href="https://github.com/MauryaSamanta/searchUp"
  target="_blank"
  rel="noopener noreferrer"
>
  3rd Year Project
</Button>
<Button
  startIcon={<ArticleIcon />}
  sx={{
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 600,
     fontFamily: "'Roboto Slab', serif",
    '&:hover': {
      backgroundColor: '#eaeaea',
    },
  }}
  href="/term_paper.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  3rd Year Term Paper
</Button>
</Box>
      
    </Box>

    <Box>
      <Typography sx={{ fontWeight: 600, fontFamily: "'Roboto Slab', serif", }}>
        Salt Lake School, Kolkata
      </Typography>
      <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
        Indian School Certificate Board Examination · 2020 – 2022
      </Typography>
       <ul style={{ paddingLeft: 18, marginTop: 8, fontFamily: "'Roboto Slab', serif",color:'#ffffffc0', }}>
        <li>Secured 96.00% aggregate marks in class XII</li>
        <li>Secured 95.40% aggregate marks in class X</li>
        
      </ul>
    </Box>
  </Box>
);

const ExperienceEducation = () => {
  const [tab, setTab] = useState('work');

  return (
    <Box
      sx={{
        width: '100%',
        background: 'rgba(0,0,0,0.55)',
        borderRadius: 2,
        p: 2,
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Toggle */}
      <Box
        sx={{
          display: 'flex',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 20,
          mb: 2,
          
        }}
      >
       <Button
  disableRipple
  disableElevation
  sx={{
    ...tabStyle(tab === 'work'),
    minWidth: 'unset',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    fontFamily: "'Roboto Slab', serif",
    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
    '&:focus': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
    },
    '&:focus-visible': {
      outline: 'none',
      border: 'none',
    },
  }}
  onClick={() => setTab('work')}
>
  Work
</Button>

<Button
  disableRipple
  disableElevation
  sx={{
    ...tabStyle(tab === 'education'),
    minWidth: 'unset',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    fontFamily: "'Roboto Slab', serif",
    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
    '&:focus': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
    },
    '&:focus-visible': {
      outline: 'none',
      border: 'none',
    },
  }}
  onClick={() => setTab('education')}
>
  Education
</Button>


      </Box>

      {/* Content */}
      {tab === 'work' ? <Work /> : <Education />}
    </Box>
  );
};

export default ExperienceEducation;
