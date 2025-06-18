import React from 'react'
import { Box, Grid, useMediaQuery } from '@mui/material'

import BlogBoxes from './BlogBox';
// Sample projects array
const blogs = [
  { id:1,
    name: 'Predicting Flight Delays Using ML',
    description: 'How I built an ML system that predicts airport surface congestion using a Kaggle dataset.',
    date: 'June 16, 2025',
    link: 'https://medium.com/@mauryasamanta1508/predicting-airport-surface-congestion-using-flight-delay-data-and-machine-learning-5d76874faf5c'
  },
  { id:2,
    name: 'How to integrate OpenAI API with Nodejs backend',
    description: 'I built a simple AI chat service using the OpenAI API and MERN stack',
    date: 'May 13, 2024',
    link: 'https://medium.com/@mauryasamanta1508/full-stack-ai-chatbot-using-openai-overview-1401e4dfdff2'
  },
  // { id:3,
  //   name: 'Formalo: Natural Language Queries for Google Forms',
  //   description: 'I explain how I built a Chrome extension that lets you query Google Forms data like ChatGPT.',
  //   date: 'May 10, 2025',
  //   link: 'https://yourblog.com/formalo'
  // },
  // { id:4,
  //   name: 'How I Built MovieCove',
  //   description: 'Behind the scenes of building a Tinder-like movie app that learns user taste using AI.',
  //   date: 'April 15, 2025',
  //   link: 'https://yourblog.com/moviecove-ai'
  // }
]


const Blogs = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
  return (
     <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        //gap: 3,
        p:isMobile&&2,
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
