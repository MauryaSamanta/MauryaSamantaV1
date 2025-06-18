import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const SkillBoxes = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        'JavaScript',
        'React JS',
        'React Native'
      ]
    },
    {
      category: 'Backend',
      skills: [
        'Java',
        'Python',
        'Django',
        'Node.js'
      ]
    },
    {
      category: 'Cloud',
      skills: ['AWS', 'Docker']
    },
    {
      category: 'Data Science',
      skills: ['Scikit-learn', 'Pandas']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL']
    },
    {
      category: 'Version Control',
      skills: ['Git']
    }
  ];

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
      name: 'Git',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032'
    },
    {
      name: 'Scikit-learn',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
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

  const getSkillColor = (skillName) => {
    const skill = techSkills.find((s) => s.name === skillName);
    return skill ? skill.color : 'rgba(255,255,255,0.34)';
  };

  return (
    <Box sx={{width:'100%'}}>
      {isMobile ? (
  <Box sx={{ display: 'flex', flexDirection: 'column'}}>
    {skillCategories.map((category) => (
      <Box
        key={category.category}
        sx={{
          border: '1px solid rgba(255,255,255,0.2)',
          borderTopLeftRadius:category.category==='Frontend' && 10,
          borderTopRightRadius: category.category==='Frontend' && 10,
          borderBottomLeftRadius:category.category==='Version Control' && 10,
          borderBottomRightRadius:category.category==='Version Control' && 10,
          px: 2,
          py: 1.5,
          backgroundColor: 'rgba(255,255,255,0.02)',
        }}
      >
        <Typography
          sx={{
            color: '#aaa',
            fontWeight: 600,
            mb: 2,
            fontSize: '18px',
           // textTransform: 'uppercase',
             fontFamily: "'Roboto Slab', serif",
          }}
        >
          {category.category}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {category.skills.map((skillName) => {
            const skill = techSkills.find((s) => s.name === skillName)
            return (
              <Box
                key={skillName}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: 60,
                  textAlign: 'center',
                  gap: 0.5,
                }}
              >
                <Box
                  component="img"
                  src={skill?.logoUrl}
                  alt={skillName}
                  sx={{ width: 50, height: 50 }}
                />
                <Typography
                  sx={{
                    fontSize: '13px',
                    color: '#fff',
                    fontWeight: 500,
                    lineHeight: 1.2,
                     fontFamily: "'Roboto Slab', serif",
                  }}
                >
                  {skillName}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    ))}
  </Box>
)
 : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            paddingTop: 1,
            borderRadius: 2
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
                border: '1px solid rgba(255, 255, 255, 0.34)',
                textAlign: 'center',
                cursor: 'pointer',
                width: '88px',
                height: '42px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3,
                  borderColor: skill.color
                }
              }}
            >
              <Box
                component="img"
                src={skill.logoUrl}
                alt={skill.name}
                sx={{
                  width: '30px',
                  height: '30px'
                }}
              />
              <Box
                component="span"
                sx={{
                  fontSize: '0.875rem',
                  fontFamily: 'Roboto, sans-serif',
                  color: 'rgba(155, 155, 155, 0.87)'
                }}
              >
                {skill.name}
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SkillBoxes;