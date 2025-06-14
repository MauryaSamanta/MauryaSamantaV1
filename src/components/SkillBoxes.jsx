import { Box, useMediaQuery } from '@mui/material'
import React from 'react'

const SkillBoxes = () => {
 const techSkills = [
  {
    name: 'Java',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: '#ED8B00'
  },
  {
    name: 'Python',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776AB'
  },
  {
    name: 'JavaScript',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E'
  },
  {
    name: 'Django',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    color: '#092E20'
  },
  {
    name: 'React JS',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB'
  },
  {
    name: 'React Native',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB'
  },
  {
    name: 'MongoDB',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#47A248'
  },
  {
    name: 'Node.js',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933'
  },
  {
    name: 'PostgreSQL',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: '#336791'
  },
  {
    name: 'AWS',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    color: '#FF9900'
  },
  {
    name: 'GitHub',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#181717'
  },
  {
    name: 'Scikit-learn',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn.svg',
    color: '#F7931E'
  },
  {
    name: 'Pandas',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    color: '#150458'
  },
  {
    name: 'Docker',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: '#2496ED'
  }
];
   const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          paddingTop: 1,
          //border: isMobile && '0.2px solid rgba(255, 255, 255, 0.34)',
          borderRadius:2
        }}
      >
        {techSkills.map((skill) => (
          <Box
            key={skill.name}
            sx={{
              backgroundColor: 'transparent',
              borderRadius: 3,
              padding: 1,
              boxShadow: 1,
              border: !isMobile && '1px solid rgba(255, 255, 255, 0.34)',
              textAlign: 'center',
              cursor: 'pointer',
              width: !isMobile?'93px':'30px',
              height: '42px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 3,
                borderColor: skill.color,
              }
            }}
          >
            <Box
  component="img"
  src={skill.logoUrl}
  alt={skill.name}
  sx={{
    width: !isMobile?'30px':'40px',
    height: !isMobile?'30px':'40px',
   
    //marginBottom: 1,
  }}
/>
            {!isMobile &&(<Box
              component="span"
              sx={{
                fontSize: '0.875rem',
                fontFamily: 'Roboto, sans-serif',
                //fontWeight: 'medium',
                color: 'rgba(155, 155, 155, 0.87)',
              }}
            >
              {skill.name}
            </Box>)}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default SkillBoxes

// Alternative version with actual logo URLs (commented out):
/*
const techSkillsWithLogos = [
  {
    name: 'JavaScript',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E'
  },
  {
    name: 'React',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB'
  },
  {
    name: 'Node.js',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933'
  },
  {
    name: 'Python',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776AB'
  },
  {
    name: 'Django',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    color: '#092E20'
  },
  {
    name: 'Flask',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    color: '#000000'
  }
];

// To use actual logos, replace the emoji Box with:
<Box
  component="img"
  src={skill.logoUrl}
  alt={skill.name}
  sx={{
    width: '40px',
    height: '40px',
    marginBottom: 1,
  }}
/>
*/