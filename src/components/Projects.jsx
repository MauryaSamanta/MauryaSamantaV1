import React from 'react'
import { Box, Grid } from '@mui/material'
import ProjectsBoxes from './ProjectsBoxes'
import searchUpicon from "../assets/searchup.png"
import moviecove from "../assets/moviecove.png";
import buildstack from "../assets/buildstack.png";
import eloko from "../assets/eloko.png";
// Sample projects array
const projects = [
  {
    name: 'SearchUp',
    description: 'AI-powered to search people from your social networks using natural language prompts',
    image: searchUpicon,
    skills: ['React.JS', 'Node.JS', 'MongoDB', 'PineconeDB', 'RAG', 'OpenAI', 'MaterialUI'],
    githubLink: 'https://github.com/MauryaSamanta/searchUp',
    webLink: 'https://searchup.vercel.app',
  },
  {
    name: 'MovieCove',
    description: 'App where users can swipe on movies in a Tinder-Style interface and the AI learns their style and curates their feed',
    image: moviecove,
    skills:  ['React Native', 'Node.JS', 'MongoDB', 'PineconeDB', 'RAG', 'OpenAI', 'MaterialUI'],
    githubLink: 'https://github.com/MauryaSamanta/devstars',
    
  },
  {
    name: 'EloKo',
    description: 'Cloud-Based Encrypted Community messaging web-app with in-app library to organize received filed and folders in a desktop-like space',
    image:eloko,
    skills: ['React.JS', 'Node.JS', 'MongoDB', 'Cloudinary', 'AWS'],
    githubLink: 'https://github.com/yourrepo/stylai',
    webLink: 'https://www.eloko.com',
  },
  {
    name: 'BuildStack',
    description: 'Web-App for Indie Developers to create projects and track what features they ship and get user feedback through a friction-less experience',
    image: buildstack,
    skills: ['React.JS', 'Node.JS', 'MongoDB', 'MaterialUI'],
    githubLink: 'https://github.com/MauryaSamanta/BuildStack',
    webLink: 'https://www.buildstack.online',
  },
]

const Projects = () => {
  return (
     <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        gap: 1,
        
        justifyContent: 'center',
      }}
    >
      {projects.map((project, index) => (
        <Box key={index} sx={{ flex: '0 1 calc(50% - 16px)' }}>
          <ProjectsBoxes {...project} />
        </Box>
      ))}
    </Box>
  )
}

export default Projects
