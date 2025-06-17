import React from 'react'
import { Box, Grid } from '@mui/material'

import BlogBoxes from './BlogBox';
// Sample projects array
const blogs = [
  { id:1,
    name: 'Predicting Flight Delays Using ML',
    description: 'How I built an ML system that predicts airport surface congestion using a Kaggle dataset.',
    date: 'June 1, 2025',
    link: 'https://yourblog.com/flight-delay-prediction'
  },
  { id:2,
    name: 'Bird Calls Like Shazam',
    description: 'I built a system that detects bird species from their chirps using audio fingerprinting.',
    date: 'May 22, 2025',
    link: 'https://yourblog.com/bird-call-shazam'
  },
  { id:3,
    name: 'Formalo: Natural Language Queries for Google Forms',
    description: 'I explain how I built a Chrome extension that lets you query Google Forms data like ChatGPT.',
    date: 'May 10, 2025',
    link: 'https://yourblog.com/formalo'
  },
  { id:4,
    name: 'How I Built MovieCove',
    description: 'Behind the scenes of building a Tinder-like movie app that learns user taste using AI.',
    date: 'April 15, 2025',
    link: 'https://yourblog.com/moviecove-ai'
  }
]


const Blogs = () => {
  return (
     <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        //gap: 3,
        alignItems: 'center',
        mt: 4,
      }}
    >
      {blogs.map((blog, index) => (
        <BlogBoxes key={index} {...blog} />
      ))}
    </Box>
  )
}

export default Blogs
